import { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user document in Firestore
  const createUserDocument = async (user, additionalData = {}) => {
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const { email, displayName } = user;
      const createdAt = new Date().toISOString();

      await setDoc(userRef, {
        uid: user.uid,
        email,
        displayName,
        role: additionalData.role || 'user', // Default role is 'user'
        createdAt,
        ...additionalData
      });
    }

    return userRef;
  };

  // Get user role from Firestore
  const getUserRole = async (uid) => {
    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        return userSnap.data().role;
      }
      return 'user'; // Default role
    } catch (error) {
      console.error('Error getting user role:', error);
      return 'user';
    }
  };

  // Sign Up
  const signup = async (email, password, fullName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    await updateProfile(userCredential.user, {
      displayName: fullName
    });

    // Create user document with 'user' role by default
    await createUserDocument(userCredential.user, { 
      displayName: fullName,
      role: 'user' 
    });

    const role = await getUserRole(userCredential.user.uid);
    setUserRole(role);

    return userCredential;
  };

  // Login - Returns role for redirect logic
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Get user role after login
    const role = await getUserRole(userCredential.user.uid);
    setUserRole(role);
    
    // Return both userCredential and role
    return { 
      user: userCredential.user, 
      role: role 
    };
  };

  // Logout
  const logout = async () => {
    setUserRole(null);
    return signOut(auth);
  };

  // Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Check if user is admin
  const isAdmin = () => {
    return userRole === 'admin';
  };

  // Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Create user document if doesn't exist
        await createUserDocument(user);
        
        // Get user role
        const role = await getUserRole(user.uid);
        setUserRole(role);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userRole,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    isAdmin,
    getUserRole
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
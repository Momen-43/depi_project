import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import '../styles/Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      
      // ✅ Login returns user data with role
      const result = await login(formData.email, formData.password);
      
      // ✅ Check role and redirect accordingly
      if (result.role === 'admin') {
        toast.success('Welcome back, Admin! 🛡️');
        navigate('/admin/dashboard');
      } else {
        toast.success('Logged in successfully! 👋');
        navigate('/');
      }
      
    } catch (error) {
      console.error('Login error:', error);
      
      switch (error.code) {
        case 'auth/user-not-found':
          toast.error('User not found');
          break;
        case 'auth/wrong-password':
          toast.error('Incorrect password');
          break;
        case 'auth/invalid-email':
          toast.error('Invalid email address');
          break;
        case 'auth/user-disabled':
          toast.error('This account has been disabled');
          break;
        case 'auth/invalid-credential':
          toast.error('Invalid credentials');
          break;
        default:
          toast.error('Error logging in');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Login</h2>
          <p>Please login to book appointment</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              disabled={loading}
            />
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
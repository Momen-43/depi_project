import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgetPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Appointment from "./pages/Appointment";
import DoctorPage from "./pages/DoctorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
const ITEMS_PER_PAGE = 8;

const specialtiesData = [
    { id: 0, name: "All Specialties" },
    { id: 1, name: "General physician" },
    { id: 2, name: "Gynecologist" },
    { id: 3, name: "Dermatologist" },
    { id: 4, name: "Pediatricians" },
    { id: 5, name: "Neurologist" },
    { id: 6, name: "Gastroenterologist" },
];

const ALL_DOCTORS = [
    {
        id: 1,
        name: "Dr. Richard James",
        specialty: "General physician",
        available: true,
        image: "/images/1.png",
    },
    {
        id: 2,
        name: "Dr. Omar Al-Farsi",
        specialty: "General physician",
        available: true,
        image: "/images/2.png",
    },
    {
        id: 3,
        name: "Dr. Laila Hassan",
        specialty: "Gynecologist",
        available: true,
        image: "/images/3.png",
    },
    {
        id: 4,
        name: "Dr. Adam Smith",
        specialty: "Dermatologist",
        available: true,
        image: "/images/4.png",
    },
    {
        id: 5,
        name: "Dr. Sarah Chen",
        specialty: "Pediatricians",
        available: true,
        image: "/images/5.png",
    },
    {
        id: 6,
        name: "Dr. Khalid Mansour",
        specialty: "Neurologist",
        available: true,
        image: "/images/6.png",
    },
    {
        id: 7,
        name: "Dr. Emily Johnson",
        specialty: "Gastroenterologist",
        available: true,
        image: "/images/7.png",
    },
    {
        id: 8,
        name: "Dr. Yousuf Tarek",
        specialty: "General physician",
        available: true,
        image: "/images/8.png",
    },
    {
        id: 9,
        name: "Dr. Mary Lee",
        specialty: "Gynecologist",
        available: true,
        image: "/images/9.png",
    },
    {
        id: 10,
        name: "Dr. David Garcia",
        specialty: "Dermatologist",
        available: true,
        image: "/images/10.png",
    },
    {
        id: 11,
        name: "Dr. Amina Said",
        specialty: "Pediatricians",
        available: true,
        image: "/images/11.png",
    },
    {
        id: 12,
        name: "Dr. Huda Fathy",
        specialty: "Neurologist",
        available: true,
        image: "/images/12.png",
    },
    {
        id: 13,
        name: "Dr. George Brown",
        specialty: "Gastroenterologist",
        available: true,
        image: "/images/13.png",
    },
    {
        id: 14,
        name: "Dr. Maya Zaki",
        specialty: "General physician",
        available: true,
        image: "/images/14.png",
    },
    {
        id: 15,
        name: "Dr. Sami Qasim",
        specialty: "Pediatricians",
        available: true,
        image: "/images/5.png",
    },
    {
        id: 16,
        name: "Dr. Alia Reda",
        specialty: "Gynecologist",
        available: true,
        image: "/images/9.png",
    },
    {
        id: 17,
        name: "Dr. Paul White",
        specialty: "General physician",
        available: true,
        image: "/images/1.png",
    },
    {
        id: 18,
        name: "Dr. Nancy Drew",
        specialty: "Dermatologist",
        available: true,
        image: "/images/4.png",
    },
];
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 3000,
                        style: {
                            background: "#1e293b",
                            color: "#fff",
                            padding: "16px",
                            borderRadius: "8px",
                        },
                        success: {
                            iconTheme: {
                                primary: "#10b981",
                                secondary: "#fff",
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: "#ef4444",
                                secondary: "#fff",
                            },
                        },
                    }}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/appointments"
                        element={
                            <ProtectedRoute>
                                <Appointment />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/doctors"
                        element={
                            <DoctorPage
                                allDoctors={ALL_DOCTORS}
                                specialties={specialtiesData}
                                itemsPerPage={ITEMS_PER_PAGE}
                            />
                        }
                    />
                    <Route
                        path="/about"
                        element={<About/>}
                    />
                    <Route
                        path="/contact"
                        element={<Contact/>}
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;

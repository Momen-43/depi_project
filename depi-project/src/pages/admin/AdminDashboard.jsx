import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import "../../styles/AdminDashboard.css";
import axios from "axios";

function AdminDashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAppointments: 0,
    totalDoctors: 0,
  });
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors")
      .then((res) => {
        console.log("test axios", res.data);
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log("error axios", err);
      });
  }, []);

  const fetchStats = async () => {
    try {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const totalUsers = usersSnapshot.size;

      let totalAppointments = 0;
      let totalDoctors = 0;

      // const appointmentsSnapshot = await getDocs(
      //   collection(db, "appointments")
      // );
      // totalAppointments = appointmentsSnapshot.size;
      // totalDoctors = appointmentsSnapshot.docs.filter(
      //   (doc) => doc.data().status === "doctor"
      // ).length;

      setStats({
        totalUsers,
        totalAppointments,
        totalDoctors,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="mb-1">Admin Dashboard</h1>
              <p className="text-muted">
                Welcome back, {currentUser?.displayName || currentUser?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card h-100 card-style">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-uppercase mb-1">Total Users</h6>
                  <h2 className="mb-0">{stats.totalUsers}</h2>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent border-0">
              <button
                className="btn btn-light btn-sm w-100"
                onClick={() => navigate("/admin/users")}
              >
                View All Users →
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 card-style">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-uppercase mb-1">Total Appointments</h6>
                  <h2 className="mb-0">{stats.totalAppointments}</h2>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent border-0">
              <button
                className="btn btn-light btn-sm w-100"
                onClick={() => navigate("/admin/appointments")}
              >
                View All Appointments →
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 card-style">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-uppercase mb-1">Doctors</h6>
                  <h2 className="mb-0">{doctors.length}</h2>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent border-0">
              <button
                className="btn btn-light btn-sm w-100"
                onClick={() => navigate("/admin/addnewdoctor")}
              >
                Add New Doctor →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 mb-2">
                  <button
                    className="btn button-style w-100 py-3"
                    onClick={() => navigate("/admin/users")}
                  >
                    Manage Users
                  </button>
                </div>
                <div className="col-md-3 mb-2">
                  <button
                    className="btn button-style w-100 py-3"
                    onClick={() => navigate("/admin/appointments")}
                  >
                    Manage Appointments
                  </button>
                </div>
                <div className="col-md-3 mb-2">
                  <button
                    className="btn button-style w-100 py-3"
                    onClick={() => navigate("/")}
                  >
                    View Site
                  </button>
                </div>
                <div className="col-md-3 mb-2">
                  <button
                    className="btn button-style w-100 py-3"
                    onClick={() => window.location.reload()}
                  >
                    Refresh Stats
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const appointmentsCollection = collection(db, "appointments");
      const appointmentsSnapshot = await getDocs(appointmentsCollection);
      const appointmentsList = appointmentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointments(appointmentsList);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      toast.error("Error fetching appointments");
    } finally {
      setLoading(false);
    }
  };

  const filteredAppointments =
    filter === "all"
      ? appointments
      : appointments.filter((apt) => apt.status === filter);

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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <button
            className="btn btn-outline-secondary me-3"
            onClick={() => navigate("/admin/dashboard")}
          >
            ← Back
          </button>
          <span className="h3">Manage Appointments</span>
        </div>
      </div>
      <div className="row">
        {filteredAppointments.length === 0 ? (
          <div className="col-12">
            <p className="text-center text-muted">No appointments found</p>
          </div>
        ) : (
          filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <span className={`badge bg-${appointment.status}`}>
                    {appointment.status || "pending"}
                  </span>
                  <small className="text-muted">
                    {appointment.date || "No date"}
                  </small>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {appointment.patientName || "N/A"}
                  </h5>
                  <p className="card-text">
                    <strong>Email:</strong> {appointment.email || "N/A"}
                    <br />
                    <strong>Phone:</strong> {appointment.phone || "N/A"}
                    <br />
                    <strong>Time:</strong> {appointment.time || "N/A"}
                    <br />
                    <strong>Reason:</strong> {appointment.reason || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageAppointments;

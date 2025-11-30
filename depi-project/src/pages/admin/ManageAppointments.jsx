import { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const appointmentsCollection = collection(db, 'appointments');
      const appointmentsSnapshot = await getDocs(appointmentsCollection);
      const appointmentsList = appointmentsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAppointments(appointmentsList);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast.error('Error fetching appointments');
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (appointmentId, newStatus) => {
    try {
      const appointmentRef = doc(db, 'appointments', appointmentId);
      await updateDoc(appointmentRef, { status: newStatus });
      
      setAppointments(appointments.map(apt => 
        apt.id === appointmentId ? { ...apt, status: newStatus } : apt
      ));
      
      toast.success(`Appointment ${newStatus}`);
    } catch (error) {
      console.error('Error updating appointment:', error);
      toast.error('Error updating appointment');
    }
  };

  const deleteAppointment = async (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await deleteDoc(doc(db, 'appointments', appointmentId));
        setAppointments(appointments.filter(apt => apt.id !== appointmentId));
        toast.success('Appointment deleted');
      } catch (error) {
        console.error('Error deleting appointment:', error);
        toast.error('Error deleting appointment');
      }
    }
  };

  const filteredAppointments = filter === 'all' 
    ? appointments 
    : appointments.filter(apt => apt.status === filter);

  const getStatusBadge = (status) => {
    const badges = {
      pending: 'bg-warning text-dark',
      approved: 'bg-success',
      rejected: 'bg-danger',
      completed: 'bg-info'
    };
    return badges[status] || 'bg-secondary';
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
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <button 
            className="btn btn-outline-secondary me-3"
            onClick={() => navigate('/admin/dashboard')}
          >
            ← Back
          </button>
          <span className="h3">📅 Manage Appointments</span>
        </div>
      </div>

      {/* Filters */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="btn-group flex-wrap">
            <button 
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter('all')}
            >
              All ({appointments.length})
            </button>
            <button 
              className={`btn ${filter === 'pending' ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => setFilter('pending')}
            >
              Pending ({appointments.filter(a => a.status === 'pending').length})
            </button>
            <button 
              className={`btn ${filter === 'approved' ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setFilter('approved')}
            >
              Approved ({appointments.filter(a => a.status === 'approved').length})
            </button>
            <button 
              className={`btn ${filter === 'rejected' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setFilter('rejected')}
            >
              Rejected ({appointments.filter(a => a.status === 'rejected').length})
            </button>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="row">
        {filteredAppointments.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-info text-center">
              No appointments found
            </div>
          </div>
        ) : (
          filteredAppointments.map(appointment => (
            <div className="col-md-6 col-lg-4 mb-4" key={appointment.id}>
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <span className={`badge ${getStatusBadge(appointment.status)}`}>
                    {appointment.status || 'pending'}
                  </span>
                  <small className="text-muted">
                    {appointment.date || 'No date'}
                  </small>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{appointment.patientName || 'N/A'}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {appointment.email || 'N/A'}<br />
                    <strong>Phone:</strong> {appointment.phone || 'N/A'}<br />
                    <strong>Time:</strong> {appointment.time || 'N/A'}<br />
                    <strong>Reason:</strong> {appointment.reason || 'N/A'}
                  </p>
                </div>
                <div className="card-footer">
                  <div className="btn-group w-100">
                    <button 
                      className="btn btn-success btn-sm"
                      onClick={() => updateAppointmentStatus(appointment.id, 'approved')}
                      disabled={appointment.status === 'approved'}
                    >
                      ✓ Approve
                    </button>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => updateAppointmentStatus(appointment.id, 'rejected')}
                      disabled={appointment.status === 'rejected'}
                    >
                      ✗ Reject
                    </button>
                    <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteAppointment(appointment.id)}
                    >
                      🗑️
                    </button>
                  </div>
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
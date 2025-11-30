import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Unauthorized = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <div className="mb-4" style={{ fontSize: '5rem' }}>
                🚫
              </div>
              <h1 className="text-danger mb-3">Access Denied</h1>
              <p className="text-muted mb-4">
                Sorry, you don't have permission to access this page.
                This area is restricted to administrators only.
              </p>
              <div className="d-grid gap-2">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate('/')}
                >
                  🏠 Go to Home
                </button>
                {!currentUser && (
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => navigate('/login')}
                  >
                    🔐 Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
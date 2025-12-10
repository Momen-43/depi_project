import React from "react";
import AddDoctorForm from "../../components/AddDoctorForm";

function AddNewDoctor() {
  return (
    <div>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <span className="h3">Add New Doctor</span>
          </div>
        </div>
        <AddDoctorForm />
      </div>
    </div>
  );
}

export default AddNewDoctor;

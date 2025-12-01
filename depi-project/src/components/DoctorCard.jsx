import React from "react";

function DoctorCard({ doctor }) {

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="card h-100 border-0 rounded-4 overflow-hidden shadow doctor-card-hover">

                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        backgroundColor: "#e9eeff",
                        height: "250px",
                    }}
                >
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="img-fluid"
                        style={{
                            maxHeight: "90%",
                            maxWidth: "90%",
                            objectFit: "contain",
                        }}
                    />
                </div>


                <div className="card-body px-3 py-3">

                    {doctor.available && (
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <span
                                className="rounded-circle"
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    backgroundColor: "#0fbe00",
                                }}
                            ></span>
                            <small className="text-success fw-bold">
                                Available
                            </small>
                        </div>
                    )}

                    <h5 className="card-title fw-bold text-dark mb-1">
                        {doctor.name}
                    </h5>
                    <p className="card-text text-muted small">
                        {doctor.specialty}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DoctorCard;

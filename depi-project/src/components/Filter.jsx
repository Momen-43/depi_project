import React from "react";

function Filter({ specialties, activeSpecialty, onFilterChange }) {
    return (
        <aside className="col-lg-3 col-md-4 mb-4">


            <div className="d-flex flex-column gap-3">
                {specialties.map((specialty) => (
                    <button
                        key={specialty.id}
                        onClick={() => onFilterChange(specialty.name)}
                        className={`btn text-start rounded-4 px-3 py-2 fw-semibold cursor-pointer specialty-btn-new ${
                            specialty.name === activeSpecialty
                                ? "active-specialty-new text-primary"
                                : "border border-gray-300 text-dark"
                        }`}
                    >
                        {specialty.name}
                    </button>
                ))}
            </div>
        </aside>
    );
}

export default Filter;

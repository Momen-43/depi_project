import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DoctorPage.css";
import Filter from "../components/Filter";

import Pagination from "../components/Pagination";
import DoctorCard from "../components/DoctorCard";


function DoctorPage({ allDoctors, specialties, itemsPerPage }) {

    const [filteredDoctors, setFilteredDoctors] = useState(allDoctors);
    const [activeSpecialty, setActiveSpecialty] = useState("All Specialties");
    const [itemOffset, setItemOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const handleSpecialtyFilter = (specialtyName) => {
        setActiveSpecialty(specialtyName);

        let newFilteredList;
        if (specialtyName === "All Specialties") {
            newFilteredList = allDoctors;
        } else {
            newFilteredList = allDoctors.filter(
                (doctor) => doctor.specialty === specialtyName
            );
        }

        setFilteredDoctors(newFilteredList);
        setItemOffset(0);
        setCurrentPage(0);
    };

    const endOffset = itemOffset + itemsPerPage;
    const currentDoctors = filteredDoctors.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredDoctors.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset =
            (event.selected * itemsPerPage) % filteredDoctors.length;

        setItemOffset(newOffset);
        setCurrentPage(event.selected);

        window.scrollTo(0, 0);
    };

    const renderDoctorCards = (doctors) => {
        if (doctors.length === 0 && filteredDoctors.length === 0) {
            return (
                <div className="col-12 text-center py-5">
                    <p className="lead text-muted">
                        No doctors found for this specialty.
                    </p>
                </div>
            );
        }

        return (
            <div className="row g-4">
                {doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white">

            <main className="container my-5">
                <p className="text-dark fs-5 fw-semibold mb-4">
                    Browse through the doctors specialist.
                </p>

                <div className="row">
                    <Filter
                        specialties={specialties}
                        activeSpecialty={activeSpecialty}
                        onFilterChange={handleSpecialtyFilter}
                    />

                    <section className="col-lg-9 col-md-8">
                        {renderDoctorCards(currentDoctors)}

                        <Pagination
                            pageCount={pageCount}
                            currentPage={currentPage}
                            handlePageClick={handlePageClick}
                        />
                    </section>
                </div>
            </main>

        </div>
    );
}

export default DoctorPage;

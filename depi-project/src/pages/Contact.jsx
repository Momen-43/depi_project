import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {

    const COMPANY_LINKS = [
        { id: 1, name: "Home" },
        { id: 2, name: "About us" },
        { id: 3, name: "Contact us" },
        { id: 4, name: "Privacy policy" },
    ];

    const CONTACT_INFO = [
        { id: 1, text: "+1-212-456-7890" },
        { id: 2, text: "greatstackdev@gmail.com" },
    ];

    return (
        <div className="bg-white">

            <main className="container my-5 py-5">
                <h1
                    className="fw-bold text-dark text-uppercase mb-5 text-center"
                    style={{ fontSize: "32px" }}
                >
                    CONTACT US
                </h1>

                <div className="row g-5 justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div
                            className="position-relative overflow-hidden rounded-4 shadow"
                            style={{ height: "450px" }}
                        >
                            <img
                                src="/images/contact_image.png"
                                alt="Doctor and patient"
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 ps-lg-5">
                        <h4 className="fw-bold text-dark mb-4">OUR OFFICE</h4>
                        <p className="text-muted mb-1">54709 Willms Station</p>
                        <p className="text-muted mb-4">
                            Suite 350, Washington, USA.
                        </p>

                        <p className="text-dark fw-bold mb-1">
                            Tel: (415) 555-0132
                        </p>
                        <p className="text-dark fw-bold mb-5">
                            Email: greatstackdev@gmail.com
                        </p>

                        <h4 className="fw-bold text-dark mb-3">
                            CAREERS AT PRESCRIPTO
                        </h4>
                        <p className="text-muted mb-4">
                            Learn more about our teams and job openings.
                        </p>
                        <button className="btn btn-outline-dark rounded-pill px-4 py-2 border-2">
                            Explore Jobs
                        </button>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default Contact;

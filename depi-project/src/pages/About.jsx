import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {

    return (
        <div className="bg-white">

            <main className="container my-5">
                <h1
                    className="fw-bold text-dark text-uppercase mb-5 text-center"
                    style={{ fontSize: "32px" }}
                >
                    ABOUT US
                </h1>

                <div className="row g-5 align-items-start mb-5">
                    <div className="col-lg-5 col-md-12">
                        <div
                            className="position-relative overflow-hidden rounded-4 shadow"
                            style={{ height: "400px" }}
                        >
                            <img
                                src="/images/about_image.png"
                                alt="Doctor team smiling"
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <p className="text-muted lh-lg mb-4">
                            Welcome to Prescripto, your trusted partner in
                            managing your healthcare needs conveniently and
                            efficiently. At Prescripto, we understand the
                            challenges individuals face when it comes to
                            scheduling doctor appointments and managing their
                            health records.
                        </p>
                        <p className="text-muted lh-lg mb-4">
                            Prescripto is committed to excellence in healthcare
                            technology. We continuously strive to enhance our
                            platform, integrating the latest advancements to
                            improve user experience and deliver superior
                            service. Whether you're booking your first
                            appointment or managing ongoing care, Prescripto is
                            here to support you every step of the way.
                        </p>

                        <h5 className="fw-bold text-dark mt-4 mb-2">
                            Our Vision
                        </h5>
                        <p className="text-muted lh-lg">
                            Our vision at Prescripto is to create a seamless
                            healthcare experience for every user. We aim to
                            bridge the gap between patients and healthcare
                            providers, making it easier for you to access the
                            care you need, when you need it.
                        </p>
                    </div>
                </div>

                <h2
                    className="fw-bold text-dark text-uppercase mt-5 mb-4 border-top pt-5"
                    style={{ fontSize: "24px" }}
                >
                    WHY CHOOSE US
                </h2>
                <div className="row g-4 mb-5">
                    <div className="col-lg-4 col-md-12">
                        <div className="p-4 border rounded-4 h-100 bg-light">
                            <h5 className="fw-bold text-dark mb-2">
                                EFFICIENCY:
                            </h5>
                            <p className="text-muted small">
                                Streamlined appointment scheduling that fits
                                into your busy lifestyle.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="p-4 border rounded-4 h-100 bg-light">
                            <h5 className="fw-bold text-dark mb-2">
                                CONVENIENCE:
                            </h5>
                            <p className="text-muted small">
                                Access to a network of trusted healthcare
                                professionals in your area.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="p-4 border rounded-4 h-100 bg-light">
                            <h5 className="fw-bold text-dark mb-2">
                                PERSONALIZATION:
                            </h5>
                            <p className="text-muted small">
                                Tailored recommendations and reminders to help
                                you stay on top of your health.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default About;

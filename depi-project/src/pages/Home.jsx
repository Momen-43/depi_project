import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Navbar,
  Nav,
} from "react-bootstrap";


import appointmentDocImg from "../assets/images/appointment-doc-img.png";
import arrowIcon from "../assets/images/arrow_icon.svg";
import docHeaderImg from "../assets/images/header.png";
import groupProfiles from "../assets/images/group-profiles.png";
import logoPrescripto from "../assets/images/logo-prescripto.svg";

import dermatologist from "../assets/images/dermatologist.svg";
import gynecologist from "../assets/images/gynecologist.svg";
import generalPhysician from "../assets/images/general_physician.svg";
import pediatricians from "../assets/images/pediatricians.svg";
import neurologist from "../assets/images/neurologist.svg";
import gastroenterologist from "../assets/images/gastroenterologist.svg";

import file1 from "../assets/images/doc1.png";
import file2 from "../assets/images/doc2.png";
import file3 from "../assets/images/doc3.png";
import file4 from "../assets/images/doc4.png";
import file5 from "../assets/images/doc5.png";


const primaryColor = "#5f6fff";

export const Home = () => {

  const specialties = [
    { img: generalPhysician, name: "General physician" },
    { img: gynecologist, name: "Gynecologist" },
    { img: dermatologist, name: "Dermatologist" },
    { img: pediatricians, name: "Pediatricians" },
    { img: neurologist, name: "Neurologist" },
    { img: gastroenterologist, name: "Gastroenterologist" },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file1,
    },
    {
      id: 2,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file2,
    },
    {
      id: 3,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file3,
    },
    {
      id: 4,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file4,
    },
    {
      id: 5,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file5,
    },
    {
      id: 6,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file1,
    },
    {
      id: 7,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file2,
    },
    {
      id: 8,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file3,
    },
    {
      id: 9,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file4,
    },
    {
      id: 10,
      name: "Dr. Richard James",
      spec: "General physician",
      img: file5,
    },
  ];

  return (
    <div className="bg-white">

      <Container className="my-5">
        <div
          className="rounded-4 position-relative text-white overflow-hidden"
          style={{ backgroundColor: primaryColor }}
        >
          <Row className="align-items-center g-0">
            {" "}

            <Col md={6} className="p-5">
              <h1 className="fw-bold display-5 mb-4">
                Book Appointment <br /> With Trusted Doctors
              </h1>
              <div className="d-flex align-items-center mb-4">
                <img
                  src={groupProfiles}
                  alt="profiles"
                  className="me-3"
                  style={{ height: "70px" }}
                />
              </div>
              <Button
                variant="light"
                className="rounded-pill px-4 py-2 text-secondary fw-bold"
              >
                Book appointment{" "}
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="ms-2"
                  style={{ width: "10px" }}
                />
              </Button>
            </Col>

            <Col
              md={6}
              className="d-flex justify-content-end align-items-end position-relative"
            >

              <img
                src={docHeaderImg}
                alt="Doctors"
                className="img-fluid"
                style={{
                  maxHeight: "400px", 
                  width: "auto", 
                  display: "block",
                  marginTop: "20px", 
                }}
              />
            </Col>
          </Row>
        </div>
      </Container>


      <Container className="text-center my-5">
        <h2 className="fw-bold mb-3">Find by Speciality</h2>
        <p className="text-muted mb-5 w-50 mx-auto">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center"
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="mb-2"
                style={{ width: "80px", height: "80px" }}
              />
              <span className="small text-muted">{item.name}</span>
            </div>
          ))}
        </div>
      </Container>

      <Container className="text-center my-5">
        <h2 className="fw-bold mb-3">Top Doctors to Book</h2>
        <p className="text-muted mb-5">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <Row className="g-4" xs={1} sm={2} md={3} lg={4} xl={5}>
          {doctors.map((doc, index) => (
            <Col key={index}>
              {" "}

              <Card className="border-0 shadow-sm h-100 rounded-3 overflow-hidden text-start cursor-pointer hover-shadow">
                <div className="bg-light d-flex justify-content-center pt-3">
                  <Card.Img
                    variant="top"
                    src={doc.img}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Card.Body>
                  <div className="d-flex align-items-center mb-2 text-success small">
                    <span
                      className="bg-success rounded-circle me-2"
                      style={{ width: "8px", height: "8px" }}
                    ></span>
                    Available
                  </div>
                  <Card.Title className="fw-bold fs-5">{doc.name}</Card.Title>
                  <Card.Text className="text-muted small">{doc.spec}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Button
          variant="light"
          className="mt-5 px-5 py-2 rounded-pill border"
          style={{ backgroundColor: "#eaefff" }}
        >
          more
        </Button>
      </Container>


      <Container className="my-5">
        <div
          className="rounded-4 px-5 position-relative text-white overflow-hidden"
          style={{ backgroundColor: primaryColor }}
        >
          <Row className="align-items-center">
            <Col md={7} className="py-5 ps-lg-5">
              <h1 className="fw-bold display-5 mb-4">
                Book Appointment <br /> With 100+ Trusted Doctors
              </h1>
              <Button
                variant="light"
                className="rounded-pill px-4 py-3 text-secondary fw-bold mt-3"
              >
                Create account
              </Button>
            </Col>
            <Col md={5} className="position-relative">
              <img
                src={appointmentDocImg}
                alt="Doctor Appointment"
                className="img-fluid mt-4"
                style={{ width: "350px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>


    </div>
  );
};

export default Home;

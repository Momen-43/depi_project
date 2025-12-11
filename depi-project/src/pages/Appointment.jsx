import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";


import docImage from "../assets/images/doc-image.png";
import vector from "../assets/images/vector.svg";
import file1 from "../assets/images/doc1.png";
import file2 from "../assets/images/doc2.png";
import file3 from "../assets/images/doc3.png";
import file4 from "../assets/images/doc4.png";
import file5 from "../assets/images/doc5.png";

const primaryColor = "#5f6fff";

export const Appointment = () => {

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const [selectedTime, setSelectedTime] = useState("");

  const [currentSlots, setCurrentSlots] = useState([]);


  const days = [
    { day: "MON", date: 10, startHour: 9, endHour: 17 }, 
    { day: "TUE", date: 11, startHour: 10, endHour: 14 }, 
    { day: "WED", date: 12, startHour: 9, endHour: 21 }, 
    { day: "THU", date: 13, startHour: 12, endHour: 18 }, 
    { day: "FRI", date: 14, startHour: 8, endHour: 12 }, 
    { day: "SAT", date: 15, startHour: 9, endHour: 17 }, 
  ];


  const generateTimeSlots = (start, end) => {
    const slots = [];

    for (let i = start; i < end; i++) {

   
      slots.push(formatTime(i, 0));
   
      slots.push(formatTime(i, 30));
    }
    return slots;
  };


  const formatTime = (hour, minutes) => {
    const ampm = hour >= 12 ? "pm" : "am";
    const h = hour % 12 || 12; 
    const m = minutes === 0 ? "00" : minutes; 
    return `${h}:${m} ${ampm}`;
  };


  useEffect(() => {

    const dayData = days[selectedDayIndex];

    const slots = generateTimeSlots(dayData.startHour, dayData.endHour);

    setCurrentSlots(slots);

    setSelectedTime("");
  }, [selectedDayIndex]);


  const relatedDoctors = [
    { id: 1, name: "Dr. Richard James", type: "General physician", img: file1 },
    { id: 2, name: "Dr. Richard James", type: "General physician", img: file2 },
    { id: 3, name: "Dr. Richard James", type: "General physician", img: file3 },
    { id: 4, name: "Dr. Richard James", type: "General physician", img: file4 },
    { id: 5, name: "Dr. Richard James", type: "General physician", img: file5 },
  ];

  return (
    <Container className="my-5">

      <div className="d-flex flex-column flex-md-row gap-4 mb-5">
        <div
          className="rounded-3 d-flex justify-content-center align-items-end"
          style={{
            backgroundColor: primaryColor,
            minWidth: "250px",
            maxWidth: "300px",
          }}
        >
          <img
            src={docImage}
            alt="Doctor"
            className="img-fluid rounded-top"
           
          />
        </div>

        <div className="border rounded-3 p-4 flex-grow-1 bg-white">
          <h2 className="d-flex align-items-center gap-2 fw-bold text-dark mb-1">
            Dr. Richard James
            <img src={vector} alt="verified" style={{ width: "20px" }} />
          </h2>

          <div className="d-flex align-items-center gap-2 text-muted mb-3">
            <span>MBBS - General Physician</span>
            <span className="badge bg-light text-dark border rounded-pill px-3 py-1">
              2 Years
            </span>
          </div>

          <h5 className="fw-bold mt-4 mb-2 text-dark">About</h5>
          <p className="text-muted small lh-lg" style={{ maxWidth: "700px" }}>
            Dr. Davis has a strong commitment to delivering comprehensive
            medical care, focusing on preventive medicine, early diagnosis, and
            effective treatment strategies.
          </p>

          <p className="mt-4 text-muted font-weight-bold">
            Appointment fee: <span className="text-dark fw-bold">$50</span>
          </p>
        </div>
      </div>


      <div className="mb-5 text-end text-md-start">
        <h4 className="fw-bold text-muted mb-4">Booking slots</h4>


        <div className="d-flex gap-3 overflow-auto pb-3 mb-4 justify-content-start">
          {days.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedDayIndex(index)}
              className={`d-flex flex-column align-items-center justify-content-center py-3 px-4 rounded-5 cursor-pointer border ${
                selectedDayIndex === index ? "text-white" : "text-muted"
              }`}
              style={{
                backgroundColor:
                  selectedDayIndex === index ? primaryColor : "white",
                minWidth: "70px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <span className="small fw-bold">{item.day}</span>
              <span className="fw-bold fs-5">{item.date}</span>
            </div>
          ))}
        </div>


        <div className="d-flex gap-3 overflow-auto pb-3 mb-4 justify-content-start flex-wrap">
          {currentSlots.length > 0 ? (
            currentSlots.map((time, index) => (
              <Button
                key={index}
                variant="outline-secondary"
                onClick={() => setSelectedTime(time)}
                className={`rounded-pill px-4 py-2 border ${
                  selectedTime === time
                    ? "text-white border-0"
                    : "text-muted bg-white"
                }`}
                style={{
                  backgroundColor:
                    selectedTime === time ? primaryColor : "transparent",
                  transition: "0.3s",
                  minWidth: "110px",
                }}
              >
                {time}
              </Button>
            ))
          ) : (
            <p className="text-muted">No slots available for this day.</p>
          )}
        </div>

        <Button
          className="rounded-pill px-5 py-3 fw-bold border-0"
          style={{ backgroundColor: primaryColor }}
          disabled={!selectedTime}
        >
          Book an appointment
        </Button>
      </div>

      <div className="mt-5 pt-4">
        <h2 className="text-center fw-bold mb-3">Related Doctors</h2>
        <p className="text-center text-muted mb-5">
          Simply browse through our extensive list of trusted doctors.
        </p>

        <Row className="g-4 justify-content-center">
          {relatedDoctors.map((doc) => (
            <Col key={doc.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card className="border-0 shadow-sm h-100 rounded-3 overflow-hidden cursor-pointer hover-card">
                <div
                  className="bg-light d-flex justify-content-center pt-3"
                  style={{ backgroundColor: "#e9eeff" }}
                >
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
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-2 text-success small">
                    <span
                      className="bg-success rounded-circle me-2"
                      style={{ width: "8px", height: "8px" }}
                    ></span>
                    Available
                  </div>
                  <Card.Title className="fw-bold fs-6 mb-1">
                    {doc.name}
                  </Card.Title>
                  <Card.Text className="text-muted small">{doc.type}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Appointment;

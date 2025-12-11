import React from "react"; // يفضل استيراد React
import { Container, Row, Col } from "react-bootstrap";
import logoFooter from "../assets/images/logo-footer.svg";

export const Footer = () => {
  return (
    <footer className="bg-white py-5 mt-5 border-top">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <img
              src={logoFooter}
              alt="Logo"
              className="mb-3"
              style={{ height: "40px" }}
            />
            <p className="text-muted small w-75">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold mb-3">COMPANY</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">Home</li>
              <li className="mb-2">About us</li>
              <li className="mb-2">Contact us</li>
              <li className="mb-2">Privacy policy</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">GET IN TOUCH</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">+1-212-456-7890</li>
              <li className="mb-2">greatstackdev@gmail.com</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center text-muted small">
          Copyright © 2024 GreatStack - All Right Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

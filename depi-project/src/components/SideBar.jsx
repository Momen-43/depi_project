import React from "react";
import dashboard from "../assets/images/dashboard-icon.png";
import appointments from "../assets/images/appointment-icon.png";
import add_doctor from "../assets/images/add-doctor-icon.png";
import doctors_list from "../assets/images/doctor-icon.png";
import "../styles/SideBar.css";
import { useState } from "react";

function SideBar() {
  const [activeLink, setActiveLink] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", href: "/", image: dashboard },
    {
      id: "appointments",
      label: "Appointments",
      href: "/appointments",
      image: appointments,
    },
    {
      id: "add-doctor",
      label: "Add Doctor",
      href: "/add-doctor",
      image: add_doctor,
    },
    {
      id: "doctors-list",
      label: "Doctors List",
      href: "/doctors-list",
      image: doctors_list,
    },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveLink(id);
  };

  return (
    <div className="sidebar">
      <ul className="nav-links pt-4 d-flex flex-column gap-3">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeLink === item.id ? "side-active" : ""}
          >
            <a
              href={item.href}
              className="d-flex gap-2 ps-5 pt-3"
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <img
                className="sidebar-icon"
                src={item.image}
                alt={item.id}
                width={21}
                height={21}
              />
              <p className="sidebar-label">{item.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

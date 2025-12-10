import React, { useState } from "react";
import "../styles/AddDoctorForm.css";
import upload_image from "../assets/images/upload_area.svg";
import InputField from "./InputField";

function AddDoctorForm() {
  const [preview, setPreview] = React.useState(null);

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const [form, setForm] = useState({
    image: "",
    doctorName: "",
    speciality: "General physician",
    doctorEmail: "",
    education: "",
    doctorPassword: "",
    address: "",
    experience: "",
    salary: "",
    info: "",
  });

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setForm({ ...form, image: file });
    }
  }

  function handleInput(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setForm({
      image: "",
      doctorName: "",
      speciality: "General physician",
      doctorEmail: "",
      education: "",
      doctorPassword: "",
      address: "",
      experience: "",
      salary: "",
      info: "",
    });
    setPreview(null);
    console.log(form);
  }

  return (
    <div className="add-doctor-container">
      <div className="add-doctor-form">
        <label htmlFor="image">
          <div className="d-flex gap-4 mb-4">
            <img
              className={
                preview ? "upload-area preview-img" : "upload-area upload-image"
              }
              src={preview ? preview : upload_image}
              alt="upload image"
            />
            <p
              className="upload-area fs-5"
              style={{ fontWeight: 500, color: "#7B7B7B", marginTop: "50px" }}
            >
              Upload doctor <br /> picture
            </p>
          </div>
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="d-none"
          accept="image/*"
          onChange={handleImageChange}
        />
        <form onSubmit={handleSubmit}>
          <div className="pair d-flex mb-3">
            <InputField
              id="doctorName"
              label="Doctor name"
              placeholder="Name"
              value={form.doctorName}
              onChange={handleInput}
            />
            <div className="input-pair ms-2 ps-4" style={{ width: "43%" }}>
              <label className="pb-2" htmlFor="speciality">
                Speciality
              </label>
              <select
                className="p-2 m-1 ps-1"
                name="speciality"
                id="speciality"
                value={form.speciality}
                onChange={handleInput}
              >
                {specialities.map((speciality) => (
                  <option key={speciality} value={speciality}>
                    {speciality}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="pair d-flex mb-3">
            <InputField
              id="doctorEmail"
              label="Doctor Email"
              placeholder="Email"
              value={form.doctorEmail}
              onChange={handleInput}
            />
            <InputField
              id="education"
              label="Education"
              placeholder="Education"
              value={form.education}
              onChange={handleInput}
            />
          </div>
          <div className="pair d-flex mb-3">
            <InputField
              id="doctorPassword"
              type="password"
              label="Doctor Password"
              placeholder="Password"
              value={form.doctorPassword}
              onChange={handleInput}
            />
            <InputField
              id="address"
              label="Address"
              placeholder="Address"
              value={form.address}
              onChange={handleInput}
            />
          </div>
          <div className="pair d-flex mb-3">
            <InputField
              id="experience"
              label="Experience"
              placeholder="Experience"
              value={form.experience}
              onChange={handleInput}
            />
            <InputField
              id="salary"
              type="number"
              step={100}
              label="Salary"
              placeholder="Salary"
              value={form.salary}
              onChange={handleInput}
            />
          </div>
          <div className="input-pair ms-2 ps-4" style={{ width: "86.8%" }}>
            <label className="pb-2" htmlFor="info">
              Additional Information
            </label>
            <textarea
              className="p-2 m-1"
              name="info"
              id="info"
              placeholder="Add info"
              value={form.info}
              onChange={handleInput}
              rows={5}
            ></textarea>
          </div>
          <button className="auth-button py-3 px-5" style={{ margin: "30px" }}>
            Add doctor
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDoctorForm;

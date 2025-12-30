import React from "react";
import "./StudentRegistration.css";
import { useState } from "react";

const StudentsRegistration: React.FC = () => {
const [successMessage, setSuccessMessage] = useState("");

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Form submitted");
  const message = "Form submitted successfully!";
  setSuccessMessage(message);
  alert(message);
};

  return (
    <div className="container">
      <div className="card">
        {/* Logo */}
        <div className="logo">
          <h1>Optimiza Training & Software Development Pvt Ltd</h1>
        </div>

        {/* Form */}
        <form className="form-grid" onSubmit={handleSubmit}>
          <div>
            <label>Name *</label>
            <input type="text" required />
          </div>

          <div>
            <label>Age *</label>
            <input type="number" required />
          </div>

          <div>
            <label>Qualification *</label>
            <input type="text" required />
          </div>

          <div>
            <label>College Name *</label>
            <input type="text" required />
          </div>

          <div>
            <label>Mobile *</label>
            <input type="tel" required />
          </div>

          <div>
            <label>Email *</label>
            <input type="email" required />
          </div>

          <div>
            <label>Upload Aadhaar (PDF / JPG / PNG) *</label>
            <input type="file" required />
          </div>

          <div>
            <label>Aadhaar *</label>
            <input type="text" required />
          </div>

          <div className="full">
            <label>Address *</label>
            <textarea rows={3} required></textarea>
          </div>

          <div>
            <label>Parents Occupation *</label>
            <input type="text" required />
          </div>

          <div>
            <label>Father Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Father Mobile</label>
            <input type="tel" />
          </div>

          <div>
            <label>Mother Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Mother Mobile</label>
            <input type="tel" />
          </div>

          <div>
            <label>Willing to Join? *</label>
            <div className="radio">
              <input type="radio" name="join" required /> <span>Yes</span>
              <input type="radio" name="join" required /> <span>No</span>
            </div>
          </div>

          <div>
            <label>Reference *</label>
            <input type="text" required />
          </div>

          <div className="full">
            <label>What do you want to become? *</label>
            <textarea rows={3} required></textarea>
          </div>

          <div className="full center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentsRegistration;

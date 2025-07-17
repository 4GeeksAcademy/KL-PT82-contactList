// src/pages/AddContact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    company: "",
    avatar: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: Date.now().toString(),
      ...formData
    };
    dispatch({ type: "add_contact", payload: newContact });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input id="fullName" name="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input id="address" name="address" className="form-control" value={formData.address} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="company" className="form-label">Company</label>
        <input id="company" name="company" className="form-control" value={formData.company} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="avatar" className="form-label">Profile Picture</label>
        <input id="avatar" name="avatar" type="file" accept="image/*" className="form-control" onChange={handleFileChange} />
      </div>

      {formData.avatar && (
        <div className="mb-3">
          <img src={formData.avatar} alt="Preview" style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover" }} />
        </div>
      )}

      <button type="submit" className="btn btn-primary">Save Contact</button>
    </form>
  );
};

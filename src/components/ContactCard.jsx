// src/components/ContactCard.jsx
import { useNavigate } from "react-router-dom";
import "./ContactCard.css";

export const ContactCard = ({ contact }) => {
  const { id, fullName, email, phone, avatar } = contact;
  const navigate = useNavigate();

  const initials = fullName
    .split(" ")
    .map(n => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleClick = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div
      className="card contact-card d-flex align-items-center p-3 mb-3"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      role="button"
      tabIndex={0}
      onKeyPress={e => { if (e.key === 'Enter') handleClick(); }}
    >
      <div className="avatar-container me-4">
        {avatar ? (
          <img src={avatar} alt="Avatar" className="avatar-img" />
        ) : (
          <div className="avatar-placeholder">{initials}</div>
        )}
      </div>

      <div className="flex-grow-1 d-flex flex-column justify-content-center text-center">
        <h5 className="card-title mb-3">{fullName}</h5>
        <div className="contact-info-row d-flex justify-content-center gap-5">
          <div className="contact-info-item">
            <div className="contact-value">
              <span className="icon">📧</span> {email}
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-value">
              <span className="icon">📞</span> {phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

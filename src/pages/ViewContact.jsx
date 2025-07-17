
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ViewContact = () => {
  const { id } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  // Find the contact by id
  const contact = store.contacts.find(c => c.id === id);

  if (!contact) {
    return (
      <div className="container mt-4">
        <h2>Contact not found</h2>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const { fullName, email, phone, address, company, avatar } = contact;

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${fullName}"?`)) {
      dispatch({ type: "delete_contact", payload: { id } });
      navigate("/");
    }
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back to Contacts
      </button>

      <div className="card p-4">
        <div className="d-flex align-items-center mb-4">
          {avatar ? (
            <img
              src={avatar}
              alt={`${fullName} avatar`}
              className="rounded-circle"
              style={{ width: 80, height: 80, objectFit: "cover" }}
            />
          ) : (
            <div
              className="rounded-circle d-flex justify-content-center align-items-center bg-primary text-white"
              style={{ width: 80, height: 80, fontSize: "2rem", fontWeight: "bold" }}
            >
              {fullName
                .split(" ")
                .map(n => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>
          )}
          <h2 className="ms-3">{fullName}</h2>
        </div>

        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        {address && <p><strong>Address:</strong> {address}</p>}
        {company && <p><strong>Company:</strong> {company}</p>}

        <div className="d-flex gap-2 mt-4">
          <button className="btn btn-danger" onClick={handleDelete}>Delete Contact</button>
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
};

import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleDelete = id => {
    dispatch({ type: "delete_contact", payload: { id } });
    toast.error("Contact deleted.");
  };

  return (
    <section className="home-section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="page-title">Your Contacts</h2>
          <Link to="/add" className="btn btn-success">+ Add Contact</Link>
        </div>

        {store.contacts.length === 0 ? (
          <div className="text-muted">No contacts yet. Start by adding one!</div>
        ) : (
          <div className="contact-list">
            {store.contacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

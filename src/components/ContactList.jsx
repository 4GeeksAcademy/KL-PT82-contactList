import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleDelete = (id) => {
    dispatch({ type: "delete_contact", payload: { id } });
  };

  return (
    <div className="container mt-4">
      <h2>Contact List</h2>
      {store.contacts?.length === 0 ? (
        <p>No contacts available. Start by adding one!</p>
      ) : (
        store.contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

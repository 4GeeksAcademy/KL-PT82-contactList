// 🧠 Initial Global Store
export const initialStore = () => {
  return {
    message: null,

    todos: [
      {
        id: 1,
        title: " ",
        background: null,
      },
      {
        id: 2,
        title: " ",
        background: null,
      }
    ],

    contacts: [
      {
        id: 1,
        fullName: " ",
        email: " ",
        phone: " ",
        avatar: null
      },
      {
        id: 2,
        fullName: " ",
        email: " ",
        phone: " ",
        avatar: null
      }
    ]
  };
};

// 🔄 Global Reducer
export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'add_task': {
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };
    }

    case 'add_contact': {
      const newContact = action.payload;
      return {
        ...store,
        contacts: [...store.contacts, newContact]
      };
    }

    case 'update_contact': {
      const updatedContact = action.payload;
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      };
    }

    case 'delete_contact': {
      const { id } = action.payload;
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== id)
      };
    }

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

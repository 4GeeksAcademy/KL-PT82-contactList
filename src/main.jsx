import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global styles for your application
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { StoreProvider } from './hooks/useGlobalReducer';
import './components/ContactCard.css';


const Main = () => {
  return (
    <React.StrictMode>
      <StoreProvider>
        <RouterProvider router={router} />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </StoreProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

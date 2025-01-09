// src/User/Context/ToastContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const ToastContext = createContext();

// Context provider component
export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000); // Toast disappears after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// Custom hook to use toast context
export const useToast = () => {
  return useContext(ToastContext);
};

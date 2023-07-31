import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]) ;

  const addToast = (toast) => setToasts([...toasts, toast]);
  const removeToast = (toastId) => setToasts(
    toasts.filter(({ id }) => id !== toastId)
  )

  return (
    <ToastContext.Provider value={{
      toasts,
      addToast,
      removeToast,
    }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;

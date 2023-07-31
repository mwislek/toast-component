import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]) ;

  const addToast = (toast) => setToasts([...toasts, toast]);
  const removeToast = (toastId) => setToasts(
    toasts.filter(({ id }) => id !== toastId)
  )
  const removeAllToasts = () => setToasts([]);

  React.useEffect(() => {
    function handleEscapeKey(e) {
      if (e?.code === "Escape") {
        removeAllToasts();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, []);


  return (
    <ToastContext.Provider value={{
      toasts,
      addToast,
      removeAllToasts,
      removeToast,
    }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;

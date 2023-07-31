import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ handleRemoveToast, toasts = [] }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => (
        <Toast
          key={id}
          id={id}
          dismissToast={handleRemoveToast}
          variant={variant}
        >
          {message}
        </Toast>
      ))}
    </ol>
  );
}

export default ToastShelf;

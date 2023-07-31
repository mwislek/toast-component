import React from "react";

import Button from "../Button";
import ToastShelf from '../ToastShelf';

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const INITIAL_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(INITIAL_VARIANT);
  const [toasts, setToasts] = React.useState([]) ;

  const addToast = (toast) => setToasts([...toasts, toast]);
  const removeToast = (toastId) => setToasts(
    toasts.filter(({ id }) => id !== toastId)
  )
  const handleSubmit = (e) => {
    e.preventDefault()

    addToast({
      id: crypto.randomUUID(),
      message,
      variant,
    })

    setMessage('');
    setVariant(INITIAL_VARIANT)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleRemoveToast={removeToast} />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
            <label key={option}>
              <input
                type="radio"
                checked={variant === option}
                name="variant"
                onChange={() => setVariant(option)}
                value={option}
              />
              {option}
            </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handleSubmit} >Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

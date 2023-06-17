import React, { useState } from "react";
import styles from "../styles/LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(validateEmail(enteredEmail));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // for login logic
  };

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  const showInvalidEmailNotification = () => {
    setShowNotification(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={`${styles.input} ${!isValidEmail ? styles.invalid : ""}`}
            onFocus={handleNotificationClose}
            onBlur={showInvalidEmailNotification}
          />
          {!isValidEmail && showNotification && (
            <p className={styles.errorMessage}>Invalid email address</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

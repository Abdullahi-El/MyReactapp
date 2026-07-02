import { useState } from 'react';
import "./App.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Welcome, ${username}`);
  }

  return (
    <div className="page">
      <nav className="navbar">
        <h2>CityCare Hospital</h2>
        <div>
          <a href="#login">Login</a>
          <a href="#contact">Contact</a>
          <a href="#hours">Opening Hours</a>
        </div>
      </nav>

      <main className="content">
        <section className="login-card" id="login">
          <h1>Patient Login</h1>
          <p>Access your hospital portal securely.</p>

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />

            <button type="submit">Login</button>
          </form>
        </section>

        <section className="info-card" id="contact">
          <h2>Contact</h2>
          <p>📞 Phone: 08-123 456 78</p>
          <p>📧 Email: info@citycare.se</p>
          <p>📍 Address: Hospital Street 10, Stockholm</p>
        </section>

        <section className="info-card" id="hours">
          <h2>Opening Hours</h2>
          <p>Monday - Friday: 08:00 - 18:00</p>
          <p>Saturday: 10:00 - 15:00</p>
          <p>Sunday: Emergency only</p>
        </section>
      </main>
    </div>
  );
}

export default Login;
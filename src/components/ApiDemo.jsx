import { useState, useEffect } from "react";

function ApiDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="api-demo" className="section">
      <div className="container">
        <h2 className="section-title">Live API <span className="gradient-text">Integration</span></h2>
        <p className="muted">Fetching real-time users from JSONPlaceholder API.</p>

        {loading && <p className="muted">Loading users...</p>}
        {error && <p className="error">Failed to load API users ({error}).</p>}

        <div className="user-grid">
          {users.slice(0, 6).map((user) => (
            <div key={user.id} className="card">
              <h3>{user.name}</h3>
              <p className="muted">{user.email}</p>
              <p className="user-city">{user.address?.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApiDemo;

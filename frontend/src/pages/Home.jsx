import '../App.css'

function Home() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-mark">S</div>

          <div>
            <h1>Secure Student Portal</h1>
            <span>Student Management System</span>
          </div>
        </div>

        <button className="nav-button">Sign In</button>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">SECURE • SIMPLE • ORGANIZED</p>

            <h2>
              Manage student information
              <span> with confidence.</span>
            </h2>

            <p className="hero-description">
              A secure platform for managing student records, user access,
              and academic information in one place.
            </p>

            <div className="hero-actions">
              <button className="primary-button">Sign In</button>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <div>
                <span className="card-label">PORTAL STATUS</span>
                <h3>System Overview</h3>
              </div>

              <span className="status-dot">● Online</span>
            </div>

            <div className="stats-grid">
              <div className="stat">
                <span>Access</span>
                <strong>Protected</strong>
              </div>

              <div className="stat">
                <span>Users</span>
                <strong>Role-based</strong>
              </div>

              <div className="stat">
                <span>Data</span>
                <strong>Managed</strong>
              </div>

              <div className="stat">
                <span>Security</span>
                <strong>Enabled</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="security-section">
          <div>
            <p className="eyebrow">BUILT WITH SECURITY IN MIND</p>

            <h3>
              Designed around secure access and responsible data handling.
            </h3>
          </div>

          <div className="security-points">
            <div>
              <strong>Authentication</strong>
              <p>
                Users must verify their identity before accessing the portal.
              </p>
            </div>

            <div>
              <strong>Access Control</strong>
              <p>
                Different users receive access based on their assigned role.
              </p>
            </div>

            <div>
              <strong>Security Logging</strong>
              <p>
                Important security-related activity can be recorded and
                reviewed.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Secure Student Management Portal</p>
      </footer>
    </div>
  )
}

export default Home
import { useState } from 'react'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <div className="brand-mark">S</div>

          <h1>Create your account</h1>

          <p>Register for your Secure Student Portal account.</p>
        </div>

        <form className="register-form">
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>

            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="registerEmail">Email address</label>

            <input
              id="registerEmail"
              type="email"
              autoComplete="email"
              placeholder="student@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="registerPassword">Password</label>

            <div className="password-field">
              <input
                id="registerPassword"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="Create a password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                }
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>

            <div className="password-field">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                autoComplete="new-password"
                placeholder="Confirm your password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword
                    ? 'Hide confirmation password'
                    : 'Show confirmation password'
                }
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">
            Register
          </button>
        </form>

        <p className="register-text">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  )
}

export default Register
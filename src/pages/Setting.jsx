import { useState } from 'react'

export default function Setting() {
  const [admin, setAdmin] = useState({
    name: 'Mr. Bigyan',
    email: 'admin@hospital.com',
    phone: '+977-9800000000',
  })

  const [password, setPassword] = useState({
    current: '',
    newPass: '',
    confirm: '',
  })

  const [preferences, setPreferences] = useState({
    theme: 'light',
    notifications: true,
  })

  const handleAdminChange = e => {
    setAdmin({ ...admin, [e.target.name]: e.target.value })
  }

  const handlePasswordChange = e => {
    setPassword({ ...password, [e.target.name]: e.target.value })
  }

  const handlePrefChange = e => {
    const { name, type, checked, value } = e.target
    setPreferences({ ...preferences, [name]: type === 'checkbox' ? checked : value })
  }

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2 style={{ color: '#0b3b72', fontSize: 26, marginBottom: 16 }}>Settings</h2>

      {/* Profile Settings */}
      <div className="card" style={{ marginBottom: 22 }}>
        <h3 style={{ color: '#244b73', marginBottom: 14 }}>Profile Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
          <label>
            <div className="small-label">Full Name</div>
            <input
              name="name"
              value={admin.name}
              onChange={handleAdminChange}
              className="input"
              placeholder="Enter full name"
            />
          </label>

          <label>
            <div className="small-label">Email Address</div>
            <input
              name="email"
              type="email"
              value={admin.email}
              onChange={handleAdminChange}
              className="input"
              placeholder="Enter email"
            />
          </label>

          <label>
            <div className="small-label">Phone</div>
            <input
              name="phone"
              value={admin.phone}
              onChange={handleAdminChange}
              className="input"
              placeholder="Enter phone"
            />
          </label>
        </div>
      </div>

      {/* Password Update */}
      <div className="card" style={{ marginBottom: 22 }}>
        <h3 style={{ color: '#244b73', marginBottom: 14 }}>Change Password</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
          <label>
            <div className="small-label">Current Password</div>
            <input
              name="current"
              type="password"
              value={password.current}
              onChange={handlePasswordChange}
              className="input"
              placeholder="Enter current password"
            />
          </label>

          <label>
            <div className="small-label">New Password</div>
            <input
              name="newPass"
              type="password"
              value={password.newPass}
              onChange={handlePasswordChange}
              className="input"
              placeholder="Enter new password"
            />
          </label>

          <label>
            <div className="small-label">Confirm New Password</div>
            <input
              name="confirm"
              type="password"
              value={password.confirm}
              onChange={handlePasswordChange}
              className="input"
              placeholder="Confirm password"
            />
          </label>
        </div>
      </div>

      {/* Preferences */}
      <div className="card" style={{ marginBottom: 22 }}>
        <h3 style={{ color: '#244b73', marginBottom: 14 }}>App Preferences</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <div className="small-label">Theme</div>
            <select
              name="theme"
              value={preferences.theme}
              onChange={handlePrefChange}
              className="input"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox"
              name="notifications"
              checked={preferences.notifications}
              onChange={handlePrefChange}
              style={{ transform: 'scale(1.2)' }}
            />
            Enable email notifications
          </label>
        </div>
      </div>

      <button className="btn" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  )
}

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { useState } from 'react';
import Setting from './pages/Setting';
import Appointment from './pages/Appointment';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Payments from './pages/Payments';

function App() {
  const [page, setPage] = useState('Dashboard')

  return (
    <div className="app-shell" role="application">
      <Sidebar active={page} onChange={setPage} />
      <div className="main">
        <Navbar />
        {page === 'Dashboard' && <Dashboard />}
        {page === 'Appointments' && <Appointment />}
        {page === 'Settings' && <Setting />}
        {page === 'Doctors' && <Doctors />}
        {page === 'Patients' && <Patients />}
        {page === 'Payments' && <Payments />}
      </div>
    </div>
  )
}

export default App;
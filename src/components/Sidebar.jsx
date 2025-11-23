import DashboardIcon from '@mui/icons-material/Dashboard'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import PeopleIcon from '@mui/icons-material/People'
import EventIcon from '@mui/icons-material/Event'
import PaymentIcon from '@mui/icons-material/Payment'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

const items = [
  { key:'Dashboard', label:'Dashboard', icon:<DashboardIcon /> },
  { key:'Doctors', label:'Doctors', icon:<LocalHospitalIcon /> },
  { key:'Patients', label:'Patients', icon:<PeopleIcon /> },
  { key:'Appointments', label:'Appointments', icon:<EventIcon /> },
  { key:'Payments', label:'Payments', icon:<PaymentIcon /> },
  { key:'Settings', label:'Settings', icon:<SettingsIcon /> },
]

function Sidebar({ active, onChange }){
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="brand" role="banner">
        <div className="logo">DA</div>
        <div>
          {/* <div style={{fontSize:12,color:'rgba(255,255,255,0.85)'}}>Hospital Suite</div> */}
          <div style={{fontWeight:700}}>Doctor Appointment</div>
        </div>
      </div>

      <nav className="menu" role="navigation">
        {items.map(it => (
          <div
            key={it.key}
            className={`menu-item ${active === it.key ? 'active' : ''}`}
            onClick={() => onChange(it.key)}
            role="button"
            aria-pressed={active===it.key}
            tabIndex={0}
          >
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:36,height:36,borderRadius:8,background:'rgba(255,255,255,0.03)'}}>{it.icon}</div>
            <div style={{fontSize:16,fontWeight:600}}>{it.label}</div>
          </div>
        ))}
      </nav>

      <div style={{marginTop:'auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:44,height:44,borderRadius:8,background:'rgba(255,255,255,0.06)',display:'flex',alignItems:'center',justifyContent:'center'}}>⎋</div>
          <div style={{fontSize:14}}>Logout</div>
        </div>
      </div>
    </aside>
  )
}


export default Sidebar;
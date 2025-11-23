function Navbar(){
  return (
    <div className="topbar" role="banner">
      <div>
        <div className="header-title">Admin Dashboard</div>
        <div style={{color:'#4c6b8f',marginTop:4}}>Welcome back — overview of appointments</div>
      </div>

      <div className="profile" aria-label="Admin profile">
        <div style={{textAlign:'right',marginRight:8}}>
          <div style={{fontWeight:700,color:'#0b3b72'}}>Mr. Bigyan</div>
          <div style={{fontSize:12,color:'#5b7aa0'}}>Administrator</div>
        </div>
        <div className="avatar">
          <img src="https://i.pravatar.cc/150?img=33" alt="admin" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
      </div>
    </div>
  )
}

export default Navbar ;
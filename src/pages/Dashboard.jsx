import StatsCard from '../components/StatsCard'
import AreaMiniChart from '../components/AreaMiniChart'
import DataTable from '../components/DataTable'

function Dashboard(){
  return (
    <main aria-live="polite">
      <div className="stats-row" role="region" aria-label="dashboard stats">
        <StatsCard title="Total Doctors" value="30" small="Verified 22" />
        <StatsCard title="Total Patients" value="120" small="New this month: 12" />
        <StatsCard title="Appointments Today" value="25" small="Pending: 5" />
      </div>

      <section className="card" aria-label="appointments and chart">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
          <h3 style={{margin:0,color:'#254a73'}}>Appointments</h3>
          <div style={{display:'flex',gap:10,alignItems:'center'}}>
            <div style={{textAlign:'right',marginRight:12}}>
              <div className="small-label">Total Appointments</div>
              <div style={{fontWeight:700,color:'#123e6a',fontSize:20}}>1,248</div>
            </div>
            <button className="btn">Add Doctor</button>
          </div>
        </div>

        <div className="row">
          <div className="left">
            <DataTable />
          </div>

          <div className="right card" style={{minWidth:260,maxWidth:320,alignSelf:'flex-start'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
              <div style={{fontWeight:700,color:'#294b6d'}}>Appointments trend</div>
              <div className="small-label">Monthly</div>
            </div>
            <AreaMiniChart />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard;
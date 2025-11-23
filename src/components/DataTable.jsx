const rows = [
  { id:1, patient:'Sher Bahadur Deuba', doctor:'Dr. James Wilson', date:'2025-10-20', time:'09:00', status:'Completed' },
  { id:2, patient:'Arja Rana Deuba', doctor:'Dr. Emily Johnson', date:'2025-10-21', time:'09:00', status:'Pending' },
  { id:3, patient:'Ram Chandra Poudel', doctor:'Dr. Michael Lee', date:'2025-10-21', time:'10:30', status:'Confirmed' },
  { id:4, patient:'KP Sharma Oli', doctor:'Dr. Michael Lee', date:'2025-10-21', time:'11:00', status:'Cancelled' },
  { id:5, patient:'Puspa Kamal Dahal', doctor:'Dr. Emily Johnson', date:'2025-10-21', time:'11:30', status:'Completed' },
]

function DataTable(){
  return (
    <table className="table" role="table" aria-label="Appointments table">
      <thead>
        <tr>
          <th>Patient</th>
          <th>Doctor</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.id}>
            <td>{r.patient}</td>
            <td>{r.doctor}</td>
            <td>{r.date}</td>
            <td>{r.time}</td>
            <td style={{color: r.status==='Cancelled' ? '#c03535' : r.status==='Pending' ? '#b07a00' : '#1a7f3b', fontWeight:600}}>
              {r.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable;

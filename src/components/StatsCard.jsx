import React from 'react'

 function StatsCard({title, value, small}){
  return (
    <div className="stat-card" role="region" aria-label={title}>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      {small && <div style={{marginTop:8,color:'#6f92b6',fontSize:13}}>{small}</div>}
    </div>
  )
}

export default StatsCard;


import React from 'react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const data = [
  { name: 'Mar', v: 18 },
  { name: 'Apr', v: 33 },
  { name: 'May', v: 28 },
  { name: 'Jun', v: 30 },
  { name: 'Jul', v: 45 },
];

export default function AreaChartMini(){
  return (
    <div style={{width:'100%',height:220}}>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1976d2" stopOpacity={0.9}/>
              <stop offset="95%" stopColor="#1976d2" stopOpacity={0.06}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.06}/>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis hide />
          <Tooltip />
          <Area type="monotone" dataKey="v" stroke="#1976d2" fill="url(#colorV)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

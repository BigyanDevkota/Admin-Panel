import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', appointments: 12 },
  { name: 'Tue', appointments: 18 },
  { name: 'Wed', appointments: 25 },
  { name: 'Thu', appointments: 21 },
  { name: 'Fri', appointments: 14 },
  { name: 'Sat', appointments: 30 },
  { name: 'Sun', appointments: 9 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="appointments" stroke="#1976d2" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;

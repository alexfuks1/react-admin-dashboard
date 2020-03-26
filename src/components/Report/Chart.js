import React, { useState } from 'react';
import {
  ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,LineChart
} from 'recharts';

const data = [
  {
    name: 'Websites', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Logo', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: 'Social Media', uv: 1397, pv: 1098, amt: 989,
  },
  {
    name: 'Adwords', uv: 1480, pv: 1200, amt: 1228,
  },
  {
    name: 'E-commerce', uv: 1400, pv: 680, amt: 1700,
  },
];
const Chart=()=>{
  return (
    <div style={{ width: '100%', height:'190px',margin:'15px -15px'}}>
      <ResponsiveContainer>
      <LineChart
          data={data}
          syncId="anyId"
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;
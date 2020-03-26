import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0531C5', '#0C59F2', '#0F57CF', '#1B5BB2'];
const PieChar=()=>{
    return (
        <PieChart width={320} height={180}>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      );
}
export default PieChar;

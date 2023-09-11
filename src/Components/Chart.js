import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.css'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CallIcon from '@mui/icons-material/Call';



const data = [
  {name: 'January', total: 500},
  {name: 'February', total: 1000},
  {name: 'March', total: 100},
  {name: 'April', total: 600},
  {name: 'June', total: 400},
  {name: 'July', total: 1200},
];


const Chart = () => {
  return (
    <div className=' Chart'>
      <div className="title">Business Trend</div>
      <ResponsiveContainer   aspect={2/1}>
        <AreaChart width={730} height={50} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
           
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
           
        </AreaChart>
      </ResponsiveContainer>
    </div>


  )
}

export default Chart
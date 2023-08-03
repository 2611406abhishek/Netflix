import React from 'react'
import '../style/Chart.css';
import { LineChart, Line, XAxis,CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {

  return (
    <div className='chart'>
        <h3 className='chartTitle'>{props.title}</h3>
       <ResponsiveContainer width="100%" aspect={4/1} >
         <LineChart data={props.data}> 
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey={props.datakey} stroke="#5550bd"/>
          <Tooltip/>
          {props.grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          <Legend/>
         </LineChart>
       </ResponsiveContainer>

    </div>
  )
}

export default Chart;
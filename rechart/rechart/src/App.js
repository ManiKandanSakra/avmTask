
import './App.css';
import React, { useState, useEffect } from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {

  const redata = [
    {
      page: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      page: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      page: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      page: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      page: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      page: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      page: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [data, setValue] = useState(redata);

  useEffect(() => {

    fetch("http://localhost:3001/users")
    .then((res) =>  res.json())
    .then((json) => {
        let result = json.data;
        setValue(result)
    });

  },[])


  return (
    <div className="App">
      {/* <ResponsiveContainer> */}
        <LineChart
         width={500}
         height={300}
         data={data}
         margin={{
           top: 5,
           right: 30,
           left: 20,
           bottom: 5
         }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="page" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}

export default App;

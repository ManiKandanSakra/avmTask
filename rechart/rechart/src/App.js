
import './App.css';
import React, { useState, useEffect, useCallback } from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, /*ResponsiveContainer,*/ ReferenceLine, AreaChart, Area, Bar, BarChart, Brush, Cell } from 'recharts';

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

  const data1 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  const gradientOffset = (data) => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));
  
    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }
  
    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset(data1);

  const [data, setValue] = useState(false);

  useEffect(() => {

    fetch("http://localhost:3001/users")
    .then((res) =>  res.json())
    .then((json) => {
        let result = json.data;
        setValue(result)
        // const off = gradientOffset(result);
    });

  },[])

  const CustomizedDot = (props) => {
    const { cx, cy, value } = props;
  
    if (value > 2500) {
      return (
        <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
          <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
        </svg>
      );
    }
  
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  };

  const monthTickFormatter = (tick) => {
    const date = new Date(tick);
  
    return date.getMonth() + 1;
  };
  
  const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
  
    if (month % 3 === 1) {
      return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
    }
  
    const isLast = month === 11;
  
    if (month % 3 === 0 || isLast) {
      const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
  
      return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    }
    return null;
  };


  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = redata[activeIndex];

  const handleClick = useCallback(
    (entry, index) => {
      console.log('index -->',index)
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  
  return (
    <div className="App">
      {/* <ResponsiveContainer> */}

      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" onClick={handleClick}>
          {redata.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      <p className="content">{`Uv of "${activeItem.page}": ${activeItem.uv}`}</p>


        <LineChart
        // layout="vertical"
         width={500}
         height={300}
         data={redata}
         syncId="123"
         margin={{
           top: 5,
           right: 30,
           left: 20,
           bottom: 5
         }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="page" interval="preserveEnd"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Brush dataKey="page" height={30} stroke="#8884d8" />
          <ReferenceLine x="Page F" stroke="red" label="Max X Axis" />
          <ReferenceLine y={5800} label="Y Axis" stroke="red" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} dot={<CustomizedDot />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="red" />
        </LineChart>

        <AreaChart
        width={500}
        height={200}
        data={data}
        syncId="123"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval="preserveStart" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="amt" stroke="yellow" fill="yellow" />
      </AreaChart>

      <AreaChart
      width={500}
      height={400}
      data={data1}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="page" />
      <YAxis />
      <Tooltip />
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="green" stopOpacity={1} />
          <stop offset={off} stopColor="red" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#000"
        fill="url(#splitColor)"
      />
    </AreaChart>

    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/* <XAxis dataKey="page" tickFormatter={monthTickFormatter} /> */}
      <XAxis dataKey="page"  />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Brush dataKey="page" height={30} stroke="#8884d8" />
      <Bar dataKey="pv"  stackId="1" fill="#8884d8" background={{ fill: '#eee' }}  />
      <Bar dataKey="uv"  stackId="1" fill="#82ca9d" background={{ fill: '#eee' }} />
      <Bar dataKey="amt" fill="#ffc658" label={{ position: "top" }} background={{ fill: '#eee' }} />
    </BarChart>

   
        
      {/* </ResponsiveContainer> */}
    </div>
  );
}

export default App;

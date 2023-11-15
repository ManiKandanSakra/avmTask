import React, { useEffect, useState } from 'react';
import BarChart from './d3chart';

const datas = [

    [10, 30, 40, 20],

    [10, 40, 30, 20, 50, 10],

    [60, 30, 40, 20, 30, 20, 70, 60, 90]

]

var i = 0;

function Barcharts() {

    const [data, setData] = useState([]);
    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }
    
  return (
    <div> <BarChart width={600} height={400} data={data} /></div>
  )
}

export default Barcharts
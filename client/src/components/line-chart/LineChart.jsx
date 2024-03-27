import React, {useRef} from 'react'
import {Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";
import { Line, getElementsAtEvent} from "react-chartjs-2";
import { useSelector } from 'react-redux';
import Chart from '../chart/Chart';

 
ChartJs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const LineChart = (props) => {
  const chartRef = useRef();

  const ordColor = useSelector(state => state.funReducer.ordColor)

  console.log(props?.dataOne);


  const data={
    labels:props.dataThree,
    datasets:[{
      label:"Total Intensity",
      data:props?.dataOne,
      borderColor:ordColor,
      backgroundColor:ordColor,
      tension:0.4,
      link:["https://www.chartjs.org","https://www.chartjs3.com","https://www.google.com"]
    },
    {
      label:"Total Relevance",
      data:props?.dataTwo,
      borderColor:"#707070",
      backgroundColor:"#707070",
      tension:0.4,
      link:["https://www.chartjs.org","https://www.chartjs3.com","https://www.google.com"]
    }]
  }

  const options ={
  }


  const onClick = (e) =>{
    if (getElementsAtEvent(chartRef.current,e).length > 0 ) { 
      // console.log(getElementsAtEvent(chartRef.current,e))
      const clickDatasetIndex = getElementsAtEvent(chartRef.current,e)[0].datasetIndex;
      // console.log(clickDatasetIndex);
      const dataPoint = getElementsAtEvent(chartRef.current,e)[0].index;
      // console.log(dataPoint);

      // console.log(data.datasets[clickDatasetIndex].link);
      const link = data.datasets[clickDatasetIndex].link[dataPoint];
      // window.open("https://www.chartjs3.com","_blank");
    }

  }




 
  return (
    <Chart >
      
        <Line
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
        >

        </Line>
    </Chart>
  )
}

export default LineChart
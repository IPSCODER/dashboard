import React,{useRef} from 'react'
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"
import {Bar, getElementsAtEvent} from "react-chartjs-2";
import { useSelector } from 'react-redux';
import Chart from '../chart/Chart';




Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);



const BarChart = (props) => {


  const ordColor = useSelector(state => state.funReducer.ordColor)


  const chartRef = useRef();  

  const data = {
    labels:props?.data,
    datasets:[{ 
      label:"pestle Numbers",
      data:props?.allData,
      borderColor:"black",
      backgroundColor:[`#707070`,ordColor],
      borderWidth:1,
      link:["https://www.chartjs.org","https://www.chartjs3.com","https://www.google.com"]
    }]
  }


  const options ={

  }

  const onClick = (e) =>{
    if (getElementsAtEvent(chartRef.current,e).length > 0 ) { 
      console.log(getElementsAtEvent(chartRef.current,e))
      const clickDatasetIndex = getElementsAtEvent(chartRef.current,e)[0].datasetIndex;
      console.log(clickDatasetIndex);
      const dataPoint = getElementsAtEvent(chartRef.current,e)[0].index;
      console.log(dataPoint);

      const link = data.datasets[clickDatasetIndex].link[dataPoint];
    }

  }



  return (
    <Chart  >
      <Bar 
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
      >

      </Bar>
    </Chart>
  )
}

export default BarChart
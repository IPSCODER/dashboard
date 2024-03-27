import React, {useRef} from 'react'
import {Chart as ChartJs, ArcElement,Tooltip,Legend} from "chart.js";
import { Doughnut, getElementsAtEvent} from "react-chartjs-2";
import Chart from '../chart/Chart';
import { useSelector } from 'react-redux';

 
ChartJs.register(
  ArcElement,
  Tooltip,
  Legend,
);

const DoughnutChart = (props) => {
  
  const chartRef = useRef();
  const ordColor = useSelector(state => state.funReducer.ordColor)



  const data={
    labels:props?.data,
    datasets:[{
      label:"unknown",
      data:props?.allData,
      borderColor:"#707070",
      backgroundColor:["#707070","#fcfcfc",ordColor,'#2ecc71','#3498db','#9b59b6','#34495e'],
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


  const textCenter = {
    id:"textCenter",
    beforeDatasetsDraw(chart,args,pluginOptions){
        const {ctx,data,chartArea:{top,bottom,left,right,width,height}} = chart;

        const xCenter = chart.getDatasetMeta(0).data[0].x;

        const yCenter = chart.getDatasetMeta(0).data[0].y; 

        ctx.save();
        ctx.fillStyle = "gray";
        ctx.font = "bold 30px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseLine = "baseLine"
        // ctx.fillText(data.datasets[0].data[2],xCenter,yCenter - 10 )
        // ctx.fillText( "value = "+ data.datasets[0].data.length,xCenter,yCenter )
    }
  }

 
  return (
    <Chart >
        <Doughnut
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
        plugins={[textCenter]}
        >

        </Doughnut>
    </Chart>
  )
}

export default DoughnutChart
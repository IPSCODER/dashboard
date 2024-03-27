import React, { useEffect } from 'react'
import Chart from 'react-google-charts'
import { useSelector } from 'react-redux'


const GeoChart = ({contriData}) => {



  useEffect(() =>{

  },[])
    
    const ordColor = useSelector(state => state.funReducer.ordColor)
    // const index = contriData.indexOf('');
    // contriData.splice(index, 1);


    function mergeArrays(array1, array2) {
        let mergedArray = [];
    
        // Determine the maximum length of the two arrays
        let maxLength = Math.max(array1.length, array2.length);
    
        // Loop through both arrays simultaneously
        for (let i = 0; i < maxLength; i++) {
            if (i < array1.length) {
                mergedArray.push(array1[i]);
            }
            if (i < array2.length) {
                mergedArray.push(array2[i]);
            }
        }
    
        return mergedArray;
    }
    
    let originalArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57];
    let mergedArray = mergeArrays(contriData, originalArray);

    function groupPairs(array) {
        let groupedArray = [];
        for (let i = 0; i < array.length; i += 2) {
            if (array[i + 1] !== undefined) {
                groupedArray.push([array[i], array[i + 1]]);
            } else {
                groupedArray.push([array[i]]);
            }
        }
        return groupedArray;
    }
    
    // let originalArray = [1, 'a', 2, 'b', 3, 'c'];
    let groupedArray = groupPairs(mergedArray);
    groupedArray.unshift(['Country', 'Popularity'])

    
  return (
    <>
    {groupedArray && <Chart
          width={'100%'}
          height={'100%'}
          chartType="GeoChart"
          data={groupedArray}
          mapsApiKey="YOUR_MAP_API_KEY_GOES_HERE"
          rootProps={{ 'data-testid': '1' }}
          options={{
            chart: {
              title: 'Spend Uplift',
            },
            colors: [ordColor]
          }}
        />}
        <h2 style={{position:'absolute',zIndex:0,top:0,left:0,opacity:0.2}} >If Map Not Visible Refresh page</h2>
    </>
  )
}

export default GeoChart
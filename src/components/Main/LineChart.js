import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    return(
        <div>
<Line
 data = {{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
    
    datasets: [
        {
            
        data: [206, 150,200,260,280, 230,190,160,150,160,200,300],
        backgroundColor: [
            "#FF7258"
  
        ],
        lineTension: 0.7,
        fill: false,
        pointBorderColor: "#FF7258",
        pointBackgroundColor: "#FF7258",
        hitRadius: 10,
        borderWidth: 3,
        pointRadius: 0.4,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 3,
        pointBackgroundColor: "rgba(255, 255, 255, 0)",
        pointHoverBackgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
        borderColor: "#FF7258",
    }]
  }}
  options = {{
    
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        }
    
    
       }}
  
  

/>
</div>
)
}

export default LineChart
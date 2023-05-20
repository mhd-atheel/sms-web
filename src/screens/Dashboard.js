import React from 'react'
import BoxContainer from '../components/BoxContainer'
import { Bar } from 'react-chartjs-2';
import { CategoryScale, Chart } from "chart.js";

const Dashboard = () => {
  Chart.register(CategoryScale);
  const data = {
    labels: ["first", "second", "third", "4th", "5th"],
    datasets: [
      {
        label: "First set",
        data: [1, 2, 4, 8, 20],
        backgroundColor: "blue"
      }
    ]
  };

  const options = {
    responsive: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: false,
            borderDash: [3, 3],
            zeroLineColor: "blue"
          },
          categoryPercentage: 0.7,
          barPercentage: 0.9,
          ticks: {
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            zeroLineColor: "transparent"
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };


  const style = {
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
  }

  return (
    <div>
      <div  className='row' style={style}>
      <BoxContainer name="Students" count={1569} color="#13AE4B"/>
      <BoxContainer name="Teacher" count={52} color="#5B8CEB"/>
      <BoxContainer name="Leaves" count={10} color="#B51D46"/>
      </div>
      <div  className='row' style={style}>
      <BoxContainer name="Staffs" count={22} color="#F74A8A"/>
      <BoxContainer name="Donations" count={256984} color="#FFC16E"/>
      <BoxContainer name="Subjects" count={13} color="#FD9041"/>
      </div>
      {/* <Bar width="200" height="200" data={data} options={options} /> */}
    </div>
  )
}

export default Dashboard
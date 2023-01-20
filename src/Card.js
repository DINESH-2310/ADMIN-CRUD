import React from 'react'
import Price from './Pricecart'
import { Doughnut, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS, ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
ChartJS.register( ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,);



function Card() {
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
      </div>
      <div class="row">
        <Price title="EARNINGS (MONTHLY)" price="$40000" plan="primary" />
        <Price title="EARNINGS (ANNUAL)" price="$215000" plan="success" />
        <Price title="TASKS" price="50%" add="progress progress-sm mr-2" info="border-progress-bar bg-info"
          plan="info" />
        <Price title="PENDING REQUESTS" price="18" plan="warning" />
      </div>
      <div class="row">
        <div class="col-lg-4">
          <Doughnut data={{
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 0,
            }]
          }} />


        </div>
        <div class="col-lg-8">
          <Line options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Line Chart',
              },
            },
          }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First Dataset',
                  data: [6, 59, 80, 81, 56, 55,40],
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }]
            }} />
        </div>

      </div>
    </div>



  )
}

export default Card
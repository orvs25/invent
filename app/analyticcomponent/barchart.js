"use client"

import { useState, useEffect } from "react"
import styles from './Barchart.module.css'

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {

    const [chartData, setChartData] = useState({
        labels: ['Asset', 'Licenses', 'Accessories', 'Consumables', 'Component', 'Furniture', 'Vehicle', 'Appliance' ],
        datasets:[
            {
                label: 'Asset as Status',
                data: [12, 34, 56, 78, 90, 12, 34, 56],
                borderColor: 'rgb(253, 224, 71)',
                backgroundColor: 'rgb(255, 223, 0)'
            }
        ]
    });

    const [chartOptions, setChartOptions] = useState({
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            display: true,
            position: 'top', // You can adjust the position as per your requirement
        },
    });

    return (
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
}
import { Chart } from 'primereact/chart';
import React from 'react';

const RevenueChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Revenue',
                data: [15000, 20000, 5000, 18000, 25000, 40000, 35000],
                backgroundColor: '#42A5F5',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div style={{height:'305px'}}>
            <h3>Revenue Chart</h3>
            <Chart type="line" data={data} options={options} />
        </div>
    );
};

export default RevenueChart;

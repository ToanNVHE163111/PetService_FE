import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Container } from "react-bootstrap";
import axios from "axios";

const TotalBreed = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9999/booking/pet-breeds')
        // if (!response.ok) {
        //   alert("Failed to fetch breed");
        // }
        const {maleCount, femaleCount} = response.data
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
          labels: ["Đực", "Cái"],
          datasets: [
            {
              data: [maleCount, femaleCount],
              backgroundColor: [
                documentStyle.getPropertyValue("--blue-500"),
                documentStyle.getPropertyValue("--yellow-500"),
              ],
              hoverBackgroundColor: [
                documentStyle.getPropertyValue("--blue-400"),
                documentStyle.getPropertyValue("--yellow-400"),
              ],
            },
          ],
        };
       

        setChartData(data);
      } catch (error) {
        console.error("Error fetching breed data", error);
      }
    };
    fetchData();
  }, []);
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
    <Container fluid>
      <div
        className="carda"
        style={{
          marginLeft: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h5
          className="card-header"
          style={{
            width: "100%",
            background: "#f2f2f2",
            marginBottom: "10px",
          }}
        >
          Thống kê theo giống
        </h5>
        <div className="card-body">
          <Chart
            type="doughnut"
            // type="bar"
            data={chartData}
            options={options}
            className="w-full md:w-30rem"
            height={300}
          />
        </div>
      </div>
    </Container>
  );
};
export default TotalBreed;

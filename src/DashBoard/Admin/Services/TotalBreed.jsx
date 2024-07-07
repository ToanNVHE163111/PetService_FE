import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Container } from "react-bootstrap";

const TotalBreed = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Male", "Female"],
      datasets: [
        {
          data: [ 50, 100],
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
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

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
            data={chartData}
            options={chartOptions}
            className="w-full md:w-30rem"
            height={300}

          />
        </div>
      </div>
    </Container>
  );
};
export default TotalBreed;

import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import "../style/totalsv.css";
import Chart from 'chart.js/auto'; // Ensure Chart.js is imported

const TotalService = () => {
    const ageGroups = [
        { ageRange: '15 - 20', width: '45%' },
        { ageRange: '20 - 25', width: '55%' },
        { ageRange: '25 - 30', width: '65%' },
        { ageRange: '30 - 35', width: '35%' },
        { ageRange: '35 - 40', width: '21%' },
        { ageRange: '45 - 50', width: '85%' },
        { ageRange: '50 - 55', width: '25%' },
    ];

    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = document.getElementById('chartjs_bar_horizontal').getContext('2d');

        // Destroy previous chart instance if it exists
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create new chart instance and save to ref
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'],
                datasets: [{
                    label: 'Top Followers by Location',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Cleanup on unmount
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className='all'>
            <div className="row rowa">
                {/* Total Views Card */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="carda">
                        <div className="card-body">
                            <div className="d-inline-block">
                                <h5 className="text-muted">Total Views</h5>
                                <h2 className="mb-0"> 10,28,056</h2>
                            </div>
                            <div className="float-right icon-circle-medium icon-box-lg bg-info-light mt-1">
                                <i className="fa fa-eye fa-fw fa-sm text-info"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Followers Card */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="carda">
                        <div className="card-body">
                            <div className="d-inline-block">
                                <h5 className="text-muted">Total Followers</h5>
                                <h2 className="mb-0"> 24,763</h2>
                            </div>
                            <div className="float-right icon-circle-medium icon-box-lg bg-primary-light mt-1">
                                <i className="fa fa-user fa-fw fa-sm text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partnerships Card */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="carda">
                        <div className="card-body">
                            <div className="d-inline-block">
                                <h5 className="text-muted">Partnerships</h5>
                                <h2 className="mb-0">14</h2>
                            </div>
                            <div className="float-right icon-circle-medium icon-box-lg bg-secondary-light mt-1">
                                <i className="fa fa-handshake fa-fw fa-sm text-secondary"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Earned Card */}
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="carda">
                        <div className="card-body">
                            <div className="d-inline-block">
                                <h5 className="text-muted">Total Earned</h5>
                                <h2 className="mb-0"> $149.00</h2>
                            </div>
                            <div className="float-right icon-circle-medium icon-box-lg bg-brand-light mt-1">
                                <i className="fa fa-money-bill-alt fa-fw fa-sm text-brand"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row w-100">
                    {/* Followers by Gender Card */}
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="carda" style={{ marginLeft: "30px" }}>
                            <h5 className="card-header">Followers by Gender</h5>
                            <div className="card-body">
                                <div id="gender_donut" style={{ height: "230px" }}>
                                    <svg height="230" version="1.1" width="236" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ overflow: "hidden", position: "relative", top: "-0.600037px" }}>
                                        <desc style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}>Created with Raphaël 2.2.0</desc>
                                        <defs style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}></defs>
                                        <path fill="none" stroke="#5969ff" d="M118.15,185A70,70,0,1,0,77.82900535738119,57.77922238356153" strokeWidth="2" opacity="1" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", opacity: 1 }}></path>
                                        <path fill="#5969ff" stroke="#ffffff" d="M118.15,188A73,73,0,1,0,76.10096272984039,55.32690334285702L57.66850803607179,29.16883357534229A105,105,0,1,1,118.15,220Z" strokeWidth="2" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}></path>
                                        <path fill="none" stroke="#ff407b" d="M77.82900535738119,57.77922238356153A70,70,0,0,0,118.12800885178663,184.9999965456385" strokeWidth="2" opacity="0" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", opacity: 0 }}></path>
                                        <path fill="#ff407b" stroke="#ffffff" d="M76.10096272984039,55.32690334285702A73,73,0,0,0,118.12706637400605,187.99999639759443L118.1185840739809,214.99999506519785A100,100,0,0,1,60.54857908197314,33.25603197651647Z" strokeWidth="2" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}></path>
                                        <text x="118.15" y="105" textAnchor="middle" fontFamily="Arial" fontSize="15px" stroke="none" fill="#5969ff" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", textAnchor: "middle", fontFamily: "Arial", fontSize: "15px", fontWeight: 800 }} fontWeight="800" transform="matrix(1.6204,0,0,1.6204,-73.416,-71.8389)" strokeWidth="0.6171428680419921">
                                            <tspan style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} dy="5.25">60%</tspan>
                                        </text>
                                        <text x="118.15" y="135" textAnchor="middle" fontFamily="Arial" fontSize="14px" stroke="none" fill="#5969ff" style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", textAnchor: "middle", fontFamily: "Arial", fontSize: "14px" }} transform="matrix(1.4583,0,0,1.4583,-54.2317,-53.625)" strokeWidth="0.6857142857142857">
                                            <tspan style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }} dy="4.799995422363281">60%</tspan>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div className="card-footer p-0 bg-white d-flex" style={{ marginLeft: "50px" }}>
                                <div className="card-footer-item card-footer-item-bordered w-50">
                                    <h2 className="mb-0"> 60% </h2>
                                    <p>Female </p>
                                </div>
                                <div className="card-footer-item card-footer-item-bordered">
                                    <h2 className="mb-0">40% </h2>
                                    <p>Male </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Followers by Age Card */}
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 followers-by-age">
                        <div className="carda">
                            <h5 className="card-header">Followers by Age</h5>
                            <div className="card-body">
                                {ageGroups.map(({ ageRange, width }, index) => (
                                    <div className="mb-3" key={index}>
                                        <div className="d-inline-block">
                                            <h4 className="mb-0">{ageRange}</h4>
                                        </div>
                                        <div className="progress mt-2 float-right progress-md">
                                            <div className="progress-bar bg-secondary" role="progressbar" style={{ width }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Top Followers by Locations Card */}
                    <div className="col-xl-5 col-lg-12 col-md-6 col-sm-12 col-12 ml-auto">
                        <div className="carda">
                            <h5 className="card-header">Top Followers by Locations</h5>
                            <div className="card-body">
                                <canvas id="chartjs_bar_horizontal" style={{ display: "block", height: "168px", width: "336px" }} width="420" height="210" className="chartjs-render-monitor"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalService;

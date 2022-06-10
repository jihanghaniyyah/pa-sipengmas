import React from 'react';
import ReactApexChart from 'react-apexcharts';

class StatisticBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: 'Teknik Informatika',
					data: [44],
				},
				{
					name: 'Teknik Komputer',
					data: [55],
				},
				{
					name: 'Teknik Elektronika',
					data: [0, 60],
				},
				{
					name: 'Teknik Elektro Industri',
					data: [0, 89],
				},
				{
					name: 'Teknik Telekomunikasi',
					data: [0, 35],
				},
				{
					name: 'Teknik Mekatronika',
					data: [0, 0, 76],
				},
				{
					name: 'Sistem Pembangkit Energi',
					data: [0, 0, 20],
				},
				{
					name: 'Multimedia Broadcasting',
					data: [0, 0, 0, 15],
				},
				{
					name: 'Teknik Game',
					data: [0, 0, 0, 90],
				},
			],
			options: {
				chart: {
					type: 'bar',
					height: 350,
					stacked: true,
					toolbar: {
						show: true,
					},
					zoom: {
						enabled: true,
					},
				},
				responsive: [
					{
						breakpoint: 480,
						options: {
							legend: {
								position: 'bottom',
								offsetX: -10,
								offsetY: 0,
							},
						},
					},
				],
				plotOptions: {
					bar: {
						horizontal: false,
						borderRadius: 10,
					},
				},
				xaxis: {
					type: 'department',
					categories: ['DTIK', 'DTE', 'DTME', 'DTMK'],
				},
				legend: {
					position: 'right',
					offsetY: 40,
				},
				fill: {
					opacity: 1,
				},
			},
		};
	}

	render() {
		return (
			<div id='chart'>
				<ReactApexChart
					options={this.state.options}
					series={this.state.series}
					type='bar'
					height={350}
				/>
			</div>
		);
	}
}

export default StatisticBar;

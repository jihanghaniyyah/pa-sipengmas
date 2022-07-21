import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

export default function StatisticLine() {
	const [showData2018, setShowData2018] = useState([]);
	const [showData2019, setShowData2019] = useState([]);
	const [showData2020, setShowData2020] = useState([]);
	const [showData2021, setShowData2021] = useState([]);
	const [showData2022, setShowData2022] = useState([]);

	const getData2018 = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikline.php?function=showData2018'
		).then((result) => {
			setShowData2018(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};

	const getData2019 = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikline.php?function=showData2019'
		).then((result) => {
			setShowData2019(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};

	const getData2020 = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikline.php?function=showData2020'
		).then((result) => {
			setShowData2020(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};

	const getData2021 = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikline.php?function=showData2021'
		).then((result) => {
			setShowData2021(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};
	const getData2022 = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikline.php?function=showData2022'
		).then((result) => {
			setShowData2022(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};

	useEffect(() => {
		getData2018();
		getData2019();
		getData2020();
		getData2021();
		getData2022();
	});

	const series = [
		{
			name: 'Data',
			data: [showData2018, showData2019, showData2020, showData2021, showData2022],
		},
	];

	const options = {
		chart: {
			height: 350,
			type: 'line',
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'straight',
		},
		title: {
			text: 'Data Pengmas Tahunan',
			align: 'left',
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5,
			},
		},
		xaxis: {
			categories: ['2018', '2019', '2020', '2021', '2022'],
		},
	};

	return (
		<div id='chart'>
			<ReactApexChart options={options} series={series} type='line' height={350} />
		</div>
	);
}

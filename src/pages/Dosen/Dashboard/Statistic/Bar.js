import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

export default function StatisticBar() {
	const [showJumlahDatabyProdi, setShowJumlahDatabyProdi] = useState([]);
	const [showJumlahDatabyResearchCenter, setShowJumlahDatabyResearchCenter] = useState([]);
	const [showJumlahDatabyResearchGroup, setShowJumlahDatabyResearchGroup] = useState([]);
	const [showJumlahDatabyMandiri, setShowJumlahDatabyMandiri] = useState([]);
	const [loading, setLoading] = useState(true);

	const getJumlahDatabyProdi = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahProdi'
		).then((result) => {
			setShowJumlahDatabyProdi(result.data[0].JUMLAH);
		});
	};

	const getJumlahDatabyResearchCenter = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahResearchCenter'
		).then((result) => {
			setShowJumlahDatabyResearchCenter(result.data[0].JUMLAH);
			// setLoading(false);
		});
	};

	const getJumlahDatabyResearchGroup = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahResearchGroup'
		).then((result) => {
			setShowJumlahDatabyResearchGroup(result.data[0].JUMLAH);
			setLoading(false);
		});
	};

	const getJumlahDatabyMandiri = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahMandiri'
		).then((result) => {
			setShowJumlahDatabyMandiri(result.data[0].JUMLAH);
			setLoading(false);
		});
	};

	useEffect(() => {
		getJumlahDatabyProdi();
		getJumlahDatabyResearchCenter();
		getJumlahDatabyResearchGroup();
		getJumlahDatabyMandiri();
	}, []);

	const series = [
		{
			name: 'Program Studi',
			data: [showJumlahDatabyProdi],
		},
		{
			name: 'Research Center',
			data: [0, showJumlahDatabyResearchCenter],
		},
		{
			name: 'Research Group',
			data: [0, 0, showJumlahDatabyResearchGroup],
		},
		{
			name: 'Mandiri',
			data: [0, 0, 0, showJumlahDatabyMandiri],
		},
	];

	const options = {
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
			type: 'kategori',
			categories: ['Program Studi', 'Research Center', 'Research Group', 'Mandiri'],
		},
		legend: {
			position: 'right',
			offsetY: 40,
		},
		fill: {
			opacity: 1,
		},
	};

	if (loading) {
		return <div>Bar Graph Loading...</div>;
	}
	return (
		<div id='chart'>
			<ReactApexChart options={options} series={series} type='bar' height={350} />
		</div>
	);
}

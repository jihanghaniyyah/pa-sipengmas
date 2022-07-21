import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

export default function StatisticBarProdi() {
	const [showJumlahDatabyS2TE, setShowJumlahDatabyS2TE] = useState([]);
	const [showJumlahDatabyD4PJJTT, setShowJumlahDatabyD4PJJTT] = useState([]);
	const [showJumlahDatabyD4TT, setShowJumlahDatabyD4TT] = useState([]);
	const [showJumlahDatabyD3TT, setShowJumlahDatabyD3TT] = useState([]);
	const [showJumlahDatabyD4TEI, setShowJumlahDatabyD4TEI] = useState([]);
	const [showJumlahDatabyD3TEI, setShowJumlahDatabyD3TEI] = useState([]);
	const [showJumlahDatabyD4TE, setShowJumlahDatabyD4TE] = useState([]);
	const [showJumlahDatabyD3TE, setShowJumlahDatabyD3TE] = useState([]);

	const [showJumlahDatabyS2TIK, setShowJumlahDatabyS2TIK] = useState([]);
	const [showJumlahDatabyD3PJJTI, setShowJumlahDatabyD3PJJTI] = useState([]);
	const [showJumlahDatabyD4TI, setShowJumlahDatabyD4TI] = useState([]);
	const [showJumlahDatabyD3TI, setShowJumlahDatabyD3TI] = useState([]);
	const [showJumlahDatabyD4TK, setShowJumlahDatabyD4TK] = useState([]);

	const [showJumlahDatabyD4TSPE, setShowJumlahDatabyD4TSPE] = useState([]);
	const [showJumlahDatabyD4TM, setShowJumlahDatabyD4TM] = useState([]);

	const [showJumlahDatabyD4TG, setShowJumlahDatabyD4TG] = useState([]);
	const [showJumlahDatabyD3TMB, setShowJumlahDatabyD3TMB] = useState([]);

	const [showJumlahDatabyD3PSDKULA, setShowJumlahDatabyD3PSDKULA] = useState([]);
	const [showJumlahDatabyD3PSDKUSU, setShowJumlahDatabyD3PSDKUSU] = useState([]);

	const [loading, setLoading] = useState(true);

	// DTE;
	const getJumlahDatabyS2TE = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahS2TE'
		).then((result) => {
			setShowJumlahDatabyS2TE(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD4PJJTT = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4PJJTT'
		).then((result) => {
			setShowJumlahDatabyD4PJJTT(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD4TT = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4TT'
		).then((result) => {
			setShowJumlahDatabyD4TT(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD4TEI = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4TEI'
		).then((result) => {
			setShowJumlahDatabyD4TEI(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD3TEI = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD3TEI'
		).then((result) => {
			setShowJumlahDatabyD3TEI(result.data[0].JUMLAH);
			// console.log(result);
			setLoading(false);
		});
	};
	const getJumlahDatabyD3TT = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD3TT'
		).then((result) => {
			setShowJumlahDatabyD3TT(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD4TE = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4TE'
		).then((result) => {
			setShowJumlahDatabyD4TE(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD3TE = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD3TE'
		).then((result) => {
			setShowJumlahDatabyD3TE(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};

	// DTIK;
	const getJumlahDatabyS2TIK = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahS2TIK'
		).then((result) => {
			setShowJumlahDatabyS2TIK(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};
	const getJumlahDatabyD3PJJTI = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD3PJJTI'
		).then((result) => {
			setShowJumlahDatabyD3PJJTI(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD4TI = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4TI'
		).then((result) => {
			setShowJumlahDatabyD4TI(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD3TI = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD3TI'
		).then((result) => {
			setShowJumlahDatabyD3TI(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD4TK = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4TK'
		).then((result) => {
			setShowJumlahDatabyD4TK(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};

	//DTME
	const getJumlahDatabyD4TSPE = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4TSPE'
		).then((result) => {
			setShowJumlahDatabyD4TSPE(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD4TM = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4TM'
		).then((result) => {
			setShowJumlahDatabyD4TM(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};

	//DTMK
	const getJumlahDatabyD4TG = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD4TG'
		).then((result) => {
			setShowJumlahDatabyD4TG(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD3TMB = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD3TMB'
		).then((result) => {
			setShowJumlahDatabyD3TMB(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};

	//PSDKU
	const getJumlahDatabyD3PSDKULA = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD3PSDKULA'
		).then((result) => {
			setShowJumlahDatabyD3PSDKULA(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};
	const getJumlahDatabyD3PSDKUSU = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/statistikbar.php?function=showJumlahD3PSDKUSU'
		).then((result) => {
			setShowJumlahDatabyD3PSDKUSU(result.data[0].JUMLAH);
			// console.log(result);
			// setLoading(false);
		});
	};

	useEffect(() => {
		getJumlahDatabyS2TIK();
		getJumlahDatabyS2TE();
		getJumlahDatabyD3PJJTI();
		getJumlahDatabyD4PJJTT();
		getJumlahDatabyD3PSDKULA();
		getJumlahDatabyD3PSDKUSU();
		getJumlahDatabyD4TT();
		getJumlahDatabyD4TEI();
		getJumlahDatabyD4TI();
		getJumlahDatabyD4TK();
		getJumlahDatabyD4TG();
		getJumlahDatabyD3TMB();
		getJumlahDatabyD4TSPE();
		getJumlahDatabyD4TM();
		getJumlahDatabyD3TI();
		getJumlahDatabyD3TEI();
		getJumlahDatabyD3TT();
		getJumlahDatabyD4TE();
		getJumlahDatabyD3TE();
	}, []);

	const series = [
		{
			name: 'S2 Teknik Elektro',
			data: [showJumlahDatabyS2TE, 0, 0, 0, 0],
		},
		{
			name: 'D4 PJJ Teknik Telekomunikasi',
			data: [showJumlahDatabyD4PJJTT, 0, 0, 0, 0],
		},
		{
			name: 'D4 Teknik Telekomunikasi',
			data: [showJumlahDatabyD4TT, 0, 0, 0, 0],
		},
		{
			name: 'D4 Teknik Elektro Industri',
			data: [showJumlahDatabyD4TEI, 0, 0, 0, 0],
		},
		{
			name: 'D3 Teknik Elektro Industri',
			data: [showJumlahDatabyD3TEI, 0, 0, 0, 0],
		},
		{
			name: 'D3 Teknik Telekomunikasi',
			data: [showJumlahDatabyD3TT, 0, 0, 0, 0],
		},
		{
			name: 'D4 Teknik Elektronika',
			data: [showJumlahDatabyD4TE, 0, 0, 0, 0],
		},
		{
			name: 'D3 Teknik Elektronika',
			data: [showJumlahDatabyD3TE, 0, 0, 0, 0],
		},
		{
			name: 'S2 Teknik Informasi dan Komputer',
			data: [0, showJumlahDatabyS2TIK, 0, 0, 0],
		},
		{
			name: 'D3 PJJ Teknik Informatika',
			data: [0, showJumlahDatabyD3PJJTI, 0, 0, 0],
		},
		{
			name: 'D4 Teknik Informatika',
			data: [0, showJumlahDatabyD4TI, 0, 0, 0],
		},
		{
			name: 'D3 Teknik Informatika',
			data: [0, showJumlahDatabyD3TI, 0, 0, 0],
		},
		{
			name: 'D4 Teknik Komputer',
			data: [0, showJumlahDatabyD4TK, 0, 0, 0],
		},
		{
			name: 'D4 Teknik Sistem Pembangkitan Energi',
			data: [0, 0, showJumlahDatabyD4TSPE, 0, 0],
		},
		{
			name: 'D4 Teknik Mekatronika',
			data: [0, 0, showJumlahDatabyD4TM, 0, 0],
		},
		{
			name: 'D4 Teknologi Game',
			data: [0, 0, 0, showJumlahDatabyD4TG, 0],
		},
		{
			name: 'D3 Teknik Multimedia Broadcasting',
			data: [0, 0, 0, showJumlahDatabyD3TMB, 0],
		},
		{
			name: 'D3 PSDKU LAMONGAN',
			data: [0, 0, 0, 0, showJumlahDatabyD3PSDKULA],
		},
		{
			name: 'D3 PSDKU SUMENEP',
			data: [0, 0, 0, 0, showJumlahDatabyD3PSDKUSU],
		},
	];

	// setLoading(false);

	console.log(series);

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
			categories: ['DTE', 'DTIK', 'DTME', 'DTMK', 'PSDKU'],
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
		return <div>Bar Statistic is Loading...</div>;
	}

	return (
		<div id='chart'>
			<ReactApexChart options={options} series={series} type='bar' height={350} />
		</div>
	);
}

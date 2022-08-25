import React, { useState, useEffect } from 'react';
import { matchPath } from 'react-router-dom';
import SideBar from '../../../components/admin/sidebar';
import Header from '../../../components/admin/header';
import PengmasProdi from '../DataPengmas/Prodi';
import ResearchCenter from '../DataPengmas/ResearchCenter';
import ResearchGroup from '../DataPengmas/ResearchGroup';
import Mandiri from '../DataPengmas/Mandiri';
import PenawaranJudul from '../DataPengmas/PenawaranJudul';
import DetailDataPengmas from '../DetailData/DataPengmas';
import DetailDataPenawaranJudul from '../DetailData/PenawaranJudul';
import DetailDataMandiri from '../DetailData/DataPengmas/Mandiri';
import TambahPengmasMandiri from '../DataPengmas/Mandiri/TambahData';
import StatisticLine from './Statistic/Line';
import StatisticBar from './Statistic/Bar';
import AllPost from './AllPost';
import axios from 'axios';

export default function Dashboard() {
	// let role;
	if (sessionStorage.key('role') !== null) {
		if (sessionStorage.getItem('role') === '32') {
			sessionStorage.removeItem('role');
			window.location.pathname = '/mis116/login';
		}
	} else {
		window.location.pathname = '/mis116/login';
	}

	const [showTotalData, setShowTotalData] = useState([]);
	const [showTotalProdi, setShowTotalProdi] = useState([]);
	const [showTotalResearchCenter, setShowTotalResearchCenter] = useState([]);
	const [showTotalResearchGroup, setShowTotalResearchGroup] = useState([]);

	const getTotalDataPengmas = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/totaldata.php?function=showTotalDataPengmas'
		).then((result) => {
			setShowTotalData(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};

	useEffect(() => {
		getTotalDataPengmas();
	});

	const getTotalProdi = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/totaldata.php?function=showTotalDataProdi'
		).then((result) => {
			setShowTotalProdi(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};

	useEffect(() => {
		getTotalProdi();
	});

	const getTotalResearchCenter = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/totaldata.php?function=showTotalDataRC'
		).then((result) => {
			setShowTotalResearchCenter(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};

	useEffect(() => {
		getTotalResearchCenter();
	});

	const getTotalResearchGroup = () => {
		axios(
			'https://project.mis.pens.ac.id/mis116/sipengmas/api/totaldata.php?function=showTotalDataRG'
		).then((result) => {
			setShowTotalResearchGroup(result.data[0].JUMLAH);
			console.log(result.data[0].JUMLAH);
		});
	};

	useEffect(() => {
		getTotalResearchGroup();
	});

	return (
		<div className='app'>
			<Header />
			<SideBar />

			<div className='row'>
				{window.location.pathname === '/mis116/dashboard-prodi' ? (
					<PengmasProdi />
				) : window.location.pathname === '/mis116/dashboard-researchcenter' ? (
					<ResearchCenter />
				) : window.location.pathname === '/mis116/dashboard-researchgroup' ? (
					<ResearchGroup />
				) : window.location.pathname === '/mis116/dashboard-penawaranjudul' ? (
					<PenawaranJudul />
				) : window.location.pathname === '/mis116/dashboard-mandiri' ? (
					<Mandiri />
				) : window.location.pathname === '/mis116/dashboard-tambahdatamandiri' ? (
					<TambahPengmasMandiri />
				) : matchPath(window.location.pathname, {
						path: '/mis116/dashboard-detaildatamandiri/:id',
				  }) ? (
					<DetailDataMandiri />
				) : matchPath(window.location.pathname, {
						path: '/mis116/dashboard-detaildatapengmas/:id',
				  }) ? (
					<DetailDataPengmas />
				) : matchPath(window.location.pathname, {
						path: '/mis116/dashboard-detaildatapenawaranjudul/:id',
				  }) ? (
					<DetailDataPenawaranJudul />
				) : (
					<div className='main-content'>
						<section className='section'>
							<div className='section-header'>
								<h1>Statistik Data Pengabdian Masyarakat PENS</h1>
							</div>
							<div className='row'>
								<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
									<div className='card card-statistic-1'>
										<div className='card-icon bg-danger'>
											<i className='far fa-file'></i>
										</div>
										<div className='card-wrap'>
											<div className='card-header'>
												<h4>Total Data</h4>
											</div>
											<div className='card-body'>{showTotalData}</div>
										</div>
									</div>
								</div>
								<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
									<div className='card card-statistic-1'>
										<div className='card-icon bg-info'>
											<i className='far fa-file'></i>
										</div>
										<div className='card-wrap'>
											<div className='card-header'>
												<h4>Program Studi</h4>
											</div>
											<div className='card-body'>{showTotalProdi}</div>
										</div>
									</div>
								</div>
								<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
									<div className='card card-statistic-1'>
										<div className='card-icon bg-success'>
											<i className='far fa-file'></i>
										</div>
										<div className='card-wrap'>
											<div className='card-header'>
												<h4>Research Center</h4>
											</div>
											<div className='card-body'>
												{showTotalResearchCenter}
											</div>
										</div>
									</div>
								</div>
								<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
									<div className='card card-statistic-1'>
										<div className='card-icon bg-warning'>
											<i className='far fa-file'></i>
										</div>
										<div className='card-wrap'>
											<div className='card-header'>
												<h4>Research Group</h4>
											</div>
											<div className='card-body'>
												{showTotalResearchGroup}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-lg-6 col-md-12 col-12 col-sm-12'>
									<div className='card'>
										<StatisticBar />
									</div>
								</div>
								<div className='col-lg-6 col-md-12 col-12 col-sm-12'>
									<div className='card'>
										<StatisticLine />
									</div>
								</div>
							</div>
							<div className='w-100'>
								<AllPost />
							</div>
						</section>
					</div>
				)}
			</div>
		</div>
	);
}

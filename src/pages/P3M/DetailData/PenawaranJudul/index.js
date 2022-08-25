import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, SideBar } from '../../components';
import axios from 'axios';

export default function DetailDataPenawaranJudulAdmin() {
	let nomor = window.location.pathname.split('/');
	console.log(nomor[3]);

	const [showDetailPenawaran, setShowDetailPenawaran] = useState({});
	const [loading, setLoading] = useState(true);

	const getDetailbyID = (id) => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/penawaranjudul.php?function=showJudulbyID',
			data: { ID_detailPenawaran: nomor[4] },
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowDetailPenawaran(result.data.data);
			setLoading(false);
		});
	};

	useEffect(() => {
		getDetailbyID();
	}, []);

	return (
		<div className='app'>
			<Header />
			<SideBar />
			<div class='main-content'>
				<section class='section'>
					<div class='section-header'>
						<h1>Detail Data</h1>
						<div class='section-header-breadcrumb'>
							<div class='breadcrumb-item active'>
								<Link to='/mis116/admin-penawaranjudul'>Data Pengmas</Link>
							</div>
							<div class='breadcrumb-item'>
								<Link to='/mis116/admin-penawaranjudul'>Penawaran Judul</Link>
							</div>
							<div class='breadcrumb-item'>Detail Data</div>
						</div>
					</div>

					<div class='section-body'>
						<div class='card'>
							<div class='card-body'>
								<div class='row'>
									<div class='col-4 col-md-2'>Judul</div>
									<div class='col-8 col-md-10'>
										: {showDetailPenawaran.JUDUL_PENAWARAN}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'>Kategori</div>
									<div class='col-8 col-md-10'>
										: {showDetailPenawaran.KATEGORI}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'>Ketentuan</div>
									<div class='col-8 col-md-10'>
										: {showDetailPenawaran.KETENTUAN}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'>Status</div>
									<div class='col-8 col-md-10'>
										:{' '}
										<div
											class={`badge ${
												showDetailPenawaran.STATUS === 'Not Available'
													? 'badge-danger'
													: 'badge-success'
											}`}
										>
											{showDetailPenawaran.STATUS}
										</div>{' '}
									</div>
								</div>
								<div class='row mb-5'>
									<div class='col-4 col-md-2'>Narahubung</div>
									<div class='col-8 col-md-10'>
										: {showDetailPenawaran.NARAHUBUNG}{' '}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'></div>
									<div class='col-8 col-md-10 buttons'>
										<Link
											to='/mis116/admin-penawaranjudul'
											class='btn btn-success'
										>
											Kembali
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

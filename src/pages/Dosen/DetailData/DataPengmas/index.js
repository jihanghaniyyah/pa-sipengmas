import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function DetailDataPengmas() {
	let nomor = window.location.pathname.split('/');
	console.log(nomor[3]);
	// const { id } = useParams();

	const [showDetailDataPengmas, setShowDetailDataPengmas] = useState({});
	const [loading, setLoading] = useState(true);

	const getDetailbyID = (id) => {
		console.log(nomor[3]);
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/datapengmas.php?function=showDataPengmasbyID',
			data: { ID_detailDataPengmas: parseInt(nomor[3]) },
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			console.log(result.data.data);
			setShowDetailDataPengmas(result.data.data[0]);
			setLoading(false);
		});
	};

	useEffect(() => {
		getDetailbyID();
	}, []);

	return (
		<div class='main-content'>
			<section class='section'>
				<div class='section-header'>
					<h1>Detail Data</h1>
					<div class='section-header-breadcrumb'>
						<div class='breadcrumb-item active'>Data Pengmas</div>
						<div class='breadcrumb-item'>Detail Data</div>
					</div>
				</div>

				<div class='section-body'>
					<div class='card'>
						<div class='card-body'>
							<div class='row'>
								<div class='col-4 col-md-2'>Judul</div>
								<div class='col-8 col-md-10'>: {showDetailDataPengmas.JUDUL}</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Nama Pegawai</div>
								<div class='col-8 col-md-10'>
									: {showDetailDataPengmas.NAMA_PEGAWAI}
								</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Kategori</div>
								<div class='col-8 col-md-10'>
									: {showDetailDataPengmas.KATEGORI}
								</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Pusat Riset</div>
								<div class='col-8 col-md-10'>: {showDetailDataPengmas.NAMA}</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Tahun Pelaksanaan</div>
								<div class='col-8 col-md-10'>
									: {showDetailDataPengmas.TAHUN_PELAKSANAAN}
								</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Latar Belakang</div>
								<div class='col-8 col-md-10'>
									: {showDetailDataPengmas.LATAR_BELAKANG}
								</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Tujuan</div>
								<div class='col-8 col-md-10'>: {showDetailDataPengmas.TUJUAN}</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Hasil</div>
								<div class='col-8 col-md-10'>: {showDetailDataPengmas.HASIL}</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Kendala</div>
								<div class='col-8 col-md-10'>: {showDetailDataPengmas.KENDALA}</div>
							</div>
							<div class='row mb-3'>
								<div class='col-4 col-md-2'>Kesimpulan dan Saran</div>
								<div class='col-8 col-md-10'>
									: {showDetailDataPengmas.KESIMPULAN_SARAN}
								</div>
							</div>
							{/* <div class='row'>
								<div class='col-4 col-md-2'></div>
								<div class='col-8 col-md-10 buttons'>
									<Link to='/prodi/detaildataprodi' class='btn btn-warning'>
										Unduh File
									</Link>
									<Link to='/prodi/detaildataprodi' class='btn btn-warning'>
										Unduh SK
									</Link>
								</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'></div>
								<div class='col-8 col-md-10 buttons'>
									<Link to='/data/prodi' class='btn btn-info'>
										Kembali
									</Link>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

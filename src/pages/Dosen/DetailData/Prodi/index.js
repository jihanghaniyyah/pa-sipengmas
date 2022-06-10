import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailDataPengmasProdi() {
	return (
		<div class='main-content'>
			<section class='section'>
				<div class='section-header'>
					<h1>Detail Data</h1>
					<div class='section-header-breadcrumb'>
						<div class='breadcrumb-item active'>
							<Link to='/data/prodi'>Data Pengmas</Link>
						</div>
						<div class='breadcrumb-item'>
							<Link to='/data/prodi'>Program Studi</Link>
						</div>
						<div class='breadcrumb-item'>Detail Data</div>
					</div>
				</div>

				<div class='section-body'>
					<div class='card'>
						<div class='card-body'>
							<div class='row'>
								<div class='col-4 col-md-2'>Judul</div>
								<div class='col-8 col-md-10'>: Pengabdian Masyarakat IT 2021</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Nama Ketua</div>
								<div class='col-8 col-md-10'>: Jihan Ghaniyyah</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Program Studi</div>
								<div class='col-8 col-md-10'>: Teknik Informatika</div>
							</div>
							<div class='row mb-3'>
								<div class='col-4 col-md-2'>Waktu Pelaksanaan</div>
								<div class='col-8 col-md-10'>: 2021-12-30</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'></div>
								<div class='col-8 col-md-10 buttons'>
									<Link to='/prodi/detaildataprodi' class='btn btn-info'>
										Unduh File
									</Link>
									<Link to='/prodi/detaildataprodi' class='btn btn-info'>
										Unduh SK
									</Link>
								</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'></div>
								<div class='col-8 col-md-10 buttons'>
									<Link to='/data/prodi' class='btn btn-warning'>
										Kembali
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

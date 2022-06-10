import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailDataPenawaranJudul() {
	return (
		<div class='main-content'>
			<section class='section'>
				<div class='section-header'>
					<h1>Detail Data</h1>
					<div class='section-header-breadcrumb'>
						<div class='breadcrumb-item active'>
							<Link to='/data/penawaranjudul'>Data Pengmas</Link>
						</div>
						<div class='breadcrumb-item'>
							<Link to='/data/penawaranjudul'>Penawaran Judul</Link>
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
								<div class='col-4 col-md-2'>Kategori</div>
								<div class='col-8 col-md-10'>: PT Dalam Negeri</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Ketentuan</div>
								<div class='col-8 col-md-10'>: Lorem Ipsum</div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'>Status</div>
								<div class='col-8 col-md-10'>
									: <div class='badge badge-success'>Available</div>{' '}
								</div>
							</div>
							<div class='row mb-5'>
								<div class='col-4 col-md-2'>Narahubung</div>
								<div class='col-8 col-md-10'>: Jihan (081230210480) </div>
							</div>
							<div class='row'>
								<div class='col-4 col-md-2'></div>
								<div class='col-8 col-md-10 buttons'>
									<Link to='/data/penawaranjudul' class='btn btn-success'>
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

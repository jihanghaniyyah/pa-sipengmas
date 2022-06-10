import React from 'react';
import { Link } from 'react-router-dom';

export default function TambahPenawaranJudul() {
	return (
		<div class='main-content'>
			<section class='section'>
				<div class='section-header'>
					<h1>Tambah Data Judul Penawaran</h1>
					<div class='section-header-breadcrumb'>
						<div class='breadcrumb-item active'>
							<Link to='/data/daftarpenawaranjudul'>Data Pengmas</Link>
						</div>
						<div class='breadcrumb-item'>
							<Link to='/data/daftarpenawaranjudul'>Penawaran Judul</Link>
						</div>
						<div class='breadcrumb-item'>Tambah Data</div>
					</div>
				</div>

				<div class='section-body'>
					<div class='card'>
						<div class='card-body'>
							<div class='form-group row mb-4'>
								<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
									Judul Kegiatan
								</label>
								<div class='col-sm-12 col-md-7'>
									<input type='text' class='form-control' />
								</div>
							</div>
							<div class='form-group row mb-4'>
								<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
									Kategori
								</label>
								<div class='col-sm-12 col-md-7'>
									<select class='form-control selectric'>
										<option>Prodi</option>
										<option>PT Dalam Negeri</option>
										<option>PT Luar Negeri</option>
									</select>
								</div>
							</div>
							<div class='form-group row mb-4'>
								<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
									Status
								</label>
								<div class='col-sm-12 col-md-7'>
									<select class='form-control selectric'>
										<option>Available</option>
										<option>Not Available</option>
									</select>
								</div>
							</div>
							<div class='form-group row mb-4'>
								<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
									Narahubung
								</label>
								<div class='col-sm-12 col-md-7'>
									<input type='text' class='form-control' />
								</div>
							</div>
							<div class='form-group row mb-4'>
								<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
									Ketentuan
								</label>
								<div class='col-sm-12 col-md-7'>
									<textarea class='summernote-simple'></textarea>
								</div>
							</div>
							<div class='form-group row mb-4'>
								<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'></label>
								<div class='col-sm-12 col-md-7'>
									<button class='btn btn-primary'>Publish</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

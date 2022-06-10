import React from 'react';
import { Link } from 'react-router-dom';

export default function PenawaranJudul() {
	return (
		<div class='main-content'>
			<section class='section'>
				<div class='section-header'>
					<h1>Daftar Penawaran Judul Pengmas</h1>
					<div class='section-header-breadcrumb'>
						<div class='breadcrumb-item active'>
							<Link to='/data/penawaranjudul'>Data Pengmas</Link>
						</div>
						<div class='breadcrumb-item'>
							<Link to='/data/penawaranjudul'>Penawaran Judul</Link>
						</div>
					</div>
				</div>

				<div class='section-body'>
					<div class='card'>
						<div class='card-body'>
							<div class='row'>
								<div class='table-responsive'>
									<table class='table table-striped' id='table-1'>
										<thead>
											<tr>
												<th>No</th>
												<th>Judul</th>
												<th>Kategori</th>
												<th>Ketentuan</th>
												<th>Status</th>
												<th>Aksi</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>Pengabdian Masyarakat IT 2021</td>
												<td>Program Studi</td>
												<td>Dosen Program Studi Teknik Informatika</td>
												<td>
													<div class='badge badge-success'>Available</div>
												</td>
												<td>
													<Link
														to='/penawaranjudul/detaildatapenawaranjudul'
														class='btn btn-primary'
													>
														Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Pengabdian Masyarakat IT 2021</td>
												<td>PT Dalam Negeri</td>
												<td>Dosen Program Studi Teknik Informatika</td>
												<td>
													<div class='badge badge-danger'>
														Not Available
													</div>
												</td>
												<td>
													<Link
														to='/penawaranjudul/detaildatapenawaranjudul'
														class='btn btn-primary'
													>
														Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Pengabdian Masyarakat IT 2021</td>
												<td>PT Luar Negeri</td>
												<td>Dosen Program Studi Teknik Informatika</td>
												<td>
													<div class='badge badge-success'>Available</div>
												</td>
												<td>
													<Link
														to='/penawaranjudul/detaildatapenawaranjudul'
														class='btn btn-primary'
													>
														Detail
													</Link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

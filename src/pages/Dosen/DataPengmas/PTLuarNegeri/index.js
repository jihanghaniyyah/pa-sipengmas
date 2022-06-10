import React from 'react';
import { Link } from 'react-router-dom';

export default function PTLuarNegeri() {
	return (
		<div class='main-content'>
			<section class='section'>
				<div class='section-header'>
					<h1>Data Pengmas Berdasarkan Perguruan Tinggi Luar Negeri</h1>
					<div class='section-header-breadcrumb'>
						<div class='breadcrumb-item active'>
							<Link to='/data/ptluarnegeri'>Data Pengmas</Link>
						</div>
						<div class='breadcrumb-item'>
							<Link to='/data/ptluarnegeri'>PT Luar Negeri</Link>
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
												<th class='text-center'>No</th>
												<th>Judul</th>
												<th>Nama Ketua</th>
												<th>Perguruan Tinggi</th>
												<th>Waktu Pelaksanaan</th>
												<th>Aksi</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>Pengabdian Masyarakat IT 2021</td>
												<td>Jihan Ghaniyyah</td>
												<td>NTU</td>
												<td>2018-01-20</td>
												<td>
													<Link
														to='/ptluarnegeri/detaildataptluarnegeri'
														class='btn btn-primary'
													>
														Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>2</td>
												<td>Pengabdian Masyarakat IT 2021</td>
												<td>Jihan Ghaniyyah</td>
												<td>NTU</td>
												<td>2018-01-20</td>
												<td>
													<Link
														to='/ptluarnegeri/detaildataptluarnegeri'
														class='btn btn-primary'
													>
														Detail
													</Link>
												</td>
											</tr>
											<tr>
												<td>3</td>
												<td>Pengabdian Masyarakat IT 2021</td>
												<td>Jihan Ghaniyyah</td>
												<td>NTU</td>
												<td>2018-01-20</td>
												<td>
													<Link
														to='/ptluarnegeri/detaildataptluarnegeri'
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

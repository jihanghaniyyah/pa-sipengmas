import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentPost() {
	return (
		<div class='card'>
			<div class='card-body'>
				<h5 class='mb-3'>Data Pengmas Terbaru</h5>
				<div class='table-responsive'>
					<table class='table table-striped' id='table-1'>
						<thead>
							<tr>
								<th class='text-center'>No</th>
								<th>Judul</th>
								<th>Kategori</th>
								<th>Nama Ketua</th>
								<th>Waktu Pelaksanaan</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Pengabdian Masyarakat IT 2021</td>
								<td>PT Dalam Negeri</td>
								<td>Umi Sa'adah</td>
								<td>2018-01-20</td>
								<td>
									<Link
										to='/datapengmas/detaildataptdalamnegeri'
										class='btn btn-info'
									>
										Detail
									</Link>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Pengabdian Masyarakat IT 2021</td>
								<td>PT Luar Negeri</td>
								<td>Umi Sa'adah</td>
								<td>2018-01-20</td>
								<td>
									<Link
										to='/datapengmas/detaildataptluarnegeri'
										class='btn btn-info'
									>
										Detail
									</Link>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Pengabdian Masyarakat IT 2021</td>
								<td>Program Studi</td>
								<td>Umi Sa'adah</td>
								<td>2018-01-20</td>
								<td>
									<Link
										to='/datapengmas/detaildatapengmasprodi'
										class='btn btn-info'
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
	);
}

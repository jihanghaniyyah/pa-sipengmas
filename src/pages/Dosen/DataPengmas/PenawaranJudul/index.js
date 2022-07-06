import React from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function PenawaranJudul() {
	const [showDataJudul, setShowDataJudul] = React.useState([]);

	const getDataJudul = (e) => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/penawaranjudul.php?function=showJudul',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowDataJudul(result.data.data);

			console.log(result.data.data);
		});
	};

	React.useEffect(() => {
		getDataJudul();
	}, []);

	const datatable = {
		columns: [
			{
				label: 'No',
				field: 'nomor',
				width: 100,
			},
			{
				label: 'Judul',
				field: 'judul',
				width: 150,
				attributes: {
					'aria-controls': 'DataTable',
					'aria-label': 'Name',
				},
			},
			{
				label: 'Kategori',
				field: 'kategori',
				width: 270,
			},
			{
				label: 'Ketentuan',
				field: 'ketentuan',
				width: 200,
			},
			{
				label: 'Status',
				field: 'status',
				width: 100,
			},
			{
				label: 'Aksi',
				field: 'aksi',
				width: 150,
			},
		],
		rows: [
			...showDataJudul.map((item, i) => ({
				nomor: i + 1,
				judul: item.JUDUL_PENAWARAN,
				kategori: item.KATEGORI,
				ketentuan: item.KETENTUAN,
				status: (
					<span
						class={`badge ${
							item.STATUS === 'Not Available' ? 'badge-danger' : 'badge-success'
						}`}
					>
						{item.STATUS}
					</span>
				),
				aksi: (
					<div>
						<Link
							to={`/penawaranjudul/detaildatapenawaranjudul/${item.ID_PENAWARAN}`}
							class='btn btn-info'
						>
							<i class='fas fa-eye'></i>
						</Link>
					</div>
				),
			})),
		],
	};

	return (
		<div class='main-content'>
			<section class='section'>
				<div class='section-header'>
					<h1>Daftar Penawaran Judul Pengmas</h1>
					<div class='section-header-breadcrumb'>
						<div class='breadcrumb-item active'>
							<Link to='/data/penawaranjudul'>Data Pengmas</Link>
						</div>
						<div class='breadcrumb-item'>Penawaran Judul</div>
					</div>
				</div>

				<div class='section-body'>
					<div class='card px-5'>
						<div class='card-body'>
							<MDBDataTableV5
								hover
								entriesOptions={[10, 20, 25, 50]}
								entries={10}
								pagesAmount={4}
								data={datatable}
								pagingTop
								searchTop
								searchBottom={false}
								barReverse
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

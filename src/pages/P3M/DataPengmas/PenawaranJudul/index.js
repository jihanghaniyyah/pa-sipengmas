import React from 'react';
import { Link } from 'react-router-dom';
import { Header, SideBar } from '../../components';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function PenawaranJudulAdmin() {
	const [showDataJudul, setShowDataJudul] = React.useState([]);

	const getDataJudul = (e) => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/penawaranjudul.php?function=showJudul',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowDataJudul(result.data.data);

			console.log(result.data.data);
		});
	};

	const deleteDataJudul = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			icon: 'question',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Yes',
			denyButtonText: `No`,
		}).then((response) => {
			if (response.isConfirmed) {
				axios({
					method: 'post',
					url:
						'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/penawaranjudul.php?function=deleteJudul',
					data: { ID_PENAWARAN: id },
					headers: {
						'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
					},
				}).then(() => {
					// alert('berhasil menghapus');
					window.location.reload();
				});
			}
		});
	};

	React.useEffect(() => {
		getDataJudul();
	}, []);

	// const datatable = {};
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
							to={`/mis116/admin/detaildatapenawaranjudul/${item.ID_PENAWARAN}`}
							class='btn btn-info'
						>
							<i class='fas fa-eye'></i>
						</Link>
						<Link
							to={`/mis116/admin-edit-penawaranjudul/${item.ID_PENAWARAN}`}
							class='btn btn-warning'
						>
							<i class='fas fa-pen' />
						</Link>
						<button
							onClick={() => deleteDataJudul(item.ID_PENAWARAN)}
							class='btn btn-danger'
						>
							<i class='fas fa-trash'></i>
						</button>
					</div>
				),
			})),
		],
	};
	// console.log(item);

	return (
		<div className='app'>
			<Header />
			<SideBar />
			<div class='main-content'>
				<section class='section'>
					<div class='section-header'>
						<h1>Penawaran Judul Pengabdian Masyarakat</h1>
						<div class='section-header-breadcrumb'>
							<div class='breadcrumb-item active'>
								<Link href='/admin/penawaranjudul'>Data Pengmas</Link>
							</div>
							<div class='breadcrumb-item'>Penawaran Judul</div>
						</div>
					</div>

					<div class='section-body'>
						<div class='card px-5'>
							<div class='card-body'>
								<Link
									to='/mis116/admin/tambahdata/penawaranjudul'
									class='btn btn-warning mb-3'
								>
									Tambah Data
								</Link>
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
		</div>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTableV5 } from 'mdbreact';
import { Header, SideBar } from '../../components';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ResearchCenterAdmin() {
	const [showDataPengmas, setShowDataPengmas] = React.useState([]);

	const getDataPengmas = (e) => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/datapengmas.php?function=showDataPengmasbyRC',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowDataPengmas(result.data.data);

			console.log(result.data.data);
		});
	};

	const deleteDataPengmas = (id) => {
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
						'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/datapengmas.php?function=deleteDataPengmas',
					data: { ID_PENGMAS: id },
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
		getDataPengmas();
	}, []);

	const datatable = {
		columns: [
			{
				label: 'No',
				field: 'nomor',
				width: 100,
			},
			{
				label: 'Tahun Pelaksanaan',
				field: 'tahun',
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
				label: 'Research Center',
				field: 'pusatriset',
				width: 270,
			},
			{
				label: 'Nama Pegawai',
				field: 'namapegawai',
				width: 200,
			},
			{
				label: 'Aksi',
				field: 'aksi',
				width: 150,
			},
		],
		rows: [
			...showDataPengmas.map((item, i) => ({
				nomor: i + 1,
				judul: item.JUDUL,
				idpengmas: item.ID_PENGMAS,
				kategori: item.KATEGORI,
				namapegawai: item.NAMA_PEGAWAI,
				pusatriset: item.NAMA,
				tahun: item.TAHUN_PELAKSANAAN,
				aksi: (
					<div>
						<Link
							to={`/admin/detaildatapengmas/${item.ID_PENGMAS}`}
							class='btn btn-info'
						>
							<i class='fas fa-eye'></i>
						</Link>
						<button
							onClick={() => deleteDataPengmas(item.ID_PENGMAS)}
							class='btn btn-danger'
						>
							<i class='fas fa-trash'></i>
						</button>
					</div>
				),
			})),
		],
	};
	return (
		<div className='app'>
			<Header />
			<SideBar />
			<div class='main-content'>
				<section class='section'>
					<div class='section-header'>
						<h1>Data Pengmas Berdasarkan Research Center</h1>
						<div class='section-header-breadcrumb'>
							<div class='breadcrumb-item active'>
								<Link to='/admin/researchcenter'>Data Pengmas</Link>
							</div>
							<div class='breadcrumb-item'>Research Center</div>
						</div>
					</div>

					<div class='section-body'>
						<div class='card px-5'>
							<div class='card-body'>
								<Link
									to='/admin/tambahdataresearchcenter'
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

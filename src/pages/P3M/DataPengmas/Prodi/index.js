import React from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTableV5 } from 'mdbreact';
import { Header, SideBar } from '../../components';
import StatisticBarProdi from './Statistic/Bar';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function PengmasProdiAdmin() {
	const [showDataPengmas, setShowDataPengmas] = React.useState([]);
	const [showProdi, setShowProdi] = React.useState([]);
	const [showSelectedProdi, setShowSelectedProdi] = React.useState([]);
	const [valueProdi, setValueProdi] = React.useState([]);

	const getDataPengmas = (e) => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/datapengmas.php?function=showDataPengmasbyProdi',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowDataPengmas(result.data.data);
		});
	};

	//Filter
	const onChangeFilterbyProdi = (e) => {
		setValueProdi(e.target.value);
	};

	const getProdi = () => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/pusatriset.php?function=filterDataPengmasbyProdi',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowProdi(result.data.data);
		});
	};

	React.useEffect(() => {
		getProdi();
	}, []);

	//Tabel
	const getDatabySelectedProdi = (valueProdi) => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/datapengmas.php?function=showDatabySelectedProdi',
			data: { ID: parseInt(valueProdi) },
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowSelectedProdi(result.data.data);
			// console.log(result);
		});
	};

	React.useEffect(() => {
		getDatabySelectedProdi(valueProdi);
	}, [valueProdi]);

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
						'https://project.mis.pens.ac.id/mis116/sipengmas/api/datapengmas.php?function=deleteDataPengmas',
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

	const datatableFilter = {
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
				label: 'Program Studi',
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
			...showSelectedProdi.map((item, i) => ({
				nomor: i + 1,
				judul: item.JUDUL,
				kategori: item.KATEGORI,
				namapegawai: item.NAMA_PEGAWAI,
				pusatriset: item.NAMA,
				tahun: item.TAHUN_PELAKSANAAN,
				aksi: (
					<div>
						<Link
							to={`/mis116/admin-detaildatapengmas/${item.ID_PENGMAS}`}
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
				label: 'Program Studi',
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
				kategori: item.KATEGORI,
				namapegawai: item.NAMA_PEGAWAI,
				pusatriset: item.NAMA,
				tahun: item.TAHUN_PELAKSANAAN,
				aksi: (
					<div>
						<Link
							to={`/mis116/admin-detaildatapengmas/${item.ID_PENGMAS}`}
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
						<h1>Daftar Pengmas Program Studi</h1>
						<div class='section-header-breadcrumb'>
							<div class='breadcrumb-item active'>
								<Link to='/mis116/admin-dataprodi'>Data Pengmas</Link>
							</div>
							<div class='breadcrumb-item'>Program Studi</div>
						</div>
					</div>

					<div class='section-body'>
						<div class='card px-5'>
							<div class='card-body'>
								<Link
									to='/mis116/admin-tambahdataprodi'
									class='btn btn-warning mb-3'
								>
									Tambah Data
								</Link>
								<StatisticBarProdi />
								<div class='row'>
									<div class='col-1'>
										<p>Urutkan berdasarkan</p>
									</div>
									<div class='col-11'>
										<select
											class='form-control selectric'
											onChange={onChangeFilterbyProdi}
										>
											<option value=''>Pilih Prodi</option>
											{showProdi.map((item) => {
												return <option value={item.ID}>{item.NAMA}</option>;
											})}
										</select>
									</div>
								</div>
								{valueProdi.length === 0 ? (
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
								) : (
									<MDBDataTableV5
										hover
										entriesOptions={[10, 20, 25, 50]}
										entries={10}
										pagesAmount={4}
										data={datatableFilter}
										pagingTop
										searchTop
										searchBottom={false}
										barReverse
									/>
								)}
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

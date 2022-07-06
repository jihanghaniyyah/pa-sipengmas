import React from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTableV5 } from 'mdbreact';
import axios from 'axios';

export default function ResearchCenter() {
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
				kategori: item.KATEGORI,
				namapegawai: item.NAMA_PEGAWAI,
				pusatriset: item.NAMA,
				tahun: item.TAHUN_PELAKSANAAN,
				aksi: (
					<div>
						<Link
							to={`/data/detaildatapengmas/${item.ID_PENGMAS}`}
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
					<h1>Data Pengmas Berdasarkan Research Center</h1>
					<div class='section-header-breadcrumb'>
						<div class='breadcrumb-item active'>
							<Link to='/data/researchcenter'>Data Pengmas</Link>
						</div>
						<div class='breadcrumb-item'>Research Center</div>
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

import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header, SideBar } from '../../components';
import axios from 'axios';
// import AutoComplete from '@mui/material';
// import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2';

export default function EditPenawaranJudulAdmin() {
	let nomor = window.location.pathname.split('/');
	// console.log(nomor[3]);

	const [showKategori, setShowKategori] = React.useState([]);
	const [showStatusJudul, setShowStatusJudul] = React.useState([]);
	const [valueKategori, setValueKategori] = React.useState();
	const [valueStatus, setValueStatus] = React.useState();
	const [showDetailPenawaran, setShowDetailPenawaran] = useState({});
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	const [idpenawaran, setidpenawaran] = React.useState();
	const [judulpenawaran, setjudulpenawaran] = React.useState();
	const [kategori, setkategori] = React.useState();
	const [ketentuan, setketentuan] = React.useState();
	const [status, setstatus] = React.useState();
	const [narahubung, setnarahubung] = React.useState();

	const [formInput, setFormInput] = React.useState({
		judulpenawaran: '',
		ketentuan: '',
		narahubung: '',
	});

	const onChangeInput = (e) => {
		setFormInput({
			...formInput,
			[e.target.name]: e.target.value,
		});
	};

	const onChangeKategori = (e) => {
		setValueKategori(e.target.value);
	};

	const onChangeStatus = (e) => {
		setValueStatus(e.target.value);
	};

	const getKategori = () => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/kategori.php?function=showKategori',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowKategori(result.data);
		});
	};

	React.useEffect(() => {
		getKategori();
	}, []);

	const getStatusJudul = () => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/statusjudul.php?function=showStatusJudul',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowStatusJudul(result.data);
		});
	};

	React.useEffect(() => {
		getStatusJudul();
	}, []);

	const getDetailbyID = (id) => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/penawaranjudul.php?function=showJudulbyID',
			data: { ID_detailPenawaran: nomor[3] },
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowDetailPenawaran(result.data.data);
			setidpenawaran(result.data.data.ID_PENAWARAN);
			setjudulpenawaran(result.data.data.JUDUL_PENAWARAN);
			setkategori(result.data.data.ID_KATEGORI);
			setketentuan(result.data.data.KETENTUAN);
			setnarahubung(result.data.data.NARAHUBUNG);
			setstatus(result.data.data.ID_STATUS);
			setLoading(false);
			console.log(result.data.data);
		});
	};

	React.useEffect(() => {
		getDetailbyID();
	}, []);

	const updateData = (e) => {
		e.preventDefault();

		const saveData = {
			ID_PENAWARAN: idpenawaran,
			JUDUL_PENAWARAN: judulpenawaran,
			ID_KATEGORI: kategori,
			KETENTUAN: ketentuan,
			ID_STATUS: status,
			NARAHUBUNG: narahubung,
		};
		console.log(saveData);
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/penawaranjudul.php?function=editJudul',
			data: saveData,
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((result) => {
				Swal.fire({
					icon: 'success',
					text: 'Data berhasil diperbarui!',
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						// window.location.reload();
						history.push('/mis116/admin/penawaranjudul');
					}
				});
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className='app'>
			<Header />
			<SideBar />
			<div class='main-content'>
				<section class='section'>
					<div class='section-header'>
						<h1>Edit Data Penawaran Judul</h1>
						<div class='section-header-breadcrumb'>
							<div class='breadcrumb-item active'>
								<Link to='/admin/penawaranjudul'>Data Pengmas</Link>
							</div>
							<div class='breadcrumb-item'>
								<Link to='/admin/penawaranjudul'>Penawaran Judul</Link>
							</div>
							<div class='breadcrumb-item'>Edit Data</div>
						</div>
					</div>

					<div class='section-body'>
						<div class='card'>
							<div class='card-body'>
								<form onSubmit={updateData}>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Judul Kegiatan
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='judulpenawaran'
												onChange={(e) => {
													setjudulpenawaran(e.target.value);
													console.log(judulpenawaran);
												}}
												defaultValue={judulpenawaran}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Kategori
										</label>
										<div class='col-sm-12 col-md-7'>
											<select
												class='form-control selectric'
												onChange={(e) => setkategori(e.target.value)}
												value={kategori}
											>
												<option value=''>Pilih Kategori</option>
												{showKategori.map((item) => {
													return (
														<option value={item.ID_KATEGORI}>
															{item.KATEGORI}
														</option>
													);
												})}
											</select>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Status
										</label>
										<div class='col-sm-12 col-md-7'>
											<select
												class='form-control selectric'
												onChange={(e) => setstatus(e.target.value)}
												value={status}
											>
												<option value=''>Pilih Status</option>
												{showStatusJudul.map((item) => {
													return (
														<option value={item.ID_STATUS}>
															{item.STATUS}
														</option>
													);
												})}
											</select>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Ketentuan
										</label>
										<div class='col-sm-12 col-md-7'>
											<textarea
												name='ketentuan'
												onChange={(e) => setketentuan(e.target.value)}
												defaultValue={ketentuan}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Narahubung
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='narahubung'
												onChange={(e) => {
													setnarahubung(e.target.value);
													console.log(narahubung);
												}}
												defaultValue={narahubung}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'></label>
										<div class='col-sm-12 col-md-7'>
											<button class='btn btn-success' type='submit'>
												Update
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

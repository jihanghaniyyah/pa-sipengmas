import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header, SideBar } from '../../components';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function TambahPengmasMandiriAdmin() {
	const [showKategori, setShowKategori] = React.useState([]);
	const [showPegawai, setShowPegawai] = React.useState([]);
	const [valueKategori, setValueKategori] = React.useState([]);
	const [valuePegawai, setValuePegawai] = React.useState([]);
	const history = useHistory();

	const [formInput, setFormInput] = React.useState({
		judul: '',
		tahun: '',
		peran: '',
		keterangan: '',
		dokumentasi: '',
	});

	const onChangeInput = (e) => {
		setFormInput({
			...formInput,
			[e.target.name]: e.target.value,
		});
	};

	const onChangePegawai = (e) => {
		setValuePegawai(e.target.value);
	};

	const getPegawai = () => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/pegawai.php?function=showPegawai',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowPegawai(result.data);
		});
	};

	React.useEffect(() => {
		getPegawai();
	}, []);

	const onChangeKategori = (e) => {
		setValueKategori(e.target.value);
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

	const submitForm = (e) => {
		e.preventDefault();

		const saveData = {
			JUDUL: formInput.judul,
			ID_KATEGORI: valueKategori,
			PEGAWAI_ID: valuePegawai,
			TAHUN_PELAKSANAAN: formInput.tahunpelaksanaan,
			PERAN: formInput.peran,
			KETERANGAN: formInput.keterangan,
			DOKUMENTASI: formInput.dokumentasi,
		};
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/datapengmas.php?function=insertDataMandiri',
			data: saveData,
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		})
			.then((result) => {
				Swal.fire({
					icon: 'success',
					text: 'Data berhasil ditambahkan!',
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						// window.location.reload();
						history.push('/mis116/admin-mandiri');
					}
				});
				console.log(result.data.data);
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
						<h1>Tambah Data Pengmas Mandiri</h1>
						<div class='section-header-breadcrumb'>
							<div class='breadcrumb-item active'>Data Pengmas</div>
							<div class='breadcrumb-item'>Tambah Data</div>
						</div>
					</div>

					<div class='section-body'>
						<div class='card'>
							<div class='card-body'>
								<form onSubmit={submitForm}>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Judul Kegiatan
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='judul'
												onChange={onChangeInput}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Nama Pegawai
										</label>
										<div class='col-sm-12 col-md-7'>
											<select
												class='form-control selectric'
												onChange={onChangePegawai}
											>
												<option>Pilih Pegawai</option>
												{showPegawai.map((item) => {
													return (
														<option value={item.NOMOR}>
															{item.NAMA_PEGAWAI}
														</option>
													);
												})}
											</select>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Kategori
										</label>
										<div class='col-sm-12 col-md-7'>
											<select
												class='form-control selectric'
												onChange={onChangeKategori}
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
											Peran
										</label>
										<div class='col-sm-12 col-md-7'>
											<select
												class='form-control'
												name='peran'
												onChange={onChangeInput}
											>
												<option value=''>Pilih Peran</option>
												<option value='Narasumber'>Narasumber</option>
												<option value='Reviewer'>Reviewer</option>
											</select>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Tahun Pelaksanaan
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='tahunpelaksanaan'
												onChange={onChangeInput}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Rangkuman Kegiatan
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='keterangan'
												onChange={onChangeInput}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'></label>
										<div class='col-sm-12 col-md-7'>
											<button class='btn btn-success' onClick={submitForm}>
												Publish
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

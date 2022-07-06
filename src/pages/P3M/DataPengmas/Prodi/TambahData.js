import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header, SideBar } from '../../components';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function TambahPengmasProdi() {
	const [showKategori, setShowKategori] = React.useState([]);
	const [showPegawai, setShowPegawai] = React.useState([]);
	const [showPusatRiset, setShowPusatRiset] = React.useState([]);
	const [valueKategori, setValueKategori] = React.useState([]);
	const [valuePegawai, setValuePegawai] = React.useState([]);
	const [valuePusatRiset, setValuePusatRiset] = React.useState([]);
	const history = useHistory();

	const [formInput, setFormInput] = React.useState({
		judul: '',
		tahun: '',
		latarbelakang: '',
		tujuan: '',
		hasil: '',
		kendala: '',
		kesimpulansaran: '',
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
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/pegawai.php?function=showPegawai',
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
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/kategori.php?function=showKategori',
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

	// Pusat Riset
	// const [showPusatRiset, setShowPusatRiset] = React.useState([]);
	// React.useEffect(() => {
	// 	fetch(
	// 		`https://project.mis.pens.ac.id/mis116/sipengmas/p3m/pusatriset.php?function=showPusatRiset`,
	// 		{
	// 			credentials: 'same-origin',
	// 			method: 'GET',
	// 			cache: 'no-cache',
	// 			mode: 'cors',
	// 			redirect: 'follow',
	// 			referrer: 'no-referrer',
	// 		}
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data.data);
	// 			setShowPusatRiset(data.data);
	// 		});
	// }, []);

	const onChangePusatRiset = (e) => {
		setValuePusatRiset(e.target.value);
	};

	const getPusatRiset = () => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/pusatriset.php?function=showPusatRiset',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			setShowPusatRiset(result.data);
		});
	};

	React.useEffect(() => {
		getPusatRiset();
	}, []);

	const submitForm = (e) => {
		e.preventDefault();

		const saveData = {
			JUDUL: formInput.judul,
			ID_KATEGORI: valueKategori,
			PUSAT_RISET_ID: valuePusatRiset,
			PEGAWAI_ID: valuePegawai,
			LATAR_BELAKANG: formInput.latarbelakang,
			TUJUAN: formInput.tujuan,
			TAHUN_PELAKSANAAN: formInput.tahunpelaksanaan,
			HASIL: formInput.hasil,
			KESIMPULAN_SARAN: formInput.kesimpulansaran,
			KENDALA: formInput.kendala,
		};
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/datapengmas.php?function=insertDataPengmas',
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
						history.push('/admin/dataprodi');
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
						<h1>Tambah Data Program Studi</h1>
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
											Pusat Riset
										</label>
										{/* <AutoCompleteComponent
											id='inputPusatRiset'
											dataSource='showPusatRiset'
											fields={{ value: 'NAMA' }}
											onChange={(e) => setShowPusatRiset(e.target.value)}
										/> */}
										<div class='col-sm-12 col-md-7'>
											<select
												class='form-control selectric'
												onChange={onChangePusatRiset}
											>
												<option value=''>Pilih Pusat Riset</option>
												{showPusatRiset.map((item) => {
													return (
														<option value={item.ID}>{item.NAMA}</option>
													);
												})}
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
											Latar Belakang
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='latarbelakang'
												onChange={onChangeInput}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Tujuan
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='tujuan'
												onChange={onChangeInput}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Hasil
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='hasil'
												onChange={onChangeInput}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Kendala
										</label>
										<div class='col-sm-12 col-md-7'>
											<input
												type='text'
												class='form-control'
												name='kendala'
												onChange={onChangeInput}
											/>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Kesimpulan dan Saran
										</label>
										<div class='col-sm-12 col-md-7'>
											<textarea
												name='kesimpulansaran'
												onChange={onChangeInput}
											></textarea>
										</div>
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'></label>
										<div class='col-sm-12 col-md-7'>
											<button class='btn btn-primary' onClick={submitForm}>
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

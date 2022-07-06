import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header, SideBar } from '../../components';
import axios from 'axios';
// import AutoComplete from '@mui/material';
// import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2';

export default function TambahPenawaranJudulAdmin() {
	const [showKategori, setShowKategori] = React.useState([]);
	const [showStatusJudul, setShowStatusJudul] = React.useState([]);
	const [valueKategori, setValueKategori] = React.useState();
	const [valueStatus, setValueStatus] = React.useState();
	const history = useHistory();

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

	// const onChangeKategori = (e) => {
	// 	console.log(e.target.value);
	// 	setShowKategori(e.target.value);
	// };

	// const onChangeKategori = (e) => {
	// 	setShowKategori(e.target.value);
	// };

	const onChangeStatus = (e) => {
		setValueStatus(e.target.value);
		console.log(e.target.value);
	};

	// console.log(showKategori);

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

	const getStatusJudul = () => {
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/statusjudul.php?function=showStatusJudul',
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

	console.log(formInput);

	const submitForm = (e) => {
		e.preventDefault();

		const saveData = {
			JUDUL_PENAWARAN: formInput.judulpenawaran,
			ID_KATEGORI: valueKategori,
			KETENTUAN: formInput.ketentuan,
			ID_STATUS: valueStatus,
			NARAHUBUNG: formInput.narahubung,
		};
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/p3m/penawaranjudul.php?function=insertJudul',
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
						history.push('/admin/penawaranjudul');
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
						<h1>Tambah Data Penawaran Judul</h1>
						<div class='section-header-breadcrumb'>
							<div class='breadcrumb-item active'>
								<Link to='/admin/penawaranjudul'>Data Pengmas</Link>
							</div>
							<div class='breadcrumb-item'>
								<Link to='/admin/penawaranjudul'>Penawaran Judul</Link>
							</div>
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
												name='judulpenawaran'
												onChange={onChangeInput}
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
										{/* <Stack sx={{ width: 300 }} size='small'>
											<AutoComplete id='kategori'/>
										</Stack> */}
									</div>
									<div class='form-group row mb-4'>
										<label class='col-form-label text-md-right col-12 col-md-3 col-lg-3'>
											Status
										</label>
										<div class='col-sm-12 col-md-7'>
											<select
												class='form-control selectric'
												onChange={onChangeStatus}
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
											<textarea name='ketentuan' onChange={onChangeInput} />
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

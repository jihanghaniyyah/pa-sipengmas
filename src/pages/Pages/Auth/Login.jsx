import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../assets/img/logo/logosipengmas.png';
// import $ from 'jquery';

export default function Login() {
	// componentDidMount() {
	// 	$('.needs-validation').submit(function(event) {
	// 		let form = $(this);
	// 		if (form[0].checkValidity() === false) {
	// 			event.preventDefault();
	// 			event.stopPropagation();
	// 		}
	// 		form.addClass('was-validated');
	// 	});
	// }

	let history = useHistory();

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	function login(e) {
		e.preventDefault();
		const bodyData = {
			dataEmail: email,
			dataPassword: password,
		};

		fetch(`https://project.mis.pens.ac.id/mis116/sipengmas/auth.php`, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(bodyData),
			cache: 'no-cache',
			mode: 'cors',
			redirect: 'follow',
			referrer: 'no-referrer',
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.status == 'Dosen') {
					history.push('/dashboard');
				}
			});
	}

	return (
		<div id='app'>
			<section className='section'>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4'>
							<div className='login-brand'>
								<img
									src={Logo}
									alt='logo'
									width='100'
									className='shadow-light rounded-circle'
								/>
							</div>

							<div className='card card-primary'>
								<div className='card-header'>
									<h4>Login</h4>
								</div>

								<div className='card-body'>
									<form
										method='POST'
										action='#'
										noValidate
										className='needs-validation'
									>
										<div className='form-group'>
											<label htmlFor='email'>NetID*</label>
											<input
												id='exampleInputEmail'
												type='email'
												className='form-control'
												name='email'
												tabIndex='1'
												required
												autoFocus
												onChange={(e) => setEmail(e.target.value)}
											/>
											<div className='invalid-feedback'>
												Please fill in your NetID
											</div>
										</div>

										<div className='form-group'>
											<div className='d-block'>
												<label htmlFor='password' className='control-label'>
													Password*
												</label>
											</div>
											<input
												id='exampleInputPassword'
												type='password'
												className='form-control'
												name='password'
												tabIndex='2'
												required
												onChange={(e) => setPassword(e.target.value)}
											/>
											<div className='invalid-feedback'>
												please fill in your password
											</div>
										</div>

										<div className='form-group'>
											<button
												onClick={login}
												type='submit'
												className='btn btn-primary btn-lg btn-block'
												tabIndex='4'
											>
												Login
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

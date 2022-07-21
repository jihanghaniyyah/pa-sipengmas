import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

export class UserDropdown extends Component {
	render() {
		//Nama User
		const cookies = new Cookies();

		const username = cookies.get('username');
		console.log(username);
		const { userDetail } = this.props;
		return (
			<li className='dropdown'>
				<Link
					to='#'
					data-toggle='dropdown'
					className='nav-link dropdown-toggle nav-link-lg nav-link-user'
				>
					<div className='d-sm-none d-lg-inline-block'>Hi, {username}</div>
				</Link>
				<div className='dropdown-menu dropdown-menu-right'>
					<Link to='/mis116/login' className='dropdown-item has-icon text-danger'>
						<i className={userDetail.logoutIcon} /> {userDetail.logoutTitle}
					</Link>
				</div>
			</li>
		);
	}
}

export default UserDropdown;

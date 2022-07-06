// import React from 'react';
// import Dashboard from '../../Dosen/Dashboard';
// import { useHistory } from 'react-router-dom';

// const useAuth = () => {
// 	const _user = localStorage.getItem('user');
// 	const user = JSON.parse(_user);
// 	console.log(user);

// 	if (user) {
// 		return {
// 			auth: true,
// 			role: user.TIPE_ROLE,
// 		};
// 	} else {
// 		return {
// 			auth: false,
// 			role: null,
// 		};
// 	}
// };

// const ProtectedRoutes = (props) => {
// 	let history = useHistory();
// 	const { auth, role } = useAuth();

// 	const roleType = 'Dosen' || 'P3M';

// 	if (props.roleRequired === roleType) {
// 		return auth ? (
// 			props.roleRequired === r0le ? (
// 				<Dashboard />
// 			) : (
// 				history.push('/login')
// 			)
// 		) : (
// 			history.push('/login')
// 		);
// 	} else {
// 		return auth ? <Dashboard /> : history.push('/login');
// 	}
// };

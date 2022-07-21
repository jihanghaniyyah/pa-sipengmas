import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer } from './components/admin';
import { useLocation, Redirect } from 'react-router-dom';

// Dosen
import Dashboard from './pages/Dosen/Dashboard';
import Login from './pages/Dosen/Login/Login';

// P3M
import DashboardP3M from './pages/P3M/Dashboard';
import PengmasProdiAdmin from './pages/P3M/DataPengmas/Prodi';
import ResearchCenterAdmin from './pages/P3M/DataPengmas/ResearchCenter';
import ResearchGroupAdmin from './pages/P3M/DataPengmas/ResearchGroup';
import PenawaranJudulAdmin from './pages/P3M/DataPengmas/PenawaranJudul';
import DataMandiriAdmin from './pages/P3M/DataPengmas/Mandiri';
import DetailDataPengmasAdmin from './pages/P3M/DetailData/DataPengmas';
import DetailDataPenawaranJudulAdmin from './pages/P3M/DetailData/PenawaranJudul';
import DetailPengmasMandiriAdmin from './pages/P3M/DetailData/DataPengmas/Mandiri';
import TambahPenawaranJudulAdmin from './pages/P3M/DataPengmas/PenawaranJudul/TambahData';
import TambahPengmasProdi from './pages/P3M/DataPengmas/Prodi/TambahData';
import TambahPengmasResearchCenter from './pages/P3M/DataPengmas/ResearchCenter/TambahData';
import TambahPengmasResearchGroup from './pages/P3M/DataPengmas/ResearchGroup/TambahData';
import TambahPengmasMandiriAdmin from './pages/P3M/DataPengmas/Mandiri/TambahData';
import EditPenawaranJudulAdmin from './pages/P3M/DataPengmas/PenawaranJudul/EditJudul';

const history = React.lazy(() => import('./history'));

function App() {
	let location = useLocation().pathname;
	let locationSplit = location.split('/');
	let locationParent = locationSplit[1];
	let WithoutRouter = ['login', 'admin'];

	return (
		<div className='App'>
			<>
				{!WithoutRouter.includes(locationParent) ? <>{/* <Header />
						<Sidebar /> */}</> : ''}
				<React.Suspense fallback={<h1>Still Loading…</h1>}>
					<Switch history={history}>
						{/* Dosen */}
						<Redirect exact from='/' to='/mis116/login' />
						<Route path='/mis116/dashboard' component={Dashboard}></Route>
						<Route path='/mis116/login' component={Login} />

						{/* P3M */}
						<Route path='/mis116/admin/dashboard' component={DashboardP3M} />
						<Route path='/mis116/admin/dataprodi' component={PengmasProdiAdmin} />
						<Route
							path='/mis116/admin/researchcenter'
							component={ResearchCenterAdmin}
						/>
						<Route path='/mis116/admin/researchgroup' component={ResearchGroupAdmin} />
						<Route path='/mis116/admin/mandiri' component={DataMandiriAdmin} />
						<Route
							path='/mis116/admin/penawaranjudul'
							component={PenawaranJudulAdmin}
						/>
						<Route
							path='/mis116/admin/detaildatapengmas/:id'
							component={DetailDataPengmasAdmin}
						/>
						<Route
							path='/mis116/admin/detaildatapenawaranjudul/:id'
							component={DetailDataPenawaranJudulAdmin}
						/>
						<Route
							path='/mis116/admin/detaildata/:id'
							component={DetailPengmasMandiriAdmin}
						/>
						<Route
							path='/mis116/admin/tambahdataprodi'
							component={TambahPengmasProdi}
						/>
						<Route
							path='/mis116/admin/tambahdataresearchcenter'
							component={TambahPengmasResearchCenter}
						/>
						<Route
							path='/mis116/admin/tambahdataresearchgroup'
							component={TambahPengmasResearchGroup}
						/>
						<Route
							path='/mis116/admin/tambahdata/penawaranjudul'
							component={TambahPenawaranJudulAdmin}
						/>
						<Route
							path='/mis116/admin-edit-penawaranjudul'
							component={EditPenawaranJudulAdmin}
						/>
						<Route
							path='/mis116/admin/tambahdatamandiri'
							component={TambahPengmasMandiriAdmin}
						/>
					</Switch>
				</React.Suspense>
				<Footer />

				<React.Suspense>
					<Switch>
						<Route></Route>
					</Switch>
				</React.Suspense>
			</>
		</div>
	);
}

export default App;

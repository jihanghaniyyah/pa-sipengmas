import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Header, Footer, Sidebar } from './components/admin';
import { useLocation, Redirect } from 'react-router-dom';

// Dosen
import Dashboard from './pages/Dosen/Dashboard';
import Login from './pages/Dosen/Login/Login';
import PengmasProdi from './pages/Dosen/DataPengmas/Prodi';
import ResearchCenter from './pages/Dosen/DataPengmas/ResearchCenter';
import ResearchGroup from './pages/Dosen/DataPengmas/ResearchGroup';
import PenawaranJudul from './pages/Dosen/DataPengmas/PenawaranJudul';
import DetailDataPengmas from './pages/Dosen/DetailData/DataPengmas';
import DetailDataPenawaranJudul from './pages/Dosen/DetailData/PenawaranJudul';

// P3M
import DashboardP3M from './pages/P3M/Dashboard';
import PengmasProdiAdmin from './pages/P3M/DataPengmas/Prodi';
import DetailDataPengmasAdmin from './pages/P3M/DetailData/DataPengmas';
import ResearchCenterAdmin from './pages/P3M/DataPengmas/ResearchCenter';
import ResearchGroupAdmin from './pages/P3M/DataPengmas/ResearchGroup';
import PenawaranJudulAdmin from './pages/P3M/DataPengmas/PenawaranJudul';
import DetailDataPenawaranJudulAdmin from './pages/P3M/DetailData/PenawaranJudul';
import TambahPenawaranJudulAdmin from './pages/P3M/DataPengmas/PenawaranJudul/TambahData';
import TambahPengmasProdi from './pages/P3M/DataPengmas/Prodi/TambahData';
import TambahPengmasResearchCenter from './pages/P3M/DataPengmas/ResearchCenter/TambahData';
import TambahPengmasResearchGroup from './pages/P3M/DataPengmas/ResearchGroup/TambahData';

const history = React.lazy(() => import('./history'));

function App() {
	let location = useLocation().pathname;
	let locationSplit = location.split('/');
	let locationParent = locationSplit[1];
	let WithoutRouter = ['login', 'admin', 'loginadmin'];

	return (
		<div className='App'>
			<>
				{!WithoutRouter.includes(locationParent) ? (
					<>
						<Header />
						<Sidebar />
					</>
				) : (
					''
				)}
				<React.Suspense fallback={<h1>Still Loading…</h1>}>
					<Switch history={history}>
						{/* Dosen */}
						<Redirect exact from='/' to='/login' />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/login' component={Login} />
						<Route path='/data/prodi' component={PengmasProdi} />
						<Route path='/data/researchcenter' component={ResearchCenter} />
						<Route path='/data/researchgroup' component={ResearchGroup} />
						<Route path='/data/penawaranjudul' component={PenawaranJudul} />
						<Route path='/data/detaildatapengmas/:id' component={DetailDataPengmas} />
						<Route
							path='/penawaranjudul/detaildatapenawaranjudul/:id'
							component={DetailDataPenawaranJudul}
						/>

						{/* P3M */}
						<Route path='/admin/dashboard' component={DashboardP3M} />
						<Route path='/admin/dataprodi' component={PengmasProdiAdmin} />
						<Route path='/admin/researchcenter' component={ResearchCenterAdmin} />
						<Route path='/admin/researchgroup' component={ResearchGroupAdmin} />
						<Route path='/admin/penawaranjudul' component={PenawaranJudulAdmin} />
						<Route
							path='/admin/detaildatapengmas/:id'
							component={DetailDataPengmasAdmin}
						/>
						<Route
							path='/admin/detaildatapenawaranjudul/:id'
							component={DetailDataPenawaranJudulAdmin}
						/>
						<Route path='/admin/tambahdataprodi' component={TambahPengmasProdi} />
						<Route
							path='/admin/tambahdataresearchcenter'
							component={TambahPengmasResearchCenter}
						/>
						<Route
							path='/admin/tambahdataresearchgroup'
							component={TambahPengmasResearchGroup}
						/>
						<Route
							path='/admin/tambahdata/penawaranjudul'
							component={TambahPenawaranJudulAdmin}
						/>
					</Switch>
				</React.Suspense>
				<Footer />
			</>
		</div>
	);
}

export default App;

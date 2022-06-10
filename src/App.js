import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Header, Footer, Sidebar } from './components/admin';

// import OwlCarousel from "./pages/Modules/OwlCarousel";
// import Sparkline from "./pages/Modules/Sparkline";
// import SweetAlert from "./pages/Modules/SweetAlert";
// import Toastr from "./pages/Modules/Toastr";
// import VectorMap from "./pages/Modules/VectorMap";
// import WeatherIcon from "./pages/Modules/WeatherIcon";
import { useLocation } from 'react-router-dom';
// import Subscribe from "./pages/Pages/Utilities/Subscribe";
// import Contact from "./pages/Pages/Utilities/Contact";
// import Invoice from "./pages/Pages/Utilities/Invoice";
// import TransparentSidebar from "./pages/Strater/TransparentSidebar";
// import Profile from "./pages/Pages/Features/Profile";
// import SettingDetail from "./pages/Pages/Features/SettingDetail";
// import Settings from "./pages/Pages/Features/Settings";
// import Tickets from "./pages/Pages/Features/Tickets";
// import Calender from "./pages/Modules/Calender";
// import Chart from "./pages/Modules/Chart";
// import DataTables from "./pages/Modules/DataTables";
// import Flag from "./pages/Modules/Flag";
// import FontAwesome from "./pages/Modules/FontAwesome";
// import IonIcons from "./pages/Modules/IonIcons";
// import Error403 from "./pages/Pages/Errors/403";
// import Error404 from "./pages/Pages/Errors/404";
// import Error500 from "./pages/Pages/Errors/500";
// import Error503 from "./pages/Pages/Errors/503";
// import Activities from "./pages/Pages/Features/Activities";
// import PostCreate from "./pages/Pages/Features/PostCreate";
// import Posts from "./pages/Pages/Features/Posts";

// P3M
import Dashboard from './pages/Dosen/Dashboard';
import Login from './pages/Dosen/Login';
import PengmasProdi from './pages/Dosen/DataPengmas/Prodi';
import PTDalamNegeri from './pages/Dosen/DataPengmas/PTDalamNegeri';
import PTLuarNegeri from './pages/Dosen/DataPengmas/PTLuarNegeri';
import PenawaranJudul from './pages/Dosen/DataPengmas/PenawaranJudul';
import DetailDataPenawaranJudul from './pages/Dosen/DetailData/PenawaranJudul';
import DetailDataPengmasProdi from './pages/Dosen/DetailData/Prodi';
import DetailDataPTDalamNegeri from './pages/Dosen/DetailData/PTDalamNegeri';
import DetailDataPTLuarNegeri from './pages/Dosen/DetailData/PTLuarNegeri';

// P3M
// import PenawaranJudulP3M from './pages/P3M/DataPengmas/PenawaranJudul';
// import TambahPenawaranJudul from './pages/P3M/DataPengmas/PenawaranJudul/TambahData';

// import DefaultLayoutPage from './pages/Strater/DefaultLayoutPage';
// import BootstrapAlert from './pages/Strater/Bootstrap/BootstrapAlert';
// import BootstrapBadge from './pages/Strater/Bootstrap/BootstrapBadge';
// import BootstrapButtons from './pages/Strater/Bootstrap/BootstrapButtons';
// import BootstrapCard from './pages/Strater/Bootstrap/BootstrapCard';
// import BootstrapCarousel from './pages/Strater/Bootstrap/BootstrapCarousel';
// import BootstrapBreadcrumb from './pages/Strater/Bootstrap/BootstrapBreadcrumb';
// import BootstrapCollapse from './pages/Strater/Bootstrap/BootstrapCollapse';
// import BootstrapDropDown from './pages/Strater/Bootstrap/BootstrapDropDown';
// import BootstrapForm from './pages/Strater/Bootstrap/BootstrapForm';
// import BootstrapListGroup from './pages/Strater/Bootstrap/BootstrapListGroup';
// import BootstrapMediaObject from './pages/Strater/Bootstrap/BootstrapMediaObject';
// import BootstrapModal from './pages/Strater/Bootstrap/BootstrapModal';
// import BootstrapNav from './pages/Strater/Bootstrap/BootstrapNav';
// import BootstrapNavbar from './pages/Strater/Bootstrap/BootstrapNavbar';
// import BootstrapPagination from './pages/Strater/Bootstrap/BootstrapPagination';
// import BootstrapProgress from './pages/Strater/Bootstrap/BootstrapProgress';
// import BootstrapTable from './pages/Strater/Bootstrap/BootstrapTable';
// import BootstrapTooltip from './pages/Strater/Bootstrap/BootstrapTooltip';
// import BootstrapTypography from './pages/Strater/Bootstrap/BootstrapTypography';
// import BootstrapPopover from './pages/Strater/Bootstrap/BootstrapPopover';
// import CompArticle from './pages/Components/CompArticle';
// import CompAvatar from './pages/Components/CompAvatar';
// import CompChatbox from './pages/Components/CompChatbox';
// import CompEmptystate from './pages/Components/CompEmptystate';
// import CompGallery from './pages/Components/CompGallery';
// import CompHero from './pages/Components/CompHero';
// import CompMultipleupload from './pages/Components/CompMultipleupload';
// import CompPricing from './pages/Components/CompPricing';
// import CompStatics from './pages/Components/CompStatics';
// import CompTab from './pages/Components/CompTab';
// import CompTable from './pages/Components/CompTable';
// import CompUser from './pages/Components/CompUser';
// import CompWizard from './pages/Components/CompWizard';
// import Credit from './pages/Pages/Credits';
// import Login from './pages/Pages/Auth/Login';

// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));

// const Error403 = React.lazy(() => import('./pages/Pages/Errors/403'));
// const Error404 = React.lazy(() => import('./pages/Pages/Errors/404'));
// const Error500 = React.lazy(() => import('./pages/Pages/Errors/500'));
// const Error503 = React.lazy(() => import('./pages/Pages/Errors/503'));

// const Activities = React.lazy(() => import('./pages/Pages/Features/Activities'));
// const PostCreate = React.lazy(() => import('./pages/Pages/Features/PostCreate'));
// const Posts = React.lazy(() => import('./pages/Pages/Features/Posts'));
// const Profile = React.lazy(() => import('./pages/Pages/Features/Profile'));

// const SettingDetail = React.lazy(() => import('./pages/Pages/Features/SettingDetail'));
// const Settings = React.lazy(() => import('./pages/Pages/Features/Settings'));
// const Tickets = React.lazy(() => import('./pages/Pages/Features/Tickets'));
// const Subscribe = React.lazy(() => import('./pages/Pages/Utilities/Subscribe'));

// const Invoice = React.lazy(() => import('./pages/Pages/Utilities/Invoice'));
// const TransparentSidebar = React.lazy(() => import('./pages/Strater/TransparentSidebar'));
// const Contact = React.lazy(() => import('./pages/Pages/Utilities/Contact'));

const history = React.lazy(() => import('./history'));

function App() {
	let location = useLocation().pathname;

	let locationSplit = location.split('/');
	let locationParent = locationSplit[1];
	let WithoutRouter = ['auth', 'error', 'utilities', 'login'];

	// const RenderDataFullScreen = () => {
	//   if (location === "/auth/forget-password") {
	//     return <ForgotPassword />;
	//   } else if (location === "/auth/register") {
	//     return <Register />;
	//   } else if (location === "/auth/reset-password") {
	//     return <ResetPassword />;
	//   } else if (location === "/error/503") {
	//     return <Error503 />;
	//   } else if (location === "/error/403") {
	//     return <Error403 />;
	//   } else if (location === "/error/404") {
	//     return <Error404 />;
	//   } else if (location === "/error/500") {
	//     return <Error500 />;
	//   } else if (location === "/utilities/subscribe") {
	//     return <Subscribe />;
	//   } else if (location === "/utilities/contact") {
	//     return <Contact />;
	//   }
	// };

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
						{/* P3M */}
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/login' component={Login} />
						<Route path='/data/prodi' component={PengmasProdi} />
						<Route path='/prodi/detaildataprodi' component={DetailDataPengmasProdi} />
						<Route path='/data/ptdalamnegeri' component={PTDalamNegeri} />
						<Route
							path='/ptdalamnegeri/detaildataptdalamnegeri'
							component={DetailDataPTDalamNegeri}
						/>

						<Route path='/data/ptluarnegeri' component={PTLuarNegeri} />
						<Route
							path='/ptluarnegeri/detaildataptluarnegeri'
							component={DetailDataPTLuarNegeri}
						/>
						<Route path='/data/penawaranjudul' component={PenawaranJudul} />
						<Route
							path='/penawaranjudul/detaildatapenawaranjudul'
							component={DetailDataPenawaranJudul}
						/>

						{/* P3M */}
						{/* <Route path='/data/daftarpenawaranjudul' component={PenawaranJudulP3M} /> */}
						{/* <Route path='/penawaranjudul/tambahdata' component={TambahPenawaranJudul} /> */}

						{/* 
						<Route path='/layout/default' component={DefaultLayoutPage} />
						<Route path='/layout/transparent-sidebar' component={TransparentSidebar} />
						<Route path='/bootstrap/alert' component={BootstrapAlert} />
						<Route path='/bootstrap/badge' component={BootstrapBadge} />
						<Route path='/bootstrap/breadcrumb' component={BootstrapBreadcrumb} />
						<Route path='/bootstrap/button' component={BootstrapButtons} />
						<Route path='/bootstrap/card' component={BootstrapCard} />
						<Route path='/bootstrap/carousel' component={BootstrapCarousel} />
						<Route path='/bootstrap/collapse' component={BootstrapCollapse} />
						<Route path='/bootstrap/dropdown' component={BootstrapDropDown} />
						<Route path='/bootstrap/form' component={BootstrapForm} />
						<Route path='/bootstrap/list-group' component={BootstrapListGroup} />
						<Route path='/bootstrap/media-object' component={BootstrapMediaObject} />
						<Route path='/bootstrap/modal' component={BootstrapModal} />
						<Route path='/bootstrap/nav' component={BootstrapNav} />
						<Route path='/bootstrap/navbar' component={BootstrapNavbar} />
						<Route path='/bootstrap/pagination' component={BootstrapPagination} />
						<Route path='/bootstrap/popover' component={BootstrapPopover} />
						<Route path='/bootstrap/Progress' component={BootstrapProgress} />
						<Route path='/bootstrap/table' component={BootstrapTable} />
						<Route path='/bootstrap/tooltip' component={BootstrapTooltip} />
						<Route path='/bootstrap/typography' component={BootstrapTypography} />
						<Route path='/component/article' component={CompArticle} />
						<Route path='/component/avatar' component={CompAvatar} />
						<Route path='/component/chat-box' component={CompChatbox} />
						<Route path='/component/empty-state' component={CompEmptystate} />
						<Route path='/component/gallery' component={CompGallery} />
						<Route path='/component/hero' component={CompHero} />
						<Route path='/component/multiple-upload' component={CompMultipleupload} />
						<Route path='/component/pricing' component={CompPricing} />
						<Route path='/component/statistic' component={CompStatics} />
						<Route path='/component/tab' component={CompTab} />
						<Route path='/component/table' component={CompTable} />
						<Route path='/component/user' component={CompUser} />
						<Route path='/component/wizard' component={CompWizard} />
						<Route path='/feature/activities' component={Activities} />
						<Route path='/feature/post-create' component={PostCreate} />
						<Route path='/feature/posts' component={Posts} />
						<Route path='/feature/profile' component={Profile} />
						<Route path='/feature/Settings' component={Settings} />
						<Route path='/feature/setting-detail' component={SettingDetail} />
						<Route path='/feature/tickets' component={Tickets} />
						<Route path='/credit' component={Credit} />
						<Route path='/utilitie/Invoice' component={Invoice} />
						<Route path='/auth/login' component={Login} />
						<Route path='/error/503' component={Error503} />
						<Route path='/error/404' component={Error404} />
						<Route path='/error/403' component={Error403} />
						<Route path='/error/503' component={Error500} />
						<Route path='/utilities/subscribe' component={Subscribe} />
						<Route path='/utilities/contact' component={Contact} /> */}
					</Switch>
				</React.Suspense>
				<Footer />
			</>
		</div>
	);
}

export default App;

import React from 'react';
import StatisticBar from './Statistic/Bar';
import StatisticLine from './Statistic/Line';
import RecentPost from './RecentPost';

export default function Dashboard() {
	return (
		<div className='main-content'>
			<section className='section'>
				<div className='section-header'>
					<h1>Statistik Data Pengabdian Masyarakat PENS</h1>
				</div>
				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
						<div className='card card-statistic-1'>
							<div className='card-icon bg-primary'>
								<i className='far fa-file'></i>
							</div>
							<div className='card-wrap'>
								<div className='card-header'>
									<h4>Total Data</h4>
								</div>
								<div className='card-body'>100</div>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
						<div className='card card-statistic-1'>
							<div className='card-icon bg-success'>
								<i className='far fa-file'></i>
							</div>
							<div className='card-wrap'>
								<div className='card-header'>
									<h4>Approved Data</h4>
								</div>
								<div className='card-body'>90</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-6 col-md-12 col-12 col-sm-12'>
						<div className='card'>
							<StatisticBar />
						</div>
					</div>
					<div className='col-lg-6 col-md-12 col-12 col-sm-12'>
						<div className='card'>
							<StatisticLine />
						</div>
					</div>
				</div>
				<div>
					<RecentPost />
				</div>
			</section>
		</div>
	);
}

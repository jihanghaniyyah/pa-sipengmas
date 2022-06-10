import React from 'react';
import './index.css';
import { Card, Col, Row } from 'react-bootstrap';
import StatisticBar from './Bar';
import StatisticLine from './Line';

export default function Statistic() {
	return (
		<div>
			<Card body className='statistic-title mb-4'>
				Statistik Data Pengabdian Masyarakat PENS
			</Card>
			<Row className='mb-3'>
				<Col>
					<StatisticBar />
				</Col>
				<Col>
					<StatisticLine />
				</Col>
			</Row>
		</div>
	);
}

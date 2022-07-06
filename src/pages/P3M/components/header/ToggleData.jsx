import React, { Component } from 'react';
import ToggleContent from './ToggleContent';
import { Link } from 'react-router-dom';

export class ToggleData extends Component {
	render() {
		const { data } = this.props;

		return (
			<li className='dropdown dropdown-list-toggle'>
				<Link
					to='#'
					data-toggle='dropdown'
					className={`nav-link nav-link-lg ${data.toggleName} beep`}
				>
					<i className={data.iconName} />
				</Link>
				<div className='dropdown-menu dropdown-list dropdown-menu-right'>
					<div className='dropdown-header'>
						{data.headerLeft}
						<div className='float-right'>
							<Link to='#'>{data.headerRight}</Link>
						</div>
					</div>
					<ToggleContent data={data} />
					<div className='dropdown-footer text-center'>
						<Link to='#'>
							{data.bottomMsg}
							<i className={data.bottomMsgCls} />
						</Link>
					</div>
				</div>
			</li>
		);
	}
}

export default ToggleData;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Search extends Component {
	searchResults = (obj) => {
		let comp;
		if (obj.id === 1) {
			comp = obj.children.map((data, idata) => {
				return (
					<div key={`${idata}${obj.id}`} className='search-item'>
						<Link to='#'>{data.title}</Link>
						<Link to='#' className='search-close'>
							<i className='fas fa-times' />
						</Link>
					</div>
				);
			});
		} else if (obj.id === 2) {
			comp = obj.children.map((data, idata) => {
				return (
					<div key={`${idata}${obj.id}`} className='search-item'>
						<Link to='#'>
							<img className='mr-3 rounded' width='30' src={data.img} alt='product' />
							{data.title}
						</Link>
					</div>
				);
			});
		} else if (obj.id === 3) {
			comp = obj.children.map((data, idata) => {
				return (
					<div key={`${idata}${obj.id}`} className='search-item'>
						<Link to='#'>
							<div className={`search-icon ${data.backCls} text-white mr-3`}>
								<i className={data.icode} />
							</div>
							{data.title}
						</Link>
					</div>
				);
			});
		}

		return comp;
	};

	render() {
		const { searchResultData } = this.props;

		return (
			<>
				<div className='search-element'>
					<input
						className='form-control'
						type='search'
						placeholder='Search'
						aria-label='Search'
						data-width='250'
					/>
					<button className='btn' type='submit'>
						<i className='fas fa-search' />
					</button>
					<div className='search-backdrop' />
					<div className='search-result'>
						{searchResultData.map((content, icontent) => {
							let comp;

							comp = (
								<React.Fragment key={icontent}>
									<div key={icontent} className='search-header'>
										{content.headerTitle}
									</div>

									{this.searchResults(content)}
								</React.Fragment>
							);

							return comp;
						})}
					</div>
				</div>
			</>
		);
	}
}

export default Search;

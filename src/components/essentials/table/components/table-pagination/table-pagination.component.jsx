import React from 'react';
import './table-pagination.styles.scss';

//	Component Imports
import SVG from 'components/essentials/svg/svg.component';


class TPagination extends React.Component {
	state = {
		page:  1,
		show: this.props.show,
		data: [],
		list: [],
	};

	async handle_Pagination (toPage,last,pagList,newPag=[]) {
		let { show } = this.state;
		let pagination = [...Array(show).keys()];

		last  = Math.round(Object.keys(this.props.data).length / show);
		pagList = [...Array(last+1).keys()].slice(1);

		if (pagList.indexOf(toPage) > -1) {

			(pagination).map((e) => {
				e = ( e + ((toPage * show) - show));
				newPag.push(e);
				
				return newPag;
			});

			await this.setState({
				page:	toPage,
				list:	newPag,
			});

		} else return null;

		return this.props.onChange(this.state.list);
	};

	async handle_Reset () {
		await this.setState({
			page: 1,
			show: this.props.show,
			data: this.props.data,
			list: [...Array(this.props.show).keys()],
		});

		return this.props.onChange(this.state.list);
	};

	render_TPage = (show,full,pagList,last) => {

		full = Math.round(Object.keys(this.props.data).length / show);
		last = (full < 1) ? ( 1 ) : ( full );
		pagList = [...Array(last+1).keys()].slice(1);
		let { page } = this.state;

		console.log( 'state.page:\n',this.state );

		return (
			<div className={'table-pagination'}>

				<span className={`pagination-item first`}
					onMouseDown={() => this.handle_Pagination(page-1)}
				> <SVG icon={'Arrow'}/> </span>

				{ (pagList).map( (e,i) => {

					let show = (e === page) ? 'selected-page' : null

					if (e > (page-3) && e < (page+3) ) {
						return (
							<span key={i}
								className={`pagination-item ${show}`}
								onMouseDown={() => this.handle_Pagination(e)}
							> {e} </span>
						);
					} else return null;
				})}

				<span className={`pagination-item last`}
					onMouseDown={() => this.handle_Pagination(page+1)}
				> <SVG icon={'Arrow'}/> </span>

			</div>
		);
	};

	async componentDidMount () {
		await this.setState({
			page: 1,
			show: this.props.show,
			data: this.props.data,
			list: [...Array(this.props.show).keys()],
		});
	};

	render () {
		//	props : [ show, data, onChange ];
		return this.render_TPage(this.props.show);
	};
};


export default ( TPagination );
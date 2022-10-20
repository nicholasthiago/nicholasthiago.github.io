import React from 'react';
import './table-head.styles.scss';


class THead extends React.Component {
	state = {};

	handle_Checkbox = () => {
		return this.props.onCheckAll();
	};

	render_THead = (data) => {
		try {
			let ref = (this.props.head) ? (this.props.head) : (data);
			let refH = (!this.props.head) ? (Object.values(ref)[0]) : (null);

			return (
				<thead>
					<tr>
					{ 	(this.props.checkbox)
						? ( <th className={'table-checkbox'}><span
								className={`body table-checkbox-all`}
								onMouseDown={() => this.handle_Checkbox()}>
							</span></th> ) : null
					}

					{	(this.props.head)
						? (
							Object.entries(ref).map( (key,i) => {
								let txt = ( (key[1]).replace(/[^a-zA-Z ]/g, ' ') ).toLowerCase();
								return ( <th key={i}> {txt} </th> )})
						) : (
							Object.keys(refH).map( (key,i) => {
								let txt = ( (key).replace(/[^a-zA-Z ]/g, ' ') ).toLowerCase();
								return ( <th key={i}> {txt} </th> )})
						)
					}
					</tr>
				</thead>
			);

		} catch { return null };
	};

	render () {
		let { data, checkbox } = this.props;

		//	props : [ data, checkbox ];
		return this.render_THead(data,checkbox);
	};
};


export default ( THead );
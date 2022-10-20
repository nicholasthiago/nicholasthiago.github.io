import React from 'react';
import './table-body.styles.scss';

//import * as mTools from 'utils/tools-crypto/multi-tools';


class TBody extends React.Component {
	state = {};


	// --- Handle Functions --- //

		handle_CheckBox = (index) => {
			return this.props.onCheck(index);
		};

		handle_Options = (data,e) => {
			return this.props.onOptions(data,e);
		};

		handle_ItemSelect = (data,index) => {
			return this.props.onItemSelect(data,index);
		};

	// ------------------------ //


	// --- Handle Functions --- //

		render_TRow = (data,index) => {
			let keyList = (this.props.head) ? (this.props.head) : (Object.keys(data));

			// console.log( mTools.isDate('2017-10-01 00:00:00+00:00') );

			return (
				<tr key={index} className={`row-${index} ${(index%2 === 0) ? 'row-ying' : 'row-yang'}`}
					onContextMenu={(e) => this.handle_Options(data,e)}
					onMouseDown={() => this.handle_ItemSelect(data,index)}>

					{ 	(this.props.checkbox)
						? ( <td className={'table-checkbox'}><span
								className={`table-checkbox cbox-${index}`}
								onMouseDown={() => this.handle_CheckBox(index)}>
							</span></td> ) : null
					}

					{ Object.values(keyList).map( (key) => {

						return Object.entries(data).map( (item,i) => {

							if (item[0] === key) {

								switch(true) {

									case ( ['DATE_ULT_PED','DTVENCLIMCRED','DATA','DATE','VENCIMENTO'].indexOf(item[0]) > -1 ):
										// toLocaleString 		=> DD/MM/YYYY
										// toLocaleDateString 	=> DD/MM/YYYY HH:MM:SS
										let date = ( new Date(item[1]) ).toLocaleDateString();

										return (
											<td key={i}> {date.substring(0,99)} </td>
										);

									case ( ['PRECO','PRICE','TOTAL'].indexOf(item[0]) > -1 ):
										return (
											<td key={i}> {item[1].toFixed(2)} </td>
										);

									case ( typeof(key[1]) === 'boolean'):
										return (
											<td key={i}> <div className={`bool-${item[1].toString()}`}></div></td>
										);

									default:
										let txt = item[1].replace(/(\r\n|\n|\r)/gm,'');
										return (
											<td key={i}> {txt.substring(0,99)} </td>
										);
								};

							} else return null;
						});
					})}
				</tr>
			);
		};

		render_TBody = (data) => {
			try {
				return (
					<tbody>
					{ Object.values(data).map( (e,index) => {
						if ((this.props.pagination).indexOf(index) > -1) {

							return this.render_TRow(e,index);

						} else return null;
					})}
					</tbody>
				);
			} catch { return null };
		};

	// ------------------------ //


	render () {
		let { data } = this.props;

		//	props : [ data, checkbox, pagination ];
		return this.render_TBody(data);
	};
};

export default ( TBody );
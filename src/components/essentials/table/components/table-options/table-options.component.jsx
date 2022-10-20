import React from 'react';
import './table-options.styles.scss';


class TOptions extends React.Component {
	state = {
		display:'none',
	};

	handle_Display = (display) => {
		if (this.props.disable !== false) {

			if (display !== 'flex') {
				return this.setState({ display:'flex' });
			} else {
				return this.setState({ display:'none' });
			};

		} else { return null };
	};

	async handle_Options (type) {
		switch(type) {

			case 'new':
				await this.props.onNew();
				return this.setState({ display:'none' });
			
			case 'edit':
				await this.props.onEdit();
				return this.setState({ display:'none' });
			
			case 'delete':
				await this.props.onDelete();
				return this.setState({ display:'none' });
			
			default:
				await this.props.onView();
				return this.setState({ display:'none' });
		};
	};

	render_TOptions = (disable) => {
		let { display } = this.state;

		return (
			<div className={'options-wrapper'}>

				<button className={`options-button ${(!disable) ? 'disabled' : ''}`}
					onMouseDown={() => this.handle_Display(display)}>
					{'Options'} </button>

				<div className={'options-menu'}
					style={{ display:(this.state.display) }}>
					<h3 onMouseDown={() => this.handle_Options('new')}>
						{'Novo'} </h3>
					<h3 onMouseDown={() => this.handle_Options('view')}>
						{'Ver'} </h3>
					<h3 onMouseDown={() => this.handle_Options('edit')}>
						{'Editar'} </h3>
					<h3 onMouseDown={() => this.handle_Options('delete')}>
						{'Excluir'} </h3>
				</div>
			</div>
		);
	};

	componentDidMount (self,el) {
		self = this;

		el = document.querySelector('div.options-wrapper');
		el.addEventListener('focusout', function(){
			self.setState({ display:'none' });
		});
	};

	render () {

		//	props : [ disable, onView(), onEdit(), onDelete() ];
		return this.render_TOptions(this.props.disable);
	};
};

export default ( TOptions );
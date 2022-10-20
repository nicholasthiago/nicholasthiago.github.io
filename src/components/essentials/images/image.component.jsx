import React from 'react';

class Image extends React.Component {
	state = {
		error: false,
	};


	async handle_Error () {
		if (!this.state.error) {
			await this.setState({
				error: true,
			});

			try {
				this.props.onError();
			} catch { return null };
		};
	};


	render_Image = src => {

		if (
			src !== '' &&
			this.state.error !== true
		) {
			return <img src={src}
				alt={this.props.alt}
				onError={() => this.handle_Error()}
				draggable={false}
				className={this.props.className}
				onMouseDown={this.props.onMouseDown} />

		} else {
			String(this.props.msg);

			let cln = (this.props.className) ? (this.props.className) : ('');
			let msg = (this.props.msg) ? (this.props.msg) : ('imagem indisponível');

			return <div className={`img-error ${cln}`}> <h3>{msg}</h3> </div>
		};
	};

	render () {
		// props : [ src , alt , msg , className ]
		return this.render_Image(this.props.src)
	};
};

export default Image;
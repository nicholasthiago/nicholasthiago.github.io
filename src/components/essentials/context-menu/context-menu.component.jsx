import React from 'react';
import './context-menu.styles.scss';


class ContextMenu extends React.Component {
	state = { x:0, y:0, visible:false };

	render_ContextMenu = () => {
		return (
			<div> {'context-menu'} </div>
		);
	};

	returnMenu(items){
		var myStyle = {
			'top': `${this.state.y}px`,
			'left':`${this.state.x+5}px`,
			'position': 'absolute',
		}
		
		return (
		<div className={'custom-context'} style={myStyle}>
			{items.map((item, index, arr) =>{
				if (arr.length-1 === index) {
					return <div key={index} className={'custom-context-item-last'}>{item.label}</div>
				}else{
					return <div key={index} className={'custom-context-item'}>{item.label}</div>
				}
			})}
		</div> );
	}

	componentDidMount () {
		let self = this;

		document.addEventListener('contextmenu', function(event){
			event.preventDefault();
			const clickX = event.clientX;
			const clickY = event.clientY;
			self.setState({ visible:true, x:clickX, y:clickY });
		});

		document.addEventListener('click', function(event){
			event.preventDefault();
			self.setState({ visible:false, x:0, y:0 });
		});
	};

	render () {
		return this.render_ContextMenu();
	};
};


export default ( ContextMenu );
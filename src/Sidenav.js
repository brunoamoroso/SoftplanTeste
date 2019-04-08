import React from 'react';
import './globalStyles.css';
import allProcessIcon  from './resources/icons/Bookmarks.svg';
import addTagIcon from './resources/icons/AddTag.svg';


class Sidenav extends React.Component{
	constructor(){
		super();
		this.state = {
			isHidden: true,
		};

		this.toggleForm = this.toggleForm.bind(this);
	}

	toggleForm(){
		this.setState({isHidden: !this.state.isHidden});
		document.getElementById("newTag").focus();
	}

	render(){
		const styles = {
			sidenav:{
				paddingTop: 20,
				width: 220,
				height: 'calc(100% - 68px)',
				position: 'absolute',
				top: 48,
				backgroundColor: '#F4F4F4',
				color: '#808080',
			},

			listHeader:{
				textAlign: 'left',
				fontSize: 12,
				fontWeight: 600,
			},

			resetLists:{
				textDecoration: 'none',
				listStyleType: 'none',
				padding: 0,
			},

			icon:{
				height: 16,
				paddingRight: 8,
				color: '#808080',
			},

			itemList:{
				display: 'inline-flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				fontSize: 14,
				width: 'calc(100% - 40px)',
			},

			tagLink:{
				display: 'inline-flex',
				flexDirection: 'row',
				alignItems: 'center',
			},

			addTagIcon: {
				width: 16,
				paddingRight: 8,
			},

			tagColor: {
				height: 6,
				width: 16,
				marginRight: 8,
				backgroundColor: '#F6742C',
			},
		}

		var shown = {display: this.state.isHidden ? "none" : "inline-flex"};
		var hidden = {display: this.state.isHidden ? "inline-flex" : "none"};

		return(
			<div style={styles.sidenav} >
				<div>
					<div className="Margins" style={styles.listHeader} >Processos</div>
					<ul style={styles.resetLists} >
						<li style={styles.itemList} >
							<div style={styles.tagLink} >
								<img style={styles.icon} src={allProcessIcon} />
								<p><b>Todos Processos</b></p>
							</div>
							<span><b>5</b></span>
						</li>
					</ul>
				</div>

				<div>
					<div className="Margins" style={styles.listHeader} >Etiquetas</div>
					<ul style={styles.resetLists} >

						<li style={styles.itemList} >
							<div style={styles.tagLink} >
								<div style={styles.tagColor}></div>
								<p>Energia Elétrica</p>
							</div>
							<span>0</span>
						</li>

						<li style={styles.itemList} >
							<form style={shown} onBlur={this.toggleForm.bind(this)}>
								<input id="newTag" type="text" placeholder="Nome da Etiqueta" />
							</form>

							<div style={{...styles.tagLink, ...hidden}} onClick={this.toggleForm.bind(this)} >
								<img style={styles.addTagIcon} src={addTagIcon} />
								<p>Criar Etiqueta</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidenav;
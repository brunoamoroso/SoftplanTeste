import React from 'react';
import addTagIcon from './resources/icons/AddTag.svg';
import folderIcon  from './resources/icons/Folder.svg';
import positiveIcon  from './resources/icons/Positive.svg';
import negativeIcon  from './resources/icons/Negative.svg';


class Processos extends React.Component{
	render(){
		const styles = {
			processosWrapper: {
				backgroundColor: '#FFF',
				display: 'flex',
				flexDirection: 'row',
				paddingLeft: 40,
				paddingTop: 20,
				paddingBottom: 20,
				textAlign: 'left',
				alignItems: 'center',
				justifyContent: 'space-between',
			},

			separator:{
				height: 50,
				width: 1,
				backgroundColor: '#E7E7E7',
				display: 'block',
			},

			tagWrapper:{
				paddingRight: 20,
				width: 350,
			},

			tag:{
				width: 16,
			},

			folder:{
				height: 16,
				paddingRight: 10,
			},

			folderWrapper:{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center', 
			},

			iconName:{
				width: 10,
				marginRight: 10,
			},

			iconNameSecond:{
				width: 10,
				marginLeft: 10,
			}
		}

		return(
			<div style={styles.processosWrapper}>
				<div>
					<div style={styles.folderWrapper}>
						<img style={styles.iconName} src={positiveIcon} /> 
						<p>Felipe Genuino</p>
					</div>

					<div>
						<p>Procediento Comum - <b>Requerimento de Reintegração de Posse</b></p>
					</div>

					<div>
						<p>0308735-46.2014.8.24.0023</p>
					</div>
				</div>

				<div style={styles.separator}></div>

				<div style={styles.folderWrapper} >
					<img style={styles.folder} src={folderIcon}/>
					<span>Abrir Pasta</span>
				</div>

				<div style={styles.separator}></div>

				<div style={styles.tagWrapper}>
					<img style={styles.tag} src={addTagIcon} />
				</div>
			</div>
		);
	}
}

export default Processos;
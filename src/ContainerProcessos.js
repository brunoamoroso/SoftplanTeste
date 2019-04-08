import React from 'react';
import Processos  from './Processos.js';

class ContainerProcessos extends React.Component{
	render(){
		const styles = {
			wrapper:{
				backgroundColor: '#EAEAEA',
				left: 220,
				height: 'calc(100% - 116px)', // 116 = 96 (Navbar + Searchbar) + 20 (PaddingTop)
				width: 'calc(100% - 300px)', //300 = 220 (Sidenav) + 40 (PaddingLeft Container) + 40 (PaddingRight Container)
				position: 'absolute',
				paddingLeft: 40,
				paddingTop: 20,
				paddingRight: 40,
			}
		}

		return(
			<div style={styles.wrapper}>
				<Processos />
			</div>
		);
	}
}

export default ContainerProcessos;
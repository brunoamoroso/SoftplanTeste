import React from 'react';
import './globalStyles.css';
import userIcon from './resources/icons/User.svg';


class Navbar extends React.Component{
	render(){
		const styles = {
			navbar:{
				height: 48,
				backgroundColor: '#0063B1',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			},

			appTitle:{
				textAlign: 'left',
				color: '#FFF',
				fontFamily: 'SegoeSB, SegoeRegular, sans-serif',
				fontWeight: 600
			},

			userCircle:{
				width: 32,
				height: 32,
				backgroundColor: '#FFF',
				borderRadius: 50,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			},

			userIcon:{
				width: 16,
				fill: '#0063B1',
			}
		}

		return(
			<div className='Margins' style={styles.navbar}>
				<span style={styles.appTitle}>APP</span>

				<div style={styles.userCircle}>
					<img style={styles.userIcon} src={userIcon} />
				</div>
			</div>
		);
	}
}

export default Navbar;
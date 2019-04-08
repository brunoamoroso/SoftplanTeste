import React from 'react';
import searchIcon from './resources/icons/Search.svg';

class Search extends React.Component{
	render(){
		const styles = {
			searchWrap:{
				paddingLeft: 220,
				display: 'flex',
				flexDirection: 'row',
				height: 48,
				backgroundColor: '#F9F9F9',
			},

			searchInput:{
				width: '100%',
				border: 'none',
				backgroundColor: '#F9F9F9',
			},

			icon:{
				width: 16,
			},

			iconWrapper:{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				width: 32,
				paddingLeft: 35,
			}
		}

		return(
			<form style={styles.searchWrap}>
				<label style={styles.iconWrapper} htmlFor="searchbar" ><img style={styles.icon} src={searchIcon}/></label>
				<input style={styles.searchInput} id="searchbar" placeholder="Buscar" />
			</form>
		);
	}
}

export default Search;
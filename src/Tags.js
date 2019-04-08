import React from 'react';

class Tag extends React.Component{
	constructor(){
		let tag = [{
			'nomeTag' : 'Energia Elétrica',
			'corTag' : '#F6742C',
		}];
	}

	get getTagNames(){
		return this.tag;
	}

	set setNewTag(value){
		this.tag += this.value;
	}
}

export default Tag;
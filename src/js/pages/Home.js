import React from 'react'
import keenImage from '../../assets/keen.png';
import '../../css/style.css';

export default class Home extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		/*
		let elm = document.getElementById('remove')
		if(elm){
			elm.remove();
		}
		*/

	}

  render() {
  	let array = ['work', 'stuff'],
  		arrayObj = [{name:'Todd', talent:'spooning'}, {name:'Lisa', talent:'growling'}];

  	let mappedStrings = arrayObj.map((d,i)=>{
  		let {name, talent} = d
  		return <div className="dummyText" key={i}> My name is {name} and I love {talent} </div>
  	})
  	console.log(mappedStrings)
    return (
    	<div>
	      <div>
	        Hello from react
	        <img src={ keenImage } alt='Commander Keen' />
	        {mappedStrings}
	      </div>
      </div>
    );
  }
}
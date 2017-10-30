import React from 'react';
import { render } from 'react-dom';
import {
	Route,
	Link,
	Switch
} from 'react-router-dom'

import Loadable from 'react-loadable';
import '../css/style.css';
import keenImage from '../assets/keen.png';
import fakeDelay from './components/fakeDelay'

export default class App extends React.Component {

	componentDidMount(){

		
	}

  render() {

  	const LoadableHome = Loadable({
  		loader: () => fakeDelay(1000).then(()=>import('./pages/Home')),
  		loading(){
  			return <div> Loading Shit </div>
  		}
  	})

	const contactHome = Loadable({
  		loader: () =>import('./pages/Contact'),
  		loading(){
  			return <div> Loading Contact Shit </div>
  		}
  	})

    return (
    	<div>
    		<div id="nav">
    			<h1> Navigation Dock </h1>
    		<ul id="navRight">
    			<li><Link to ='/'>Home</Link></li>
    			<li><Link to ='/Contact'>Contact</Link></li>
    		</ul>
    		</div>
    		<div>
    		<Switch>
    			<Route exact path = '/' component = {LoadableHome} />
    			<Route exact path = '/contact' component= {contactHome} /> 
    		</Switch>
    		</div>
      </div>
    )
  }
}

//render(<Hello />, document.getElementById('app'));

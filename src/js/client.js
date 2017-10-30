import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { render } from 'react-dom';
import {
	HashRouter as Router 
} from 'react-router-dom'

const app = document.getElementById('app')

ReactDOM.render(<Router><App/></Router>, app)
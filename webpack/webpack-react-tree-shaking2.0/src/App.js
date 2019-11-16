import React, { useState } from 'react';
import { hot } from 'react-hot-loader'
// import './app.scss'
import styleObj from './app.scss'
console.log(styleObj);
class App extends React.Component {
	render () {
		return (
			<div>
				<p className={styleObj.item}>78910</p>
				<h2>h2</h2>
				<br/>
				<span>46</span>
			</div>
		)
	}
}

export default hot(module)(App);
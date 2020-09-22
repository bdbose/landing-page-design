/** @format */

import React from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<div className='navbar'>
				<div className='nav-logo'>
					<img src='/logo_Gelleto.svg' alt='logo' />
					<span>Gellio</span>
				</div>
				<div className='nav-items'>
					<a href='#'>About</a>
					<a href='#'>Services</a>
					<a href='#'>Work</a>
					<a href='#'>Team</a>
					<a href='#'>Contacts</a>
				</div>
				<div className='nav-mob'>
					<img src='/menu.svg' alt='nav-mob' />
				</div>
			</div>
			<div className='hero-wrapper'>
				<div className='hero'>
					<div className='hero-details'>
						<div className='hero-title'>
							Digital Product <br />
							Manager
						</div>
						<div className='hero-subtitle'>
							Create a unique illustration for website,
							<br />
							application or presentation
						</div>
						<button>Get Started</button>
					</div>
					<div className='hero-img'>
						<img src='/main.svg' alt='main' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

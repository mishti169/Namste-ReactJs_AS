import React from 'react';
import { Title } from '../Title/Title';

export const Header = () => {
	return (
		<>
			<div className='header'>
				<Title />
				<div className='nav-items'>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
						<li>Cart</li>
					</ul>
				</div>
			</div>
		</>
	);
};

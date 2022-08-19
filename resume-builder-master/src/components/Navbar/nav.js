import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

import "./Nav.css"

const Navbar = ({setLoginUser}) => {
return (
	<>
	<Nav className='nav'>
		<Bars />

	
		
		<NavBtn>
		<div className='title'>
			<h1>Hello {} </h1>
		</div>
		<div className='NavBtnLink' onClick={() => setLoginUser({})}>Logout</div>
		{/* <NavBtnLink onClick={}>Logout</NavBtnLink> */}
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

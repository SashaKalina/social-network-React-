import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
	<header className={s.header}>
		<NavLink to='/profile'> <img className={s.img}
		 src='https://www.purpledogdesign.com/pddwp/wp-content/uploads/2020/01/43617178595_0c8ac1b22b_b.jpg' /> 
		 </NavLink>
		</header>
		)
}
export default Header;
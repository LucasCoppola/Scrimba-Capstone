import React, { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function Header() {
	const { cartItems } = useContext(Context)
	return (
		<header>
			<Link to="/">
				<h2>Pic Some</h2>
			</Link>
			<Link to="/cart">
				<i className={`ri-shopping-cart-${cartItems.length > 0 ? 'fill' : 'line'} ri-fw ri-2x`}></i>
			</Link>
		</header>
	)
}

export default Header

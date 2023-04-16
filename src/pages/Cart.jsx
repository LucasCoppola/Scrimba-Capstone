import React, { useContext, useState } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

const Cart = () => {
	const { cartItems, emptyCart } = useContext(Context)
	const [buttonText, setButtonText] = useState('Place Order')

	const totalPrice = cartItems
		.reduce((acc) => acc + 5.99, 0)
		.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

	const cartItemElements = cartItems.map((item) => <CartItem key={item.id} item={item} />)

	function handlePlaceOrder() {
		setButtonText('Ordering...')
		setTimeout(() => {
			setButtonText('Place Order')
			emptyCart()
		}, 3000)
	}

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<p className="total-cost">Total: {totalPrice}</p>
			{cartItems.length > 0 ? (
				<div className="order-button">
					<button onClick={handlePlaceOrder}>{buttonText}</button>
				</div>
			) : (
				<p>You have no items in your cart.</p>
			)}
		</main>
	)
}

export default Cart

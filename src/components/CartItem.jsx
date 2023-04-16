import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'

const CartItem = ({ item }) => {
	const { deleteItems } = useContext(Context)
	const [isHovering, setIsHovering] = useState(false)

	return (
		<div className="cart-item">
			<i
				className={`ri-delete-bin-${isHovering ? 'fill' : 'line'}`}
				onClick={() => deleteItems(item.id)}
				onMouseOver={() => setIsHovering(true)}
				onMouseOut={() => setIsHovering(false)}
			></i>
			<img src={item.url} width="130px" />
			<p>$5.99</p>
		</div>
	)
}

CartItem.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired
	})
}
export default CartItem

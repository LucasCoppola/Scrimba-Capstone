import React, { useState, useContext } from 'react'
import { Context } from '../Context'
import PropTypes from 'prop-types'

const Image = ({ className, img, isFavorite }) => {
	const [isHovered, setIsHovered] = useState(false)
	const { toggleFavorite, addToCart, cartItems } = useContext(Context)

	const isInCart = cartItems.some((item) => item.id === img.id)

	return (
		<div
			className={`${className} image-container`}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<img className="image-grid" src={img.url} alt="image" />
			{isHovered && (
				<div>
					<i
						className={`ri-heart-${isFavorite ? 'fill' : 'line'} favorite`}
						onClick={() => toggleFavorite(img.id)}
					></i>
					<i
						className={`${isInCart ? 'ri-shopping-cart-fill' : 'ri-add-circle-line'} cart`}
						onClick={() => addToCart(img.id)}
					></i>
				</div>
			)}
		</div>
	)
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool
	})
}

export default Image

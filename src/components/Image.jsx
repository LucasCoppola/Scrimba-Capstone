import React, { useState, useContext } from 'react'
import { Context } from '../Context'

const Image = ({ className, img, isFavorite }) => {
	const [isHovered, setIsHovered] = useState(false)
	const { toggleFavorite, photos } = useContext(Context)

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
					<i className="ri-add-circle-line cart"></i>
				</div>
			)}
		</div>
	)
}

export default Image

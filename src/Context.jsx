import React, { createContext, useState, useEffect } from 'react'
const Context = createContext()
const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

const ContextProvider = ({ children }) => {
	const [photos, setPhotos] = useState([])
	const [cartItems, setCartItems] = useState([])

	const toggleFavorite = (id) => {
		setPhotos((prevPhotos) => {
			return prevPhotos.map((photo) => {
				if (photo.id === id) {
					return { ...photo, isFavorite: !photo.isFavorite }
				}
				return photo
			})
		})
	}

	const addToCart = (id) => {
		const newItem = photos.find((photo) => photo.id === id)
		if (cartItems.includes(newItem)) {
			return setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
		}
		setCartItems((prevItems) => [...prevItems, newItem])
	}

	const deleteItems = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
	}

	const emptyCart = () => {
		setCartItems([])
	}

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPhotos(data))
	}, [])

	return (
		<Context.Provider value={{ photos, toggleFavorite, addToCart, cartItems, deleteItems, emptyCart }}>
			{children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }

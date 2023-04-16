import React, { createContext, useState, useEffect } from 'react'
const Context = createContext()
const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

const ContextProvider = ({ children }) => {
	const [photos, setPhotos] = useState([])

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

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPhotos(data))
	}, [])

	return <Context.Provider value={{ photos, toggleFavorite }}>{children}</Context.Provider>
}

export { ContextProvider, Context }

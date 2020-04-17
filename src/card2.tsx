import React from "react"
import Card1 from "./card"

const Card = () => {
	console.log("render Card2")
	return (
		<>
			<Card1></Card1>
			<h1>Hello, World. Now the time is {new Date().toString()}</h1>
		</>
	)
}

export default Card

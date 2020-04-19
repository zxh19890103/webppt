import React, { useEffect, useState } from "react"

const Card = () => {
	console.log("render Card 3")
	const [tick, setTick] = useState(0)
	useEffect(() => {
		setTimeout(() => {
			setTick(tick + 1)
		}, 1000)
	}, [tick])
	return <h1>{tick}</h1>
}

export default Card

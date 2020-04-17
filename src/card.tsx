import React, { useEffect, useState } from "react"

const Card = () => {
	console.log("render Card")
	const [tick, setTick] = useState(0)
	useEffect(() => {
		setTimeout(() => {
			setTick(tick + 1)
		}, 1000)
	}, [tick])
	return <h1>Hello, World. Now the time is {tick}</h1>
}

export default Card

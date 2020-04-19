import React, { useState, useEffect } from "react"
import { AsyncCard } from "./async"

const App = (props: { word: string }) => {
	const [tick, setTick] = useState(0)
	useEffect(() => {
		setTimeout(() => {
			setTick(tick + 1)
		}, 1000)
	}, [])
	return (
		<div>
			<h2>Hello, my {props.word}</h2>
			<AsyncCard name="card" url={"/cards/card.js"} />
		</div>
	)
}

export { App }

import React, { useEffect, useState, useRef } from "react"
import ReactDOM from "react-dom"

import("./lazy")

const Card = ({ url }: { url: string }) => {
	const [tick, setTick] = useState(0)
	const ref = useRef<() => JSX.Element>()
	useEffect(() => {
		const script = document.createElement("script")
		script.charset = "utf8"
		script.src = url
		script.onload = (data) => {
			console.log(data)
		}
		script.onerror = (d) => {
			console.log(d)
		}
		document.head.appendChild(script)
		// import(url)
		// 	.then((module) => {
		// 		const def = module.default
		// 		ref.current = def
		// 		setTick(tick + 1)
		// 	})
		// 	.catch(() => {
		// 		console.log("err")
		// 	})
	}, [])
	if (ref.current) return React.createElement(ref.current)
	return <>loading</>
}

const App = (props: { word: string }) => {
	return (
		<div>
			<h2>Hello, my {props.word}</h2>
			<Card url={"/haha.js"} />
		</div>
	)
}

export { App }

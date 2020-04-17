import React, { FunctionComponent } from "react"

interface AsyncCardProps {
	url: string
	name: string
}

interface AsyncCardState {
	loaded: boolean
}

class AsyncCard extends React.Component<AsyncCardProps, AsyncCardState> {
	card: FunctionComponent
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
		}
	}
	componentDidMount() {
		console.log("mount did")
		const script = document.createElement("script")
		script.charset = "utf8"
		script.onload = () => {
			console.log("script.onload")
			script.onload = null
			setTimeout(() => {
				this.card = window[`Card_${this.props.name}`].default
				this.setState({ loaded: true })
			}, 0)
		}
		script.src = this.props.url
		document.head.appendChild(script)
	}
	render() {
		console.log("render async")
		if (this.state.loaded) {
			console.log(this.card)
			return React.createElement(this.card)
		}
		return <>等一等 🐸...</>
	}
}

export { AsyncCard }

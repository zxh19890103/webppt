import "core-js"
import React from "react"
import ReactDOM from "react-dom"
import { App } from "./app"

import "./style.scss"

if (module.hot) {
	module.hot.accept()
}

const yu = 90

ReactDOM.render(<App word="World" />, document.querySelector("#app"))

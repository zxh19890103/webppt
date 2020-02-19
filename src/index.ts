import "core-js"
import "./app"

const arr = ["singhi io nm hhh"]
arr.forEach(e => {
  console.log(e)
})

console.log("index")

if (module.hot) {
  module.hot.accept()
}

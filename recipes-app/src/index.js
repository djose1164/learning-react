import data from "./data/recipes.json"
import Menu from "./components/Menu"
import { render } from "react-dom"
import React from "react"

render(<Menu recipes={data}/>, document.getElementById("root"));
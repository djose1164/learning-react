import data from "./data/recipes.json"
import Menu from "./components/Menu"
import { createRoot } from "react-dom/client"
import React from "react"


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Menu recipes={data} />);
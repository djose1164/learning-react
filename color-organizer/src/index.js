import React, { createContext } from "react";
import { createRoot } from "react-dom/client"
import App from "./components/App";
import ColorProvider  from "./components/ColorProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <ColorProvider>
        <App />
    </ColorProvider>
);

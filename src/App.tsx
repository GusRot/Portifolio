import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <div className="container">
            <Header />
            <Projects />
            <GlobalStyle />
        </div>
    );
}

export default App;

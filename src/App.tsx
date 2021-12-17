import React from "react";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

function App() {
    return (
        <div className="container">
            <Header />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
            <GlobalStyle />
        </div>
    );
}

export default App;

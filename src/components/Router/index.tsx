import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../Projects";
import Page2 from "../Projects/Page2";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/pag2" element={<Page2 />} />
        </Routes>
    );
}

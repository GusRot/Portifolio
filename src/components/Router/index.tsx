import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../Projects";
import Page2 from "../Projects/Page2";
import Page404 from "../Projects/Page404";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/pag2" element={<Page2 />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "../Projects";
import Page3 from "../Projects/Page3";
import Page404 from "../Projects/Page404";
import ProjectsReact from "../Projects/React";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<ProjectsReact />} />
            <Route path="/pag2" element={<Projects />} />
            <Route path="/pag3" element={<Page3 />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}

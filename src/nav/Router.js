
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "../page/About";
import Home from "../page/Home";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}
import Footer from "./components/Footer.jsx"
import Info from "./components/Info.jsx"
import About from "./components/About.jsx"
import Interest from "./components/Interest.jsx"
import React from "react"

export default function Card(){
    return (
        <div className="card">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}
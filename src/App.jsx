import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import FunFacts from "./components/FunFacts/FunFacts";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <FunFacts />
            <Gallery />
        </div>
    );
};

export default App;

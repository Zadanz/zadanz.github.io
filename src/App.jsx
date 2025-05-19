import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import FunFacts from "./components/FunFacts/FunFacts";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <FunFacts />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;

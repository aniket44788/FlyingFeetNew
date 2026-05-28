import React from "react"
import Tours from "./Tours";
import { Link } from "react-router-dom";
import Swipper from "./Swipper";
import TourCards from "./TourCards";
import TourCards2 from "./TourCards2";
import TourCards3 from "./TourCards3";
import Reviews from "./Reviews";
function Home() {
    return (
        <>

            <div>
                <Tours />
                <TourCards />
                <TourCards2 />
                <TourCards3 />
                <Reviews />
            </div>
        </>

    );
}

export default Home;
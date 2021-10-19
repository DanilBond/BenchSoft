import React, { useEffect, useState } from "react";
import Burger from "../components/burger/Burger";
import Content from "../components/content/Content";
import SideBare from "../components/sideBare/SideBare"




export default function Home() {
    
    
    return (
        <>
            <div className="Bench">
                <div className="Bench_conent">
                    <Burger/>
                    <SideBare/>
                    <Content/>
                </div>
            </div>
        </>
    );
}

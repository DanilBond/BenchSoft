import React from "react";
import Content from "../components/content/Content";
import SideBare from "../components/sideBare/SideBare"

export default function Home() {
    return (
        <>
            <div className="Bench">
                <div className="Bench_conent">
                    
                    <SideBare />

                    <Content />

                </div>
            </div>
        </>
    );
}

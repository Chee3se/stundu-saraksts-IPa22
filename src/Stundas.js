import React from "react";
import StunduSaraksts from "./StunduSaraksts.json"

const stundas = StunduSaraksts;

export default function Stundas() {
    return (
        <div className="Stundas">
        {Object.entries(stundas).map(entry => {
            return (
                <>
                <h2>{entry[0]}</h2>
                <ul>
                {entry[1].map((item, i) => {
                return <li><p className="stun">{(i+1) + `. ` + item.stunda}</p><p className="kab">{item.kabinets + `-` + item.skolotaja}</p></li>}
                )}
                </ul>
                </>
            )
        })}
        </div>
    )
};

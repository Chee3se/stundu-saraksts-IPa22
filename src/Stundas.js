import StunduSaraksts from "./StunduSaraksts.json";

const stundas = StunduSaraksts[1];
const now = new Date();
let day = 0;

export default function Stundas() {
    return (
        <div className="Stundas">
        {Object.entries(stundas).map(entry => {
            day++
            return (
                <>
                <h2>{entry[0]}</h2>
                <ul className={day == now.getDay() ? 'active' : null}>
                {entry[1].map((item, i) => {
                return <li key={entry[0] + `s ` + (i+1) + `. stunda`}><p className="stun">{(i+1) + `. ` + item.stunda}</p><p className="kab">{item.kabinets + `-` + item.skolotaja}</p></li>}
                )}
                </ul>
                </>
            )
        })}
        </div>
    )
};

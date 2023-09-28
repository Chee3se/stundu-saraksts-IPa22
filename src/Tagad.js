import StunduSaraksts from "./StunduSaraksts.json";

//Const's
const stundas = StunduSaraksts[1];
const now = new Date();
const StunduLaiki = [
    ["8:30:00", "9:55:00"],
    ["10:15:00", "11:40:00"],
    ["12:30:00", "13:55:00"],
    ["14:00:00", "15:25:00"]
];
//Var's
let id = 0
let found = false
//Functions
function getDateFromTime(time) {
    return new Date(now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+" "+time)
}
//Main
export default function Tagad() {
    return (
        <div className="Stunda">
        {Object.entries(stundas).map(entry => {
            id++
            let result
            if (now.getDay()==id) {
                for (let i = 0; i < StunduLaiki.length; i++) {
                    const element = StunduLaiki[i]
                    const roelement = StunduLaiki[StunduLaiki.length-i-1]
                    if (getDateFromTime(element[0])<now&&getDateFromTime(element[1])>now) {
                        result = "tagad ir "+entry[1][i].stunda
                    } else if (getDateFromTime(roelement[0])>now) {
                        result = "nakošā stunda ir "+entry[1][entry.lenght-i-1].stunda
                    } else {
                        result = "stundas beigušās"
                    }
                    return <h2 key={"result"}>{result}</h2>
                }
            }
        })}
        </div>
    )
}

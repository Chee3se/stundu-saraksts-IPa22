import {useState, useEffect} from "react"

export default function Tagad(params) {
    //Const's
    const stundas = params.info;
    const [now, setNow] = useState(new Date())
    useEffect(() => {
        setTimeout(() => {
            setNow(new Date())
        }, 1000);
    });
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
    return (
        <div className="Stunda">
        {Object.entries(stundas).map(entry => {
            id++
            let result
            if (now.getDay()==id) {
                for (let i = StunduLaiki.length-1; i > -1; i--) {
                    const element = StunduLaiki[i]
                    if (getDateFromTime(element[0])<=now&&getDateFromTime(element[1])>=now) {
                        entry[1].classes[i] != null ? result = "tagad ir " + entry[1].classes[i] : result = null
                    } else if (getDateFromTime(element[0])>now) {
                        entry[1].classes[i] != null ? result = "nakošā stunda ir "+entry[1].classes[i] : result = null
                    }
                }
                return <h2 key={"result"}>{result != null ? result : "stundas beigušās" }</h2>
            }
        })}
        </div>
    )
}

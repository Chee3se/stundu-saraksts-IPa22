import StunduSaraksts from "./StunduSaraksts.json";

const stundas = StunduSaraksts[1];
const now = new Date();
const StunduLaiki = [
    ["8:30:00", "9:55:00"],
    ["10:15:00", "11:40:00"],
    ["12:30:00", "13:55:00"],
    ["14:00:00", "15:25:00"]
];
let id = 0;


export default function Tagad() {
    return (
        <div className="Stunda">
        {Object.entries(stundas).map(entry => {
            id++
            if (now.getDay()==id) {
                console.log(now < new Date(now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+" "+StunduLaiki[0][0]))
                //Line above is very important!!!
            }
        })}
        </div>
    )
}
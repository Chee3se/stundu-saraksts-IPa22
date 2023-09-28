import './App.css';
import Diena from "./Diena"
import Tagad from "./Tagad"
import {useEffect} from "react"
import {useState} from "react"

export default function App() {
  const [StunduSaraksts, setStunduSaraksts] = useState("")
  const now = new Date()
  useEffect(()=>{
    fetch("http://skrazzo.sites.hex.lv/projects/class-list/api.php")
    .then(response => response.json())
    .then(data => setStunduSaraksts(data.IPa22))
  },[])
  return (
    <div className="App">
      <h1>Stundu saraksts</h1>
      <div className='Stundas'>
      {Object.entries(StunduSaraksts).map((item, i)=>{
          let num
          let day
          i>4 ? num=i-5 : num=i
          switch (num) {
            case 0:
              day = "Pirmdiena"
              break;
            case 1:
              day = "Otrdiena"
              break;
            case 2:
              day = "Trešdiena"
              break;
            case 3:
              day = "Ceturtdiena"
              break;
            case 4:
              day = "Piektdiena"
              break;
            default:
              day = "Nuh uh"
              break;
          }
          return <Diena 
            name={day}
            info={item}
            active={i+1==now.getDay()}
          />
        })}
      </div>
      <Tagad info={StunduSaraksts}/>
    </div>
  );
}

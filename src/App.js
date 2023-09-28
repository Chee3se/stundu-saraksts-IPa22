import './App.css';
import Diena from "./Diena"
import {useEffect} from "react"
import {useState} from "react"

export default function App() {
  const [StunduSaraksts, setStunduSaraksts] = useState("")
  useEffect(()=>{
    fetch("http://skrazzo.sites.hex.lv/projects/class-list/api.php")
    .then(response => response.json())
    .then(data => setStunduSaraksts(data))
  },[])
  
  return (
    <div className="App">
      <h1>Title</h1>
      {
        StunduSaraksts.map((item, i)=>{
          let num
          let day
          i>4 ? num=i-4 : num=1
          switch (num) {
            case 0:
              day = "Pirmdiena"
              break;
            case 1:
              day = "Otridiena"
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
          return <Diena />
        })
      }
    </div>
  );
}

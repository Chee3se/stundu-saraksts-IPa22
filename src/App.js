import './App.css';
import Stundas from "./Stundas";
import Tagad from "./Tagad"

export default function App() {
  return (
    <div className="App">
      <h1>Stundu saraksts</h1>
      <Stundas className="Stundas"/>
      <Tagad />
    </div>
  );
}

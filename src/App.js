import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>Hola. ¡Soy Adriana! Y creé una calculadora.</p>
       <PrimerComponente></PrimerComponente>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { apiCall } from "./api-call";

function App() {
  const api = new apiCall();

  return (
    <div className="App">
      <header className="App-header">
          <h1>Calculate Fibonnaci!</h1>
          <form>
            <input type="text" id="txtValue" name="txtValue"></input>
          </form>
          <button onClick={api.getFibonnaci}>Calculate</button>
          <label>Fibonnaci Result: </label>
          <label id="lblResult"></label>
      </header>
    </div>
  );
}

export default App;

import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';
import { Board } from './Components/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='page'>
        <Sidebar />
        <Board />
      </div>
    </div>
  );
}

export default App;

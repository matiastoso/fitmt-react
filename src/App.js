import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

    <ItemListContainer stock={5} initial={1} />
    </div>
  );
}

export default App;

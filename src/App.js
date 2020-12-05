import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import List from './Components/List';
import Details from './Components/Details';
import { useSelector } from 'react-redux';

function App() {
  const item = useSelector(state => state.item);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SearchBar>
        </SearchBar>
        <List></List>
        {
          item.item !== '' && <Details></Details>
        }

      </header>
    </div>
  );
}

export default App;
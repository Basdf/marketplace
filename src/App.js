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
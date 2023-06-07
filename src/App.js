import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render');
  const [monsters, setMonsters] = useState([]);// [value,setValue]
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('');

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(users => {
      setMonsters(users);
      setFilteredMonsters(users);
    })
  }, [])

  const onSearchChanges = (e) => {
    let searchValue = e.target.value.toLowerCase();
    let filtered = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue)  );
    console.log(':vvv')
    setFilteredMonsters(filtered);
  }

  const onTitleChanges = (e) => {
    let inputTitle = e.target.value.toLowerCase();
    setTitle(inputTitle)
  }

  const addDot = (id) =>{
    let addDotFunction = (monster) => monster.id === id ? {...monster, name: monster.name+"."}: monster;
    let monstersArray = monsters.map( addDotFunction );
    let filteredMonstersArray = filteredMonsters.map(addDotFunction);
    setMonsters(monstersArray);
    setFilteredMonsters(filteredMonstersArray);
  }

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox placeholder='search monsters' onSearchHandler={onSearchChanges} className='monsters-search-box'/>
      <br/>
      <SearchBox placeholder='set title' onSearchHandler={onTitleChanges} className='title-search-box'/>
      <CardList list={filteredMonsters} onClickHandler={ addDot }/>
    </div>
  );
}

export default App;

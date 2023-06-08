import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/fetch.utils';

export type Monster = {
  id: number,
  name: string,
  email: string
}

const App = () => {
  console.log('render');
  const [monsters, setMonsters] = useState<Monster[]>([]);// [value,setValue]
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);
  const [title, setTitle] = useState('');

  useEffect(()=>{
    const fetchUsers = async () =>{
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
      setFilteredMonsters(users);
    }
    fetchUsers();
  }, [])

  const onSearchChanges = (e: ChangeEvent<HTMLInputElement>) => {
    let searchValue = e.target.value.toLowerCase();
    let filtered = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue)  );
    console.log(':vvv')
    setFilteredMonsters(filtered);
  }

  const onTitleChanges = (e: ChangeEvent<HTMLInputElement>): void => {
    let inputTitle = e.target.value.toLowerCase();
    setTitle(inputTitle)
  }

  const addDot = (id: number): void =>{
    let addDotFunction = (monster: Monster) => monster.id === id ? {...monster, name: monster.name+"."}: monster;
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
      <CardList list={filteredMonsters} onClickHandler={addDot }/>
    </div>
  );
}

export default App;

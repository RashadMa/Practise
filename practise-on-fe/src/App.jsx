import React, { useMemo, useState } from 'react'
import { UserProvider } from './context/UserContext'
import UserComponent from './components/UserComponent'
import { ThemeProvider } from './context/ThemeContext'
import ThemeComponent from './components/ThemeComponent'
import InputComponent from './components/InputComponent'

var users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Alice' },
  { id: 5, name: 'Charlie' },
  { id: 6, name: 'Emily' },
  { id: 7, name: 'David' },
  { id: 8, name: 'Olivia' },
  { id: 9, name: 'Michael' },
  { id: 10, name: 'Sophia' },
  { id: 11, name: 'Daniel' },
  { id: 12, name: 'Grace' },
  { id: 13, name: 'Joseph' },
  { id: 14, name: 'Emma' },
  { id: 15, name: 'Andrew' },
  { id: 16, name: 'Ava' },
  { id: 17, name: 'Matthew' },
  { id: 18, name: 'Chloe' },
  { id: 19, name: 'William' },
  { id: 20, name: 'Sophie' }
];


const App = () => {
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = users.filter((user) => {
    console.log('Filter function is running ...');
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  // const filteredUsers = useMemo(() =>
  //   users.filter((user) => {
  //     console.log('Filter function is running ...');
  //     return user.name.toLowerCase().includes(search.toLowerCase())
  //   }), [search]
  // )


  return (
    <UserProvider>
      <ThemeProvider>
        <ThemeComponent />
        <UserComponent />
        <InputComponent />
        <input type="text" value={text} onChange={handleText} />
        <button type="button" onClick={handleSearch}>
          Search
        </button>

        <List list={filteredUsers} />
      </ThemeProvider>
    </UserProvider>
  )
}

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default App
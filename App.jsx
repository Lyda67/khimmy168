import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Search App</h1>

      <Search onSearch={handleSearch} value={searchTerm} />

      <p>Searching for: {searchTerm}</p>

      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Search(props) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={props.value}
        onChange={props.onSearch}
      />
    </div>
  );
}

export default App;

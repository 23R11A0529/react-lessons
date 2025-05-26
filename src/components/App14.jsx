import React, { useEffect, useState } from "react";

function App14() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        setData(json);
        setFilteredData(json); // initialize filtered data
      });
  }, []);

  const handleSearch = () => {
    const lowercased = searchInput.toLowerCase();
    const filtered = data.filter(user =>
      user.name.toLowerCase().includes(lowercased)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h1>App14</h1>
      <h2>useEffect hook to fetch api</h2>
      <input
        type="text"
        placeholder="Search name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ol>
        {filteredData.map((user) => (
          <li key={user.id}>
            {user.name}, {user.email}, {user.phone}
          </li>
        ))}
      </ol>
    </div>
  );
}


import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App14() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [txt, setTxt] = useState();
  const [filtered, setFiltered] = useState([]);
  const handleSearch = () => {
   const User = users.filter((user) =>
      user.name.toLowerCase().includes(txt.toLowerCase())
    );
    setFiltered(User);
  };
  return (
    <div>
      <h1 style={{ color: "#d86c7a" }}>App14</h1>
      <h2>useEffect hook to fetch api</h2>
       
        <p>
        <input
          type="text"
          placeholder="Search Name"
          onChange={(e) => setTxt(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </p>
      <ol>
        {filtered.map((value) => (
          <li key={value.name}>
            {value.name}, {value.email}, {value.phone}
          </li>
        ))}
      </ol>
      <hr />
      <ol>
        {users &&
          users.map((value) => (
            <li key={value.id}>
              {value.name}, {value.email}, {value.phone}
            </li>
          ))}
      </ol>
    </div>
  );
}
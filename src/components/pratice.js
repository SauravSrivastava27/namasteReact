import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

// import CustomHook from "./customHook"

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [user, setUser] = useState([]);
  // const [search, setSearch] = useState("");
    useEffect(() => {
      async function fetchUsers() {
        const response = await fetch(url);

        const data = await response.json();

        setUser(data);
      }
      fetchUsers();
    }, []);

    // const filterTitle = user.filter((user) => user.title.toLowerCase().include(search.toLowerCase()) )
    // console.log(filterTitle);
  return (
    
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <ul>
      {user.map(user => (
        <li key={user.userId}>{user.title}</li>
      ))}
      </ul>
      </div>
  )
}

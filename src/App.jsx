import { useState } from "react";
import "./app.css";
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="listItem" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./app.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:3000?q=${query}`);
      console.log(res);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 1) fetchUsers();
  }, [query]);

  return (
    <div className="app">
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      <div className="blob-3"></div>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

export default App;

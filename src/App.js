import "./App.css";
import Search from "./Search";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [page]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  var filterPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log("Filter", filterPosts);

  return (
    <div className="App">
      <Search searchValue={searchValue} handleChange={handleSearch} />
      <div className="row">
        {filterPosts.map((data) => (
          <Post
            key={data.id}
            id={data.userId}
            number={data.id}
            title={data.title}
            body={data.body}
          />
        ))}
        
      </div>

      <button className="nextPage" onClick={() => setPage(page + 1)}>
        Load More Posts
      </button>
    </div>
  );
}

export default App;

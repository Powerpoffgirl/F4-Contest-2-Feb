import React, { useState } from "react";
import "./Post.css";

function Post(props) {
  const [like, setLike] = useState(0);

  return (
    <div className="post">
      <img
        className="postImage"
        src={` https://picsum.photos/200?random=${props.number}`}
        alt=""
      />
      <div className="postDetails">
        <p>User ID :{props.id}</p>
        <p id="title">Title :{props.title}</p>
        <p>Likes :{like}</p>
      </div>
      <button onClick={() => setLike(like + 1)}>Like Post</button>
    </div>
  );
}

export default Post;

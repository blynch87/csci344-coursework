import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post";

// Job:
//   1. Fetches post ddata from the server
//   2. It iterates through each element and draws a Post component.

export default function Posts({ token }) {
  // When useState is invoked it returns an array with 2 values:
  //   1. state variable
  //   2. function whose job is to set the state variable
  //     and then redraw the screen after the variable is set.
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const data = await getDataFromServer(token, "/api/posts");
    console.log(data);
    setPosts(data);
  }

  // useEffect is a built in function designed to handle "side effects"
  // when the page first loads.
  useEffect(() => {
    getPosts();
  }, []);

  function outputPost(postObj) {
    return <Post key={postObj.id} postData={postObj} token={token} />;
  }

  return (
    <div>
      {posts.map(outputPost)}
      <br />
    </div>
  );
}

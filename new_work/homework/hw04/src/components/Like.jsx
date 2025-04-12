import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Like({ likeID, postID, token }) {
  console.log(likeID);
  const [like_ID, setlike_ID] = useState(likeID);

  async function createLike() {
    const sendData = {
      post_id: postID,
    };
    const responseData = await postDataToServer(token, "/api/likes", sendData);
    console.log(responseData);
    setlike_ID(responseData.id);
  }

  async function deleteLike() {
    const deleteURL = "/api/likes/" + like_ID;
    const response = await deleteDataFromServer(token, deleteURL);
    setlike_ID(null);
  }

  console.log(likeID);
  console.log(like_ID);
  if (like_ID) {
    return (
      <button
        onClick={deleteLike}
        aria-label="Like post on"
        aria-checked="true"
      >
        <i className="fas text-red-700 fa-heart"></i>
      </button>
    );
  } else {
    return (
      <button
        onClick={createLike}
        aria-label="Like post off"
        aria-checked="false"
      >
        <i className="far fa-heart"></i>
      </button>
    );
  }
}

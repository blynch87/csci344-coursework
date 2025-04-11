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
    const sendData = {
      post_id: postID,
    };
    const responseData = await deleteDataFromServer(token, sendData);
    console.log(responseData);
    setlike_ID(responseData.id);
  }

  console.log(likeID);
  console.log(like_ID);
  if (like_ID) {
    return (
      <button>
        <i className="fas text-red-700 fa-heart" aria-label="Like post"></i>
      </button>
    );
  } else {
    return (
      <button onClick={createLike}>
        <i className="far fa-heart" aria-label="Like post"></i>
      </button>
    );
  }
}

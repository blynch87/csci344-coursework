import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Bookmark({ bookmarkID, postID, token }) {
  const [bookmark_ID, setBookmark_ID] = useState(bookmarkID);

  async function createBookmark() {
    const sendData = {
      post_id: postID,
    };
    const responseData = await postDataToServer(
      token,
      "/api/bookmarks",
      sendData
    );
    setBookmark_ID(responseData.id);
  }

  async function deleteBookmark(postID) {
    const deleteURL = "/api/bookmarks/" + bookmark_ID;
    const response = await deleteDataFromServer(token, deleteURL);
    setBookmark_ID(null);
  }

  if (bookmark_ID) {
    return (
      <button onClick={deleteBookmark}>
        <i className="fas fa-bookmark" aria-label="Bookmark post"></i>
      </button>
    );
  } else {
    return (
      <button onClick={createBookmark}>
        <i className="far fa-bookmark" aria-label="Bookmark post"></i>
      </button>
    );
  }
}

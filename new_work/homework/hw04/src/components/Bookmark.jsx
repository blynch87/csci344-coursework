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

  async function deleteBookmark() {
    const deleteURL = "/api/bookmarks/" + bookmark_ID;
    const response = await deleteDataFromServer(token, deleteURL);
    setBookmark_ID(null);
  }

  if (bookmark_ID) {
    return (
      <button
        onClick={deleteBookmark}
        aria-label="Bookmark post on"
        aria-checked="true"
      >
        <i className="fas fa-bookmark"></i>
      </button>
    );
  } else {
    return (
      <button
        onClick={createBookmark}
        aria-label="Bookmark post off"
        aria-checked="false"
      >
        <i className="far fa-bookmark"></i>
      </button>
    );
  }
}

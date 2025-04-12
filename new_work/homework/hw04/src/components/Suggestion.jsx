import React, { useState, useEffect } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Suggestion({ postData, token }) {
  const [followID, setFollowID] = useState(postData.id);
  async function followUser() {
    const sendData = {
      user_id: postData.id,
    };
    const responseData = await postDataToServer(
      token,
      "/api/following",
      sendData
    );
    setFollowID(null);
  }

  return (
    <section className="flex justify-between items-center mb-4 gap-2">
      <img
        src={postData.thumb_url}
        className="rounded-full"
        alt="user thumbnail"
      />
      <div className="w-[180px]">
        <p className="font-bold text-sm">{postData.username}</p>
        <p className="text-gray-500 text-xs">suggested for you</p>
      </div>
      {followID ? (
        <button className="text-blue-500 text-sm py-2" onClick={followUser}>
          follow
        </button>
      ) : (
        <p className="text-green-600 text-sm">Following</p>
      )}
    </section>
  );
}

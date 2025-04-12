import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {
  const [stories, setStories] = useState([]);

  async function getStories() {
    const data = await getDataFromServer(token, "/api/stories");
    console.log(data);
    setStories(data);
  }

  useEffect(() => {
    getStories();
  }, []);

  function renderStories(story) {
    const snippet = (
      <div class="flex flex-col justify-center items-center">
        <img
          src={story.user.thumb_url}
          class="rounded-full border-4 border-gray-300"
          alt="user thumbnail"
        />
        <p class="text-xs text-gray-500">{story.user.username}</p>
      </div>
    );
    return snippet;
  }

  return (
    <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
      {stories.map(renderStories)}
    </header>
  );
}

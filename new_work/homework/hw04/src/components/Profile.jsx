import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
  const [profile, setProfile] = useState({});

  async function getProfile() {
    const data = await getDataFromServer(token, "/api/profile");
    console.log(data);
    setProfile(data);
  }
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <header className="flex gap-4 items-center">
      <img
        src={profile.thumb_url}
        class="rounded-full w-16"
        alt="user thumbnail"
      />
      <h2 class="font-Comfortaa font-bold text-2xl">{profile.username}</h2>
    </header>
  );
}

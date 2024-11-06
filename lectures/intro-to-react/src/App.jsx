import React from "react";
import Profile from "./Profile";

export default function App() {
  return (
    <>
      <header>
        <h1>My First App</h1>
      </header>
      <main>
        <p>Hello react!</p>
        <Profile name="Anita" year="2005" school="dwyer"/>
        <Profile name="Ben" />
        <Profile name="Adwaina" />
        <Profile name="Laciesha" />
      </main>
    </>
  );
}

import React from "react";
import { Welcome } from "./Welcome.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <header>
        <h1>My First App</h1>
      </header>
      <main>
        <Welcome name="Ben" imgURL="https://picsum.photos/200?a=1/" />
        <Welcome name="Ronan" imgURL="https://picsum.photos/200?a=2/" />
      </main>
    </>
  );
}

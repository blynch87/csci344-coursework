import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import ButtonCount from "./ButtonCount.jsx";
import { getPosts } from "./data-functions.js";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
        const posts = await getPosts();
        console.log(posts);
        setPosts(posts);
    })();
}, []);

  function generateProfileComponentsFromData() {
    return posts.map((item) => (
        <Profile name={item.user.first_name} picture={item.user.image_url} bio={item.caption}/>
    ));
  }

  return (
    <>
      <header>
        <h1>My First App</h1>
      </header>
      <main>
        <p>Hello react!</p>
        <div className="people">
           {generateProfileComponentsFromData()}
        </div>


      <ButtonCount intitialValue={2}/>
      <ButtonCount intitialValue={4} />
      <ButtonCount intitialValue={6} />
      <ButtonCount intitialValue={8} />
      <ButtonCount intitialValue={10} />
      </main>
    </>
  );
}

// const people = [
//   {
//     name: "Anita",
//     image_url: "https://picsum.photos/id/216/100/100",
//     year: "2020" ,
//     school: "Asheville High" ,
//   },
//   {
//     name: "Ben",
//     image_url: "https://picsum.photos/id/217/100/100",
//     year: "2005" ,
//     school: "Santaluces" ,
//   },
//   {
//     name: "Adwaina",
//     image_url: "https://picsum.photos/id/218/100/100",
//     year: "1995" ,
//     school: "Lake Worth High" ,
//   },
//   {
//     name: "Laciesha",
//     image_url: "https://picsum.photos/id/219/100/100",
//     year: "1985" ,
//     school: "Erwin High" ,
//   },
// ];



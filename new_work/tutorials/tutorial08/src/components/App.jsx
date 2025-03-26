import React from "react";
import NavBar from "./NavBar";
import { ColorPicker, Image, Rate } from "antd";
import MyCarousel from "../MyCarousel";
import MyRadio from "../MyRadio";
import NotABomb from "../NotABomb";

// custom components:
export default function App() {
  return (
    <>
      <NavBar />
      <MyCarousel />

      <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
        <p>
          Put your design system components in the space below...
          <MyRadio />
          <ColorPicker defaultValue="#1677ff" />
          <Rate allowHalf defaultValue={2.5} />
          <NotABomb />
        </p>
        <div className="flex flex-wrap content-start">
          <Image src="https://picsum.photos/600/600?id=1" width={200} />
          <Image src="https://picsum.photos/600/600?id=2" width={200} />
          <Image src="https://picsum.photos/600/600?id=3" width={200} />
          <Image src="https://picsum.photos/600/600?id=4" width={200} />
          <Image src="https://picsum.photos/600/600?id=5" width={200} />
          <Image src="https://picsum.photos/600/600?id=6" width={200} />
          <Image src="https://picsum.photos/600/600?id=7" width={200} />
          <Image src="https://picsum.photos/600/600?id=8" width={200} />
          <Image src="https://picsum.photos/600/600?id=9" width={200} />
          <Image src="https://picsum.photos/600/600?id=10" width={200} />
        </div>
      </main>

      <footer className="p-5 bg-white">footer goes here</footer>
    </>
  );
}

import React from "react";
import { Carousel, Image } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const MyCarousel = () => (
  <Carousel autoplay>
    <div>
      <Image src="https://picsum.photos/600/600?id=1" width={200} />
    </div>
    <div>
      <Image src="https://picsum.photos/600/600?id=2" width={200} />{" "}
    </div>
    <div>
      <Image src="https://picsum.photos/600/600?id=3" width={200} />
    </div>
    <div>
      <Image src="https://picsum.photos/600/600?id=4" width={200} />
    </div>
  </Carousel>
);
export default MyCarousel;

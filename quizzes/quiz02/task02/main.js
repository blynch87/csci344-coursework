// 1. Create your businessToHTML function here:
function businessToHTML(restaurants) {
  const target = document.querySelector("p");
  target.insertAdjacentHTML(
    "beforeend",
    `
        <h1>${restaurants.name}</h1>
        <img style="width: 300px" src="${restaurants.image_url}">`
  );
}

// 2. When you're done, uncomment the test code below and preview index.html in your browser:

const businessObjPriceDefined = {
  id: "d8Vg0DxRY-s2a8xnZ6ratw",
  name: "Chestnut",
  rating: 4.5,
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
  display_address: "48 Biltmore Ave, Asheville, NC 28801",
  coordinates: { latitude: 35.5931657, longitude: -82.550943 },
  price: "$$",
  review_count: 1257,
};

const businessObjPriceNotDefined = {
  id: "d8Vg0DxRY-s2a8xnZ6ratw",
  name: "Chestnut",
  rating: 4.5,
  image_url:
    "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
  display_address: "48 Biltmore Ave, Asheville, NC 28801",
  coordinates: { latitude: 35.5931657, longitude: -82.550943 },
  review_count: 1257,
};

console.log(
  "HTML representation of a business:",
  businessToHTML(businessObjPriceDefined)
);
console.log(
  "HTML representation of a business (no price):",
  businessToHTML(businessObjPriceNotDefined)
);

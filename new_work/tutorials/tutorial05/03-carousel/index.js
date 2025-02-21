let currentPosition = 0; // Keeps track of where we are in the entire carousel
let gap = 10; //Space between the two photos
const slideWidth = 400; //width of item that shows the image/grey box.

function moveCarousel(direction) {
  //function that moves the carousel when button is clicked
  const items = document.querySelectorAll(".carousel-item"); //array of all the items in the carousel which is the images and grey boxes

  if (direction == "forward") {
    // minus 2 b/c first 2 slides already showing
    if (currentPosition >= items.length - 2) {
      return false; // won't let carousel forward button take the user past the contents
    }
    currentPosition++; // else increment current position
  } else {
    // if not forward
    if (currentPosition == 0) {
      // won't let back button take the user past the contents
      return false;
    }
    currentPosition--; // else decrement current position
  }

  const offset = (slideWidth + gap) * currentPosition; // uses the photo width with gap included and multiplies by current position
  // thid number is used to move to the right or left 1 item.
  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`; //sets the offset of all items, actually moving the carousel?
  }
}

import { getAccessToken } from "./get-token.mjs";
const rootURL = "https://photo-app-secured.herokuapp.com";

export async function createPost() {
  // get access token (like logging in) so that you can query for "your data":
  const token = await getAccessToken(rootURL, "benl", "password");

  // data to sent to server:
  const postData = {
    image_url:
      "https://i.pinimg.com/originals/19/ac/8e/19ac8eec170f8d7f31b8c074eb791fbd.gif",
    caption: "Dag",
    alt_text: "Dag",
  };

  // endpoint:
  const endpoint = `${rootURL}/api/posts/`;

  // send asynchronous request and wait for response headers:
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });

  // now wait for response body (also asynchronous):
  const data = await response.json();

  // now print to the console:
  console.log(data);
}

createPost();

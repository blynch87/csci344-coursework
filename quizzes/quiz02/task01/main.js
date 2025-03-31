// 1. Create your getBusinesses function here:
async function getBusinesses(location, search_term, num_results) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // authorization: "Bearer API_KEY",
      //   location: location,
      //   term: search_term,
      //   limit: num_results,
    },
  };

  const response = await fetch(
    `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${search_term}&limit=${num_results}`,
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return response;
}

// 2. When you're done, uncomment the test code below and preview index.html in your browser:

console.log(
  "Should display 3 pizza restaurants in Asheville:",
  getBusinesses("Asheville, NC", "pizza", 3)
);
console.log(
  "Should display 10 thai restaurants in San Francisco:",
  getBusinesses("San Francisco, CA", "thai", 10)
);

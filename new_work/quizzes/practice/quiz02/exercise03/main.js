// ignore this function for now. We'll go over it
// on Wednesday:
async function fetchCourses() {
  const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/`;
  courseList = await fetch(url).then((response) => response.json());
  displayResults(courseList);
}

function displayResults(courses) {
  // your code here.
  let results = document.querySelector("#results");

  for (let i of courses) {
    if (i.Department.toLowerCase().includes("csci")) {
      let snippet = ` <section class="course">
    <h3>${i.Code}: ${i.Title}</h3>
    <ul>
        <li>Instructor: ${i.Instructors?.[0]?.Name || "N/A"}</li>
        <li>Location: ${i.Location?.FullLocation || "N/A"}</li>
        <li>Days: ${i.Days || "TBA"}</li>
    </ul>
</section>`;
      results.insertAdjacentHTML("beforeend", snippet);
    }
  }

  console.log(courses);
}

// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
  ev.preventDefault(); // overrides default button action

  // Set user's preferences (global variables) from the DOM:
  searchTerm = document.querySelector("#search_term").value;
  openOnly = document.querySelector("#is_open").checked;

  // Invoke the show matching courses function
  showMatchingCourses();
};

// Part 1.1a
const isClassFull = (course) => {
  // modify this to accurately apply the filter:
  if (course.EnrollmentCurrent >= course.EnrollmentMax) {
    return true;
  } else {
    return false;
  }
};

// Part 1.1b
const doesTermMatch = (course) => {
  // modify this to accurately apply the filter:
  // or course.title.toLowerCase.includes(searchTerm.toLowerCase)
  // searchTerm.toLowerCase === course.title.toLowerCase
  // forEach?
  if (course.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

// Part 1.2
const dataToHTML = (course) => {
  // modify this to be more detailed
  let instructor = [];
  for (let i = 0; i < course.Instructors.length; i++) {
    instructor.push(" " + course.Instructors[i].Name);
  }

  function printNames(inList) {
    returnList = "";
    for (item in inList) {
      if (item < inList.length - 1) {
        returnList += inList[item] + " & ";
      } else {
        returnList += inList[item];
      }
    }
    return returnList;
  }

  let loc = "";
  if (course.Location.FullLocation != null) {
    loc = course.Location.FullLocation;
  }

  let days = "";
  if (course.Days != null) {
    days = course.Days;
  }

  return `
        <section class="course">
            ${course.Code}
            <h2>${course.Code}: ${course.Title}</h2>
            <p>
                <i class="fa-solid fa-circle-check"></i> 
                Open  &bull; ${course.CRN} &bull; Seats Available: ${
    course.EnrollmentMax - course.EnrollmentCurrent
  }
            </p>
            <p>
                ${days} &bull; ${loc} &bull; ${course.Hours} credit hour(s)
            </p>
            <p><strong>${printNames(instructor)}</strong></p>
        </section>
    `;
};

// Part 2
const showMatchingCourses = () => {
  const container = document.querySelector(".courses");
  container.innerHTML = "";
  let matches = courseList.filter(doesTermMatch);

  if (openOnly) {
    matches = matches.filter((match) => !isClassFull(match));
  }

  matches.forEach((course) => {
    const snippet = dataToHTML(course);
    container.insertAdjacentHTML("beforeend", snippet);
  });

  console.log(`Search term: ${searchTerm}`);
  console.log(`Only show open classes: ${openOnly}`);
  console.log(`Course data:`, courseList);

  // output all of the matching courses to the screen:
};

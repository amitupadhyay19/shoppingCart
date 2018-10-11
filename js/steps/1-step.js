// variables
const courses = document.querySelector('#courses-list');



// Listners
loadEventListners();

function loadEventListners() {
    // when a course is added
    courses.addEventListener('click', buyCourse);
}



// functions
function buyCourse(e) {
    // console.log(e.target);
    e.preventDefault();
    // use delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart')) {
        // read the course values
        const course = e.target.parentElement.parentElement;
        
        // read the values
        getCourseInfo(course);
    }
} 

// read the HTML information of the selected course
function getCourseInfo(course) {
    console.log(course);
}
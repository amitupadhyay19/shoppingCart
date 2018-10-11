// VARIABLES
const courses = document.querySelector('#courses-list');
      shoppingCartContent = document.querySelector('#cart-content tbody');


// LISTNERS
loadEventListners();

function loadEventListners() {
    // when a course is added
    courses.addEventListener('click', buyCourse);
}



// FUNCTIONS
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
    // create an object with course data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    // insert into the shopping cart
    addIntoCart(courseInfo);
}

// display the selected course into the cart

function addIntoCart(course) {
    // create a <tr>
    const row = document.createElement('tr');

    // bulid the template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.image}" width=100px>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>

    `;
    // add into the shopping cart
    shoppingCartContent.appendChild(row);
}
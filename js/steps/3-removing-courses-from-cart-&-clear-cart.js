// VARIABLES
const courses = document.querySelector('#courses-list');
      shoppingCartContent = document.querySelector('#cart-content tbody');
      clearCartBtn = document.querySelector('#clear-cart');


// LISTNERS
loadEventListners();

function loadEventListners() {
    // when a course is added
    courses.addEventListener('click', buyCourse);

    // when the remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse);

    // clear cart btn
    clearCartBtn.addEventListener('click', clearCart);
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

// remove course from the dom
function removeCourse(e) {

    if(e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }
}

// clears the shopping cart
function clearCart() {
    // shoppingCartContent.innerHTML = ''; // means html empty

    // second method // recommended one
    while(shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }

}
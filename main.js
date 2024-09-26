//  get slider item

let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slide

let slideCount = sliderImages.length;

// set current slide

let currentSlide = 1;

// slide Number in the top

let slideNumberTop = document.querySelector(".slide-number");

// previous and next buttons

let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

// handle click on previous and next buttons

nextButton.addEventListener("click", nextSlide);

prevButton.addEventListener("click", previousSlide);

// 1-create the main Ul element
let paginationElement = document.createElement("ul");
// 2-create Id for UL element
paginationElement.setAttribute("id", "pagination-ul");

// creat li inside ul based on slides count

for (i = 1; i <= slideCount; i++) {
  // create li
  let paginationItem = document.createElement("li");
  // set custom attribute to li
  paginationItem.setAttribute("data-index", i);
  //set text inside li
  paginationItem.appendChild(document.createTextNode(i));

  //append item to main parent Ul
  paginationElement.appendChild(paginationItem);
}

// add the created ul to the father on html
document.getElementById("indicators").appendChild(paginationElement);

// get the New created Ul

let paginationCreatedUl = document.querySelector("#pagination-ul");
// get all li inside Ul
let paginationCreatedLis = Array.from(paginationCreatedUl.children);

// loop through All bullets item
for (let i = 0; i < paginationCreatedLis.length; i++) {
  paginationCreatedLis[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

// invoke checker funtion
checker();

// next slide function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return;
  } else {
    currentSlide++;
    checker();
  }
}

// previous slide function

function previousSlide() {
  if (prevButton.classList.contains("disabled")) {
    return;
  } else {
    currentSlide--;
    checker();
  }
}

// create the checker function

function checker() {
  // set top slide number
  slideNumberTop.textContent = "slide #" + currentSlide + " of " + slideCount;
  //remove all active class from images and paginationBullet
  removeAllActive();
  //set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");
  //   set active class on current pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");
  //   check if current slide is the first
  if (currentSlide == 1) {
    // add disabled class on previous class
    prevButton.classList.add("disabled");
  } else {
    // remove disabled class from previous buttons
    prevButton.classList.remove("disabled");
  }
  /*check last slide*/
  if (currentSlide === slideCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes from Images and paginationBullets

function removeAllActive() {
  // loop to remove all active class from images
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  // loop to remove all active class from li
  paginationCreatedLis.forEach((ele) => {
    ele.classList.remove("active");
  });
}

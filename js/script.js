// function hideBackground() {
//   //background image toggle
//   // document.getElementById("work-template").classList.toggle("read-mode");
//   document.getElementById("eat-bg").classList.toggle("read-mode");

//   //innertext of the button
//   //   var x = document.querySelector("#toggle");
//   //   if (x.innerHTML === "🙈") {
//   //     x.innerHTML = "🐵";
//   //   } else {
//   //     x.innerHTML = "🙈";
//   //   }
//   //document.querySelector('#toggle').textContent = "back on";
//   console.log("hi");
// }

function noBackground() {
  const backgrounds = document.getElementsByClassName("page-bg");
  for (let i = 0; i < backgrounds.length; i++) {
    backgrounds[i].classList.toggle("read-mode");
    console.log("background");
  }
}

const tags = {
  fun: ["wagmi", "slyder-fest", "microbe-psychic"],
  commercial: ["twitch", "wagmi"],
};

// const select = document.querySelector("#menuSelect");

// select.addEventListener("change", (event) => {
//   const userOption = event.target.value;
//   const blocks = document.querySelectorAll(".menu-block");
//   blocks.forEach((block) => {
//     console.log(block.dataset.type);
//     if (block.dataset.type !== userOption) {
//       block.style.display = "none";
//     } else {
//       block.style.display = "block";
//     }
//   });
// });

//collapsible
var expand = document.getElementsByClassName("show-section");
var i;

for (i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//enlarge and shrink text
var textSize = document.querySelector("p");

function enlargeText() {
  console.log(textSize);
  textSize.style.fontSize = "60px";
}

//draggable
$(function () {
  $("#draggable").draggable();
  console.log("dragging");
});

//image carousal
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slides");
  if (n > x.length) {
    slideIndex = 1;
    console.log("image-slides");
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

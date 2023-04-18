// function hideBackground() {
//   //background image toggle
//   document.getElementById("work-template").classList.toggle("read-mode");
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
  document.body.classList.toggle("no-bg");
}

//menu select
// const tags = {
//   fun: ["wagmi", "slyder-fest", "microbe-psychic"],
//   commercial: ["twitch", "wagmi"],
// };

const select = document.querySelector("#menuSelect");

select.addEventListener("change", (event) => {
  const userOption = event.target.value;
  const blocks = document.querySelectorAll(".menu-block");
  blocks.forEach((block) => {
    console.log(block.dataset.type);
    if (block.dataset.type !== userOption) {
      block.style.display = "none";
    } else {
      block.style.display = "block";
    }
  });
});

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
const allParagraphEl = document.querySelectorAll("p");

function enlargeText() {
  allParagraphEl.forEach((el) => {
    var style = window.getComputedStyle(el, null).getPropertyValue("font-size");
    var fontSize = parseFloat(style) * 1.1;
    el.style.fontSize = fontSize + "px";
  });
}

function shrinkText() {
  allParagraphEl.forEach((el) => {
    var style = window.getComputedStyle(el, null).getPropertyValue("font-size");
    var fontSize = parseFloat(style) / 1.1;
    el.style.fontSize = fontSize + "px";
  });
}

//image carousal
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  console.log(slideIndex);
  var i;
  var imgSlides = document.getElementsByClassName("img-slides");
  if (n > imgSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = imgSlides.length;
  }
  for (i = 0; i < imgSlides.length; i++) {
    imgSlides[i].style.display = "none";
  }
  console.log(slideIndex);
  imgSlides[slideIndex - 1].style.display = "block";
}

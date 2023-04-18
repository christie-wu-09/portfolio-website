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

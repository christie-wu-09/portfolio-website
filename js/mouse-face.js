let faceIMG;
let cont;

function setup() {
  let cvs = createCanvas(windowWidth, windowHeight);
  background(255);
  cont = select("#container-2");
  cvs.parent(cont);
  console.log("working");
}

function preload() {
  faceIMG = loadImage("images/babyspinach-face.jpg");
}

function draw() {}

function mousePressed() {
  image(faceIMG, mouseX + 20, mouseY + 20, 35, 35);
  console.log("mousepressed working");
}

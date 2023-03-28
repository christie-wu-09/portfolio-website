let cont;
let img1;
let imgX, imgY, imgInt, imgSize, gridX, gridY;
let img2, img2Width, img2Height;

let cam;
let delta = 0.01;
let value = 0;
let imgTilt = 0;
let sayHi;
let randomS;

function preload() {
  img1 = loadImage("images/babyspinach-face.png");
  //   img2 = loadImage("images/zoom-spinach.gif");
  //   sayHi = loadSound("images/Hi!!!!.m4a");
}

function setup() {
  cont = select("#container");
  console.log(cont);
  let cvs = createCanvas(windowWidth, windowHeight);
  // let cvs = createCanvas(windowWidth, windowHeight, WEBGL);
  cvs.parent(cont);

  // normalMaterial();
  // cam = createCamera();

  // // set initial tilt
  // cam.tilt(imgTilt);

  imageMode(CENTER);

  imgX = 0;
  imgY = 0;

  frameRate(60);

  img2Width = windowWidth / 3;
  img2Height = img2Width * 0.568;

  //DeviceOrientationEvent, DeviceMotionEvent
  if (
    typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    // ios 13 device
    background(255, 0, 0);
  } else {
    // non ios 13 device
    background(0, 255, 0);
  }

  if (windowWidth < 768) {
    imgSize = 30;
  }
}

function draw() {
  background(244);

  // let imgTilt = map(mouseY, 0, height, -0.2, 0.2);
  // // pan camera according to angle 'delta'
  // cam.tilt(imgTilt);

  translate(width / 2 - mouseX * 0.2, height / 2 - mouseY * 0.2);

  imgSize = mouseX / 10;

  if (mouseX > windowWidth - 10) {
    imgSize = (windowWidth - 10) / 10;
  }

  if (mouseX < 10) {
    imgSize = 10;
  }

  gridX = windowWidth / 10;
  gridY = windowHeight / 10;

  for (let i = 0; i < gridX; i++) {
    for (let j = 0; j < gridY; j++) {
      image(
        img1,
        imgX + i * (imgSize + 20),
        imgY + j * (imgSize + 20),
        imgSize,
        imgSize
      );
      image(
        img1,
        imgX - i * (imgSize + 20),
        imgY - j * (imgSize + 20),
        imgSize,
        imgSize
      );
      image(
        img1,
        imgX + i * (imgSize + 20),
        imgY - j * (imgSize + 20),
        imgSize,
        imgSize
      );
      image(
        img1,
        imgX - i * (imgSize + 20),
        imgY + j * (imgSize + 20),
        imgSize,
        imgSize
      );
    }
  }

  if (mouseIsPressed) {
    sayHi.play();
    console.log("hi");
  }

  console.log(imgSize);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

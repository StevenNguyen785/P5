// Lives stream from class demo is here: https://youtu.be/vE6GQu9cQCE
// final demo (but with competed racecar shape): https://art75.github.io/in-class-exercises/p5_master/p5-exercise-1/index.html


let carX = 50;
let vroom;
let carSpeed = 3;
let carAcc = .5;
let raceStarted = false;


function setup() {
  createCanvas(500, 700);

  vroom = new p5.Oscillator('square');
  vroom.start();
  vroom.amp(0.5);
}

function draw() {
  background(255, 204, 0);

//make start button


  // tie sound frequence to carX
  vroom.freq(carX);


  if (mouseIsPressed) {
  // if (frameCount > 180) {

    if (carX >= 500) {
      carX = -50;
      carSpeed = 3;
    } else { // other it's just increasing by 3
      carSpeed += carAcc;
      carX += carSpeed;
    }

  }
  // drawing car body
  noStroke();
  fill(900, 100, 100);
  rect(carX, 50, carX + 60, 80, carX, 80);

  // no car wheels

}


// mute it with mouse click!
function mousePressed() {
  vroom.stop();
}

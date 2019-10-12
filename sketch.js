var newBall;
var balls = [];

// change colour
var colors = [
  '#669AFF',
  '#5DB1E8',
  '#73ECFF',
  '#5DE8D5',
  '#66FFBE',
  '#243659',
  '#1F4D46'
];

function preload() {
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function mouseMoved() {
  var ballNumber = 3;

  for (var i = 0; i < ballNumber; i++) {

    var myBall = new Ball(mouseX, mouseY, 10);
    myBall.d = random(10, 50);
    myBall.speed1 = random(-1, 1);
    myBall.speed2 = random(-1, 1);
    myBall.color = color(random(colors));
    balls.push(myBall);
  }
}


function draw() {
  background('#cdcdcd');
  fill('white');
  textSize(20);
  text('Click to refresh', 10, 30);

  for (var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
    balls[j].color = color(random(colors));
  }
}

function mouseClicked(){
  document.location.reload();
}

function Ball(_x, _y, _diameter) {

  this.size = random() * windowWidth/100;
  this.x = _x;
  this.y = _y;
  this.color = 'red';
  this.speed1 = 30;
  this.speed2 = 2;

  var yDir = 1;
  var xDir = 1;

  this.move = function() {

    //speed
    this.x += this.speed1 * xDir;
    this.y += this.speed2 * yDir;

    //directions
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1
    }
  }

  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}

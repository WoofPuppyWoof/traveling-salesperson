var cities = [];
var totalCities = 8;

var recordDistance;
var bestEver;

var colorGreen = 0;

function setup() {
  createCanvas(400, 300);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }

  var d = calcDistance(cities);
  recordDistance = d;
  bestEver = cities.slice();
}

function draw() {
  background(0);
  if (colorGreen == 1) { // hacker mode
    fill(50, 205, 50);
  } else {
    fill(255);
  }
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  endShape();

  if (colorGreen == 1) {
    stroke(0, 255, 0)
  } else {
    stroke(255, 0, 255); // purple
  }
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < cities.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  endShape();



  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i, j);

  var d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
    console.log(recordDistance);
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}


function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length-1; i++) {
    var d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    sum += d;
  }
  return sum;
}

function keyPressed() {
  if (keyCode == 72) {
    if (colorGreen == 0) {
      colorGreen = 1;
    } else {
      colorGreen = 0;
    }
  }
}




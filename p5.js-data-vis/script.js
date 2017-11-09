var icon = document.getElementById('i-user');
var destElement = document.getElementById('all');
for (var count = 0; count < 100; count++) {
  var iconCloned = icon.cloneNode(true);
  iconCloned.id = 'img-cp';
  destElement.appendChild(iconCloned);
}



var scaleValue = 1;
var canvasMax = 500;

function setup() {
  var cWidth = document.getElementById('canvasContainer').clientWidth;

  var myCanvas = createCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
  myCanvas.parent('canvasContainer');
}

function draw() {
  push();
  noStroke();
  scale(scaleValue);
  background('#D6F5D6');
  //fill(red, gree, blue)
  var daca_2017 = 201678;
  var daca_2018 = 275344;
  var daca_2019 = 321920;
  var scaleNumber = 1/4000;
  
  textAlign(CENTER);
  fill('#AACC11');
  ellipse(50,100, daca_2017*scaleNumber ,daca_2017*scaleNumber);
  fill('#000000');
  text("DACA 2017", 50,150)
  
  fill('#AACC11');
  ellipse(150,100, daca_2018*scaleNumber ,daca_2018*scaleNumber);
  fill('#000000');
  text("DACA 2018", 150,150)
  
  fill('#AACC11');
  ellipse(250,100, daca_2019*scaleNumber ,daca_2019*scaleNumber);
  fill('#000000');
  text("DACA 2019", 250,150)
  
  
  var barW = 80;
  fill('#AACC11');
  rect(50-barW/2, 300, barW, -daca_2017*scaleNumber );
  fill('#000000');
  text("DACA 2017", 50, 330)

  fill('#AACC11');
  rect(150-barW/2, 300, barW, -daca_2018*scaleNumber );
  fill('#000000');
  text("DACA 2018", 150, 330)

  fill('#AACC11');
  rect(250-barW/2, 300, barW,  -daca_2019*scaleNumber );
  fill('#000000');
  text("DACA 2019", 250, 330)
  
  pop();
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  var cWidth = document.getElementById('canvasContainer').clientWidth;
  var cHeight = document.getElementById('canvasContainer').clientHeight;
  scaleValue = min(canvasMax,cWidth)/canvasMax;
  resizeCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
}

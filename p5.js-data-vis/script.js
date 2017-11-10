var icon = document.getElementById('i-user');
var destElement = document.getElementById('all');
for (var count = 0; count < 100; count++) {
  var iconCloned = icon.cloneNode(true);
  iconCloned.id = 'img-cp';
  destElement.appendChild(iconCloned);
}



var scaleValue = 1;
var canvasMax = 500;

var year = "2017";

function setYear(newyear){
    year = newyear;
}

function setup() {
  var cWidth = document.getElementById('canvasContainer').clientWidth;

  var myCanvas = createCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
  myCanvas.parent('canvasContainer');

  var bt2017 = document.getElementById('bt2017');
  var bt2018 = document.getElementById('bt2018');
  var bt2019 = document.getElementById('bt2019');

  bt2017.addEventListener("click", function() {
    setYear("2017");
  });
  bt2018.addEventListener("click", function() {
    setYear("2018");
  });
  bt2019.addEventListener("click", function() {
    setYear("2019");
  });
  bt2017.click();

}

function draw() {

  //fill(red, gree, blue)
  var value_2017 = 201678;
  var value_2018 = 275344;
  var value_2019 = 321920;
  var myScale = 1 / 4000;
  var barW = 100;

  var data, label , color;
  if (year == "2017") {
    data = value_2017 * myScale;
    label = "DACA 2017";
    color = "#D831E8";
  } else if (year == "2018") {
    data = value_2018 * myScale;
    label = "DACA 2018";
    color = "#5242FF";
  } else if (year == "2019") {
    data = value_2019 * myScale;
    label = "DACA 2019";
    color = "#58C1E8";
  }

  push();
  noStroke();
  scale(scaleValue);

  push();
  translate(canvasMax / 2, 0);
  background('#D6F5D6');

  textAlign(CENTER);
  fill(color);
  ellipse(0, 100, data, data);
  fill('#000000');
  text(label, 0, 200)


  fill(color);
  rect(-barW / 2, 400, barW, -data);
  fill('#000000');
  text(label, 0, 450)


  pop();
}

function setYear(_year) {
  year = _year;
}


function windowResized() {
  //cavas size will be resized in case window size has changed
  var cWidth = document.getElementById('canvasContainer').clientWidth;
  var cHeight = document.getElementById('canvasContainer').clientHeight;
  scaleValue = min(canvasMax, cWidth) / canvasMax;
  resizeCanvas(min(canvasMax, cWidth), min(canvasMax, cWidth));
}

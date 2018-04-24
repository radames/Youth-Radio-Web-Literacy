function processNumber(){
  //example
  var randomNumber = shuffleNumber(); //ignore this line
  document.querySelector("#first").hidden = true; //ignore this line

  var output1 = document.querySelector("#output-1") //variable storing the element to be modified
  var imgContent = "<img class='img-fluid' src='https://media.giphy.com/media/5VMNcCxVBibZK/giphy.gif'></img>";
  var msgContent = "<h1>Nothing Here</h1>";

  if(randomNumber > 7){ //
    output1.innerHTML = imgContent;
  } else {
    output1.innerHTML = msgContent;
  }

  //write your own if/else for container output-2 output-3 output-4

  //start creating a variable to store the element, use document.querySelector("#id") or document.getElementById('id')

  //create a testing variable, to test against the random number

}
function shuffleNumber(){
  var randomNumber = Math.floor(1 + Math.random()*13);
  document.querySelector("#number").innerHTML = randomNumber;
  return randomNumber
}

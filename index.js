var randomNumber1=Math.floor(Math.random()*6)+1;
var dice="dice"+randomNumber1+".png";
var image="images/"+dice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",image)

var randomNumber2=Math.floor(Math.random()*6)+1;
var dice2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dice2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 player one wins";}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=" 🚩player two wins ";}
else{
    document.querySelector("h1").innerHTML="draw!";}
          
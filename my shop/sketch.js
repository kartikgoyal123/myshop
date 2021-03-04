var gameState=0;
var option, database, mneu;

function setup() {
  createCanvas(850,400);
  database = firebase.database();
  mneu = new Mneu();
  mneu.getState();
  mneu.start();  
}

function draw() { 
  background("brown"); 
}

 
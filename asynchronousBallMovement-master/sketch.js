var database;

var canvas,form,player,game;
var allPlayers;
var distance=0;

var gameState=0;
var playerCount;


function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
    
}


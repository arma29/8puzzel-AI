// type variables
var type;

// view variables
var tiles;
var flex;

// etc
var moves;
var isRunning = false;

function setup() {
  createCanvas(500, 500);
  type = new GameLogic();
  type.initializeGrid();
  type.populateNeighbors();
  type.getNeighbors();
  //type.getFather();
  type.Astar(type);
  tiles = [[],[],[]];
  flex = width/3;
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      tiles[i][j] = new Board(j * flex, i * flex,
           flex - 3, type.grid[i][j]);
    }
  }

}

function draw() {
  background(51);
  drawTiles();

  if(isRunning){
      //ativada ao apertar algo, roda o A*;
  }
}

function drawTiles() {
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      tiles[i][j].update(type.grid[i][j]);
      tiles[i][j].display();
    }
  }
}

function keyPressed(){

    if(keyCode == LEFT_ARROW){
        type.step2(3);
    }
    else if(keyCode == UP_ARROW){
        type.step2(0);
    }
    else if(keyCode == DOWN_ARROW){
        type.step2(2);
    }
    else if(keyCode == RIGHT_ARROW){
        type.step2(1);
    }

}

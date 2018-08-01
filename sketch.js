// type variables
var type;

// view variables
var tiles;
var flex;

// etc
var moves;

function setup() {
  createCanvas(500, 500);
  type = new GameLogic();
  type.initializeGrid();
  type.populateNeighbors();
  type.getNeighbors();
  type.getFather();
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
}

function drawTiles() {
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      tiles[i][j].update(type.grid[i][j]);
      tiles[i][j].display();
    }
  }
}

/*function mousePressed() {
  // print(floor(mouseX / flex), floor(mouseY / flex));

  var clickedX = floor(mouseY / flex);
  var clickedY = floor(mouseX / flex);
  console.log(clickedX);
  console.log(clickedY);
  // print(clickedX, clickedY);
  // print(type.grid[clickedX][clickedY]);
  if(clickedX < 3 && clickedY < 3) {
    if(type.grid[clickedX][clickedY] != 0) {
      type.step(clickedX, clickedY);
    }

    console.log(moves);
  }

}*/

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

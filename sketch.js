// type variables
var type;

// view variables
var tiles;
var flex;

// etc
var moves;
var isRunning = false;
var score = 0;

function setup() {
  createCanvas(900, 700);

  //input = createInput();
  //input.position(20,65);



  type = new GameLogic();
  type.initializeGrid();

  button = createButton('Solve');

  button.position(800, 150);
  button.mousePressed(GoGo);
  //type.populateNeighbors();
    //type.getNeighbors();
  //type.getFather();
  //console.log(Manhattan(type.grid));


  tiles = [[],[],[]];
  flex = 210;
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      tiles[i][j] = new Board(j * flex, i * flex,
           flex - 3, type.grid[i][j]);
    }
  }

}

function GoGo(){
    type.Astar(type);
}

function draw() {
  background(255);
  drawTiles();
  text ("Moves: " + score, 800,90);

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
    score++;
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
    else if(key = ' '){
        type.Astar(type);
    }

}

// type variables
var type;

// view variables
var tiles;
var flex;

// etc
var moves;
var isRunning = false;
var score = 0;
var p_array = [];
var lockdown = false;
var minmoves = 999;

function setup() {
  createCanvas(900, 700);

  type = new GameLogic();
  type.initializeGrid();

  button = createButton('Next Move');

  button.position(800, 150);
  button.mousePressed(GoGo);


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
    p_array = type.Astar(type);
    isRunning = true;
    lockdown = true;
    minmoves = p_array.length-1;
}

function draw() {

  background(255);
  drawTiles();
  text ("Moves: " + score, 800,90);
  if(lockdown){
      text ("Min: " + minmoves, 800, 250);
  }

  while(isRunning){



      type.grid = p_array[1].grid;
      console.table(p_array[1].grid);
      drawTiles();

      isRunning = false;

  }

  if(minmoves == 1){
      text (" WINNER ", 800, 400);

  }


}

function drawTiles() {
    //console.log("quantos?");
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      tiles[i][j].update(type.grid[i][j]);
      tiles[i][j].display();
    }
  }
}

function drawSolver(){
    /*starTime = millis();
    if(startTime +100<millis()){

    }*/

    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        tiles[i][j].update(p_array[1].grid[i][j]);
        tiles[i][j].display();
      }
    }
            //console.table(p_array[x].grid);

}

function keyPressed(){

    if(!lockdown){
        score++;
        if(keyCode == LEFT_ARROW){
            //type.step2(3);
            type.grid = type.step2(3);
        }
        else if(keyCode == UP_ARROW){
            //type.step2(0);
            type.grid = type.step2(0);
        }
        else if(keyCode == DOWN_ARROW){
            //type.step2(2);
            type.grid = type.step2(2);
        }
        else if(keyCode == RIGHT_ARROW){
            //type.step2(1);
            type.grid = type.step2(1);
        }
    }

}

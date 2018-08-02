class GameLogic{
    constructor(){
        this.grid = [[], [], []];
        this.i0 = 0;
        this.j0 = 0;
        this.moves = 0;

        this.f = 0;
        this.hfunc = 0;
        this.priority = 0;

        this.neighbors = undefined;
        this.previous = null;

    }

    myCompare(a,b){
        return a.priority - b.priority;
    }

    initializeGrid(){
        var elements = [0,1,2,3,4,5,6,7,8];

        for(let i = 0; i< 3; i++){
            for(let j = 0; j<3; j++){
                var chosenIndex = floor(random(elements.length));
                this.grid[i][j] = elements[chosenIndex];
                elements.splice(chosenIndex,1);
                if(this.grid[i][j] == 0){
                    this.i0 = i;
                    this.j0 = j;
                }
            }
        }
    }

    step(x, y) {
        console.log("i0 e j0 valem:" + this.i0 + ", " + this.j0)
       if (x > 0 && this.grid[x - 1][y] == 0) {
          this.swap(x - 1, y, x, y);
       }
       else if (y < 2 && this.grid[x][y + 1] == 0) {
         this.swap(x, y + 1, x, y);
       }
       else if (x < 2 && this.grid[x + 1][y] == 0) {
         this.swap(x + 1, y, x, y);
       }
       else if (y > 0 && this.grid[x][y - 1] == 0) {
         this.swap(x, y - 1, x, y);
       }
    }

    step2(xx) {
        var i0 = this.i0;
        var j0 = this.j0;
        //console.log("i0 e j0 valem: " + i0 + " , " + j0);
        switch(xx){
            case 2: //UP
                if(i0 != 2){
                    this.grid[i0][j0] = this.grid[i0+1][j0];
                    this.grid[i0+1][j0] = 0;
                    this.i0++;
                    this.moves++;
                }
                break;
            case 3: //RIGHT
                if(j0 != 0){
                    this.grid[i0][j0] = this.grid[i0][j0-1];
                    this.grid[i0][j0-1] = 0;
                    this.j0--;
                    this.moves++;
                }

                break;

            case 0: //DOWN
                if(i0 != 0){
                    this.grid[i0][j0] = this.grid[i0-1][j0];
                    this.grid[i0-1][j0] = 0;
                    this.i0--;
                    this.moves++;
                }

                break;

            case 1: //LEFT
                if(j0 != 2){
                    this.grid[i0][j0] = this.grid[i0][j0+1];
                    this.grid[i0][j0+1] = 0;
                    this.j0++;
                    this.moves++;
                }
                break;
        }
    }

    swap(x1, y1, x2, y2) {
       this.grid[x1][y1] = this.grid[x2][y2];
       this.grid[x2][y2] = 0;
    }

    getNeighbors(){
        if(!this.neighbors){
            populateNeighbors();
        }
        return this.neighbors;
    }

    getCord(){
        for(let i = 0; i< 3; i++){
            for(let j = 0; j<3; j++){
                if(this.grid[i][j] == 0){
                    this.i0 = i;
                    this.j0 = j;
                }
            }
        }
    }

    copyNode(node){
        for(let i = 0; i< 3; i++){
            for(let j = 0; j<3; j++){
                node.grid[i][j] = this.grid[i][j];
                if(this.grid[i][j] == 0){
                    node.i0 = i;
                    node.j0 = j;
                }
            }
        }
        node.moves = this.moves;

        node.f = this.f;
        node.hfunc = this.hfun;
        node.priority = this.priority;

        node.neighbors = this.neighbors;
        node.previous = this.previous;


    }

    populateNeighbors(){
        this.neighbors = [];


        //moves;
        for(var i = 0; i < 4; i++){
            var node = new GameLogic();
            //node.grid = this.grid;
            this.copyNode(node);
            node.previous = new GameLogic();
            this.copyNode(node.previous)
            //node.i0 = this.i0;
            //node.j0 = this.j0
            //node.getCord();
            //console.log("i0 e j0 valem: " + node.i0 + " , " + node.j0);
            var temp = node.moves;
            //console.log("temp vale " + temp);
            //console.table(node.grid);

            node.step2(i);
            //node.getCord();
            //console.log("moves vale " + node.moves);

            if(temp != node.moves){
                //console.table(node.grid);
                node.hfunc = 111111111111;
                node.priority = 22222222222222;

                this.neighbors.push(node);
                //console.table(node.previous.grid);
            }



        }
    }

    getNeighbors(){
        for(var i = 0; i < this.neighbors.length; i++){
            console.log(this.neighbors[i].grid);
        }
    }

    getFather(){
        for(var i = 0; i < this.neighbors.length; i++){
            console.log(this.neighbors[i].previous.grid);
        }
    }

    Astar(node){
        var openSet = SortedList.create(GameLogic.myCompare);
        var closedSet = SortedList.create(GameLogic.myCompare);


        //start
        openSet.insert(node);


        //console.log(openSet[0].grid);

        while(openSet.length > 0){
            var current = openSet[0];
            //openSet.remove(0);

            //console.log(openSet[0].grid);
            console.log(current.grid);

            openSet.remove(0);
        }

    }


}

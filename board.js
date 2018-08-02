class Board{
    constructor(x,y,a,number){
        this.x = x;
        this.y = y;
        this.a = a;
        this.number = number;
    }

    update(number){
        this.number = number;
    }

    display(){
        if(this.number != 0){
            rect(this.x, this.y, this.a, this.a);
            textSize(42);
            textAlign(CENTER, CENTER);
            text(this.number, this.x, this.y, this.a, this.a);
        }
    }
}

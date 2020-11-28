class Box{

    constructor(val1,val2,val3,val4){
        var options = {
            restitution : 0.8,
            friction    : 0.3,
            density     : 1.0,
        }
        this.body= Bodies.rectangle(val1,val2,val3,val4,options);
        
        World.add(world, this.body);
        
        this.width = val3;
        this.height = val4;


    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }
}
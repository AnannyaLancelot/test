class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x,this.y,this.radius,options);
        
       this.pic=loadImage("paper.png")
       //this.pic.scale=0.2
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        image(this.pic,this.x,this.y,this.radius,this.radius);
        rectMode(CENTER);
        //ellipse(pos.x,pos.y,this.radius,this.radius)
        fill("blue");
        
    }
}
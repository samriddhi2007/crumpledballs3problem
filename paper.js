class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.1,
            density:1
}
     this.body = Bodies.circle(x,y,radius,options)
     this.radius = radius
     this.image = loadImage("paper.png")
     World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }

}

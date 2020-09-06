class Ground{
    constructor(x,y,width,height) {
        var options={
            
        }
           this.body=Bodies.rectangle(x,y,width.height)
           this.width=width;
           this.height=height;
           World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
       
        World.add(world, this.body);
       
    }
    
}
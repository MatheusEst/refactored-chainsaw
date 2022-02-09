class barquinhos{
    constructor(x,y,a,l,positionz,treze){
        this.a = a
        this.l = l
        this.positionz = positionz
        
        this.anim = treze

        this.body = Bodies.rectangle(x,y,a,l)
        this.barcoI = loadImage("barco.png");
        World.add(world,this.body);
        


    }
    remove(i){
        setTimeout(() => {
        Matter.World.remove(world,boats[i].body)
        delete boats[i]
        },2000)
    }
anima(){
    this.speed += 12;
}

    display(){
        var  indice = floor(this.speed%this.anim.length)
        push()

        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER)
        image(this.treze[indice],0,this.p,this.a,this.l);
        pop()
        
    }

}
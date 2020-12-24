class Chain{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:100,
        }
        this.pointB=point2;
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pointA1=this.chain.bodyA.position;
        var pointB1=this.pointB;
        line(pointA1.x,pointA1.y,pointB1.x,pointB1.y);
    }
}
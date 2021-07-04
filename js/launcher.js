class launcher
{
    constructor(obj1, point2){

        var options={
            bodyA: obj1,
            pointB: point2,
            length: 30,
            stiffness: 0.01
        }

        this.pointB = point2;

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){

        this.sling.bodyA = null;
      }

    attach(body){

        this.sling.bodyA = body;

    }

    display(){

        if(this.sling.bodyA!=null){
            
        var sling1pos = this.sling.bodyA.position;
        var sling2pos = this.pointB;
        strokeWeight(4);
        line(sling1pos.x, sling1pos.y, sling2pos.x, sling2pos.y);
        }
    }

}
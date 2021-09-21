class Slingshot{
    constructor(body1, pointB, length, stiffness){
        var slingshot_options = {
            bodyA: body1,
            pointB: pointB,
            length: length,
            stiffness: stiffness
        }

        
        this.sling = Constraint.create(slingshot_options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    display(){
        stroke('#301708');
        strokeWeight(4);

        var pointA = this.sling.bodyA;
        var pointB = this.pointB;

        if(this.sling.bodyA !== null){
            //160 130
            line(pointA.position.x - 10, pointA.position.y, 140, 120);
            line(pointA.position.x + 10, pointA.position.y, 175, 117.5);
           
        }

       
    }

    fly(){
        this.sling.bodyA = null;
    }
}
class Ball {
    constructor(x,y,radius,angle) {
      var options = {
          restitution: 0.8, 
          friction: 0.5
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  
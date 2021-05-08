class Drop{

    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':0.1,
          'density':1
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;

      World.add(world, this.body);
    }


    updateDrop(){

       

      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,700) , y:random(0,700)})
      }

      
     
          
    }

    showDrop(){

      
      fill("blue");
      ellipseMode(CENTER)
      ellipse(this.body.position.x,this.body.position.y ,this.radius,this.radius);

 
      
    }


  };
  
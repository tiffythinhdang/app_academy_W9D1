// Function.prototype.inherits = function(SuperClass) {
//   function Surrogate() {}
//   let Subclass = this;
//   Surrogate.prototype = SuperClass.prototype;
//   Subclass.prototype = new Surrogate();
//   Subclass.prototype.constructor = Subclass;
// };


function MovingObject() { }

MovingObject.prototype.hello = function() {
  console.log("hello");
};

function Ship() { }
Ship.prototype = Object.create(MovingObject.prototype);
Ship.prototype.constructor = Ship;
// Ship.inherits(MovingObject);

function Asteroid() { }
// Asteroid.inherits(MovingObject);
Asteroid.prototype = Object.create(MovingObject.prototype);
Asteroid.prototype.constructor = Asteroid;

let spaceship = new Ship();
let asteroid = new Asteroid();

spaceship.hello();
asteroid.hello();
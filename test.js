var Car = function(maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function(speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function() {
    console.log("driver name is " + this.driver);
  };
};

var myCar = new Car(70, "Ninja boy");
var myCar2 = new Car(10, "Basquiat Boy");
var myCar3 = new Car(30, "Gerire Boy");
var myCar4 = new Car(35, "Humpty Dumpty");

myCar.drive(30, 5);
myCar3.logDriver();

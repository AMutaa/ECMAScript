var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Pius";
myCar.drive = function() {
  console.log("now driving");
};

myCar.drive();

var myCar2 = {
  maxSpeed: 70,
  driver: "Paul",
  drive: function() {
    console.log("now driving again");
  }
};

console.log(myCar2.maxSpeed);
myCar2.drive();

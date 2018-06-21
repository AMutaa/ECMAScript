// Looping through Objects

let person = {
 fname: "Adam",
 lname: "Muta",
 arms: 2
};

let text = "";
for (let x in person) {
 text += person[x];
 console.log(x);
};
console.log(text);

// Array Iteration


const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
 return item % 2 === 0;
});
console.log(evens);


// find an item/object
const objects = [{
 id: 'a'
}, {
 id: 'b'
}, {
 id: 'c'
}];
const found = objects.find(function (item) {
 return item.id === 'b';

});
console.log(found);


var myCar = new Object();

myCar.make = 'Nissan';
myCar.model = 'Altima';
myCar['year'] = 2013;

console.log(myCar);

var stringJSON = '{ "name" : "Adam", "kids" : 0, "state" : "Massachusetts"}'
var myParse = JSON.parse(stringJSON);
console.log(myParse);
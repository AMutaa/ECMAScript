var birthday = new Date(1994, 10, 08, 11, 15, 25);
var birthday2 = new Date(1994, 10, 08, 11, 15, 25);

console.log(birthday.getFullYear());
console.log(birthday.getDay());
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {
  console.log("birthdays are equal");
} else {
  console.log("birthdays are not equal");
}

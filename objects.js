var someObject = {
 friends: [{
   name: "Malfoy"
  },
  {
   name: "Crabble"
  },
  {
   name: "Goyle"
  }
 ],
 color: "baby blue",
 isEvil: true
};


// MOVIEDB

var movieDB = [{
  title: "In Bruges",
  hasWatched: true,
  rating: 5
 },
 {
  title: "Frozen",
  hasWatched: false,
  rating: 4.5
 }
]

movieDB.forEach(function (movieDB) {
 console.log(buildString(movieDB));
});

function buildString(movieDB) {
 var result = "You have ";
 if (movieDB.hasWatched) {
  result += "watched ";
 } else {
  result += "not seen ";
 }
 result += "\"" + movieDB.title + "\"  - ";
 result += movieDB.rating + " stars";
 return result;
}
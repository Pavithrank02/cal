const obj = {
  pavi: {
    hobbies: ["play", "write", "anime", "dead"],
    anime: ["nauto", "baki", "AOT"]

  },
  gowri: {
    hobbies: [ "series","play", "anime"],
    anime: ["nauto", "baki", "bleach"]

  },
  vibin: {
    hobbies: ["play", "write", "anime"],
    anime: ["nauto", "baki", "myhero"]

  }

}
//option 1
let hobbie = Object.values(obj)
  .map((person) => person.anime)
  .flat();
console.log("main",hobbie);

const elementCounts = {};

hobbie.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});

console.log(elementCounts);


//console.log(arr);

//play = 1
//write = 111
//anime = 11
//

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
let hobbies = Object.values(obj)
  .map((person) => person.hobbies)
  .flat();
console.log("main",hobbies);

const elementCounts = {};

hobbies.forEach(element => {
  elementCounts[element] = (elementCounts[element] || 0) + 1;
});

console.log(elementCounts);


//option 2

const arr = [...obj.pavi.hobbies,...obj.gowri.hobbies,...obj.vibin.hobbies]
const elementCounts1 = {};

arr.forEach(element => {
  elementCounts1[element] = (elementCounts1[element] || 0) + 1;
});

console.log(elementCounts);


//console.log(arr);

//play = 1
//write = 111
//anime = 11
//

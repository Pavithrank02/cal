// const obj = {
//   pavi: {
//     hobbies: ["play", "write", "anime", "dead"],
//     anime: ["nauto", "baki", "AOT"]

//   },
//   gowri: {
//     hobbies: ["series", "play", "anime"],
//     anime: ["nauto", "baki", "bleach"]

//   },
//   vibin: {
//     hobbies: ["play", "write", "anime"],
//     anime: ["nauto", "baki", "myhero"]

//   }

// }
// //option 1
// const elementCounts = {};
// let hobbies = Object.values(obj)
//   .map((person) => person.anime)
//   .flat()

// console.log(hobbies)

// hobbies.forEach(element => {
//   if (elementCounts[element]) {
//     elementCounts[element] = elementCounts[element] + 1

//   } else {
//     elementCounts[element] = 1

//   }
// })
// console.log(elementCounts);
// const val = Object.values(elementCounts).map((series) => {
//   return series
// });
// val.filter((e) => {
//   if (e > 1) {
//     console.log("common")
//   } else { console.log("uncommon") }
// })
// console.log(val)





// //console.log(arr);

// //play = 1
// //write = 111
// //anime = 11
// //
// let i = 0
// function increase(){
//   i++
//   console.log(`courrent counter is ${i}`)
//   return i
// }

// increase()
// increase()

// function areBracketsBalanced(expr)
// {

//     // Using ArrayDeque is faster
//     // than using Stack class
//     let stack = [];

//     // Traversing the Expression
//     for(let i = 0; i < expr.length; i++)
//     {
//         let x = expr[i];

//         if (x == '(' || x == '[' || x == '{')
//         {

//             // Push the element in the stack
//             stack.push(x);
//             continue;
//         }

//         // If current character is not opening
//         // bracket, then it must be closing. 
//         // So stack cannot be empty at this point.
//         if (stack.length == 0)
//             return false;

//         let check;
//         switch (x){
//         case ')':
//             check = stack.pop();
//             if (check == '{' || check == '[')
//                 return false;
//             break;

//         case '}':
//             check = stack.pop();
//             if (check == '(' || check == '[')
//                 return false;
//             break;

//         case ']':
//             check = stack.pop();
//             if (check == '(' || check == '{')
//                 return false;
//             break;
//         }
//     }

//     // Check Empty Stack
//     return (stack.length == 0);
// }

// // Driver code
// let expr = "({}])";

// // Function call
// if (areBracketsBalanced(expr))
//     document.write("Balanced ");
// else
//     document.write("Not Balanced ");

// This code is contributed by rag2127

function balanced(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {

    let x = expr[i]

    if (x == '(' || x == '[' || x == '{') {

      stack.push(x)
      continue;
    }

    if (stack.length == 0)
      return false


    let check;

    switch (x) {
      case ')':
        check = stack.pop()
        if (check == '{' || check == '[')
          return false;
        break;
      case '}':
        check = stack.pop()
        if (check == '[' || check == '(')
          return false;
        break;
      case ']':
        check = stack.pop()
        if (check == '{' || check == '(')
          return false;
        break;
    }
  }
  return (stack.length == 0)

}
let expr = "][]({})"

if (balanced(expr)) {
  document.write("same")
} else {
  document.write("not")
}
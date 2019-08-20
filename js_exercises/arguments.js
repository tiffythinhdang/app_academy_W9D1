// function sum(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++ ) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log( sum(1, 2, 3, 4)); 
// console.log( sum(1, 2, 3, 4, 5));

// Function.prototype.myBind = function() {
//   let args = Array.from(arguments);
//   let context = args.shift();
//   let func = this;

//   return function callback () {
//     let newArgs = Array.from(arguments);
//     let allArgs = args.concat(newArgs);
//     func.apply(context, allArgs);
//   };
// };

// Function.prototype.myBind = function (...args) {
//   let context = args.shift();
//   let func = this;

//   return function callback(...newArgs) {
//     let allArgs = args.concat(newArgs);
//     func.apply(context, allArgs);
//   };
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");
// markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");

// function curriedSum(numArgs, ...args){
//   let numbers = args;
//   return function _curriedSum(num) {
//     numbers.push(num);
//     if(numbers.length === numArgs){
//       return numbers.reduce((a, b) => a + b);
//     } else {
//       return curriedSum(numArgs, ...numbers);
//     }
//   };
// }


// function curriedSum(numArgs) {
//   let numbers = [];
//   return function _curriedSum(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       return numbers.reduce((a, b) => a + b);
//     } else {
//       return _curriedSum;
//     }
//   };
// }

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function (numArgs) {
//   let args = [];
//   let func = this;

//   return function _curriedFunc (arg) {
//     args.push(arg);
//     if (args.length === numArgs) {
//       return func.apply(null, args);
//     } else {
//       return _curriedFunc;
//     }
//   }
// };

Function.prototype.curry = function (numArgs) {
  let args = [];
  let func = this;

  return function _curriedFunc(...newArgs) {
    args = args.concat(newArgs);
    if (args.length === numArgs) {
      return func.apply(null, args);
    } else {
      return _curriedFunc;
    }
  }
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry(3));
console.log(sumThree.curry(3)(4));
console.log(sumThree.curry(3)(4)(10));
console.log(sumThree.curry(3)(4)(10)(6));
console.log(sumThree.curry(3)(4)(10, 6));
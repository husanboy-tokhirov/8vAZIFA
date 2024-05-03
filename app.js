// //1-MISOL
// let x = +prompt("Son kiriting");
// let y = +prompt("Son kiriting");

// function calculator() {
//      if(x > y) {
//           document.write("win")
//      }
//      else if (x < y) {
//           document.write("loss");
//      }
//      else if(x == y) {
//           document.write("tie")
//      }
//      else {
//           document.write("error")
//      }
// }
// calculator()

//2-MISOL
// function countOccurrences(str, char) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }
// const str = "hello";
// const char = "l";
// document.write(countOccurrences(str, char));

//3-MISOL
// function satrniRaqamgaAylantirish(satr) {
//     let raqam = parseInt(satr);
//     if (!isNaN(raqam)) {
//         return raqam;
//     } else {
//         return "Siz raqam emas, matn kiritdingiz.";
//     }
// }
// console.log(satrniRaqamgaAylantirish("123")); 
// console.log(satrniRaqamgaAylantirish("12.3"));

//4-MISOL
// function findMissingCows(cows) {
//     const sortedCows = cows.sort((a, b) => a - b);
//     const firstCow = sortedCows[0];
//     const lastCow = sortedCows[sortedCows.length - 1];
//     const existingCows = new Set(sortedCows);
//     const missingCows = [];
//     for (let i = firstCow; i <= lastCow; i++) {
//         if (!existingCows.has(i)) {
//             missingCows.push(i);
//         }
//     }
//     return {
//         missingCount: missingCows.length,
//         missingList: missingCows
//     };
// }
// const cows = [1, 3, 4, 6, 7, 9, 10];
// const result = findMissingCows(cows);
// document.write("Yo'qolgan qo'ylar soni:", result.missingCount);
// document.write("Yo'qolgan qo'ylar ro'yxati:", result.missingList);

//5-MISOL
// function qadrlash(n) {
//     const monkeys = [];
//     for (let i = 1; i <= 10; i++) {
//         document.write(" ", i, " ")
//     }
//     return monkeys;
// }
// qadrlash();

                        // EDABIT
//1-MISOL
// function descendingOrder(raqam) {
//     let digits = raqam.toString().split('');
    
//     digits.sort(function(a, b) {
//         return b - a;
//     });
    
//     let result = parseInt(digits.join(''));
    
//     return result;
// }
// document.write(descendingOrder(123));
// document.write(descendingOrder(8479564));

//2-MISOL
// function arr(value, index, array) {
//     return array.indexOf(value) === index;
//   }
//   let a = ['a', 1, 'a', 2, '1'];
//   let result = a.filter(arr);
  
//   document.write(result);

//3-MISOL
// let text = prompt("Shu so'zladan birortasini kiriting:  nike,  Adidas, puma");
// function  string() {
//      if(text == "nike") {
//           document.write("Hello ", text);
//      }
//      else if(text == "Adidas")  {
//           document.write("Bye ", text)
//      }
//      else if(text == "puma") {
//           document.write("Bye ", text)
//      }
//  }
// string()

//4-MISOL
// function isSymmetric(number) {
//     let strNumber = number.toString();
//     let reversedStrNumber = strNumber.split('').reverse().join('');
    
//     if (strNumber === reversedStrNumber) {
//         return true; 
//          } else {
//         return false; 
//     }
// }
// console.log(isSymmetric(121)); 
// console.log(isSymmetric(123)); 
// console.log(isSymmetric(1221)); 
// console.log(isSymmetric(1234));

//5-MISOL
// let birinchiname1 = prompt("Birinchi name1; ")
// let birinchiname2 = prompt("Birinchi name2; ")
// let birinchiname3 = prompt("Birinchi name3; ")

// let arr = []

// arr.push(firstname1)
// arr.push(firstname2)
// arr.push(firstname3)

// function friendlyNames(arr) {
//     let arr1 = []
//     for (let i = 0; i < arr.length ; i++){
//         arr1.push(arr[i].charAt(0).toUpperCase() )
//     }
//     return arr1
// }

// let result = friendlyNames(arr)
// document.write(result)

// 6-MISOL
// let raqamlar = [2, 8, 5, 4, 9, 6];
// let jami = 0;

// function birlashtirish() {

// for (let i = 0; i < raqamlar.length; i++) {
//     jami += raqamlar[i];
// }
// return jami
// }
// let result = birlashtirish()
// document.write(result);

// //7-MISOL
// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("uchinchi sonni kiritng");
// let arr = [];
// arr.push(a);
// arr.push(b);
// arr.push(c);
// function calculator() {
//      for(let i = 0; i <= c; i++) {
//           if(arr[i] > c) {
//               return  a + b;
//           }
//           else {
//                console.log("Xato yozdingiz")
//           }
//      }
// }
// let result = calculator();
// document.write(result);

//8-MISOL
// let text = prompt("Kallaga kegan so'zni kiriting: ");
// function birlashtirish(text) {
//     let toqharflar ="" ;
//     let juftharflar="" ;
//     for (let i = 0; i <     text.length; i++) {
//         if (i % 2 == 0) {
//             toqharflar += text [i];
//         } else {
//             juftharflar += text [i];
//         }
//     }
//     return toqharflar + juftharflar;
// }
// let result = birlashtirish(text);
// document.write(result);

//9-MISOL
// function sheepMissing(arrsheep) {
// let count = 0;
//     for (let i = 0; i < arrsheep.length; i++) {
//         if (arrsheep[i] === false) {
//             count++;

//         }

//     }
//     return count
// }
// let sheep = sheepMissing[true, true, true, false, true];
// console.log("Hozirda yo'q qo'ylar soni: ",sheepMissing(sheep));

//10-MISOL
// function sortByContent(arr) {
//     function compareContent(a, b) {
//    let contentA = a.toString();
//    let contentB = b.toString();

//    if (contentA < contentB) {
//        return -1;
//    } else if (contentA > contentB) {
//        return 1;
//    } else {
//        return 0;
//    }
// }
// arr.sort(compareContent);
// return arr;
// }
// let array = [5, 2, 100, 10, 9];
// document.write(sortByContent(array));
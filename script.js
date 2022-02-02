////easy- Write a function that takes in an array of numbers and outputs the average of all the numbers. 
function avg(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(avg([1, 4, 7]));
  console.log(avg([10, 5]));
  console.log(avg([1.5, 3, 2.5, 1]));

  //medium -Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).You are given a target value to search. If found in the array return its index, otherwise return -1. You may assume no duplicate exists in the array. Use a function. Use the built in method .indexOf( ) and/or  for loops. 
let numbers = [4,5,6,7,0,1,2]
let firstNums = (numArr, target) => numArr.indexOf(target)

console.log(firstNums(numbers,7))


//very hard- You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

//very hard- You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

//going to need an array to hold the coins

//going to need to loop through an array.

//find the min amount of coins that goes into the ammount






///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\
//arr =Array

//Input: I have 2 inputs, an array and a number
//Output: an array (with the numbers rearranged)
// Tools: loop (use loops because we are running something a certain amount of times) - the loops will run for the number of rotations that we wnat the array to go through cilclicRotation ([2, 10,30,56,],3)         cilclicRotation ([2, 10,30,56,],30).....
//shift, unshift, push and pop methods to work with arrays, we want to use them to get the last element in the array and move it to the beginning each time the loops runs 
//Output the array once the loops has finished

function cyclicRotation(arr, rotation){
    for(var i = 0; i < rotation; i++){
      var moveIt = arr.pop();
      arr.unshift(moveIt);
    }
   return arr;
  } 
       console.log(cyclicRotation([7,50,0,9,],55))

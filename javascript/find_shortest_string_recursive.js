function findShortestStringRecursive(arr) {
  // type your code here
  if (arr.length === 1) {
    return arr[0]
  }
// console.log("arr[0]:", arr[0], ", arr[0].length=", arr[0].length)
// console.log("arr.slice(1):", arr.slice(1))
  const results = findShortestStringRecursive(arr.slice(1))
  console.log(results)
  console.log(arr.slice(1))

  // console.log("results.length:", results.length)
  return arr[0].length <= results.length ? arr[0] : results 
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));
// ['aaa', 'a', 'bb', 'ccc'] => ['a', 'bb', 'ccc']
  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// if the array has only length 1, then the only element of the array will be the answer. the remaining elements of the array will be sliced and will continue to be sliced until the array.length is only 1 at which point to return,
// And a written explanation of your solution

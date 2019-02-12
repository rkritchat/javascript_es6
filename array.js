const numbers = [1, 2, 3, 4]



/**
 * use shif for delete first element in array
 */

 numbers.shift() // return element that was deleted
 console.log(numbers)

 /**
  * use unshift to add data to first element in array, required param that we need to add.
  */
numbers.unshift(10)  //add ten to first element in array
console.log(numbers)


/**
 *  use pop to delete last element in array
 */
numbers.pop() //retrun element that was deleted
console.log(numbers)

/**
 * use push to add data to last element in array
 */
numbers.push(100)  //add one-hundred to last element in array
console.log(numbers)
// comparison function is of the form (T1: T, T2: T) => B: Boolean
//
// As a note, while this is recursive it still modifies the input in place
// If we followed a functional approach then the memory requirements for this
// algorithm would grow linearly with the size of the input

function recursiveBubbleSort(input, comparisonFunction, swapped = true) {
  if(swapped) {
    swapped = false
    for(let index = 0, place = 1, temp; place < input.length; index ++, place++) {
      if(comparisonFunction(input[index], input[place])) {
        temp = input[index]
        input[index] = input[place]
        input[place] = temp
        swapped = true
      }
    }
    return recursiveBubbleSort(input, comparisonFunction, swapped)
  }
  return input
}

const input = [1,5,3,7,2,8,12,4,6,6]

const compFn = (a, b) => a > b

const stringInput = ['a', 'n', 'c', 'z', 'hello']

recursiveBubbleSort(input, compFn)

recursiveBubbleSort(stringInput, compFn)

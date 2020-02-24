// comparison function is of the form (T1: T, T2: T) => B: Boolean

function bubbleSort(input, comparisonFunction) {
  let swapped = true
  while(swapped) {
    swapped = false
    for(let first = 0, second = 1, temp; second < input.length; first++, second++) {
      if(comparisonFunction(input[first], input[second])) {
        temp = input[second]
        input[second] = input[first]
        input[first] = temp
        swapped = true
      }
    }
  }
  return input
}

const input = [1,5,3,7,2,8,12,4,6,6]

const compFn = (a, b) => a > b

const stringInput = ['a', 'n', 'c', 'z', 'hello']

bubbleSort(input, compFn)

bubbleSort(stringInput, compFn)

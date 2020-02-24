// comparison function is of the form (T1: T, T2: T) => B: Boolean

function insertionSort(input, comparisonFunction) {
  for(let place = 1; place < input.length; place++) {
    let item = input[place], index = place - 1
    while(index >= 0 && comparisonFunction(input[index], item)) {
      input[index + 1] = input[index]
      index--
    }
    input[index + 1] = item
  }
  return input
}

const input = [1,5,3,7,2,8,12,4,6,6]

const compFn = (a, b) => a > b

const stringInput = ['a', 'n', 'c', 'z', 'hello']

insertionSort(input, compFn)

insertionSort(stringInput, compFn)

// comparison function is of the form (T1: Any, T2:Any) => B: Boolean

function selectionSort(input, comparisonFunction) {
  for(let index = 0; index < input.length; index ++){
    let item = input[index]
    let temp = item
    for (let place = index + 1; place < input.length; place++) {
      if(comparisonFunction(item, input[place])) {
        input[index] = input[place]
        input[place] = item
        item = input[index]
      }
    }
  }
  return input
}

const input = [1,5,3,7,2,8,12,4,6,6]

const compFn = (a, b) => a >= b

const stringInput = ['a', 'n', 'c', 'z', 'hello']

selectionSort(input, compFn)

selectionSort(stringInput, compFn)

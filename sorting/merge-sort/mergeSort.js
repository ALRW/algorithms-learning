// comparison function is of the form (T1: T, T2: T) => B: Boolean

function mergeSort(input, comparisonFunction) {
  if(input.length > 1) {
    const mid = Math.round(input.length / 2)
    const left = input.slice(0, mid)
    const right = input.slice(mid)
    mergeSort(left, comparisonFunction)
    mergeSort(right, comparisonFunction)
    let leftIndex = 0, rightIndex = 0, k = 0
    while(leftIndex < left.length && rightIndex < right.length) {
      if(!comparisonFunction(left[leftIndex], right[rightIndex])) {
        input[k] = left[leftIndex]
        leftIndex++
      } else {
        input[k] = right[rightIndex]
        rightIndex++
      }
      k++
    }
    while(leftIndex < left.length) {
      input[k] = left[leftIndex]
      leftIndex++
      k++
    }
    while(rightIndex < right.length) {
      input[k] = right[rightIndex]
      rightIndex++
      k++
    }

  }
  return input
}

const input = [1,5,3,7,2,8,12,4,6,6]

const compFn = (a, b) => a > b

const stringInput = ['a', 'n', 'c', 'z', 'hello']

mergeSort(input, compFn)

mergeSort(stringInput, compFn)

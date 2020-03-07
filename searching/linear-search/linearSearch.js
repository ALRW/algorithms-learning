function linearSearch(input, item) {
  let found = -1, index = 0
  while(index <= input.length) {
    if(input[index] === item) {
      found = index
      break
    }
    index++
  }
  return found
}

const input = [1,5,7,2,9,12,42,6,3]

linearSearch(input, 9)

linearSearch(input, 10)

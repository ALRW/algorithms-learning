function binarySearch(input, item, resultIndex = 0) {
  if(input.length === 1 && input[0] !== item) return -1
  let mid = Math.floor(input.length / 2)
  if(input[mid] === item) return resultIndex + mid
  if(input[mid] > item) return binarySearch(input.slice(0,mid), item)
  return binarySearch(input.slice(mid), item, mid)
}

const input = [1,5,7,2,9,12,42,6,3]

binarySearch(input, 42)

binarySearch(input, 13)

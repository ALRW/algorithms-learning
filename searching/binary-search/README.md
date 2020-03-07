## Binary Search

This algorithm is only available for work on sorted data structures. It uses
that knowledge to achieve a far better time complexity than that achieved by
linear search. It works as follows:

 - Split the array in two at an index
 - If the item at the index is the search item return the index
 - If the item is less than the item at the index then binarySearch the left half of the array
 - If the item is greater than the item at the index then binarySearch the right half of the array
 - If the search item is not found then return -1

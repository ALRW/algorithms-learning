## Bubble Sort

This is the simplest sorting algorithm. It works by doing the following:

 - Compare the first and second element
 - If the second is preferred by the sorting function then swap the two elements
 - Move to the next pair of elements
 - If a swap occurred while running through the array perform another set of comparisons until no swap occurs

While the algorithm is simple, in the worst case, sorting an already reverse
sorted structure, the complexity is O(n * n). In the best case, sorting an
already sorted array it is O(n). In terms of memory usage the algorithm works in
place and uses constant space.

## Insertion Sort

This is a more efficient algorithm than either bubble or selection sort and
works by sorting elements in the same way a human would with a pack of cards
in their hand.

 - The first element is already sorted
 - If the second element is less than the first move it to the beginning of the sorted portion of the array
 - shuffle all other elements in the sorted portion down an element
 - Repeat until the end of the array is reached

This approach is optimal for sorting small sets of data as it's complexity O(n*2)
scales with the size of the set to be sorted. It is efficient in terms of memory
usage as it sorts in place. It can be further optimised by using the binary
search algorithm to locate the insertion point for larger data sets.

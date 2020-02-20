## Selection Sort

This is one of the simpler sorting algorithms and works as such:
 - start at the beginning of the structure
 - find the lowest element based on some comparison function
 - swap that with the first element of the structure (assuming ascending order)
 - add 1 to the index
 - begin again from the new index

The positives of this approach are that Selection sort uses a constant amount
of space however the approach is is massively intensive computationally and
does not scale well with the size of the data set having a complexity of
O(n<sup>2</sup>)

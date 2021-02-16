### Big O

How long an algorithm takes to run?

![bigO](img/bigO.png)

### Big O's :

1. O(1) Constant- no loops
2. O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
3. O(n) Linear- for loops, while loops through n items
4. O(n log(n)) Log Liniear- usually sorting operations
5. O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops
6. O(2^n) Exponential- recursive algorithms that solves a problem of size N
7. O(n!) Factorial- you are adding a loop for every element

### Iterating through half a collection is still O(n)

### Two separate collections: O(a \* b)

### What can cause time in a function? :

1. Operations (+, -, \*, /)
2. Comparisons (<, >, ==)
3. Looping (for, while)
4. Outside Function call (function())

### Rules :

1. Always worst Case
2. Remove Constants
3. Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b), + for steps in order , \* for nested steps
4. Drop Non-dominant terms

### What causes Space complexity? :

1. Variables
2. Data Structures
3. Function Call
4. Allocations

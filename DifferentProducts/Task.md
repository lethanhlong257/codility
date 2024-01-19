You are given an array A of N positive integers.

Consider the following operation: remove one element from A and compute the product of all the remaining array elements. If there is only one element remaining in the array, the product is equal to that element.

For example, if A = [9, 16, 4], we can:

remove 9 and get a product equal to (16 × 4) = 64;
remove 16 and get a product of 36;
remove 4 and get a product of 144.
As seen in the example above, the product might change depending on which element we remove.

Write a function:

function solution(A);

that, given an array A of N integers, returns the number of different products that can be obtained by removing exactly one element from A.

Examples:

1. Given A = [9, 16, 4], the function should return 3. As explained above, the achievable products are 64, 36 and 144.

2. Given A = [3, 4, 2, 3, 1], the function should return 4.

3. Given A = [1000000000, 1000000000], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    let n = A.length
    let k = Array(n).fill(0)
    let maxSlice = Number.MIN_SAFE_INTEGER
    k[-1] = 0
    for(let i = 0; i < n; i++) {
        k[i] = Math.max(A[i], k[i-1] + A[i])
        maxSlice = Math.max(maxSlice, k[i])
    }

    return maxSlice
}

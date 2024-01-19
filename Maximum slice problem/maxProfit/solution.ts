// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solutions(A: number[]): number {
    const n = A.length
    let maxEnding = 0
    let maxProfit = 0
    for(let i = 0; i < n - 1; i ++) {
        const value = A[i]
        const nextValue = A[i + 1]
        maxEnding = Math.max(0, maxEnding + nextValue - value)
        maxProfit = Math.max(maxProfit, maxEnding)
    }

    return maxProfit
}

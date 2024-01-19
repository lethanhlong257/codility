// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
    const multi11: number[] = []
    A.forEach(a => {
        if (a % 11 === 0) {
            multi11.push(a)
        }
    })

    const sorted = multi11.sort((a, b) => a - b)

    return sorted[0]
}

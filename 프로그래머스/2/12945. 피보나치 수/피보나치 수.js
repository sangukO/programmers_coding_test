//DP
function solution(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i-1] + fib[i-2]) % 1234567;
    }
    return fib[n];
}

// 재귀
// function solution(n) {
//     var f = (n) => {
//         if (n <= 1) {
//             return 1;
//         }
//         return f(n-1)%1234567 + f(n-2)%1234567;
//     }
//     return f(n-1);
// }
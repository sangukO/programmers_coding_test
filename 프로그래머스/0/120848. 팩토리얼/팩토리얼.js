function solution(n) {
    let factorial = 1;
    let count = 1;
    while(factorial <= n) {
        factorial *= count+1;
        count++;
    }
    return count-1;
}
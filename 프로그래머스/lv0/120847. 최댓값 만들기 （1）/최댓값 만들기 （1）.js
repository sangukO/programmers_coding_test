function solution(numbers) {
    var [a, b] = numbers.sort(function(a,b){return b - a});
    return a * b;
}
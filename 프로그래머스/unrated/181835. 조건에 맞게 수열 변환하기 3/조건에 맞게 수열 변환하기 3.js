function solution(arr, k) {
    var answer = [];
    if (k%2!=0) {
        for (number of arr) {
            answer.push(number*k);
        }
    } else {
        for (number of arr) {
            answer.push(number+k);
        }
    }
    return answer;
}
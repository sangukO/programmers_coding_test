function solution(number) {
    var answer = 0;
    for (num of number) {
        answer += parseInt(num);
    }
    return answer%9;
}
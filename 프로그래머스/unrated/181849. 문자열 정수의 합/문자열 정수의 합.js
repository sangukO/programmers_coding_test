function solution(num_str) {
    var answer = 0;
    for (str of num_str) {
        answer += parseInt(str);
    }
    return answer;
}
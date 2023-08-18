function solution(n) {
    var answer = 0;
    for(n of n.toString()) {
        answer += ~~n;
    }
    return answer;
}
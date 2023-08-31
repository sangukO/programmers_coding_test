function solution(s1, s2) {
    var answer = 0;
    for (so1 of s1) {
        if (s2.includes(so1)) {
            answer += 1;
        }
    }
    return answer;
}
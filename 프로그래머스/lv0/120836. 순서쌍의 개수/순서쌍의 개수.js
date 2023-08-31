function solution(n) {
    var answer = 0;
    var d = 0;
    for (i=1;i<=n;i++) {
        if (n/i>=1 && n%i==0) {
            answer += 1;
        }
    }
    return answer;
}
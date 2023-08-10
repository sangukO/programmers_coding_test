function solution(n) {
    var answer = 0;
    for (i=4;i<=n;i++) {
        var count = 0;
        for (j=1;j<=i;j++) {
            if(i%j == 0) {
                count += 1;
            }
        }
        if (count >= 3) {
            answer += 1;
        }
    }

    return answer;
}
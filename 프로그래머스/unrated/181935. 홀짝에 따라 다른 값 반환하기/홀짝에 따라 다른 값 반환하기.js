function solution(n) {
    var answer = 0;
    if (!(n%2===0)) {
        for (i=n;i>0;i-=2){
            answer += i;
        }
    } else {
        for (i=n;i>0;i-=2){
            answer += i ** 2;
        }
    }
    return answer;
}
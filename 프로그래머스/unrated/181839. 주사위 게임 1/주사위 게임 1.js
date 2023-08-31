function solution(a, b) {
    var answer = 0;
    if ((a+b)%2==0&&a%2!=0) {
        answer = (a*a)+(b*b);
    } else if ((a+b)%2!=0) {
        answer = 2*(a+b);
    } else {
        answer = Math.abs(a-b)
    }
    return answer;
}
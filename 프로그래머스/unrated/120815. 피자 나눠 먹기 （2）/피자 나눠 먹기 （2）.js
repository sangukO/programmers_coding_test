function solution(n) {
    var answer = 0;
    var sum = n;

    while(true) {
        if(n%6===0) {
            answer = n/6;
            break;
        } else {
            n = n + sum;
        }
    }
    
    return answer;
}
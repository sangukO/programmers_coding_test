function solution(n) {
    var answer = 0;
    var i = 0;
    var count = 0;
    while(true) {
        if (i!=3&&i%3!=0) {
            if(!i.toString().includes('3')) {
                answer += i;
                count += 1;
            }
        }
        if (count == n) {
            answer = i;
            break;
        }
        i += 1;
    }
    return answer;
}
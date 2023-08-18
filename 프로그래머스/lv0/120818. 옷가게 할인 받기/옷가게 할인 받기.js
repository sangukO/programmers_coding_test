function solution(price) {
    var answer = 0;
    if(price>=100000) {
        answer = parseInt(price-(price*0.05))
    }
    if(price>=300000) {
        answer = parseInt(price-(price*0.1))
    }
    if(price>=500000) {
        answer = parseInt(price-(price*0.20))
    }
    if(price<100000) {
        answer = price
    }
    return answer;
}
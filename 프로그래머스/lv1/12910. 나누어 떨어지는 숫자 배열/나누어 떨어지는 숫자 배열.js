function solution(arr, divisor) {
    var answer = [];
    for (v of arr) {
        if(v%divisor==0) {
            answer.push(v)
        }
    }
    if(answer.length==0){
        return [-1]
    }
    
    answer.sort((a, b) => a - b);
    
    return answer;
}
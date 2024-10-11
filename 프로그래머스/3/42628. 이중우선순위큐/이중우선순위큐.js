function solution(operations) {
    var answer = [];
    for (i of operations) {
        if (i[0] === 'I') {
            answer.push(+i.split(' ')[1]);
        } else if (i.split(' ')[1] === '1') {
            answer.sort((a,b)=>{return a-b});
            answer.pop();
        } else {
            answer.sort((a,b)=>{return a-b});
            answer.shift();          
        }
    }
    answer.sort((a,b)=>{return a-b});
    
    return answer.length === 0 ? [0,0] : [answer[answer.length-1], answer[0]];
}
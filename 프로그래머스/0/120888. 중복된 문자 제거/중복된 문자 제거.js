function solution(my_string) {
    var answer = [];
    [...my_string].forEach((v,i)=>{
        if(!answer.includes(v)) {
            answer.push(v);
        }
    })
    return answer.join('');
}
function solution(emergency) {
    var answer = [];
    let sortedArray = [...emergency].sort((a, b) => {return b - a});
    
    for (let num of emergency) {
        answer.push(sortedArray.indexOf(num)+1);
    }
    
    return answer;
}
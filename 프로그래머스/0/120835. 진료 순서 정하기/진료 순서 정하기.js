function solution(emergency) {
    let sortedArray = [...emergency].sort((a, b) => b - a);
    
    // for (let num of emergency) {
    //     answer.push(sortedArray.indexOf(num)+1);
    // }
    
    return emergency.map(num => sortedArray.indexOf(num) + 1);
}
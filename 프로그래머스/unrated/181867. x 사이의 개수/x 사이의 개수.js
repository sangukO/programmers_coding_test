function solution(myString) {
    var answer = [];
    answer = myString.split("x");
    answer = answer.map((x)=>x.length);
    return answer;
}
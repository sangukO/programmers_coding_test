function solution(myString, pat) {
    var answer = 0;
    [...myString].map((v, i) => {
        if(myString.slice(i, i+pat.length) === pat) {
            answer++;
        }
    })
    return answer;
}
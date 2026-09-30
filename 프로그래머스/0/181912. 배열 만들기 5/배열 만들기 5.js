function solution(intStrs, k, s, l) {
    var answer = [];
    for (let i=0; i<intStrs.length; i++) {
        let str = parseInt([...intStrs[i]].splice(s, l).join(''));
        if (str > k) {
            answer.push(str);
        }
    }
    return answer;
}
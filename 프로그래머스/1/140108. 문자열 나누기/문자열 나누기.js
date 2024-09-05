function solution(s) {
    let answer = 0;
    let firstChar = s[0];
    let firstCharNum = 0;
    let otherCharNum = 0;
    for(let i = 0;i<s.length;i++) {
        if (s[i] === firstChar) {
            firstCharNum++;
        } else {
            otherCharNum++;
        }
        if (firstCharNum === otherCharNum) {
            s = s.substr(firstCharNum+otherCharNum);
            firstChar = s[0];
            answer++;
            i = -1;
            firstCharNum = 0;
            otherCharNum = 0;
        }
    }
    if (firstCharNum !== otherCharNum) {
        answer++;
    }
    return answer;
}
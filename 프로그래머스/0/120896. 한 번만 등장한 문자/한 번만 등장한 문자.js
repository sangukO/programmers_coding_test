function solution(s) {
    let answer = "";
    let unique = new Set([...s]);
    for (const char of unique) {
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            answer += char;
        }
    }
    return [...answer].sort().join('');
}
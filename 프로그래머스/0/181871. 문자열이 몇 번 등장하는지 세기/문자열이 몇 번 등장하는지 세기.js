function solution(myString, pat) {
    
    return [...myString].filter((v, i) => myString.slice(i, i + pat.length) === pat).length;
}
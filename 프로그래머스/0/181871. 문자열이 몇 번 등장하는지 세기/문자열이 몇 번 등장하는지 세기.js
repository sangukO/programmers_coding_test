function solution(myString, pat) {
    return [...myString].filter((_, i) => myString.slice(i, i + pat.length) === pat).length;
}
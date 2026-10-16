function solution(array) {
    return [...array.join('')].reduce((acc, cur) => acc + (cur === '7' ? 1 : 0), 0);
}
function solution(my_string) {
    const len = my_string.length;
    var answer = [];
    for (let i=0;i<len;i++) {
        answer.push(my_string);
        my_string = my_string.substring(1);
    }
    return answer.sort();
}
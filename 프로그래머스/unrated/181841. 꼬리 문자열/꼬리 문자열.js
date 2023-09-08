function solution(str_list, ex) {
    var answer = '';
    for (str of str_list) {
        if (str.includes(ex)) {
            str = '';
        }
        answer += str;
    }
    return answer;
}
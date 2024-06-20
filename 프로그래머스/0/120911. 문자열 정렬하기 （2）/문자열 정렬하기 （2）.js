function solution(my_string) {
    var answer = my_string.toLowerCase();
    var arr = answer.split('');
    arr.sort();
    answer = arr.join('');
    return answer;
}
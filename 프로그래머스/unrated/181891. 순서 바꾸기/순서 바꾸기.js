function solution(num_list, n) {
    var answer = num_list.slice(n);
    answer = answer.concat(num_list.slice(0, n));
    return answer;
}
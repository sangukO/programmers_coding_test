function solution(num_list, n) {
    var answer = [];
    for (i=n-1;i<num_list.length;i++) {
        answer.push(num_list[i]);
    }
    return answer;
}
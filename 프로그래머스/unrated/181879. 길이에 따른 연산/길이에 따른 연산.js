function solution(num_list) {
    var answer = 1;
    if (num_list.length >= 11) {
        for (e of num_list) {
            answer += e;
        }
        return answer-1;
    } else {
        for (e of num_list) {
            answer *= e;
        }
        return answer;
    }
}
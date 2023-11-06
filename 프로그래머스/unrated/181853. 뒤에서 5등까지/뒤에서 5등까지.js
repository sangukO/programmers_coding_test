function solution(num_list) {
    var answer = [];
    var sorted_num_list = num_list.sort(function (a, b) {return a-b});
    for (i in sorted_num_list) {
        answer.push(sorted_num_list[i]);
        if (i==4) {
            break;
        }
    }
    return answer;
}
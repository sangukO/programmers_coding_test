function solution(my_string) {
    var answer = [];
    for (str of my_string) {
        if (str.charCodeAt(0)>=48&&str.charCodeAt(0)<=57) {
            answer.push(parseInt(str));
        }
    }
    answer = answer.sort(function(a, b) {return a-b});
    return answer;
}
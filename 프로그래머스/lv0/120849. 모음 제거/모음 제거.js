function solution(my_string) {
    var answer = '';
    for (string of my_string) {
        if (["a", "e", "i", "o", "u"].includes(string)) {
            continue;
        } else {
            answer += string;
        }
    }
    return answer;
}
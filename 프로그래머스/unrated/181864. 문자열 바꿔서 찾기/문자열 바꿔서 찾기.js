function solution(myString, pat) {
    var answer = 0;
    var string = "";
    for (str of myString) {
        if (str == "A") {
            string += "B";
        } else {
            string += "A";
        }
    }
    return string.includes(pat) ? 1 : 0;
}
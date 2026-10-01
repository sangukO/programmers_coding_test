function solution(myStr) {
    var answer = [];
    answer = [...myStr]
        .map(v => {
            if (v !== "a" && v !== "b" && v !== "c") {
                return v
            } else {
                return "_"
            }
        })
        .join("")
        .split("_")
        .filter(v => v != "");
    
    return answer.length ? answer : ["EMPTY"];
}
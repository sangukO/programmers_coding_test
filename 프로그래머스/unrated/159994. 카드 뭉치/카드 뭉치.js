function solution(cards1, cards2, goal) {
    var answer = '';
    var count = 0;
    var p = goal.length
    while (count < p) {
        var word = goal[0];
        if (cards1[0] == word) {
            cards1.shift()
            goal.shift()
        } else if (cards2[0] == word) {
            cards2.shift()
            goal.shift()
        }
        count += 1;
    }
    if(goal.length == 0) {
        answer = "Yes"
    } else {
        answer = "No"
    }
    return answer;
}
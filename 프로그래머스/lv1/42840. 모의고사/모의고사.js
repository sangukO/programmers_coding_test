function solution(answers) {
    var answer = [];
    
    var first = "12345".repeat(2000);
    var second = "21232425".repeat(1250);
    var third = "3311224455".repeat(1000);
    
    var f_score = 0;
    var s_score = 0;
    var t_score = 0;
    
    for(i=0;i<answers.length;i++) {
        if(answers[i] == first[i]) {
            f_score += 1;
        }
        if(answers[i] == second[i]) {
            s_score += 1;
        }
        if(answers[i] == third[i]) {
            t_score += 1;
        }
    }
    
    answer = [f_score, s_score, t_score];
    
    var maxScore = Math.max(...answer);
    var maxPeople = [];
    
    for (i=0;i<answer.length;i++) {
        if (answer[i]>=maxScore) {
            maxPeople.push(i+1);
        }
    }
    
    return maxPeople;
}
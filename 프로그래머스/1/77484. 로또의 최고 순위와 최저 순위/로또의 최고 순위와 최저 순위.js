function solution(lottos, win_nums) {
    let lowGrade = 0;
    let highGrade = 0;
    let answer = [];

    for (let i=0;i<lottos.length;i++) {
        if (lottos[i] === 0) {
            highGrade++;
        } else if (win_nums.indexOf(lottos[i]) !== -1) {
            lowGrade++;
        }
    }
    
    highGrade += lowGrade;
    
    answer[0] = 7 - highGrade <= 6 ? 7 - highGrade : 6;
    answer[1] = 7 - lowGrade <= 6 ? 7 - lowGrade : 6;
    
    return answer;
}
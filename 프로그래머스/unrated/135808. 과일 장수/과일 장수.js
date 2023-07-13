function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a,b) => b - a)
    var arr = [];
    var temp_arr = [];
    for (i=0;i<score.length;i++) {
        temp_arr.push(score[i])
        if (i!=0 && (i+1)%m==0) {
            arr.push(temp_arr)
            temp_arr = []
        }
    }
    for (i=0;i<arr.length;i++) {
        arr[i] = arr[i].sort((a,b)=> a - b)
        answer += arr[i][0]*arr[i].length;
    }
    return answer;
}
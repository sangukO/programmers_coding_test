function solution(i, j, k) {
    var answer = 0;
    for (let index=i;index<=j;index++) {
        if (index.toString().includes(k)) {
            let count = 0;
            [...index.toString()].map((v,i)=>{
                if (v == k) {
                    count++;
                }
                if (i == [...index.toString()].length-1) {
                    answer += count-1;
                }
            })
            answer++;
        }
    }
    return answer;
}
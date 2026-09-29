function solution(num_list) {
    var answer = 0;
    for(let i=0;i<num_list.length;i++) {
        let tmp = num_list[i];
        while(tmp>1) {
            if (tmp%2===1) tmp -= 1;
            tmp /= 2;
            answer++;
        }
    }
    return answer;
}
function solution(num_list) {
    var answer = 0;
    for(let i=0;i<num_list.length;i++) {
        let tmp = num_list[i];
        if(tmp%2==1) tmp = tmp - 1;
        for(let x=tmp;x>1;x/=2) {
            if(x%2==1) x = x - 1;
            answer+=1;
        }
    }
    return answer;
}
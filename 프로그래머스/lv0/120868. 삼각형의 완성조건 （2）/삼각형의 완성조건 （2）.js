function solution(sides) {
    var answer = 0;
    var b = 0;
    var s = 0;
    
    if(sides[0]>=sides[1]){
        b = sides[0]
        s = sides[1]
    } else {
        s = sides[0]
        b = sides[1]
    }
    
    for(i=b;i>=1;i--){
        if(b<(s+i)){
            answer += 1
        }
    }
    
    for(i=b+1;i<(s+b);i++){
        answer += 1
    }
    return answer;
}
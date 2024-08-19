function solution(number, limit, power) {
    var answer = 0;
    var attackArr = new Array(number + 1).fill(0);

    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            attackArr[j]++;
        }
    }
    
    attackArr.shift();
    
    answer = attackArr.map((v)=>{
        if (v>limit) {
            v = power;
        }
        return v;
    }).reduce((acc, v) => acc+v);
    
    return answer;
}
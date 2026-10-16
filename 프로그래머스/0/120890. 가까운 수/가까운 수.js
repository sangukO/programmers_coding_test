function solution(array, n) {
    let dis = Infinity;
    let answer = 0;
    
    for(const num of array) {
        const curDis = Math.abs(num - n);
        
        if (curDis < dis || (curDis === dis && num < answer)) {
            dis = curDis;
            answer = num;
        }
    }
    return answer;
}
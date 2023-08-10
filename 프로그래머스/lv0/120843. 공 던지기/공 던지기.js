function solution(numbers, k) {
    var answer = 0;
    var num = 0;
    for (i=0;i<k*2;i++) {
        num += 1;
    }
    while (true) {
        if(num-numbers.length<=0) {
            break;
        } else {
            num -= numbers.length
        }
    }
    if (num-1 == 0) {
        return numbers[numbers.length-1]
    }
    else {
        return num-1;
    }
}
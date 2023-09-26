function solution(box, n) {
    var list = [];
    for (len of box) {
        while(true) {
            if(len%n===0) {
                list.push(len/n);
                break;
            }
            len--;
        }
    }
    return list.reduce((a, c) => a * c);
}
function solution(arr) {
    let pow = 1;
    while(pow<arr.length) {
        pow*=2;
    }
    let tmp = Array(pow - arr.length).fill(0);
    arr.push(...tmp);
    return arr;
}
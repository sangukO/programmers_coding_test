function solution(arr, n) {
    if (arr.length%2!=0) {
        for (i=0;i<arr.length;i+=2) {
            arr[i] = arr[i]+n;
        }
    } else {
        for (i=1;i<arr.length;i+=2) {
            arr[i] = arr[i]+n;
        }
    }
    return arr;
}
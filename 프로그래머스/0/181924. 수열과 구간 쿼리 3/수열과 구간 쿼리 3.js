function solution(arr, queries) {
    for (let i=0; i<queries.length; i++) {
        let firstIndex = queries[i][0];
        let firstNum = arr[firstIndex];
        let secondIndex = queries[i][1];
        let secondNum = arr[secondIndex];
        
        arr[firstIndex] = secondNum;
        arr[secondIndex] = firstNum;
    }
    return arr;
}
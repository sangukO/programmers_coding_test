function solution(arr, queries) {
    for (let i=0; i<queries.length; i++) {
        let firstIndex = queries[i][0];
        let firstNum = arr[firstIndex];
        let secondIndex = queries[i][1];
        let secondNum = arr[secondIndex];
        
        arr.splice(firstIndex, 1);
        arr.splice(secondIndex-1, 1);
        arr.splice(firstIndex, 0, secondNum);
        arr.splice(secondIndex, 0, firstNum);
    }
    return arr;
}
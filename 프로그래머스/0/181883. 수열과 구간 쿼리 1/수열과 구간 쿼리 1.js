function solution(arr, queries) {
    
    for(let i=0;i<queries.length;i++) {
        for(let j=0;j<arr.length;j++) {
            if (j>=queries[i][0] && j<=queries[i][1]) {
                arr[j]++;
            }
        }
    }
    
    return arr;
}
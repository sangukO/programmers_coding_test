function solution(arr, queries) {
    for (const [firstIndex, secondIndex] of queries) {
        [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
    }
    return arr;
}
function solution(arr, intervals) {
    let firstInterval = arr.slice(intervals[0][0], intervals[0][1] + 1);
    let secondInterval = arr.slice(intervals[1][0], intervals[1][1] + 1);
    
    return firstInterval.concat(secondInterval);
}
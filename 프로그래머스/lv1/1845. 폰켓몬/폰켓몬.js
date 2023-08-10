function solution(nums) {
    var answer = 0;
    var count = nums.length/2;
    nums.sort(function(a, b)  {
        return a - b;
    });
    var dup_nums = nums.filter((v,i) => nums.indexOf(v) === i)
    if (count <= dup_nums.length) {
        answer = count
    } else {
        answer = dup_nums.length
    }
    return answer;
}
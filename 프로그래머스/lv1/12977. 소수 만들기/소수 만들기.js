function solution(nums) {
    var answer = 0;
    var arr = [];
    for(i=0;i<nums.length-2;i++) {
        for(j=i+1;j<nums.length-1;j++) {
            for(k=j+1;k<nums.length;k++) {
                arr.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    for(i=0;i<arr.length;i++) {
        var c = 0;
        for(j=2;j<arr[i];j++) {
            if(arr[i]%j === 0) {
                c += 1;
            }
        }
        if (c === 0) {
            answer += 1;
        }
    }
    return answer;
}
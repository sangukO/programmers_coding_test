function solution(num_list) {
    var answer = 0;
    var odd = 0;
    var even = 0;
    
    for (i=0;i<num_list.length;i++) {
        if (i%2!=0) {
            odd += num_list[i];
        } else {
            even += num_list[i];
        }
    }
    
    return odd > even ? odd : even;
}
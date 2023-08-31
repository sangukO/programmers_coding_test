function solution(my_string, is_suffix) {
    var answer = 0;
    var suffix_list = [];
    for (i=0;i<my_string.length;i++) {
        suffix_list.push(my_string.slice(i,my_string.length));
    }
    
    return suffix_list.includes(is_suffix) ? 1 : 0;
}
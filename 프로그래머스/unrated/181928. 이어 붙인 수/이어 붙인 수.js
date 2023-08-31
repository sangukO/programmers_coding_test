function solution(num_list) {
    var odd = "";
    var even = "";
    for (e of num_list) {
        if (e%2!=0) {
            odd += e.toString();
        } else {
            even += e.toString();
        }
    }
    return parseInt(odd)+parseInt(even);
}
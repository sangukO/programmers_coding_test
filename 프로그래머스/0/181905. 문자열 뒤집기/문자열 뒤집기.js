function solution(my_string, s, e) {
    var answer = '';
    
    let slicedStr = my_string.slice(s, e+1);
    let reversedStr = [];
    
    reversedStr = [...slicedStr].reverse().join('');
    

    answer = my_string.slice(0, s) + reversedStr + my_string.slice(e+1, my_string.length);
    return answer;
}
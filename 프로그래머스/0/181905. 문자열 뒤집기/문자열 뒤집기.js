function solution(my_string, s, e) {
    
    let slicedStr = my_string.slice(s, e+1);
    let reversedStr = [...slicedStr].reverse().join('');
    
    return my_string.slice(0, s) + reversedStr + my_string.slice(e+1);
}
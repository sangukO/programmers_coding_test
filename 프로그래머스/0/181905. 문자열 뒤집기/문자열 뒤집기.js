function solution(my_string, s, e) {
    var answer = '';
    
    let slicedStr = my_string.slice(s, e+1);
    let reversedStr = [];
    
    for (let i=slicedStr.length-1;i>=0;i--) {
        reversedStr.push(slicedStr[i]);
    }
    
    if (reversedStr.length === 0) {
        return my_string;
    } else {
        answer = my_string.slice(0, s) + reversedStr.join('') + my_string.slice(e+1, my_string.length);
        return answer;
    }
}
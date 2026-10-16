function solution(s) {
    let array = s.split(' ');
    let numArray = array.filter(v => v !== 'Z');
    let sum = numArray.reduce((acc, cur) => acc + parseInt(cur), 0);

    let canceledNumArray = array.filter((_, i) => array[i+1] === 'Z');
    let canceledSum = canceledNumArray.reduce((acc, cur) => acc + parseInt(cur), 0);
    
    return sum - canceledSum;
}
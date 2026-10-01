function solution(myString, pat) {
    // var answer = '';
    // let endIndex = 0;
    // [...myString].filter((v, i) => {
    //     if(myString.slice(i, i+pat.length) === pat) {
    //         endIndex = i+pat.length;
    //     }
    // })
    // return myString.slice(0, endIndex);
    
    let endIndex = myString.lastIndexOf(pat)+pat.length;
    return myString.slice(0, endIndex);
}
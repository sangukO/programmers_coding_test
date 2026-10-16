function solution(my_string) {
    let numArray = [];
    let tmp = "";
    
    for (let i=0; i<my_string.length; i++) {
        if(!Number.isNaN(parseInt(my_string[i]))) {
            for(let j=i; j<my_string.length; j++) {
                if(!Number.isNaN(parseInt(my_string[j]))) {
                    tmp += my_string[j];
                    i = j;
                } else {
                    break;
                }
            }
            numArray.push(parseInt(tmp));
            tmp = "";
        }
    }
    
    return numArray.reduce((sum, num) => sum + num, 0);
}
function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    
    switch(n) {
        case 1:
            return answer = num_list.slice(0, b+1);
        case 2:
            return answer = num_list.slice(a);
        case 3:
            return answer = num_list.slice(a, b+1);
        case 4:
            return answer = num_list.slice(a, b+1).filter((_, index) => index % c === 0);
    }
    
    
    return answer;
}
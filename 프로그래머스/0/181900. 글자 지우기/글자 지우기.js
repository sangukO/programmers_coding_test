function solution(my_string, indices) {
    var answer = [...my_string];
    
    return answer.filter((_, i) => {
        return !indices.includes(i)
    }).join('');
}
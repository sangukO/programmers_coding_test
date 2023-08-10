function solution(M, N) {
    var answer = 0;
    answer += M-1;
    answer += (N-1)*M;
    return answer;
}
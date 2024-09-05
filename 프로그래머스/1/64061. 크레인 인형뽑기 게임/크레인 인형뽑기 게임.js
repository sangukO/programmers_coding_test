function solution(board, moves) {
    let bucket = [];
    let answer = 0;
    for (let i=0;i<moves.length; i++) {
        for (let j=0;j<board.length; j++) {
            if (board[j][moves[i]-1] !== 0) {
                bucket.push(board[j][moves[i]-1]);
                if (bucket.length>=2 && bucket[bucket.length-2] === bucket[bucket.length-1]) {
                    bucket.pop();
                    bucket.pop();
                    answer+=2;
                }
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    
    return answer;
}
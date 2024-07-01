// 합집합 찾기, union-find 알고리즘
function solution(k, room_number) {
    var answer = []; // 결과 저장
    var next = new Map(); // 다음 가능한 방 번호
    
    function find(x) { // 주어진 방 번호 x가 배정 가능한지 확인 후 이미 배정된 경우 다음 가능한 방 번호 찾음
        if(!next.has(x)) { // x번 방이 비어있는 방일 경우
            next.set(x, x+1); // x번 배정됐으니 x+1로 가라고 설정
            return x; // x번 반환
        }                             // 1,2,3 모두 배정된 경우 1번 방을 원하면
        var root = find(next.get(x)); // 재귀로 호출하여 1,2,3 이후 배정되는 방을 가져옴, 4
        next.set(x, root); // 방 1의 다음 방 번호는 4로 연결, 순서대로 3>4, 2>4, 1>4로 연결
        return root; // 4번 방 반환
    }
    
    for(i=0;i<room_number.length;i++) {
        var room = room_number[i];
        var assigned = find(room);
        answer.push(assigned);
    }
    
    
    return answer;
}
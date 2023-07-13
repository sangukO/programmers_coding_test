function solution(dartResult) {
    var answer = 0;
    var arr = dartResult.match(/\d+[A-Za-z]+|\*|#/g);
    var temp_arr = [];
    for (i=0;i<arr.length;i++) {
        var temp = 0
        if (arr[i][0] != '*' && arr[i][0] != '#') {
            temp = parseInt(arr[i].slice(0, -1));
            if (arr[i][0] == '1') {
                if (arr[i][-1] == '0') {
                    temp = 10;
                }
            }
            if (arr[i].slice(-1) == 'S') {
                temp = temp
            } else if (arr[i].slice(-1) == 'D') {
                temp = temp * temp
            } else if (arr[i].slice(-1) == 'T') {
                temp = temp * temp * temp
            }
        }
        if (temp == "") {
            if (arr[i] == '#') {
                temp_arr[i-1] = temp_arr[i-1]*-1
            }
            if (arr[i] == '*') {
                if (i == 1) {
                    temp_arr[i-1] = temp_arr[i-1]*2
                } else {
                    if (arr[i-2] == '*') {
                        temp_arr[i-3] = temp_arr[i-3]*2
                        temp_arr[i-1] = temp_arr[i-1]*2
                    } else if (arr[i-2] == '#') {
                        temp_arr[i-3] = temp_arr[i-3]*2
                        temp_arr[i-1] = temp_arr[i-1]*2
                    }
                    else {
                        temp_arr[i-2] = temp_arr[i-2]*2
                        temp_arr[i-1] = temp_arr[i-1]*2
                    }
                }
            }
        }
        temp_arr.push(temp);
    }
    for (v of temp_arr) {
        answer += parseInt(v);
    }
    return answer;
}
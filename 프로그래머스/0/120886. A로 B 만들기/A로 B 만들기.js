function solution(before, after) {
    let beforeArray = before.split('');
    let originalBefore = beforeArray.join('');
    for (let i=0; i<after.length;i++) {
        if (beforeArray.indexOf(after[i]) === -1) {
            return 0;
        } else {
            beforeArray.splice(beforeArray.indexOf(after[i]), 1);
        }
    }
    return 1;
}
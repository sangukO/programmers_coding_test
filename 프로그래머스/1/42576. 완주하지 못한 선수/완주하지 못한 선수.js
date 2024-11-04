function solution(participant, completion) {
    let obj = {};
    
    for (let i = 0; i<participant.length; i++) {
        if (Object.hasOwn(obj, participant[i])) {
            obj[participant[i]] += 1;
        } else {
            obj[participant[i]] = 1;
        }
    }
    
    for (let i = 0; i<completion.length; i++) {
        obj[completion[i]] -= 1;
    }
    
    return Object.keys(obj).find(key => obj[key] === 1);
}
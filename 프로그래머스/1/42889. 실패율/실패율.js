function solution(N, stages) {
    let answer = [];
    let failArr = [];
    let startUser = stages.length;
    for (let i=1; i<N+1; i++) {
        let remain = 0;
        for (let j=0; j<stages.length; j++) {
            if (stages[j] === i) {
                remain++;
            }
        }
        failArr.push({[i] : remain/startUser});
        startUser = startUser - remain;
        stages.filter((v) =>{
            return v > i;
        })
    }
    
    let sortedArr = failArr
    .map(obj => {
        const key = Object.keys(obj)[0];
        return { stage: parseInt(key), failRate: obj[key] };
    })
    .sort((a, b) => {
        if (b.failRate !== a.failRate) {
            return b.failRate - a.failRate;
        }
        return a.stage - b.stage;
    })
    .map(obj => obj.stage);
    
    return sortedArr;
}
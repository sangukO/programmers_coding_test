function solution(id_list, report, k) {
    report = [...new Set(report)];
    let names = [];
    let result = Array.from({length : id_list.length}).fill(0);
    
    report.map((v)=>{
        names.push(v.split(' ')[1]);
    })
    
    let countObj = names.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    
    let reportResult = Object.keys(countObj).filter(key => countObj[key] >= k);
    
    if (reportResult === []) {
        return result;
    } else {
        report.map((v)=>{
            if (reportResult.includes(v.split(' ')[1])) {
                result[id_list.indexOf(v.split(' ')[0])]++;
            }
        })
    }
    
    return result;
}
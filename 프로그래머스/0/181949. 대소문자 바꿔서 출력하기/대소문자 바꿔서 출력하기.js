const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    answer = "";
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lower = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<str.length;i++) {
        if (upper.includes(str[i])) {
            answer+=str[i].toLowerCase();
        } else {
            answer+=str[i].toUpperCase();
        }
    }
    console.log(answer);
});
function solution(spell, dic) {
    var answer = 0;
    for (i=0;i<dic.length;i++) {
        var spell_list = spell.slice(0);
        for (j=0;j<dic[i].length;j++) {
            console.log("dic[i][j]", dic[i][j])
            for(k=0;k<spell_list.length;k++) {
                console.log(spell_list);
                console.log("spell[k]", spell_list[k])
                if (spell_list[k] == dic[i][j]) {
                    console.log(spell_list[k], "match")
                    spell_list.splice(k, 1);
                    console.log(spell_list);
                }
                if (spell_list.length == 0) {
                    answer = 1;
                } else {
                    if (answer != 1) {
                        answer = 2;
                    }
                }
            }
        }
    }
    return answer;
}
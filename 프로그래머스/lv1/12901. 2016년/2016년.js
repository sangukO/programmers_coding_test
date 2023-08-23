function solution(a, b) {
    var num = 0;
    var date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var days = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    if (a != 1) {
        for (i = 0; i<=a-2; i++) {
            num += date[i];
        }
    }
    num += b-1;
    return days[(num-(~~(num/7))*7)]
}
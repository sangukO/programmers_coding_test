function solution(num_list) {
    var add = num_list.reduce((acc, cur) => acc + cur)
    var mul = num_list.reduce((acc, cur) => acc * cur)
    return mul < add ** 2 ? 1 : 0;
}
function solution(wallpaper) {
    var answer = [];
    var x_arr = [];
    var y_arr = [];
    
    for (i=0;i<wallpaper.length;i++) {
        for (j=0;j<wallpaper[i].length;j++) {
            if (wallpaper[i][j] == "#") {
                x_arr.push(i)
                y_arr.push(j)
            }
        }
    }
    
    x_arr.sort(function(a, b)  {
        return a - b;
    });
    
    y_arr.sort(function(a, b)  {
        return a - b;
    });
    
    return [x_arr[0], y_arr[0], x_arr.reverse()[0]+1, y_arr.reverse()[0]+1];
}
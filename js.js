
    let canvas = document.getElementById("c");
    let context = canvas.getContext('2d')
    var mas = [];
    function goLife () {
    
        let n = 50;
            m = 50;
        for (let i = 0; i < n; i++) {
            mas[i] = [];
            for(let j = 0; j < m; j++) {
                mas[i][j] = 0;
            }
        }
        return mas;
    }
    goLife();

    canvas.onclick = function (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        console.log(x);
        console.log(y);
        x = Math.floor(x/10);
        y = Math.floor(y/10);
        mas[x][y] = 1;
        drawField();

    }
    
    function drawField () {
        context.clearRect(0, 0, 500, 500);
        for (let i = 0; i < 50; i++) {
            
            for(let j = 0; j < 50; j++) {
                if(mas[i][j] === 1){
                    context.fillRect(i*10, j*10, 10, 10);
                }
            }
        }
    }

    function Start () {
       let mas2 = [];
        for (let i = 0; i < 50; i++) {
            mas2[i] = [];
            for(let j = 0; j < 50; j++) {
                let neighbors = 0;
                if(mas[fpm(i) - 1][j] == 1)neighbors++;
                if(mas[fpp(i) + 1][j] == 1)neighbors++;
                if(mas[i][fpm(j) - 1] == 1)neighbors++;
                if(mas[i][fpp(j) + 1] == 1)neighbors++;
                if(mas[fpm(i) - 1][fpm(j) - 1] == 1)neighbors++;
                if(mas[fpm(i) - 1][fpp(j) + 1] == 1)neighbors++;
                if(mas[fpp(i) + 1][fpm(j) - 1] == 1)neighbors++;
                if(mas[fpp(i) + 1][fpp(j) + 1] == 1)neighbors++;
                (neighbors === 2 || neighbors === 3) ? mas2[i][j] = 1 : mas2[i][j] = 0; 
            }
        }
        mas = mas2;
        drawField();
    }

    function fpm (i) {
        if(i == 0) return 50;
         return i;
    }
    
    
    function fpp (j) {
        if(j === 49) return -1;
           return j;
    }
    
    let but = document.getElementById('button');
    
    but.onclick = ( () => {
        setInterval(Start, 1000);
    });





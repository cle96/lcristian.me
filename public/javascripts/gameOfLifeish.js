(function () {
    const height = 160;
    const width = 30;
    var planet = new Array(height).fill(0).map(() => new Array(width).fill(0));
    var canvas = document.getElementById('pixelPattern');
    var context = canvas.getContext('2d');
    this.times = 0;

    function drawPlanet(planet) {
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                if (planet[i][j] == 1) {
                    drawPoint(i, j);
                } else {
                    removePoint(i, j);
                }
            }
        }
    }

    function drawPoint(x, y) {
        context.fillRect(x*5, y*5, 10, 10);
    }

    function removePoint(x, y) {
        context.clearRect(x*5, y*5, 10, 10);
    }

    function seed(x, y) {
        planet[x][y] = 1;
        planet[x + 1][y] = 1;
        planet[x][y + 1] = 1;
        evolve(planet);
    }

    function evolve(planet) {
        drawPlanet(planet);
        nextPlanet = [...planet];
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                const neighbours = countNeighbours(planet, i, j);
                console.log(neighbours);
                nextPlanet[i][j] = neighbours == 2 || neighbours == 3 ? 1 : 0;
            }
        }
        if (this.times <= 160) {
            setTimeout(function () {
                evolve(nextPlanet);
            }, 150);
            this.times++;
            console.log(times);
        }
    }

    function countNeighbours(planet, i, j) {
        var sum = 0;
        for (xi = Math.max(0, i - 1); xi <= Math.min(i + 1, height - 1); xi++) {
            for (xj = Math.max(0, j - 1); xj <= Math.min(j + 1, width - 1); xj++) {
                sum += planet[xi][xj]
            }
        }
        return sum - planet[i][j];
    }

    seed(5, 5);
})();
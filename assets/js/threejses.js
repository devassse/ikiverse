const canvas = document.getElementById("canvasEstrelas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const estrelas = [];
const numEstrelas = 700;

const cores = [
    "rgba(255, 255, 255, ALPHA)", // branca
    "rgba(173, 216, 230, ALPHA)", // azul clara
    "rgba(255, 255, 200, ALPHA)", // amarela suave
    "rgba(255, 192, 203, ALPHA)", // rosa claro
    "rgba(135, 206, 250, ALPHA)"  // azul bebê
];

class Estrela {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3.5 + 0.5;
        this.velocidade = Math.random() * 0.5 + 0.2;
        this.alpha = Math.random();
        this.alphaDirection = Math.random() < 0.5 ? 1 : -1;
        this.corBase = cores[Math.floor(Math.random() * cores.length)];
    }

    update() {
        this.y += this.velocidade;
        if (this.y > canvas.height) this.reset();

        this.alpha += 0.005 * this.alphaDirection;
        if (this.alpha <= 0 || this.alpha >= 1) {
            this.alphaDirection *= -1;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const corFinal = this.corBase.replace("ALPHA", this.alpha.toFixed(2));
        ctx.fillStyle = corFinal;
        ctx.fill();
    }
}

for (let i = 0; i < numEstrelas; i++) {
    estrelas.push(new Estrela());
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let estrela of estrelas) {
        estrela.update();
        estrela.draw();
    }

    requestAnimationFrame(animar);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animar();
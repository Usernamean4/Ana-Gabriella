let balloons = [];
let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Inicializar balões
  for (let i = 0; i < 10; i++) {
    balloons.push(new Balloon(random(width), height + random(100, 300)));
  }
  // Inicializar estrelas
  for (let i = 0; i < 100; i++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function draw() {
  background(0);
  drawStars();
  drawBalloons();
}

function drawStars() {
  for (let star of stars) {
    star.show();
    star.twinkle();
  }
}

function drawBalloons() {
  for (let balloon of balloons) {
    balloon.move();
    balloon.show();
    // Reinicializa o balão quando ele sai da tela
    if (balloon.y < -100) {
      balloon.y = height + random(100, 300);
      balloon.x = random(width);
    }
  }
}

class Balloon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(40, 60);
    this.color = color(random(255), random(255), random(255));
  }

  move() {
    this.y -= 2;
    this.x += sin(this.y * 0.05) * 2;
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size * 1.2);
    line(this.x, this.y + this.size * 0.6, this.x, this.y + this.size * 2);
  }
}

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.brightness = random(100, 255);
  }

  twinkle() {
    this.brightness = random(100, 255);
  }

  show() {
    fill(this.brightness);
    noStroke();
    ellipse(this.x, this.y, 3, 3);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let colors = ["#FF6347", "#FFD700", "#32CD32", "#1E90FF", "#FF69B4"];
let flagPositions = [];
let windOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Inicializar posições das bandeirinhas
  for (let i = 0; i < 50; i++) {
    flagPositions.push({
      x: i * 40 + 10,
      y: 100 + random(-10, 10)
    });
  }
}

function draw() {
  background('#87CEEB');
  drawBanners();
  drawFire();
}

function drawBanners() {
  let bannerHeight = 40;
  windOffset += 0.05;
  for (let i = 0; i < flagPositions.length; i++) {
    let pos = flagPositions[i];
    let wave = sin((i * 0.5) + windOffset) * 10;
    fill(colors[i % colors.length]);
    noStroke();
    triangle(pos.x, pos.y + wave, pos.x + 20, pos.y + bannerHeight + wave, pos.x + 40, pos.y + wave);
  }
}

function drawFire() {
  let fireBaseWidth = 60;
  let fireHeight = 100;
  let fireBaseX = width / 2;
  let fireBaseY = height - 50;
  
  // Desenhar lenha
  fill(139, 69, 19);
  rect(fireBaseX - 20, fireBaseY, 40, 100);
  rect(fireBaseX - 50, fireBaseY, 40, 100);
  rect(fireBaseX + 10, fireBaseY, 40, 100);
  
  // Desenhar fogo
  for (let i = 0; i < 10; i++) {
    let fireX = fireBaseX + random(-fireBaseWidth, fireBaseWidth);
    let fireY = fireBaseY + random(-fireHeight, 0);
    let fireColor = color(255, random(150, 200), 0, 150);
    fill(fireColor);
    noStroke();
    ellipse(fireX, fireY, random(20, 40), random(40, 80));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

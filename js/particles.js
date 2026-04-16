const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let W, H, particles = [];

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const COLORS = [
  'rgba(255,0,0,',
  'rgba(200,0,0,',
  'rgba(255,60,60,',
  'rgba(180,10,10,',
  'rgba(255,100,50,',
];

function randomParticle() {
  return {
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.8 + 0.3,
    phase: Math.random() * Math.PI * 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    twinkle: Math.random() * 0.04 + 0.01,
    drift: (Math.random() - 0.5) * 0.15,
  };
}

function init() {
  particles = [];
  const count = Math.floor((W * H) / 4000);
  for (let i = 0; i < count; i++) particles.push(randomParticle());
}
window.addEventListener('resize', init);
init();

function draw() {
  ctx.clearRect(0, 0, W, H);

  const vignette = ctx.createRadialGradient(
    W / 2, H / 2, H * 0.1,
    W / 2, H / 2, H * 0.9
  );
  vignette.addColorStop(0, 'rgba(25,0,0,0.85)');
  vignette.addColorStop(1, 'rgba(0,0,0,0.98)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, W, H);

  for (const p of particles) {
    p.phase += p.twinkle;
    const a = Math.sin(p.phase) * 0.5 + 0.5;
    p.x += p.drift;
    if (p.x < -2) p.x = W + 2;
    if (p.x > W + 2) p.x = -2;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color + (a * 0.9).toFixed(2) + ')';
    ctx.fill();

    if (a > 0.75) {
      ctx.strokeStyle = p.color + (a * 0.4).toFixed(2) + ')';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(p.x - p.r * 3, p.y);
      ctx.lineTo(p.x + p.r * 3, p.y);
      ctx.moveTo(p.x, p.y - p.r * 3);
      ctx.lineTo(p.x, p.y + p.r * 3);
      ctx.stroke();
    }
  }

  requestAnimationFrame(draw);
}

draw();
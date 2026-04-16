const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let W, H;
let particles = [];

// Red tones for particles
const COLORS = [
    'rgba(230, 30, 30,', // TED Red
    'rgba(255, 100, 100,', // Light Red
    'rgba(150, 0, 0,', // Dark Red
    'rgba(255, 255, 255,' // White highlights
];

function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

function createParticles() {
    particles = [];
    // Density based on screen size
    const count = Math.floor((W * H) / 3000); 

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.5 + 0.5, // Radius
            d: Math.random() * count, // Density for movement
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            opacity: Math.random(),
            speed: Math.random() * 0.5 + 0.1
        });
    }
}

let angle = 0;
function draw() {
    ctx.clearRect(0, 0, W, H);
    
    angle += 0.01;

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position - subtle drifting
        p.y += Math.cos(angle + p.d) + p.speed;
        p.x += Math.sin(angle) * 0.2;

        // Reproduce when out of bounds
        if (p.y > H) {
            particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d, color: p.color, opacity: p.opacity, speed: p.speed };
        }
        if (p.x > W) p.x = 0;
        if (p.x < 0) p.x = W;

        // Twinkle effect (opacity oscillation)
        const currentOpacity = p.opacity * (Math.sin(angle * 2 + p.d) * 0.3 + 0.7);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color + currentOpacity.toFixed(2) + ')';
        ctx.fill();
    }
    
    requestAnimationFrame(draw);
}

// Init and start
createParticles();
draw();
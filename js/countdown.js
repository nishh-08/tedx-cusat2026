const eventDate = new Date("April 25, 2026 09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Update your 4 spans
    document.getElementById("days").textContent = String(d).padStart(2, '0');
    document.getElementById("hours").textContent = String(h).padStart(2, '0');
    document.getElementById("minutes").textContent = String(m).padStart(2, '0');
    document.getElementById("seconds").textContent = String(s).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
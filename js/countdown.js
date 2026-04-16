// Target date for TEDx CUSAT 2026
const eventDate = new Date("March 1, 2026 09:00:00").getTime();

// Elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date().getTime();
    const gap = eventDate - now;

    // If date passed
    if (gap < 0) {
        if(daysEl) daysEl.innerText = "00";
        // ... set others to 00 ...
        return;
    }

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    // Update HTML with string padding (e.g., "05")
    if(daysEl) daysEl.innerText = String(d).padStart(2, '0');
    if(hoursEl) hoursEl.innerText = String(h).padStart(2, '0');
    if(minsEl) minsEl.innerText = String(m).padStart(2, '0');
    if(secsEl) secsEl.innerText = String(s).padStart(2, '0');
}

// Run immediately, then every second
updateCountdown();
setInterval(updateCountdown, 1000);
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// =========================================
// DATA: Past Events & Speakers
// =========================================
const pastEvents = [
    { title: "TEDx CUSAT 2019", year: "2019", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" },
    { title: "TEDx CUSAT 2020", year: "2020", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800" },
    { title: "TEDx CUSAT 2021", year: "2021", img: "https://images.unsplash.com/photo-1475721027187-40ae17e07b34?q=80&w=800" },
    { title: "TEDx CUSAT 2022", year: "2022", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800" },
    { title: "TEDx CUSAT 2023", year: "2023", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800" },
    { title: "TEDx CUSAT 2024", year: "2024", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800" }
];

// =========================================
// 1. INTRO & HERO ANIMATIONS
// =========================================
window.addEventListener("load", () => {
    const tl = gsap.timeline();

    tl.to(".intro-text", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    tl.to(".intro-text", { scale: 1.1, duration: 1, ease: "power2.inOut" }, "-=0.2");

    tl.to("#intro", { 
        yPercent: -100, 
        duration: 1.2, 
        ease: "expo.inOut",
        onComplete: () => {
            document.getElementById("intro").style.display = "none";
        }
    });

    tl.from(".nav", { y: -50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5");
    tl.from(".main-title", { y: 50, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=0.8");
    tl.from(".desc", { opacity: 0, y: 20, duration: 1 }, "-=1");
});

// =========================================
// 2. SCROLL TRIGGER REVEALS
// =========================================
const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach(element => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// =========================================
// 3. DESKTOP ORBIT SYSTEM
// =========================================

(function () {
  const events = [
    { title: "PAST EVENTS", speaker: "Dr.Venu Vasudevan", img: "../assets/images/pimg1.jpeg" },
    { title: "PAST EVENTS", speaker: "Anima Nair", img: "../assets/images/pimg2.jpeg" },
    { title: "PAST EVENTS", speaker: "Anantharaman Ajay", img: "../assets/images/pimg3.jpeg" },
    { title: "PAST EVENTS", speaker: "Steffy Sunny", img: "../assets/images/pimg4.jpeg" },
    { title: "PAST EVENTS", speaker: "Teekaram Meena IAS", img: "../assets/images/pimg5.jpeg" },
    { title: "PAST EVENTS", speaker: "Prof.P.R.Poduval", img: "../assets/images/pimg6.jpeg" },
  ];

  const N = events.length;
  const wrapper = document.getElementById('orbitWrapper');
  const dotNav = document.getElementById('dotNav');
  const captionTitle = document.getElementById('captionTitle');

  if (!wrapper || !dotNav) return;

  const orbitNodes = [];

  events.forEach((ev, i) => {
    const track = document.createElement('div');
    track.className = 'orbit-track';
    track.style.animationDelay = `-${(i / N) * 20}s`;

    const node = document.createElement('div');
    node.className = 'orbit-node';
    node.style.animationDelay = `-${(i / N) * 20}s`;

    const card = document.createElement('div');
    card.className = 'img-card';
    card.innerHTML = `
      <img src="${ev.img}" alt="${ev.title}">
      <div class="overlay"><span>${ev.speaker}</span></div>
    `;

    card.addEventListener('click', () => setDesktopActive(i));

    node.appendChild(card);
    track.appendChild(node);
    wrapper.appendChild(track);
    orbitNodes.push(node);

    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => setDesktopActive(i));
    dotNav.appendChild(dot);
  });

  function setDesktopActive(idx) {
    orbitNodes.forEach((n, i) => n.classList.toggle('active-node', i === idx));
    captionTitle.textContent = events[idx].title; 
    const dots = dotNav.querySelectorAll('.dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  let currentIdx = 0;
  setInterval(() => {
    currentIdx = (currentIdx + 1) % N;
    setDesktopActive(currentIdx);
  }, 3000);
})();
/*
// =========================================
// 4. MOBILE CAROUSEL BUILD
// =========================================
function initMobileCarousel() {
    const track = document.getElementById('mobileCarouselTrack');
    if (!track) return;

    pastEvents.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'mobile-card';
        card.innerHTML = `
            <img src="${ev.img}" alt="${ev.title}">
            <div class="m-card-content">
                <h3>${ev.title}</h3>
                <p>${ev.year}</p>
            </div>
        `;
        track.appendChild(card);
    });
}

// RUN INITIALIZATION
initOrbit();
initMobileCarousel();
*/

// =========================================
// 3. DESKTOP ORBIT SYSTEM
// =========================================
/*
(function () {
  const events = [
    { title: "TEDx CUSAT 2019", speaker: "Dr. Vikram Sethi", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800" },
    { title: "TEDx CUSAT 2020", speaker: "Ananya Rangan", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800" },
    { title: "TEDx CUSAT 2021", speaker: "Rohan K. Varma", img: "https://images.unsplash.com/photo-1475721027187-40ae17e07b34?q=80&w=800" },
    { title: "TEDx CUSAT 2022", speaker: "Meera Krishnan", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800" },
    { title: "TEDx CUSAT 2023", speaker: "Aditya Narayan", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800" },
    { title: "TEDx CUSAT 2024", speaker: "Sarah Elizabeth", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800" },
  ];

  const N = events.length;
  const wrapper = document.getElementById('orbitWrapper');
  const dotNav = document.getElementById('dotNav');
  const captionTitle = document.getElementById('captionTitle');

  if (!wrapper || !dotNav) return;

  const orbitNodes = [];

  events.forEach((ev, i) => {
    const track = document.createElement('div');
    track.className = 'orbit-track';
    track.style.animationDelay = `-${(i / N) * 20}s`;

    const node = document.createElement('div');
    node.className = 'orbit-node';
    node.style.animationDelay = `-${(i / N) * 20}s`;

    const card = document.createElement('div');
    card.className = 'img-card';
    card.innerHTML = `
      <img src="${ev.img}" alt="${ev.title}">
      <div class="overlay"><span>${ev.speaker}</span></div>
    `;

    card.addEventListener('click', () => setDesktopActive(i));

    node.appendChild(card);
    track.appendChild(node);
    wrapper.appendChild(track);
    orbitNodes.push(node);

    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => setDesktopActive(i));
    dotNav.appendChild(dot);
  });

  function setDesktopActive(idx) {
    orbitNodes.forEach((n, i) => n.classList.toggle('active-node', i === idx));
    // Showing "PAST EVENTS" as the static title was requested via HTML, 
    // but typically captionTitle updates. Here it remains unchanged from HTML unless you prefer it updates:
    // captionTitle.textContent = events[idx].title; 
    const dots = dotNav.querySelectorAll('.dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  let currentIdx = 0;
  setInterval(() => {
    currentIdx = (currentIdx + 1) % N;
    setDesktopActive(currentIdx);
  }, 3000);
})();
*/
// =========================================
// 4. MOBILE CAROUSEL BUILD
// =========================================
function initMobileCarousel() {
    const track = document.getElementById('mobileCarouselTrack');
    if (!track) return;

    // Clear existing content to prevent duplicates
    track.innerHTML = '';

    const eventsData = [
        { title: "PAST EVENTS", speaker: "Dr. Venu Vasudevan", img: "assets/images/pimg1.jpeg" },
        { title: "PAST EVENTS", speaker: "Anima Nair", img: "assets/images/pimg2.jpeg" },
        { title: "PAST EVENTS", speaker: "Anantharaman Ajay", img: "assets/images/pimg3.jpeg" },
        { title: "PAST EVENTS", speaker: "Steffy Sunny", img: "assets/images/pimg4.jpeg" },
        { title: "PAST EVENTS", speaker: "Teekaram Meena IAS", img: "assets/images/pimg5.jpeg" },
    ];

    eventsData.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'mobile-card';
        card.innerHTML = `
            <img src="${ev.img}" alt="${ev.title}">
            <div class="m-card-content">
                <h3>${ev.title}</h3>
                <p>${ev.speaker}</p>
            </div>
        `;
        track.appendChild(card);
    });
}

// Ensure it runs after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileCarousel();
    
    // Force hide the intro screen after 3 seconds if GSAP fails
    setTimeout(() => {
        const intro = document.getElementById('intro');
        if(intro && intro.style.display !== 'none') {
            intro.style.display = 'none';
        }
    }, 3500);
});

// SPEAKERS
function initSpeakerReel() {
    const viewport = document.querySelector('.speaker-reel-viewport');
    const cards = document.querySelectorAll('.speaker-reel-card');

    if (!viewport || cards.length === 0) return;

    const handleScroll = () => {
        const viewportCenter = viewport.scrollLeft + viewport.offsetWidth / 2;

        cards.forEach(card => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(viewportCenter - cardCenter);

            // If the card is in the center "projection" zone
            if (distance < 150) {
                card.classList.add('active-slide');
            } else {
                card.classList.remove('active-slide');
            }
        });
    };

    viewport.addEventListener('scroll', handleScroll);
    
    // Trigger once on load to highlight the first card
    setTimeout(handleScroll, 500); 
}

// Initialize the reel
initSpeakerReel();
/* ========== CSS Variables ========== */
:root {
    --major-color: rgba(125, 15, 54);
    --minor-color: #d387a4;
    --bg-dark: #0a0002;
    --text-light: #f5f5f5;
    --text-gray: #b0b0b0;
    /* height of the fixed header/navbar; adjust if your header is taller/shorter */
    --nav-height: 80px;
}

/* ========== Reset & Base Styles ========== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--major-color);
    color: var(--text-light);
    overflow-x: hidden;
    line-height: 1.6;
    /* create a stacking context so background pseudo-elements sit behind page content */
    position: relative;
    z-index: 0;
    /* ensure page content (hero etc.) starts below the fixed header */
    padding-top: var(--nav-height);
}

/* Full-screen background image for all pages */
body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;
    background-image: url("ASSETS/background.jpg");
    background-size: cover;
    background-position: center 3cm;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(2px) brightness(0.85);
    transform: translateZ(0);
    pointer-events: none;
}

/* Dark overlay for readability */
body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
        180deg, 
        rgba(125, 15, 54, 0.85) 0%, 
        rgba(125, 15, 54, 0.92) 100%
    );
    pointer-events: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ========== Loader ========== */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--major-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s, visibility 0.5s;
}

.loader.hidden {
    opacity: 0;
    visibility: hidden;
}

.loader-logo {
    width: 150px;
    height: 150px;
    animation: rotate 2s infinite;
}

.loader-text {
    margin-top: 20px;
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--minor-color);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    animation: pulse 2s infinite;
}

@keyframes rotate {
    0% { transform: rotate(0deg) scale(0.8); }
    50% { transform: rotate(180deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(0.8); }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* ========== Navigation ========== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(10, 0, 2, 0.2);
    backdrop-filter: blur(0px);
    z-index: 1000;
    padding: 1rem 0;
    box-shadow: none;
    transition: background 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Scroll states */
.navbar.scrolled {
    background: rgba(10, 0, 2, 0.75);
    backdrop-filter: blur(10px) saturate(120%);
    padding: 0.5rem 0;
    box-shadow: 0 10px 35px rgba(0,0,0,0.35), 0 2px 12px rgba(125, 15, 54, 0.45);
    border-bottom: 1px solid rgba(211, 135, 164, 0.25);
}

.navbar.hide {
    transform: translateY(-110%);
}

.logo .logo-text {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar.scrolled .logo .logo-text {
    transform: translateY(-1px) scale(0.95);
    opacity: 0.9;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--minor-color);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.logo-svg {
    width: 40px;
    height: 40px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-menu a {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 600;
    position: relative;
    transition: color 0.3s;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--minor-color);
    transition: width 0.3s;
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
    width: 100%;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: var(--minor-color);
}

.nav-register-btn {
    background: var(--minor-color);
    padding: 0.7rem 1.5rem;
    border-radius: 25px;
    color: white !important;
}

.nav-register-btn::after {
    display: none;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--text-light);
    transition: all 0.3s;
}

/* ========== Progress Bar ========== */
.progress-bar {
    position: fixed;
    top: 70px;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--minor-color), #ff6b9d);
    z-index: 999;
    transition: width 0.3s;
}

/* ========== Hero Section (user-provided replacement) ========== */
/* Reset-ish */
* { box-sizing: border-box; margin: 0; padding: 0; }
html,body { height: 100%; }

/* Hero container */
.hero {
    position: relative;
    width: 100%;
    min-height: 70vh;            /* change as needed */
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #781231;   /* fallback maroon base color */
    /* Use the provided image as a cover background; keeps aspect and centers subject */
        background-image: url("5.jpg");
    background-size: cover;      /*
    background-position: center;
    background-repeat: no-repeat;
    /* removed filter per user request to keep image clear */
    margin-top: -70px;
    padding-top: 70px;
}

/* If image fails to load, this fallback img is hidden visually but kept for accessibility */
.hero__fallback { position: absolute; left: -9999px; width:1px; height:1px; overflow:hidden; }

/* overlay to reproduce the softened washed look and center motif */
.hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(120,18,49,0.18) 0%, rgba(120,18,49,0.22) 35%, rgba(4,4,4,0.25) 100%);
    mix-blend-mode: multiply;
    pointer-events: none;
}

/* vignette for darker edges */
.hero__overlay::after{
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%);
    pointer-events: none;
}

/* center text/logo block */
.center-content {
    position: relative;
    z-index: 3;
    text-align: center;
    color: #ffdfe6; /* pale pink-ish for contrast */
    text-shadow: 0 3px 18px rgba(0,0,0,0.6);
    transform: translateY(-6vh);
}

/* Simple logo-style title */
.logo {
    font-size: clamp(28px, 6vw, 64px);
    letter-spacing: 6px;
    font-weight: 700;
    margin-bottom: 8px;
    opacity: 0.95;
}

/* small subtitle under logo */
.subtitle {
    font-size: clamp(12px, 1.6vw, 18px);
    opacity: 0.9;
}

/* Responsive: on small screens, reduce overlay intensity */
@media (max-width: 600px) {
    .hero__overlay { background: linear-gradient(180deg, rgba(120,18,49,0.12) 0%, rgba(120,18,49,0.18) 35%, rgba(4,4,4,0.22) 100%); }
    .center-content { transform: translateY(-4vh); }
}

/* Top-left logo styling */
.top-left-logo {
    position: absolute;
    top: 100px;
    left: 40px;
    z-index: 15;
    animation: float-logo 6s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(211, 135, 164, 0.5));
}

@keyframes float-logo {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
}

/* Central hourglass with wreath */
.central-hourglass {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(8px);
    opacity: 0.4;
    z-index: 2;
    animation: pulse-glow 4s ease-in-out infinite;
    pointer-events: none;
}

@keyframes pulse-glow {
    0%, 100% { 
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.4;
    }
    50% { 
        transform: translate(-50%, -50%) scale(1.1);
        opacity: 0.6;
    }
}

/* Hands container */
.hands-container {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    pointer-events: none;
}

.hand-element {
    position: absolute;
    opacity: 0.6;
}

.hand-bottom-left {
    bottom: -100px;
    left: -100px;
    animation: float-hand-left 8s ease-in-out infinite;
    transform: rotate(-25deg);
    width: 400px;
    height: 400px;
}

.hand-top-right {
    top: -100px;
    right: -100px;
    animation: float-hand-right 8s ease-in-out infinite;
    transform: rotate(25deg);
    width: 400px;
    height: 400px;
}

@keyframes float-hand-left {
    0%, 100% { 
        transform: rotate(-25deg) translate(0, 0);
    }
    50% { 
        transform: rotate(-22deg) translate(30px, -30px);
    }
}

@keyframes float-hand-right {
    0%, 100% { 
        transform: rotate(25deg) translate(0, 0);
    }
    50% { 
        transform: rotate(28deg) translate(-30px, 30px);
    }
}

.wave-pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(ellipse 800px 600px at 20% 50%, rgba(211, 135, 164, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse 800px 600px at 80% 50%, rgba(211, 135, 164, 0.1) 0%, transparent 50%);
    animation: wave 20s infinite;
}

@keyframes wave {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
}


.hero-content {
    text-align: center;
    z-index: 10;
    max-width: 900px;
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.hero-small-text {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 300;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin-bottom: 0.5rem;
    animation: fadeInDown 1s ease-out 0.3s both;
}

.hero-title-main {
    font-size: clamp(5rem, 12vw, 12rem);
    font-weight: 900;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
    position: relative;
    animation: fadeInUp 1s ease-out;
    text-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
}

@keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Glitch class - no actual glitch effect */
.glitch::before,
.glitch::after {
    display: none;
}

.hero-subtitle {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    font-weight: 400;
    letter-spacing: 0.1em;
    color: white;
    text-transform: uppercase;
    margin-bottom: 3rem;
    animation: fadeInDown 1s ease-out 0.3s both;
}


/* ========== CTA Button ========== */
.cta-button {
    background: linear-gradient(135deg, #e091af, #cc7a99);
    color: white;
    padding: 1.5rem 4rem;
    font-size: 1.3rem;
    font-weight: 700;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.3s;
    box-shadow: 0 10px 40px rgba(211, 135, 164, 0.5);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    animation: fadeInUp 1s ease-out 0.9s both;
    min-width: 300px;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s;
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(211, 135, 164, 0.7);
    background: linear-gradient(135deg, #e09ab0, #d1829e);
}

.cta-button.pulse {
    animation: pulse-button 2s ease-in-out infinite;
}

@keyframes pulse-button {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.arrow {
    width: 24px;
    height: 24px;
}

/* ========== Countdown ========== */
.countdown {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
    animation: fadeIn 1s ease-out 1.2s both;
}

.countdown-item {
    text-align: center;
}

.countdown-number {
    display: block;
    font-size: 3rem;
    font-weight: 900;
    color: var(--minor-color);
    text-shadow: 0 0 20px rgba(211, 135, 164, 0.5);
}

.countdown-label {
    font-size: 0.9rem;
    color: var(--text-gray);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* ========== Scroll Indicator ========== */
.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
}

.mouse {
    width: 30px;
    height: 50px;
    border: 2px solid var(--minor-color);
    border-radius: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10px;
}

.mouse span {
    width: 4px;
    height: 8px;
    background: var(--minor-color);
    border-radius: 2px;
    animation: scroll 2s infinite;
}

@keyframes scroll {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(15px); }
}

/* ========== About Section ========== */
.about-section {
    padding: 8rem 0;
    background: linear-gradient(to bottom, var(--major-color), rgba(10, 0, 2, 0.9));
}

.section-title {
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
    background: linear-gradient(135deg, var(--minor-color), #ff6b9d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.about-content {
    max-width: 900px;
    margin: 0 auto;
}

.about-text {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: var(--text-gray);
}

.about-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
}

.feature-card {
    background: rgba(211, 135, 164, 0.05);
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s;
    border: 1px solid rgba(211, 135, 164, 0.1);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(211, 135, 164, 0.3);
    background: rgba(211, 135, 164, 0.1);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--minor-color);
}

/* ========== Team Preview ========== */
.team-preview {
    padding: 8rem 0;
    background: rgba(10, 0, 2, 0.5);
}

.team-preview .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.team-grid {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
}

.team-grid .team-card:nth-child(1) {
    grid-column: span 3;
    justify-self: center;
}

.team-card {
    perspective: 1000px;
    height: 400px;
}

.team-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.team-card:hover .team-card-inner {
    transform: rotateY(180deg);
}

.team-card-front,
.team-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
}

.team-card-front {
    background: rgba(211, 135, 164, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.team-card-back {
    background: linear-gradient(135deg, var(--major-color), rgba(211, 135, 164, 0.2));
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.team-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(211, 135, 164, 0.2);
    margin-bottom: 1rem;
    border: 3px solid var(--minor-color);
}

.team-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--minor-color);
    text-align: center;
}

.instagram-btn {
    background: var(--minor-color);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s;
}

.instagram-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(211, 135, 164, 0.5);
}

.view-all-btn {
    display: block;
    text-align: center;
    color: var(--minor-color);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 2rem;
    transition: all 0.3s;
}

.view-all-btn:hover {
    color: white;
    letter-spacing: 0.1em;
}

/* ========== Footer ========== */
.footer {
    background: rgba(10, 0, 2, 0.9);
    padding: 4rem 0 2rem;
    border-top: 1px solid rgba(211, 135, 164, 0.2);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
    color: var(--minor-color);
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
    color: var(--text-gray);
}

.footer-section a {
    color: var(--text-gray);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section a:hover {
    color: var(--minor-color);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(211, 135, 164, 0.1);
    color: var(--text-gray);
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        flex-direction: column;
        background: rgba(10, 0, 2, 0.98);
        width: 100%;
        text-align: center;
        transition: left 0.3s;
        padding: 2rem 0;
        gap: 0;
    }
    
    .nav-menu.nav-menu-active {
        left: 0;
    }
    
    .nav-menu li {
        padding: 1rem 0;
        border-bottom: 1px solid rgba(211, 135, 164, 0.1);
    }
    
    .countdown {
        gap: 1rem;
    }
    
    .countdown-number {
        font-size: 2rem;
    }
    
    .about-text {
        font-size: 1rem;
    }
    
    .team-grid {
        grid-template-columns: 1fr;
    }
    
    .top-left-logo {
        top: 60px;
        left: 20px;
        width: 50px;
        height: 60px;
    }
    
    .central-hourglass {
        opacity: 0.4;
    }
    
    .hand-bottom-left,
    .hand-top-right {
        opacity: 0.5;
    }
}

/* ========== Utility Classes ========== */
.hidden {
    display: none;
}

/* ========== Additional Styles for About Page ========== */
.story-section,
.why-attend-section,
.committees-overview {
    margin-bottom: 6rem;
}

.story-timeline {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.timeline-item {
    background: rgba(211, 135, 164, 0.05);
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s;
    border: 1px solid rgba(211, 135, 164, 0.1);
}

.timeline-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(211, 135, 164, 0.3);
}

.timeline-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.timeline-item h3 {
    font-size: 1.5rem;
    color: var(--minor-color);
    margin-bottom: 1rem;
}

.why-attend-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.hero {
    position: relative;
    width: 100%;
    /* ensure hero occupies the remaining viewport below the fixed header */
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #781231;   /* fallback maroon base color */
    /* Use the provided image as a cover background; keeps aspect and centers subject */
    background-image: url("ASSETS/5.jpg");
    background-size: cover;     
    background-position: center;
    background-repeat: no-repeat;
    /* a subtle desaturation + contrast tweak to match art-style */
    filter: saturate(0.9) contrast(0.95);
}

.why-card h3 {
    font-size: 1.3rem;
    color: var(--minor-color);
    margin-bottom: 1rem;
}

.committee-preview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.committee-preview-card {
    background: rgba(211, 135, 164, 0.1);
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s;
    border: 1px solid rgba(211, 135, 164, 0.2);
}

.committee-preview-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(211, 135, 164, 0.4);
}

.committee-preview-card h3 {
    font-size: 1.8rem;
    color: var(--minor-color);
    margin-bottom: 0.5rem;
}

.learn-more-btn {
    display: inline-block;
    margin-top: 1rem;
    color: var(--minor-color);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
}

.learn-more-btn:hover {
    color: white;
    letter-spacing: 0.1em;
}

/* ========== Registration Form Styles ========== */
.registration-section {
    padding: 4rem 0 8rem;
    background: rgba(10, 0, 2, 0.5);
}

.form-progress {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    flex: 1;
    max-width: 200px;
}

.progress-step.active .step-number {
    background: var(--minor-color);
    color: white;
    transform: scale(1.1);
}

.progress-step.active::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    width: 100%;
    height: 3px;
    background: var(--minor-color);
    z-index: -1;
}

.step-number {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(211, 135, 164, 0.2);
    border: 3px solid rgba(211, 135, 164, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    transition: all 0.3s;
}

.step-label {
    font-size: 0.9rem;
    color: var(--text-gray);
    text-align: center;
}

.progress-step.active .step-label {
    color: var(--minor-color);
    font-weight: 600;
}

.form-container {
    max-width: 800px; /* Adjusted for desktop */
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-step {
    display: none;
}

.form-step.active {
    display: block;
    animation: fadeIn 0.5s;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--minor-color);
    font-weight: 600;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 1rem;
    background: rgba(211, 135, 164, 0.1);
    border: 1px solid rgba(211, 135, 164, 0.3);
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--minor-color);
    background: rgba(211, 135, 164, 0.15);
    box-shadow: 0 0 20px rgba(211, 135, 164, 0.3);
}

.btn-next,
.btn-prev,
.btn-submit {
    background: var(--minor-color);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.btn-next:hover,
.btn-prev:hover,
.btn-submit:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(211, 135, 164, 0.5);
}

.btn-prev {
    background: rgba(211, 135, 164, 0.3);
}

.payment-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.qr-section {
    text-align: center;
    padding: 2rem;
    background: rgba(211, 135, 164, 0.1);
    border-radius: 20px;
}

.qr-placeholder {
    width: 100%;
    height: 300px;
    background: rgba(211, 135, 164, 0.2);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
}

.final-info {
    background: rgba(211, 135, 164, 0.1);
    padding: 1.5rem;
    border-radius: 15px;
    margin-top: 1rem;
}

.final-info p {
    margin-bottom: 0.5rem;
}

/* ========== Committee Cards ========== */
.committees-section {
    padding: 4rem 0 8rem;
    background: rgba(10, 0, 2, 0.5);
}

.committee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.committee-card {
    perspective: 1000px;
    height: 400px;
}

.committee-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.committee-card:hover .committee-card-inner {
    transform: rotateY(180deg);
}

.committee-card-front,
.committee-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    padding: 2rem;
    overflow-y: auto;
}

.committee-card-front {
    background: linear-gradient(135deg, rgba(211, 135, 164, 0.2), rgba(211, 135, 164, 0.05));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px solid rgba(211, 135, 164, 0.3);
}

.committee-card-back {
    background: linear-gradient(135deg, var(--major-color), rgba(211, 135, 164, 0.2));
    transform: rotateY(180deg);
    border: 2px solid rgba(211, 135, 164, 0.5);
}

.committee-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.committee-card-front h2,
.committee-card-back h2 {
    font-size: 2rem;
    color: var(--minor-color);
    margin-bottom: 1rem;
}

.committee-card-back h3 {
    color: var(--minor-color);
    margin: 1rem 0 0.5rem;
    font-size: 1.2rem;
}

.committee-card-back p {
    line-height: 1.6;
    color: var(--text-gray);
}

/* ========== Contact Page Styles ========== */
.contact-section {
    padding: 4rem 0 8rem;
    background: rgba(10, 0, 2, 0.5);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.contact-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
}

.contact-card {
    background: rgba(211, 135, 164, 0.05);
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s;
    border: 1px solid rgba(211, 135, 164, 0.1);
}

.contact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(211, 135, 164, 0.3);
    background: rgba(211, 135, 164, 0.1);
}

.contact-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.contact-card h3 {
    color: var(--minor-color);
    margin-bottom: 0.5rem;
}

.contact-form-container {
    background: rgba(211, 135, 164, 0.05);
    padding: 3rem;
    border-radius: 30px;
    border: 1px solid rgba(211, 135, 164, 0.2);
}

/* ========== Team Section ========== */
.team-section {
    padding: 4rem 0;
    background-color: var(--bg-dark);
    color: var(--text-light);
}

.team-grid {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
}

.team-grid .team-card:nth-child(1) {
    grid-column: span 3;
    justify-self: center;
}

.team-card {
    perspective: 1000px;
    width: 100%;
    max-width: 300px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.team-card:hover {
    transform: scale(1.05);
}

.team-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.team-card:hover .team-card-inner {
    transform: rotateY(180deg);
}

.team-card-front,
.team-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.team-card-front {
    background: var(--major-color);
}

.team-card-back {
    background: var(--minor-color);
    transform: rotateY(180deg);
}

.team-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: url('path/to/image.jpg') center/cover no-repeat;
    margin-bottom: 1rem;
}

/* ========== Mobile Responsive Updates ========== */
@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-cards {
        grid-template-columns: 1fr;
    }
    
    .form-progress {
        flex-direction: column;
        gap: 1rem;
    }
    
    .progress-step::after {
        display: none;
    }
    
    .committee-grid {
        grid-template-columns: 1fr;
    }
    
    .story-timeline {
        grid-template-columns: 1fr;
    }
    
    .why-attend-grid {
        grid-template-columns: 1fr;
    }
    
    .committee-preview-grid {
        grid-template-columns: 1fr;
    }
    
    .form-container {
        padding: 2rem;
    }
}

/* General Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Form Container */
.form-container {
    max-width: 800px; /* Adjusted for desktop */
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Form Fields */
.form-group {
    margin-bottom: 1.5rem;
}

input, select, textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Buttons */
button {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    background-color: #d387a4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #b06c8a;
}

/* Progress Indicator */
.form-progress {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.progress-step {
    text-align: center;
    flex: 1;
}

.progress-step.active .step-number {
    background-color: #d387a4;
    color: white;
}

.step-number {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    background-color: #ccc;
    color: white;
    margin-bottom: 0.5rem;
}

/* Media Queries for Mobile */
@media (max-width: 768px) {
    .form-container {
        padding: 1rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    input, select, textarea {
        font-size: 1rem;
    }

    button {
        font-size: 1rem;
    }

    .form-progress {
        flex-direction: column;
        align-items: center;
    }

    .progress-step {
        margin-bottom: 1rem;
    }
}

import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const services = [
  {
    title: 'Brand Positioning',
    text: 'We shape the message, structure, and visual tone so your website looks established from the first screen.',
  },
  {
    title: 'Custom UI Design',
    text: 'Every section is designed around clarity, hierarchy, and confidence instead of generic template layouts.',
  },
  {
    title: 'React Development',
    text: 'Responsive, polished frontends built for speed, smooth interaction, and clean presentation on every device.',
  },
  {
    title: 'Conversion Structure',
    text: 'Pages are arranged to guide visitors from interest to enquiry with stronger CTAs, trust blocks, and lead flow.',
  },
  {
    title: 'SEO and Performance',
    text: 'Fast loading sections, sensible structure, and launch-ready setup that helps search engines read your business clearly.',
  },
  {
    title: 'Launch Support',
    text: 'We help refine copy, final details, and launch assets so the finished site feels professional, complete, and credible.',
  },
];

const highlights = [
  'Premium visual direction',
  'Scroll-led storytelling',
  'Responsive across devices',
  'Clear conversion paths',
];

const caseStudies = [
  {
    sector: 'Aviation & Travel',
    name: 'FlyEase Booking Engine',
    summary: 'A calm, premium layout built to make flight management and bookings feel credible, focused, and effortless.',
    result: 'Sharper positioning for high-value travel',
    images: Array.from({ length: 7 }, (_, i) => `/img/TravelManagement (${i + 1}).png`)  
  },
  {
    sector: 'Creative Engineering',
    name: 'Interactive 3D WebGL Portfolio',
    summary: 'A gamified, physics-driven experience built with Three.js and GSAP, featuring a dynamic 3D card sphere and immersive scrolling architecture.',
    result: 'A high-impact technical showcase for premium web apps',
    images: Array.from({ length: 7 }, (_, i) => `/img/PortFolio (${i + 1}).png`)  
  },
  {
    sector: 'Property Tech',
    name: 'TrustNest Secure Portal',
    summary: 'A clean, split-screen authentication flow designed to establish trust instantly. Built for seamless, highly secure user logins and protected access.',
    result: 'Elevated user confidence and frictionless onboarding',
    images: Array.from({ length: 7 }, (_, i) => `/img/TrustNest.png`)  
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery and Direction',
    text: 'We define audience, goals, tone, and the sections your business actually needs.',
  },
  {
    number: '02',
    title: 'Concept and Structure',
    text: 'Wireframes, visual direction, and content hierarchy are shaped into a clear page flow.',
  },
  {
    number: '03',
    title: 'Design and Build',
    text: 'The website is designed and developed in React with motion, responsiveness, and clarity in mind.',
  },
  {
    number: '04',
    title: 'Launch and Refine',
    text: 'We polish, test, and adjust the final presentation so the site is ready to represent your brand well.',
  },
];

const studioMetrics = [
  { value: 'Strategy-first', label: 'Every layout starts with positioning, not decoration.' },
  { value: 'Responsive', label: 'Designed to feel strong on desktop, tablet, and mobile.' },
  { value: 'High-trust', label: 'Built to help visitors feel clarity and confidence quickly.' },
];

const editorialNotes = [
  'A calmer layout can feel more premium than a busier one.',
  'Large type and measured whitespace make the offer feel more certain.',
  'The goal is not to imitate the reference, but to borrow its clarity and restraint.',
];

const scrollStorySteps = [
  {
    step: '01',
    label: 'Arrival',
    title: 'The main message stays grounded while the first proof points arrive.',
    text: 'Instead of pushing everything at once, the page holds the hero in place and lets the supporting cues enter in a more deliberate sequence.',
    detail: 'Calm movement keeps the first impression premium.',
    noteTitle: 'Trust cue added',
    noteText: 'A small notification-style message can appear right when credibility needs reinforcement.',
  },
  {
    step: '02',
    label: 'Focus',
    title: 'Pinned sections keep one strong frame visible while visitors keep scrolling.',
    text: 'This is useful when a concept needs more explanation. The visual stays fixed, the supporting content keeps moving, and the story feels more controlled.',
    detail: 'The visitor keeps reading, but attention stays anchored.',
    noteTitle: 'Pinned story engaged',
    noteText: 'The layout briefly locks attention on one polished visual while the detail stack continues.',
  },
  {
    step: '03',
    label: 'Signal',
    title: 'Small pop-out messages can feel warm without breaking the professional tone.',
    text: 'Used sparingly, a soft notification element gives the page a little personality and helps key cues feel timely instead of static.',
    detail: 'Motion stays useful, never noisy.',
    noteTitle: 'Message surfaced',
    noteText: 'A clean toast can appear when a milestone section is reached.',
  },
  {
    step: '04',
    label: 'Release',
    title: 'After the long scroll section finishes, the layout flows normally again.',
    text: 'The sticky moment ends naturally, which gives the page a satisfying sense of progression before the next sections continue.',
    detail: 'The experience feels designed, not forced.',
    noteTitle: 'Scroll sequence complete',
    noteText: 'The pinned frame releases and the layout continues with regular movement.',
  },
];

// --- PRICING DATA ---
const pricingPackages = [
  {
    name: 'Basic Plan',
    subtitle: 'Quick Credibility',
    icon: 'laptop', // Used for className mapping if needed
    price: 'RM1,500 – RM2,500',
    features: [
      "Single-Page 'Story' Layout",
      'Responsive UI',
      'Pinned Hero / Navigation',
      'Conversion Flow',
      'React Build'
    ],
  },
  {
    name: 'Business Core',
    subtitle: 'Service Depth',
    icon: 'star',
    price: 'RM3,500 – RM5,500',
    features: [
      'Up to 5 Pages (Home, About, etc.)',
      'Portfolio Gallery',
      'Scroll Storytelling',
      'Pinned Sections',
      'Lead Flow Structure'
    ],
  },
  {
    name: 'Advanced Growth',
    subtitle: 'Full Power',
    icon: 'crown',
    price: 'RM6,000 – RM9,000+',
    features: [
      'Up to 10 Pages',
      'Full Storytelling Narrative',
      'Custom Interactive Blocks',
      'Launch Assets',
      'Advanced SEO Setup'
    ],
  },
];

const extraAddons = [
  { title: '1. Extra Pages', price: 'RM150 – RM500 / pg', desc: 'Gallery, menu, or blog. Price scales with design complexity, interactive elements, and content needs.' },
  { title: '2. E-commerce Features', price: 'RM2,000 – RM5,000', desc: 'Shopping cart, products, checkout, payment gateways (Touch ‘n Go, PayPal, Stripe).' },
  { title: '3. Forms & Functionality', price: 'RM100 – RM500 / form', desc: 'Booking/Reservation forms, Quote/Contact forms, Newsletter Signup integration.' },
  { title: '4. SEO & Marketing', price: 'RM200 – RM1,500', desc: 'Advanced SEO, Keyword Research, Google Analytics Setup, Social Media Integration.' },
  { title: '5. Hosting & Domains', price: 'RM50 – RM500', desc: 'Domain registration guidance, hosting setup & management, SSL certificate installation (optional).' },
  { title: '6. Maintenance / Updates', price: 'RM100 – RM2,000 / mo', desc: 'Monthly retainers for updates, security, backups. Hourly rate for extra changes (RM50-150/hr).' },
  { title: '7. Design / Branding', price: 'RM200 – RM2,000', desc: 'Custom graphics, logo design, complex animations and micro-interactions.' },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Pixelify+Sans:wght@400..700&family=Sora:wght@400;600;700;800&display=swap');

  :root {
    --bg: #fdfdfc;
    --bg-secondary: #f2f2f2;
    --surface: #ffffff;
    --surface-strong: #ffffff;
    --surface-deep: #111111;
    --line: #e0e0e0;
    --line-strong: #111111;
    --text: #111111;
    --text-invert: #ffffff;
    --muted: #666666;
    --accent: #111111;
    --accent-soft: rgba(0, 0, 0, 0.04);
    --warm: #333333;
    --warm-soft: rgba(0, 0, 0, 0.04);
    --shadow: 4px 4px 0px var(--line-strong);
    --shadow-hover: 8px 8px 0px var(--line-strong);
    --radius-xl: 0px;
    --radius-lg: 0px;
    --radius-md: 0px;
    --radius-pill: 0px;
    --width: min(1200px, calc(100% - 48px));
    --spotlight-x: 78%;
    --spotlight-y: 14%;
  }

  .dark {
    --bg: #111111;
    --bg-secondary: #1a1a1a;
    --surface: #1a1a1a;
    --surface-strong: #222222;
    --surface-deep: #fdfdfc;
    --line: #333333;
    --line-strong: #777777;
    --text: #fdfdfc;
    --text-invert: #111111;
    --muted: #a0a0a0;
    --accent: #fdfdfc;
    --accent-soft: rgba(255, 255, 255, 0.04);
    --warm: #cccccc;
    --warm-soft: rgba(255, 255, 255, 0.04);
    --shadow: 4px 4px 0px var(--line-strong);
    --shadow-hover: 8px 8px 0px var(--line-strong);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  section {
    scroll-margin-top: 110px;
  }

  body {
    margin: 0;
    font-family: 'Manrope', 'Segoe UI', sans-serif;
    color: var(--text);
    background: var(--bg);
    transition: background 0.3s ease, color 0.3s ease;
  }
.experience-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 64px;
    align-items: start;
  }

  .experience-left {
    position: sticky;
    top: 110px;
    align-self: start;
  }

  .experience-right {
    display: grid;
    gap: 32px; /* Space between experience cards */
    padding-bottom: 40px;
  }

  /* Matching the manga/zine card style */
  .experience-card {
    padding: 32px;
    background: var(--surface-strong);
    border: 2px solid var(--line-strong);
    box-shadow: 6px 6px 0px var(--line-strong);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .experience-card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 10px 10px 0px var(--line-strong);
  }

  .experience-card strong {
    display: block;
    margin-bottom: 12px;
    font-size: 1.1rem;
    text-transform: uppercase;
    border-bottom: 2px dashed var(--line);
    padding-bottom: 12px;
  }

  /* Mobile Fix */
  @media (max-width: 1080px) {
    .experience-layout {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .experience-left {
      position: static;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
  }

  img {
    max-width: 200%;
    display: block;
  }

  /* --- TERRARIA PIXEL TEXT EFFECT --- */
  .title-pixelate {
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    letter-spacing: 0.02em;
    -webkit-font-smoothing: none;
    text-shadow: 4px 4px 0px rgba(0, 0, 0, 0);
  }
  
  .dark .title-pixelate {
    text-shadow: 4px 4px 0px rgba(255, 255, 255, 0.2);
  }

  /* --- IMAGE & LIGHTBOX CSS --- */
  .portfolio-image-wrapper {
    position: relative;
    margin-top: 14px;
    overflow: hidden;
    background: var(--line-strong);
    height: 97%;
    width: 102%; 
    cursor: pointer;
    display: flex;
  }

  .portfolio-cover-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  .portfolio-image-wrapper:hover .portfolio-cover-img {
    transform: scale(1.05);
  }

  .hover-overlay {
    position: absolute;
    inset: 0;
    background: rgba(17, 17, 17, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .portfolio-image-wrapper:hover .hover-overlay {
    opacity: 1;
  }

  .hover-overlay span {
    background: var(--surface-strong);
    color: var(--text);
    padding: 10px 20px;
    font-size: 1.2rem;
    border: 3px solid var(--line-strong);
    box-shadow: 4px 4px 0px var(--line-strong);
    text-transform: uppercase;
  }

  .manga-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    backdrop-filter: blur(5px);
  }

  .manga-modal-content {
    position: relative;
    max-width: 1000px;
    width: 100%;
    background: var(--bg);
    border: 4px solid var(--text-invert);
    box-shadow: 12px 12px 0px #000;
    display: flex;
    flex-direction: column;
  }

  .manga-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    border-bottom: 3px solid var(--text-invert);
    background: var(--text);
    color: var(--text-invert);
  }

  .manga-modal-header h3 {
    margin: 0;
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
  }

  .manga-modal-close {
    background: transparent;
    color: var(--text-invert);
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }

  .manga-modal-body {
    position: relative;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-secondary);
  }

  .manga-modal-img {
    max-height: 70vh;
    max-width: 100%;
    object-fit: contain;
    border: 3px solid var(--line-strong);
    box-shadow: 6px 6px 0px var(--line-strong);
  }

  .manga-modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--text);
    color: var(--text-invert);
    border: 3px solid var(--text-invert);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 4px 4px 0px #000;
    transition: transform 0.1s;
  }

  .manga-modal-nav:active {
    transform: translateY(-50%) translate(2px, 2px);
    box-shadow: 2px 2px 0px #000;
  }

  .manga-modal-prev { left: 10px; }
  .manga-modal-next { right: 10px; }
  /* ------------------------------- */

  .site-shell {
    position: relative;
    overflow-x: clip; 
    min-height: 100vh;
    isolation: isolate;
  }

  .grid-fade {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--line) 1px, transparent 1px),
      linear-gradient(90deg, var(--line) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.4;
    pointer-events: none;
    z-index: 0;
  }

  .container {
    width: var(--width);
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .nav-wrap {
    position: sticky;
    top: 18px;
    z-index: 30;
  }

  .nav {
    width: var(--width); 
    margin: 0 auto;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    border: 1px solid var(--line-strong);
    background: var(--surface-strong);
    border-radius: 0;
    box-shadow: var(--shadow);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
  }

  .brand-mark {
    width: 50px;
    height: 50px;
    border-radius: 0;
    display: grid;
    place-items: center;
    background: var(--text);
    color: var(--text-invert);
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  .brand-copy {
    display: grid;
    gap: 2px;
  }

  .brand-name {
    font-family: 'Sora', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .brand-subtitle {
    color: var(--muted);
    font-size: 0.85rem;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 18px;
    color: var(--muted);
    font-size: 0.94rem;
  }

  .nav-links a {
    position: relative;
    padding-bottom: 4px;
    transition: color 0.24s ease;
  }

  .nav-links a:hover {
    color: var(--text);
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: var(--text);
    transform: scaleX(0.2);
    transform-origin: center;
    opacity: 0;
    transition: transform 0.24s ease, opacity 0.24s ease;
  }

  .nav-links a:hover::after {
    transform: scaleX(1);
    opacity: 1;
  }

  .nav-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: 0 18px;
    border-radius: 0;
    border: 1px solid var(--line-strong);
    background: transparent;
    color: var(--text);
    font-weight: 700;
    transition: transform 0.24s ease, border-color 0.24s ease, background 0.24s ease;
  }

  .nav-cta:hover {
    background: var(--text);
    color: var(--text-invert);
  }

  .hero {
    padding: 56px 0 40px;
    display: grid;
    grid-template-columns: 1.15fr 0.95fr;
    gap: 34px;
    align-items: start;
  }

  .hero-copy {
    position: sticky;
    top: 110px;
    align-self: start;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border: 1px solid var(--line-strong);
    border-radius: 0;
    background: transparent;
    color: var(--text);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .eyebrow-dot {
    width: 8px;
    height: 8px;
    border-radius: 0;
    background: var(--text);
  }

  .hero-copy h1 {
    margin: 18px 0 18px;
    font-family: 'Sora', sans-serif;
    font-size: clamp(3rem, 7vw, 5.6rem);
    line-height: 0.96;
    letter-spacing: -0.05em;
    max-width: 13ch;
  }

  .hero-copy h1 span {
    display: block;
    font-size: clamp(1.5rem, 3vw, 2.45rem);
    line-height: 1.1;
    margin-top: 10px;
    color: var(--muted);
  }

  .hero-copy p {
    margin: 0;
    max-width: 640px;
    font-size: 1.08rem;
    line-height: 1.8;
    color: var(--muted);
  }

  .hero-actions {
    margin-top: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .button-primary,
  .button-secondary {
    min-height: 56px;
    padding: 0 24px;
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    letter-spacing: 0.01em;
    position: relative;
    transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease, background 0.24s ease;
  }

  .button-primary {
    background: var(--surface-deep);
    color: var(--text-invert);
    border: 1px solid var(--surface-deep);
  }

  .button-secondary {
    border: 1px solid var(--line-strong);
    background: transparent;
    color: var(--text);
  }

  .button-primary:hover,
  .button-secondary:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0px var(--text);
  }

  .hero-tags {
    margin-top: 26px;
    display: grid;
    grid-template-columns: max-content max-content; 
    gap: 10px;
    justify-content: start;
  }

  .tag {
    padding: 12px 16px;
    border-radius: 0;
    background: var(--surface-strong);
    border: 1px solid var(--line-strong);
    color: var(--text);
    font-size: 0.75rem;
    font-weight: 800; 
    letter-spacing: 0.04em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.24s ease, border-color 0.24s ease, color 0.24s ease;
  }
  .tag:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 0px var(--line-strong);
  }

  .hero-panel {
    position: relative;
  }

  .browser-shell {
    background: var(--surface-strong);
    border: 1px solid var(--line-strong);
    border-radius: 0;
    padding: 18px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    max-width: 100%; 
    box-sizing: border-box;
  }

  .browser-shell:hover {
    transform: translate(-4px, -4px);
    box-shadow: var(--shadow-hover);
  }

  .browser-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 4px 4px 18px;
  }

  .browser-dots {
    display: flex;
    gap: 6px;
  }

  .browser-dots span {
    width: 12px;
    height: 12px;
    border-radius: 0;
    border: 1px solid var(--line-strong);
  }

  .browser-url {
    min-width: 0;
    flex: 1;
    height: 38px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    border-radius: 0;
    border: 1px solid var(--line-strong);
    color: var(--muted);
    font-size: 0.88rem;
  }

  .screen {
    display: grid;
    grid-template-columns: 112px 1fr;
    gap: 14px;
    min-height: 680px;
  }

  .screen-sidebar {
    border-radius: 0;
    background: var(--surface-deep);
    padding: 20px 16px;
    color: var(--text-invert);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  .screen-sidebar h3 {
    margin: 0;
    font-family: 'Sora', sans-serif;
    font-size: 0.87rem;
    line-height: 1.4;
  }

  .sidebar-lines {
    display: grid;
    gap: 10px;
  }

  .sidebar-lines span {
    display: block;
    height: 10px;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.2);
  }

  .sidebar-lines span:nth-child(2) {
    width: 78%;
  }

  .sidebar-lines span:nth-child(3) {
    width: 64%;
  }

  .screen-main {
    display: grid;
    gap: 14px;
  }

  .screen-hero {
    position: relative;
    overflow: hidden;
    padding: 24px;
    border-radius: 0;
    background: var(--bg-secondary);
    border: 1px solid var(--line-strong);
  }

  .screen-hero > * {
    position: relative;
    z-index: 1;
  }

  .mini-badge {
    display: inline-flex;
    padding: 8px 12px;
    border-radius: 0;
    background: var(--surface-strong);
    color: var(--text);
    font-size: 0.82rem;
    font-weight: 800;
    border: 1px solid var(--line-strong);
    text-transform: uppercase;
  }

  .screen-hero h2 {
    margin: 16px 0 10px;
    max-width: 11ch;
    font-family: 'Sora', sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.05;
    letter-spacing: -0.05em;
  }

  .screen-hero p {
    margin: 0;
    max-width: 48ch;
    color: var(--muted);
    line-height: 1.7;
  }

  .metric-strip {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .metric-tile {
    padding: 10px;
    border-radius: 0;
    background: var(--surface-strong);
    border: 1px solid var(--line-strong);
    overflow: hidden;
  }

  .metric-tile strong {
    display: block;
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    margin-bottom: 4px;
  }

  .metric-tile span {
    display: block;
    color: var(--muted);
    font-size: 0.8rem;
    line-height: 1.4;
    word-wrap: break-word;
    hyphens: auto;
  }

  .screen-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 16px;
  }

  .screen-card {
    padding: 16px;
    border-radius: 0;
    background: var(--surface-strong);
    border: 1px solid var(--line-strong);
    min-height: 174px;
    overflow: hidden;
  }

  .screen-card h4 {
    margin: 0 0 10px;
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    line-height: 1.4;
  }

  .screen-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.5;
    font-size: 0.88rem;
    word-wrap: break-word;
  }

  .split-bars {
    display: grid;
    gap: 10px;
    margin-top: 18px;
  }

  .split-bars span {
    display: block;
    height: 11px;
    border-radius: 0;
    background: var(--line-strong);
    opacity: 0.2;
  }

  .split-bars span:first-child {
    opacity: 1;
  }

  .split-bars span:nth-child(2) {
    width: 82%;
  }

  .split-bars span:nth-child(3) {
    width: 64%;
  }

  .floating-note {
    position: absolute;
    right: -15px; 
    bottom: -20px; 
    width: min(240px, 48vw);
    padding: 18px;
    border-radius: 0;
    background: var(--surface-strong);
    border: 2px solid var(--line-strong);
    box-shadow: var(--shadow);
    transition: transform 0.28s ease;
    z-index: 10; 
  }

  .floating-note-close {
    position: absolute;
    top: 5px;
    right: 5px;
    background: transparent;
    border: none;
    color: var(--muted);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s ease;
    padding: 4px;
    line-height: 1;
    font-family: 'Sora', sans-serif;
  }

  .floating-note-close:hover {
    color: var(--text);
  }

  .hero-panel:hover .floating-note {
    transform: translate(-4px, -4px);
    box-shadow: var(--shadow-hover);
  }

  .floating-note strong {
    display: block;
    font-family: 'Sora', sans-serif;
    font-size: 0.96rem;
    margin-bottom: 8px;
  }

  .floating-note p {
    margin: 0;
    color: var(--muted);
    line-height: 1.65;
    font-size: 0.94rem;
  }

  .section {
    padding: 64px 0;
  }

  .section-head {
    display: grid;
    gap: 14px;
    margin-bottom: 30px;
  }

  .section-label {
    color: var(--text);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.78rem;
    font-weight: 800;
  }

  .section-head h2 {
    margin: 0;
    max-width: 10.5ch;
    font-family: 'Sora', sans-serif;
    font-size: clamp(2.15rem, 4.4vw, 4rem);
    line-height: 1.05;
    letter-spacing: -0.05em;
  }

  .section-head p {
    margin: 0;
    max-width: 64ch;
    color: var(--muted);
    line-height: 1.8;
    font-size: 1rem;
  }

  /* --- MANGA/EDITORIAL VERTICAL SPLIT STORY CSS --- */
  .story-split-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 64px;
    align-items: start;
  }

  .story-split-right {
    position: sticky;
    top: 110px;
    align-self: start;
    display: grid;
    gap: 14px;
  }

  .story-split-right p {
    margin: 0;
    color: var(--muted);
    line-height: 1.82;
    font-size: 1rem;
  }

  .story-split-left {
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-bottom: 32px;
  }

  .story-panel-card {
    padding: 40px 32px;
    border-radius: 0;
    background: var(--surface-strong);
    border: 2px solid var(--line-strong); 
    box-shadow: 6px 6px 0px var(--line-strong);
    transition: transform 0.2s ease, box-shadow 0.2s ease, z-index 0s;
    position: relative;
    width: 90%;
  }

  .story-panel-card:not(:first-child) {
    margin-top: -48px; 
  }

  .story-panel-card:nth-child(odd) {
    align-self: flex-start;
    z-index: 1;
  }

  .story-panel-card:nth-child(even) {
    align-self: flex-end;
    z-index: 2;
    background: var(--bg-secondary); 
  }

  .story-panel-card:hover {
    z-index: 10 !important;
    transform: translate(-4px, -4px);
    box-shadow: 10px 10px 0px var(--line-strong);
  }

  .manga-chapter {
    position: absolute;
    top: -2px;
    right: -2px;
    background: var(--text);
    color: var(--text-invert);
    font-family: 'Sora', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    padding: 8px 16px;
    border-bottom-left-radius: 0;
    border: 2px solid var(--text);
  }

  .manga-detail {
    margin-top: 24px;
    padding-top: 16px;
    border-top: 2px dashed var(--line-strong);
    font-weight: 800;
    font-size: 0.94rem;
    text-transform: uppercase;
    color: var(--text);
  }

  .scroll-toast {
    position: fixed;
    right: 28px;
    bottom: 28px;
    z-index: 50;
    width: min(320px, calc(100% - 32px));
    padding: 24px;
    border: 1px solid var(--line-strong);
    border-radius: 0;
    background: var(--surface-strong);
    color: var(--text);
    box-shadow: var(--shadow-hover);
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .scroll-toast.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-toast-label {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    color: var(--muted);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .scroll-toast-dot {
    width: 8px;
    height: 8px;
    background: var(--text);
  }

  .scroll-toast strong {
    display: block;
    margin-bottom: 6px;
    font-family: 'Sora', sans-serif;
    font-size: 0.98rem;
    line-height: 1.35;
  }

  .scroll-toast p {
    margin: 0;
    color: var(--muted);
    line-height: 1.65;
    font-size: 0.92rem;
  }

  .sticky-story-section {
    padding-top: 72px;
  }

  .sticky-story-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: 28px;
    align-items: start;
  }

  .sticky-story-stage {
    position: sticky;
    top: 116px;
    padding: 24px;
    border-radius: var(--radius-lg);
    background: var(--surface-strong);
    border: 1px solid var(--line);
    box-shadow:
      0 18px 42px rgba(76, 50, 27, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.78);
    overflow: hidden;
  }

  .sticky-story-stage::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.26), transparent 34%);
    pointer-events: none;
  }

  .sticky-story-stage > * {
    position: relative;
    z-index: 1;
  }

  .sticky-stage-head {
    display: grid;
    gap: 10px;
    margin-bottom: 18px;
  }

  .sticky-stage-head p {
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
  }

  .sticky-stage-shell {
    padding: 18px;
    min-height: 420px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 18px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background:
      linear-gradient(180deg, rgba(255, 252, 248, 0.98), rgba(243, 234, 223, 0.98)),
      radial-gradient(circle at 82% 18%, rgba(142, 154, 129, 0.1), transparent 22%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.76);
    overflow: hidden;
  }

  .sticky-stage-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    color: var(--muted);
    font-size: 0.86rem;
    font-weight: 700;
  }

  .sticky-stage-chip {
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.74);
    border: 1px solid var(--line);
    color: #7a5b3e;
    font-size: 0.8rem;
    font-weight: 800;
  }

  .sticky-stage-frame {
    position: relative;
    display: grid;
    align-content: start;
    gap: 16px;
    padding-top: 8px;
  }

  .sticky-stage-frame::before {
    content: '';
    position: absolute;
    right: -10px;
    bottom: 12px;
    width: 122px;
    height: 156px;
    border-radius: 18px 18px 12px 12px;
    background: linear-gradient(180deg, rgba(198, 165, 130, 0.68), rgba(152, 116, 81, 0.88));
    box-shadow: inset 0 -16px 24px rgba(97, 67, 43, 0.12);
    opacity: 0.9;
  }

  .sticky-stage-frame::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 84px;
    border-radius: 18px 18px 0 0;
    background: linear-gradient(180deg, rgba(177, 136, 98, 0.08), rgba(149, 111, 79, 0.18));
  }

  .sticky-stage-copy {
    position: relative;
    z-index: 1;
    max-width: 27ch;
    display: grid;
    gap: 12px;
  }

  .sticky-stage-copy h3 {
    margin: 0;
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.8rem, 2.6vw, 2.4rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  .sticky-stage-copy p {
    margin: 0;
    color: var(--muted);
    line-height: 1.75;
  }

  .sticky-stage-note {
    position: relative;
    z-index: 1;
    justify-self: end;
    width: min(220px, 100%);
    padding: 14px;
    border-radius: 14px;
    border: 1px solid rgba(180, 135, 96, 0.16);
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 14px 28px rgba(76, 50, 27, 0.1);
    transform: translateY(0) scale(1);
    transition: transform 0.32s ease, box-shadow 0.32s ease;
  }

  .sticky-story-stage[data-step="1"] .sticky-stage-note,
  .sticky-story-stage[data-step="2"] .sticky-stage-note,
  .sticky-story-stage[data-step="3"] .sticky-stage-note {
    transform: translateY(-4px) scale(1.01);
  }

  .sticky-stage-note strong {
    display: block;
    margin-bottom: 6px;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .sticky-stage-note p {
    margin: 0;
    color: var(--muted);
    line-height: 1.55;
    font-size: 0.88rem;
  }

  .sticky-stage-foot {
    display: grid;
    gap: 14px;
  }

  .sticky-stage-progress {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .sticky-stage-progress span {
    height: 4px;
    border-radius: 999px;
    background: rgba(112, 86, 63, 0.14);
    transition: background 0.28s ease, transform 0.28s ease;
  }

  .sticky-stage-progress span.is-active {
    background: linear-gradient(90deg, #b48760 0%, #8e9a81 100%);
    transform: scaleX(1.02);
  }

  .sticky-stage-detail {
    padding-top: 14px;
    border-top: 1px solid var(--line);
    color: #5d4938;
    font-size: 0.94rem;
    line-height: 1.65;
  }

  .dark .sticky-stage-shell {
    background:
      linear-gradient(180deg, #1e1e1e, #111),
      radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.05), transparent 22%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .dark .sticky-stage-chip {
    background: rgba(0, 0, 0, 0.5);
    color: #d1b499;
    border-color: #333;
  }
  .dark .sticky-stage-note {
    background: #1a1a1a;
    border-color: #333;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5);
  }
  .dark .sticky-stage-detail {
    color: #a0a0a0;
  }
  .dark .sticky-story-card {
    background: #1a1a1a;
    box-shadow:
      0 16px 36px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .dark .sticky-story-card.is-active {
    border-color: #555;
    box-shadow:
      0 24px 46px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  .dark .sticky-story-meta {
    color: #d1b499;
  }
  .dark .sticky-story-index {
    background: rgba(255, 255, 255, 0.1);
    color: #d1b499;
  }

  .sticky-story-steps {
    display: grid;
    gap: 20px;
  }

  .sticky-story-step {
    min-height: 72vh;
    display: flex;
    align-items: center;
  }

  .sticky-story-card {
    width: 100%;
    padding: 28px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--line);
    background: rgba(255, 253, 249, 0.92);
    box-shadow:
      0 16px 36px rgba(76, 50, 27, 0.07),
      inset 0 1px 0 rgba(255, 255, 255, 0.78);
    display: grid;
    gap: 16px;
    opacity: 0.56;
    transform: translateY(30px);
    transition: opacity 0.35s ease, transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  }

  .sticky-story-card.is-active {
    opacity: 1;
    transform: translateY(0);
    border-color: rgba(180, 135, 96, 0.22);
    box-shadow:
      0 24px 46px rgba(76, 50, 27, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.82);
  }

  .sticky-story-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    color: #8e6a48;
    font-size: 0.84rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .sticky-story-index {
    width: 50px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(180, 135, 96, 0.12);
    color: #7a5a3f;
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    letter-spacing: -0.04em;
  }

  .sticky-story-card h3 {
    margin: 0;
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.55rem, 2.3vw, 2rem);
    line-height: 1.14;
    letter-spacing: -0.04em;
  }

  .sticky-story-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.8;
  }

  .sticky-story-detail {
    padding-top: 16px;
    border-top: 1px solid var(--line);
    color: #5d4938;
    font-size: 0.96rem;
    line-height: 1.65;
  }

  .trust-band {
    display: grid;
    grid-template-columns: 1.1fr 1.3fr;
    gap: 16px;
    align-items: center;
    padding: 24px 28px;
    position: relative;
  }

  .service-card,
  .case-card,
  .process-card,
  .cta-panel,
  .trust-band,
  .pricing-card {
    background: var(--surface-strong);
    border: 1px solid var(--line-strong);
    border-radius: 0;
    box-shadow: var(--shadow);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .service-card:hover,
  .case-card:hover,
  .metric-card:hover,
  .process-card:hover,
  .cta-panel:hover,
  .trust-band:hover,
  .pricing-card:hover {
    transform: translate(-4px, -4px);
    box-shadow: var(--shadow-hover);
  }

  .trust-band strong {
    font-family: 'Sora', sans-serif;
    font-size: 1.04rem;
  }

  .trust-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
  }

  .trust-tags span {
    padding: 10px 14px;
    border-radius: 0;
    background: var(--surface-strong);
    border: 1px solid var(--line-strong);
    color: var(--text);
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    transition: transform 0.22s ease, border-color 0.22s ease;
  }

  .trust-tags span:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 0px var(--line-strong);
  }

  .services-layout,
  .insight-layout,
  .process-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 32px;
    align-items: start;
  }

  .insight-copy {
    display: grid;
    gap: 18px;
    position: sticky;
    top: 110px;
    align-self: start;
  }
  
  .process-intro {
    display: grid;
    gap: 18px;
    position: static; /* <-- Changed to static so it scrolls normally! */
  }
  
  .services-lead {
    display: grid;
    gap: 18px;
  }

  .services-left h2,
  .story-split-right h2 {
    margin: 18px 0 18px;
    font-family: 'Sora', sans-serif;
    font-size: clamp(3rem, 7vw, 5.6rem);
    line-height: 0.96;
    letter-spacing: -0.05em;
  }

  .services-left h2 span,
  .story-split-right h2 span {
    display: block;
    color: #e9e9e9;
    text-shadow: 5px 4px 3px #373636;
    line-height: 1.1;
    word-spacing: 4px;
    font-size: 50px;
    margin-top: 4px;
  }

  .services-left {
    position: sticky;
    top: 110px;
    align-self: start;
  }

  .services-lead p,
  .insight-copy p,
  .process-intro p {
    margin: 0;
    color: var(--muted);
    line-height: 1.82;
    font-size: 1rem;
  }

  .services-notes,
  .process-notes {
    display: grid;
    gap: 12px;
    margin-top: 8px;
  }

  .services-notes div,
  .process-notes div {
    padding-top: 12px;
    border-top: 1px solid var(--line);
    color: var(--muted);
    line-height: 1.7;
    font-size: 0.96rem;
  }

  .service-list,
  .metric-list,
  .process-timeline {
    border-top: 1px solid var(--line);
  }

  .service-row,
  .metric-row,
  .process-step {
    display: grid;
    gap: 18px;
    padding: 22px 0;
    border-bottom: 1px solid var(--line);
  }

  .service-row {
    grid-template-columns: 82px minmax(0, 1fr);
    align-items: start;
  }

  .service-row-index {
    color: var(--text);
    font-family: 'Sora', sans-serif;
    font-size: 0.95rem;
    letter-spacing: -0.04em;
  }

  .service-row-copy {
    display: grid;
    gap: 8px;
  }

  .service-row-copy h3,
  .portfolio-copy h3,
  .process-step-copy h3 {
    margin: 0;
    font-family: 'Sora', sans-serif;
    font-size: 1.2rem;
    line-height: 1.28;
    letter-spacing: -0.03em;
  }

  .service-row-copy p,
  .portfolio-copy p,
  .process-step-copy p {
    margin: 0;
    color: var(--muted);
    line-height: 1.76;
  }

  .portfolio-stack {
    display: grid;
    gap: 0;
  }

  .portfolio-row {
    display: grid;
    grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
    gap: 32px;
    align-items: center;
    padding: 28px 0;
    border-top: 1px solid var(--line);
  }

  .portfolio-row:last-child {
    border-bottom: 1px solid var(--line);
  }

  .portfolio-row:nth-child(even) .portfolio-visual {
    order: 2;
  }

  .portfolio-row:nth-child(even) .portfolio-copy {
    order: 1;
  }

  .portfolio-visual {
    padding: 24px;
    border-radius: 0;
    background: var(--bg-secondary);
    position: relative;
    overflow: hidden;
    display: grid;
    align-content: start;
    gap: 12px;
  }

  .portfolio-brow,
  .portfolio-lines,
  .portfolio-bars {
    position: relative;
    z-index: 1;
  }

  .portfolio-brow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 0;
    background: var(--surface-strong);
    border: 1px solid var(--line-strong);
    color: var(--text);
    font-size: 0.82rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .portfolio-lines {
    display: grid;
    gap: 10px;
    margin-top: 14px;
  }

  .portfolio-lines span,
  .portfolio-bars span {
    display: block;
    height: 12px;
    border-radius: 0;
    background: var(--line-strong);
    opacity: 0.2;
  }

  .portfolio-lines span:first-child {
    width: 38%;
    height: 46px;
    opacity: 1;
  }

  .portfolio-lines span:nth-child(3) {
    width: 78%;
  }

  .portfolio-lines span:nth-child(4) {
    width: 58%;
  }

  .portfolio-bars {
    display: grid;
    gap: 10px;
    margin-top: auto;
  }

  .portfolio-bars span:nth-child(2) {
    width: 82%;
  }

  .portfolio-bars span:nth-child(3) {
    width: 64%;
  }

  .portfolio-copy {
    display: grid;
    gap: 14px;
  }

  .portfolio-sector {
    color: var(--text);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .portfolio-result {
    padding-top: 16px;
    border-top: 1px solid var(--line-strong);
    color: var(--text);
    font-weight: 800;
    line-height: 1.55;
  }

  .metric-row {
    grid-template-columns: minmax(0, 0.6fr) minmax(0, 1.4fr);
    align-items: start;
  }

  .metric-row strong {
    display: block;
    font-family: 'Sora', sans-serif;
    font-size: 1.2rem;
    line-height: 1.2;
    letter-spacing: -0.03em;
  }

  .metric-row p {
    margin: 0;
    color: var(--muted);
    line-height: 1.76;
  }

  .process-timeline {
    position: relative;
  }

  .process-step {
    grid-template-columns: 82px minmax(0, 1fr);
    align-items: start;
  }

  .process-step-number {
    color: var(--muted);
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    letter-spacing: -0.04em;
  }

  .process-step-copy {
    display: grid;
    gap: 8px;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .service-card {
    padding: 24px;
    display: grid;
    gap: 14px;
    min-height: 236px;
  }

  .service-index {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 0;
    border: 1px solid var(--line-strong);
    background: transparent;
    color: var(--text);
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    transition: transform 0.24s ease, background 0.24s ease;
  }

  .service-card:hover .service-index {
    background: var(--text);
    color: var(--text-invert);
  }

  .service-card:hover h3,
  .case-card:hover h3,
  .story-card:hover h3,
  .process-card:hover h3 {
    color: var(--text);
  }

  .service-card h3,
  .case-card h3,
  .story-card h3,
  .process-card h3 {
    margin: 0;
    font-family: 'Sora', sans-serif;
    font-size: 1.14rem;
    line-height: 1.35;
    transition: color 0.24s ease;
  }

  .service-card p,
  .case-card p,
  .story-card p,
  .process-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.72;
  }

  .story-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: stretch;
  }

  .story-visual {
    padding: 24px;
    min-height: 100%;
  }

  .visual-stack {
    height: 100%;
    min-height: 580px;
    display: grid;
    gap: 14px;
    grid-template-rows: 1.2fr 0.8fr;
  }

  .visual-top,
  .visual-bottom {
    position: relative;
    overflow: hidden;
    border-radius: 18px;
    border: 1px solid var(--line);
  }

  .visual-top {
    padding: 24px;
    background:
      radial-gradient(circle at top right, rgba(142, 154, 129, 0.14), transparent 28%),
      linear-gradient(180deg, rgba(247, 241, 233, 0.98), rgba(232, 221, 207, 0.98));
    color: var(--text);
  }

  .visual-top::before {
    content: '';
    position: absolute;
    left: 8%;
    right: 14%;
    bottom: 0;
    height: 82px;
    border-radius: 28px 28px 0 0;
    background: linear-gradient(180deg, rgba(173, 131, 92, 0.2), rgba(139, 101, 68, 0.32));
    pointer-events: none;
  }

  .visual-top::after {
    content: '';
    position: absolute;
    right: 14%;
    bottom: 82px;
    width: 122px;
    height: 152px;
    border-radius: 64px 64px 18px 18px;
    background: linear-gradient(180deg, rgba(212, 183, 149, 0.68), rgba(173, 132, 95, 0.9));
    box-shadow: inset 0 -14px 20px rgba(102, 73, 48, 0.12);
    pointer-events: none;
  }

  .visual-top > * {
    position: relative;
    z-index: 1;
  }

  .visual-top h3 {
    margin: 70px 0 12px;
    max-width: 8.5ch;
    font-family: 'Sora', sans-serif;
    font-size: clamp(2rem, 3vw, 2.8rem);
    line-height: 1.02;
    letter-spacing: -0.05em;
  }

  .visual-top p {
    margin: 0;
    max-width: 32ch;
    color: #6e6156;
    line-height: 1.75;
  }

  .visual-bottom {
    padding: 18px;
    background: rgba(255, 249, 242, 0.92);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.74);
  }

  .dark .visual-top {
    background:
      radial-gradient(circle at top right, rgba(255, 255, 255, 0.05), transparent 28%),
      linear-gradient(180deg, #1e1e1e, #111);
    border-color: #333;
  }
  .dark .visual-top::before {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  }
  .dark .visual-top::after {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    box-shadow: inset 0 -14px 20px rgba(0, 0, 0, 0.5);
  }
  .dark .visual-bottom {
    background: #1a1a1a;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .dark .mini-panel {
    background: linear-gradient(180deg, #222, #1a1a1a);
    border-color: #333;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .bottom-grid {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .mini-panel {
    border-radius: 16px;
    padding: 18px;
    background: linear-gradient(180deg, rgba(255, 252, 247, 0.94), rgba(247, 238, 228, 0.98));
    border: 1px solid var(--line);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.76);
  }

  .mini-panel strong {
    display: block;
    font-family: 'Sora', sans-serif;
    margin-bottom: 10px;
  }

  .mini-panel p {
    margin: 0;
    color: var(--muted);
    line-height: 1.65;
    font-size: 0.94rem;
  }

  .story-column {
    display: grid;
    gap: 20px;
  }

  .story-card {
    padding: 24px;
    min-height: 180px;
  }

  .story-card strong {
    display: inline-flex;
    margin-bottom: 14px;
    color: #8e6a48;
    font-size: 0.84rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
  }

  .case-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .case-card {
    padding: 24px;
    display: grid;
    gap: 16px;
    min-height: 320px;
  }

  .case-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--muted);
    font-size: 0.9rem;
    font-weight: 700;
  }

  .case-badge {
    padding: 8px 12px;
    border-radius: 0;
    background: transparent;
    border: 1px solid var(--line-strong);
    color: var(--text);
    font-size: 0.82rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .case-visual {
    min-height: 164px;
    padding: 18px;
    border-radius: 0;
    border: 1px solid var(--line-strong);
    background: var(--bg-secondary);
    display: grid;
    gap: 10px;
  }

  .case-visual span {
    display: block;
    height: 12px;
    border-radius: 0;
    background: var(--line-strong);
    opacity: 0.2;
    transition: width 0.3s ease, transform 0.3s ease;
  }

  .case-visual span:nth-child(1) {
    width: 34%;
    height: 42px;
    opacity: 1;
  }

  .case-visual span:nth-child(3) {
    width: 78%;
  }

  .case-visual span:nth-child(4) {
    width: 56%;
  }

  .case-card:hover .case-visual span:nth-child(1) {
    width: 40%;
    transform: translateY(-2px);
  }

  .case-card:hover .case-visual span:nth-child(3) {
    width: 84%;
  }

  .case-card:hover .case-visual span:nth-child(4) {
    width: 64%;
  }

  .case-result {
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid var(--line-strong);
    color: var(--text);
    font-weight: 800;
    line-height: 1.55;
  }

  .pricing-card {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 380px;
    position: relative;
    border: 2px solid var(--line-strong);
    background: var(--surface-strong);
    box-shadow: var(--shadow);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .pricing-card:hover {
    transform: translate(-4px, -4px);
    box-shadow: var(--shadow-hover);
  }

  .pricing-icon {
    margin-bottom: 16px;
    height: 48px;
    display: flex;
    align-items: flex-start;
  }

  .pricing-icon img {
    height: 100%;
    width: auto;
    object-fit: contain;
    image-rendering: pixelated; 
  }

  .dark .pricing-icon img {
    filter: grayscale(100%) contrast(1.5) invert(1) drop-shadow(4px 4px 0px rgba(255, 255, 255, 0.2));
  }

  .pricing-icon.pricing-laptop {
    height: 55px; 
  }

  .pricing-card h3 {
    margin: 0;
    font-family: 'Sora', sans-serif;
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: -0.04em;
    color: var(--text);
  }

  .pricing-price {
    font-family: 'Manrope', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--text);
    margin-bottom: 10px;
  }

  .pricing-card p {
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
    font-size: 0.95rem;
  }

  .pricing-features {
    margin: 10px 0 0;
    padding: 12px 0 0;
    list-style: none;
    display: grid;
    gap: 8px;
    border-top: 1px solid var(--line-strong);
    color: var(--muted);
    font-size: 0.9rem;
    flex-grow: 1; /* Pushes the button below to the bottom */
  }

  .pricing-features li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .pricing-features li::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background: var(--text);
  }

  .pricing-card-btn {
    width: 100%;
    text-align: center;
    padding: 16px;
    background: var(--text);
    color: var(--text-invert);
    font-family: 'Pixelify Sans', monospace ;
    font-weight: 800;
    text-transform: uppercase;
    border: 2px solid var(--text);
    transition: background 0.2s, color 0.2s;
    margin-top: auto; 
  }

  .pricing-card-btn:hover {
    background: transparent;
    color: var(--text);
  }

  /* --- ADD-ONS CSS --- */
  .addons-section {
    margin-top: 100px;
    padding-top: 60px;
    border-top: 4px solid var(--line-strong);
  }

  .addons-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-top: 40px;
  }

  .addon-item {
    background: var(--surface-strong);
    border: 2px solid var(--line-strong);
    padding: 24px;
    box-shadow: var(--shadow);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    display: flex;
    flex-direction: column;
  }

  .addon-item:hover {
    transform: translate(-4px, -4px);
    box-shadow: var(--shadow-hover);
  }

  .addon-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 2px dashed var(--line-strong);
  }

  .addon-item h4 {
    margin: 0;
    font-family: 'Sora', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--text);
  }

  .addon-price {
    font-family: 'Pixelify Sans', monospace;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text);
    white-space: nowrap;
  }

  .addon-item p {
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .cta-panel {
    padding: 34px;
    display: grid;
    grid-template-columns: 1.1fr auto;
    gap: 24px;
    align-items: center;
  }

  .cta-panel h2 {
    margin: 0 0 10px;
    font-family: 'Sora', sans-serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    line-height: 1.04;
    letter-spacing: -0.05em;
    max-width: 10ch;
  }

  .cta-panel p {
    margin: 0;
    max-width: 56ch;
    color: var(--muted);
    line-height: 1.8;
  }

  .cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  footer {
    padding: 0 0 42px;
  }

  .footer-bar {
    width: var(--width);
    margin: 0 auto;
    padding-top: 18px;
    border-top: 1px solid rgba(70, 52, 38, 0.08);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--muted);
    font-size: 0.92rem;
  }

  [data-reveal] {
    opacity: 0;
    transform: translateY(42px) scale(0.985);
    filter: blur(6px);
    transition:
      opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.85s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--delay, 0ms);
    will-change: transform, opacity, filter;
  }

  [data-reveal="left"] {
    transform: translateX(-48px) scale(0.985);
  }

  [data-reveal="right"] {
    transform: translateX(48px) scale(0.985);
  }

  [data-reveal].is-visible {
    opacity: 1;
    transform: translate(0, 0) scale(1);
    filter: blur(0);
  }

  /* --- MAGAZINE MOBILE OPTIMIZATION --- */
  @media (max-width: 1080px) {
    .hero,
    .story-split-layout,
    .services-layout,
    .insight-layout,
    .process-layout,
    .portfolio-row,
    .cta-panel,
    .trust-band {
      grid-template-columns: 1fr;
    }

    .hero-copy {
      position: static !important;
      margin-bottom: 30px;
    }

    .hero {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
    }

    .story-split-layout {
      grid-template-columns: 1fr;
    }

    .story-split-right {
      position: static;
      order: -1;
      margin-bottom: 32px;
    }

    .hero-copy h1,
    .section-head h2,
    .cta-panel h2,
    .services-left h2,
    .story-split-right h2 {
      max-width: none;
    }

    .pricing-grid {
      grid-template-columns: 1fr;
    }

    .addons-grid {
      grid-template-columns: 1fr;
    }

    .trust-tags {
      justify-content: flex-start;
    }

    .services-grid,
    .case-grid,
    .metrics-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .process-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .portfolio-row:nth-child(even) .portfolio-visual,
    .portfolio-row:nth-child(even) .portfolio-copy {
      order: initial;
    }

    .services-left,
    .insight-copy,
    .process-intro {
      position: static;
    }

    .story-panel-card {
      width: 100% !important;
    }
    
    .story-panel-card:not(:first-child) {
      margin-top: -24px !important;
    }
  }

  @media (max-width: 760px) {
    .hero-copy h1 {
      font-size: 2.8rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .nav {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
    }

    .brand {
      width: 100%;
      justify-content: center;
    }

    .nav-links {
      flex-wrap: wrap;
      justify-content: center;
    }

    .screen,
    .screen-grid,
    .metrics-grid,
    .process-grid,
    .services-grid,
    .case-grid,
    .bottom-grid {
      grid-template-columns: 1fr;
    }

    .screen {
      min-height: auto;
    }

    .screen-sidebar {
      min-height: 210px;
    }

    .metric-strip {
      grid-template-columns: 1fr;
    }

    .floating-note {
      position: relative;
      width: 100%;
      margin-top: 14px;
      right: 0;
      bottom: 0;
    }

    .visual-stack {
      min-height: auto;
    }

    .cta-panel {
      padding: 26px;
    }

    .service-row,
    .metric-row,
    .process-step {
      grid-template-columns: 1fr;
    }

    .portfolio-row {
      gap: 22px;
    }

    .scroll-toast {
      right: 16px;
      bottom: 16px;
      width: calc(100% - 32px);
    }
    
    .manga-modal-nav {
      width: 40px; 
      height: 40px; 
      font-size: 1rem; 
    }
  }
`;

function PortfolioWebsite() {
  const [scrollToast, setScrollToast] = useState({
    visible: false,
    title: '',
    body: '',
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [isNoteVisible, setIsNoteVisible] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.title = 'Web Design Malaysia | TriZen Studio';

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const parallaxEls = document.querySelectorAll('[data-parallax]');
          parallaxEls.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
            const elRect = el.getBoundingClientRect();
            const yOffset = ((elRect.top + elRect.height / 2) - (window.innerHeight / 2)) * speed;
            el.style.transform = el.classList.contains('is-visible') ? `translate3d(0, ${yOffset}px, 0)` : el.style.transform;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    let revealObserver;

    if (elements.length) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.18,
          rootMargin: '0px 0px -8% 0px',
        }
      );

      elements.forEach((element) => {
        revealObserver.observe(element);
      });
    }

    return () => {
      if (revealObserver) {
        revealObserver.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const noteTargets = Array.from(document.querySelectorAll('[data-note-title]'));

    if (!noteTargets.length) {
      return undefined;
    }

    let hideTimer;

    const noteObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.getAttribute('data-note-title') ?? '';
            const body = entry.target.getAttribute('data-note-body') ?? '';

            setScrollToast({
              visible: true,
              title,
              body,
            });

            window.clearTimeout(hideTimer);
            hideTimer = window.setTimeout(() => {
              setScrollToast((current) => ({
                ...current,
                visible: false,
              }));
            }, 2600);

            noteObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.42,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    noteTargets.forEach((target) => {
      noteObserver.observe(target);
    });

    return () => {
      noteObserver.disconnect();
      window.clearTimeout(hideTimer);
    };
  }, []);

  // --- Lightbox Handlers ---
  const openLightbox = (images, index = 0) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, images: [], currentIndex: 0 });
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }));
      if (e.key === 'ArrowLeft') setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length }));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  return (
    <>
      <style>{styles}</style>
      <div className="site-shell">
        <div className={`scroll-toast${scrollToast.visible ? ' is-visible' : ''}`} role="status" aria-live="polite">
          <div className="scroll-toast-label">
            <span className="scroll-toast-dot" />
            Scroll Update
          </div>
          <strong>{scrollToast.title}</strong>
          <p>{scrollToast.body}</p>
        </div>

        <div className="grid-fade" />

        <div className="nav-wrap">
          <nav className="nav">
            <div className="brand">
<div className="brand-mark" style={{ background: 'transparent' }}>
  <img src="/img/Logo.png" alt="TriZen Logo" style={{ width: '160%', height: '160%', objectFit: 'contain' }} />
</div>              <div className="brand-copy">
                <div className="brand-name">TriZen Studio</div>
                <div className="brand-subtitle">Professional websites for modern businesses</div>
              </div>
            </div>

            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#experience">Experience</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#process">Process</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="nav-cta" 
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{ cursor: 'pointer' }}
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a className="nav-cta" href="#contact">
                Start a Project
              </a>
            </div>
          </nav>
        </div>

        <header className="container hero">
          <div className="hero-copy">
            <div className="eyebrow" data-reveal style={{ '--delay': '0ms' }}>
              <span className="eyebrow-dot" />
              Affordable web design and development services in Malaysia
            </div>

            <h1 data-reveal style={{ '--delay': '80ms' }}>
              Web Design Malaysia
              <span>| TriZen Studio</span>
            </h1>

            <p data-reveal style={{ '--delay': '160ms' }}>
              We provide affordable web design and development services in Malaysia. Specializing in React websites,
              business websites, and student project support.
            </p>

            <div className="hero-actions" data-reveal style={{ '--delay': '240ms' }}>
              <a className="button-primary" href="#contact">
                Book a Discovery Call
              </a>
              <a className="button-secondary" href="#portfolio">
                View Our Approach
              </a>
            </div>

            <div className="hero-tags">
              {highlights.map((item, index) => (
                <div className="tag" data-reveal key={item} style={{ '--delay': `${320 + index * 70}ms` }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="browser-shell" data-reveal="right" style={{ '--delay': '120ms' }}>
              <div className="browser-top">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="browser-url">trizenstudio.com/web-design-malaysia</div>
              </div>

              <div className="screen">
                <div className="screen-sidebar">
                  <div>
                    <h3>Professional look. Clear offer. Better first impression.</h3>
                  </div>
                  <div className="sidebar-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="screen-main">
                  <div className="screen-hero">
                    <span className="mini-badge">Designed for trust and conversion</span>
                    <h2>Websites that reveal value as people scroll.</h2>
                    <p>
                      Every section is layered with intent, from headline structure to service explanation, testimonials,
                      proof, and the final enquiry invitation.
                    </p>

                    <div className="metric-strip">
                      <div className="metric-tile">
                        <strong>01</strong>
                        <span>Elegant presentation that feels established.</span>
                      </div>
                      <div className="metric-tile">
                        <strong>02</strong>
                        <span>Responsive layouts that stay clear on mobile.</span>
                      </div>
                      <div className="metric-tile">
                        <strong>03</strong>
                        <span>Scroll motion that adds energy without clutter.</span>
                      </div>
                    </div>
                  </div>

                  <div className="screen-grid">
                    <div className="screen-card">
                      <h4>Visual hierarchy</h4>
                      <p>
                        Strong spacing, typography, and pacing help visitors understand your business before they need to
                        think too hard.
                      </p>
                      <div className="split-bars">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="screen-card">
                      <h4>Lead-ready sections</h4>
                      <p>
                        Service blocks, trust markers, and call-to-action points are arranged to encourage contact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isNoteVisible && (
              <div className="floating-note" data-reveal="left" style={{ '--delay': '280ms' }}>
                <button 
                  className="floating-note-close" 
                  onClick={() => setIsNoteVisible(false)}
                  aria-label="Close note"
                >
                  ✕
                </button>
                <strong>What the site should say</strong>
                <p>
                  "This business looks serious, organized, and easy to trust." That is the first impression we design for.
                </p>
              </div>
            )}
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="trust-band" data-reveal>
              <strong>Built for businesses that want a more professional digital presence</strong>
              <div className="trust-tags">
                <span>Consultants</span>
                <span>Studios</span>
                <span>Agencies</span>
                <span>Real Estate</span>
                <span>Wellness</span>
                <span>Personal Brands</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="services"
          data-note-title="Offer Framed"
          data-note-body="The service structure is now entering in a clearer sequence."
        >
          <div className="container services-layout">
            <div className="services-left" data-reveal="left">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                What We Provide
              </div>
              <h2>
                Everything needed
                <span>for a clean and convincing website.</span>
              </h2>
            </div>

            <div className="services-right">
              <div className="services-intro" data-reveal style={{ marginBottom: '32px' }}>
                <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.82, fontSize: '1rem' }}>
                  We design and build professional websites that present your business clearly, feel polished on every screen, and guide visitors through a stronger story as they scroll. And We do more than decorate a page. We structure the message, shape the visual system, and build the final experience so your business looks premium, clear, and ready for clients.
                </p>
              </div>

              <div className="services-lead" data-reveal style={{ marginBottom: '40px' }}>
                <p>
                  The reference points toward something calmer and more editorial, so this section now reads more like a
                  considered service narrative instead of a row of equal cards.
                </p>
                <div className="services-notes">
                  {editorialNotes.map((note) => (
                    <div key={note}>{note}</div>
                  ))}
                </div>
              </div>

              <div className="service-list">
                {services.map((service, index) => (
                  <article className="service-row" data-reveal key={service.title} style={{ '--delay': `${index * 90}ms` }}>
                    <div className="service-row-index">{String(index + 1).padStart(2, '0')}</div>
                    <div className="service-row-copy">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- MANGA/EDITORIAL STORY SECTION --- */}
        <section className="section" id="scroll-experience">
          <div className="container story-split-layout">
            
            {/* LEFT SIDE: SCROLLING MANGA/COLLAGE PANELS */}
            <div className="story-split-left">
              {scrollStorySteps.map((item, index) => (
                <article
                  className="story-panel-card"
                  key={item.step}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  style={{ '--delay': `${index * 90}ms` }}
                  data-note-title={item.noteTitle}
                  data-note-body={item.noteText}
                >
                  <div className="manga-chapter">No. {item.step}</div>
                  <div className="h-panel-copy">
                    <span className="mini-badge" style={{ marginBottom: '12px' }}>{item.label}</span>
                    <h3 style={{ margin: '0 0 10px', fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase' }}>{item.title}</h3>
                    <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.7' }}>{item.text}</p>
                    <div className="manga-detail">{item.detail}</div>
                  </div>
                </article>
              ))}
            </div>

            {/* RIGHT SIDE: STICKY TITLE */}
            <div className="story-split-right" data-reveal="right">
              <div className="section-label">Scroll Experience</div>
              <h2>
                A longer scroll moment
                <span>can hold attention without losing clarity.</span>
              </h2>
              <p>
                This section uses a pinned layout. It gives the page a stronger sense of direction and makes the motion feel more intentional while you scroll.
              </p>
            </div>

          </div>
        </section>

        <section
          className="section"
          id="portfolio"
          data-note-title="Concepts Opened"
          data-note-body="The portfolio section has entered, with each concept revealed in order."
        ><section className="section" id="experience">
          <div className="container experience-layout">
            
            {/* LEFT SIDE: STICKY HEADER */}
            <div className="experience-left">
              <div className="section-head" data-reveal="left">
                <div className="section-label">Experience & Approach</div>
                <h2 className="title-pixelate">Years of engineering. <br/> Zero room for guesswork.</h2>
                <p>
                  We’ve spent our time moving businesses away from fragile, slow templates that leak leads. 
                  Our experience is built on a foundation of solving the three biggest digital failures: 
                  technical instability, weak visual trust, and broken conversion flows.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: SCROLLING CONTENT */}
            <div className="experience-right">
              <article className="experience-card" data-reveal="right" style={{ '--delay': '0ms' }}>
                <strong className="title-pixelate">01 Technical Architecture</strong>
                <p>
                  Specialist in React and GSAP motion. We don't just build pages; we engineer robust frontend architectures. 
                  This means your site stays smooth under heavy traffic, maintains high SEO performance, and scales without 
                  the bugs common in generic WordPress setups.
                </p>
              </article>
              
              <article className="experience-card" data-reveal="right" style={{ '--delay': '100ms' }}>
                <strong className="title-pixelate">02 Visual Positioning</strong>
                <p>
                  We have refined a "Strategic UI" approach to fix the "Cheap Look" problem. By applying strict visual 
                  hierarchy and premium typography, we transform ignored websites into high-authority digital flagships 
                  that command immediate respect from high-ticket clients.
                </p>
              </article>

              <article className="experience-card" data-reveal="right" style={{ '--delay': '200ms' }}>
                <strong className="title-pixelate">03 Conversion Strategy</strong>
                <p>
                  With deep experience in Property Tech and Travel sectors, we understand how to design for high-trust 
                  environments. We bridge the gap between a "pretty site" and a "sales tool" by engineering clear paths 
                  that guide users from initial curiosity to final enquiry.
                </p>
              </article>

              <article className="experience-card" data-reveal="right" style={{ '--delay': '300ms' }}>
                <strong className="title-pixelate">04 Asset Longevity</strong>
                <p>
                  Our work is built for the long term. By using clean code and modern React principles, we deliver digital 
                  assets that remain fast and relevant for years. We ensure your investment doesn't become obsolete 
                  the moment the next design trend arrives.
                </p>
              </article>
            </div>

          </div>
        </section>
          <div className="container">
            <div className="section-head" data-reveal>
              <div className="section-label">Portfolio Direction</div>
              <h2>Professional concepts designed to attract the right client.</h2>
              <p>
                The visual direction changes by business, but the objective stays the same: make your work easy to
                understand, easy to trust, and easy to contact.
              </p>
            </div>

            <div className="portfolio-stack">
              {caseStudies.map((item, index) => (
                <article className="portfolio-row" data-reveal data-parallax="0.05" key={item.name} style={{ '--delay': `${index * 90}ms` }}>
                  <div className="portfolio-visual">
                    <span className="portfolio-brow">Concept {String(index + 1).padStart(2, '0')}</span>
                    
                    {/* GALLERY INTEGRATION: Renders Image Wrapper if Images exist */}
                    {item.images ? (
                      <div className="portfolio-image-wrapper" onClick={() => openLightbox(item.images)}>
                        <img src={item.images[0]} alt={item.name} className="portfolio-cover-img" />
                        <div className="hover-overlay">
                          <span className="title-pixelate">VIEW GALLERY</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="portfolio-lines">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="portfolio-bars">
                          <span />
                          <span />
                          <span />
                        </div>
                      </>
                    )}

                  </div>

                  <div className="portfolio-copy">
                    <div className="portfolio-sector">{item.sector}</div>
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>
                    <div className="portfolio-result">{item.result}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <div className="section-label">What Clients Feel</div>
              <h2>A website should make your business feel ready, not unfinished.</h2>
              <p>
                Good design is not only visual. It creates confidence. It gives people a clean reason to stay, read, and
                reach out.
              </p>
            </div>

            <div className="insight-layout">
              <div className="insight-copy" data-reveal="left">
                <p>
                  A cleaner page often feels more trustworthy because the hierarchy is easier to understand. This is where
                  the page shifts from showing features to reinforcing how the business should feel.
                </p>
              </div>

              <div className="metric-list">
                {studioMetrics.map((item, index) => (
                  <article className="metric-row" data-reveal data-parallax="0.02" key={item.value} style={{ '--delay': `${index * 90}ms` }}>
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="process"
          data-note-title="Workflow Visible"
          data-note-body="The delivery process is now on screen with a cleaner progression."
        >
          <div className="container">
            <div className="section-head" data-reveal>
              <div className="section-label">Process</div>
              <h2>A clear system from concept to launch.</h2>
              <p>
                The work is handled in a practical sequence so the result stays aligned with your brand and business goals
                from start to finish.
              </p>
            </div>

            <div className="process-layout">
              <div className="process-intro" data-reveal="left">
                <p>
                  The workflow should read with the same calm structure as the rest of the page. Each step is sequenced so
                  the site feels considered from the first conversation to launch.
                </p>
                <div className="process-notes">
                  <div>Discovery defines what the page should say before design starts.</div>
                  <div>Direction keeps visual decisions tied to business goals rather than decoration.</div>
                </div>
              </div>

              <div className="process-timeline">
                {processSteps.map((step, index) => (
                  <article className="process-step" data-reveal key={step.number} style={{ '--delay': `${index * 90}ms` }}>
                    <div className="process-step-number">{step.number}</div>
                    <div className="process-step-copy">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head" data-reveal>
              <div className="section-label">Investment</div>
              <h2 className="title-pixelate">Your Business Deserves a Website That Works 24/7.</h2>
              <p>
                Custom websites that attract customers, showcase your brand, and help you grow online. Affordable packages for small businesses in Malaysia – fast, professional, and easy to manage.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px' }}>
              <div className="pricing-card" data-reveal style={{ '--delay': '0ms' }}>
                <div className="pricing-icon pricing-laptop"><img src="/img/laptop.png" alt="Basic Laptop" /></div>
                <h3>Basic Plan</h3>
                <div className="pricing-price">RM1,500 – RM2,500</div>
                <p>Perfect for consultants or early-stage brands needing a high-trust, single-page presentation fast.</p>
                <ul className="pricing-features">
                  <li>Single-Page 'Story' Layout</li>
                  <li>Responsive UI</li>
                  <li>Pinned Hero / Navigation</li>
                  <li>Conversion Flow</li>
                  <li>React Build</li>
                </ul>
                <a href="#contact" className="pricing-card-btn">Get Started</a>
              </div>
              
              <div className="pricing-card" data-reveal style={{ '--delay': '90ms' }}>
                <div className="pricing-icon"><img src="/img/star.png" alt="Business Car" /></div>
                <h3>Business Core</h3>
                <div className="pricing-price">RM3,500 – RM5,500</div>
                <p>Designed for established studios or agencies requiring deeper service explanation and visual depth.</p>
                <ul className="pricing-features">
                  <li>Up to 5 Pages (Home, About, Services, etc.)</li>
                  <li>Portfolio Gallery</li>
                  <li>Scroll storytelling</li>
                  <li>Pinned Sections</li>
                  <li>Lead Flow Structure</li>
                </ul>
                <a href="#contact" className="pricing-card-btn">Get Started</a>
              </div>
              
              <div className="pricing-card" data-reveal style={{ '--delay': '180ms' }}>
                <div className="pricing-icon"><img src="/img/crown.png" alt="Advanced Crown" /></div>
                <h3>Advanced Growth</h3>
                <div className="pricing-price">RM6,000 – RM9,000+</div>
                <p>For complex offers needing motion narrative, interactive blocks, or launch support to win high-value clients.</p>
                <ul className="pricing-features">
                  <li>Up to 10 Pages</li>
                  <li>Full Storytelling Narrative</li>
                  <li>Custom Interactive Blocks</li>
                  <li>Launch Assets</li>
                  <li>Advanced SEO Setup</li>
                </ul>
                <a href="#contact" className="pricing-card-btn">Get Started</a>
              </div>
            </div>

            <div className="addons-section" data-reveal>
              <div className="section-head">
<h2 className="title-pixelate">Optional <br /> Add-ons</h2>                <p>Scale your project with specific features designed for your exact business needs.</p>
              </div>
              
              <div className="addons-grid">
                {extraAddons.map((addon, i) => (
                  <div className="addon-item" key={addon.title}>
                    <div className="addon-header">
                      <h4>{addon.title}</h4>
                      <div className="addon-price">{addon.price}</div>
                    </div>
                    <p>{addon.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="contact"
          data-note-title="Ready To Enquire"
          data-note-body="The final call to action is now available if the page has done its job."
        >
          <div className="container">
            <div className="cta-panel" data-reveal>
              <div>
                <h2>Need a website that looks more established from the first scroll?</h2>
                <p>
                  We can create a clear, modern, professional website presence that explains your offer well and makes the
                  next step feel easy for potential clients.
                </p>
              </div>

              <div className="cta-actions">
                <a className="button-primary" href="mailto:sales@trizenstudio.com">
                  sales@trizenstudio.com
                </a>
                <a className="button-secondary" href="#services">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-bar">
            <span>TriZen Studio</span>
            <span>Web design and development in Malaysia</span>
          </div>
        </footer>

        {/* --- MANGA LIGHTBOX MODAL --- */}
        {lightbox.isOpen && (
          <div className="manga-modal-overlay" onClick={closeLightbox}>
            <div className="manga-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="manga-modal-header">
                <h3>Gallery / {lightbox.currentIndex + 1} of {lightbox.images.length}</h3>
                <button className="manga-modal-close title-pixelate" onClick={closeLightbox}>[X]</button>
              </div>
              <div className="manga-modal-body">
                <button className="manga-modal-nav manga-modal-prev title-pixelate" onClick={prevImage}>&lt;</button>
                <img src={lightbox.images[lightbox.currentIndex]} alt={`Slide ${lightbox.currentIndex + 1}`} className="manga-modal-img" />
                <button className="manga-modal-nav manga-modal-next title-pixelate" onClick={nextImage}>&gt;</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

const mountNode =
  document.getElementById('root') ||
  (() => {
    const node = document.createElement('div');
    node.id = 'root';
    document.body.appendChild(node);
    return node;
  })();

createRoot(mountNode).render(
  <React.StrictMode>
    <PortfolioWebsite />
  </React.StrictMode>
);

export default PortfolioWebsite;

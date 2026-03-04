/**
 * Pure Peptides — Core Interaction Script
 * Handles: Mobile Menu, Scroll Reveal, Nav Scroll Effect
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollReveal();
    initNavScroll();
    initSmoothScroll();
});

/* --- Mobile Menu --- */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = menu ? menu.querySelectorAll('a') : [];

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('open');
        toggleMenu(!isOpen);
    });

    links.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    function toggleMenu(show) {
        if (show) {
            menu.classList.add('open');
            document.body.style.overflow = 'hidden';
            btn.innerHTML = '<i class="fas fa-times text-2xl text-peptide"></i>';
        } else {
            menu.classList.remove('open');
            document.body.style.overflow = '';
            btn.innerHTML = '<i class="fas fa-bars text-2xl text-white"></i>';
        }
    }
}

/* --- Scroll Reveal Animation --- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-right');

    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

/* --- Navbar Background on Scroll --- */
function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* --- Smooth Scroll for Anchor Links --- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('nav')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

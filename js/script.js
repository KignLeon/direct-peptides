/**
 * Pure Peptides — Core Interaction Script
 * Handles: Mobile Menu, Modal, FAQ Accordion, Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initModalSystem();
    initFAQ();
    initScrollReveal();
});

/* --- Mobile Menu --- */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    const links = menu.querySelectorAll('a');

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
            btn.innerHTML = '<i class="fas fa-times text-2xl" style="color:var(--pp-secondary)"></i>';
        } else {
            menu.classList.remove('open');
            document.body.style.overflow = '';
            btn.innerHTML = '<i class="fas fa-bars text-2xl text-white"></i>';
        }
    }
}

/* --- Modal System --- */
function initModalSystem() {
    const modal = document.getElementById('modal-overlay');
    if (!modal) return;

    const triggers = document.querySelectorAll('[data-trigger="modal"]');
    const closers = document.querySelectorAll('[data-close="modal"]');

    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    closers.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Handle form inside modal
    const form = modal.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit(form);
        });
    }
}

/* --- FAQ Accordion --- */
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;
        question.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');
            // Close all
            items.forEach(i => i.classList.remove('active'));
            // Toggle current
            if (!wasActive) item.classList.add('active');
        });
    });
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
    const els = document.querySelectorAll('.scroll-reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => observer.observe(el));
}

/* --- Form Submission (AJAX) --- */
async function handleFormSubmit(form) {
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    // Phone validation
    const phone = form.querySelector('input[type="tel"]');
    if (phone && phone.value.replace(/\D/g, '').length < 10) {
        phone.style.borderColor = '#ef4444';
        phone.focus();
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';

    const formData = new FormData(form);
    formData.append('_captcha', 'false');

    try {
        const action = form.getAttribute('action');
        const response = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            btn.style.background = '#10b981';
            form.reset();

            setTimeout(() => {
                btn.disabled = false;
                btn.innerText = originalText;
                btn.style.background = '';
                const modal = document.getElementById('modal-overlay');
                if (modal && form.closest('#modal-overlay')) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            }, 3000);
        } else {
            throw new Error('Failed');
        }
    } catch (err) {
        btn.disabled = false;
        btn.innerText = originalText;
        alert('Something went wrong. Please try again.');
    }
}

/* --- Phone Format --- */
document.addEventListener('input', (e) => {
    if (e.target.type === 'tel') {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? '-' + x[3] : ''}`;
    }
});

/* ================================================
   PURE PEPTIDES — JS Interactions
   Mobile menu, scroll reveal, FAQ, product search/filter
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ========================
       MOBILE MENU
       ======================== */
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            mobileNav.classList.toggle('open');
            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
        });

        // Close on link click
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    /* ========================
       SCROLL REVEAL
       ======================== */
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => observer.observe(el));
    }

    /* ========================
       FAQ ACCORDION
       ======================== */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                // Close all
                faqItems.forEach(i => i.classList.remove('open'));
                // Toggle clicked
                if (!isOpen) item.classList.add('open');
            });
        }
    });

    /* ========================
       PRODUCT SEARCH (Products page)
       ======================== */
    const searchInput = document.getElementById('productSearch');
    const productsGrid = document.getElementById('productsGrid');

    if (searchInput && productsGrid) {
        const cards = productsGrid.querySelectorAll('.product-card-full');

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            cards.forEach(card => {
                const name = (card.dataset.name || '').toLowerCase();
                const category = (card.dataset.category || '').toLowerCase();
                const match = name.includes(query) || category.includes(query);
                card.style.display = match ? '' : 'none';
            });
        });
    }

    /* ========================
       SIDEBAR FILTER (Products page)
       ======================== */
    const sidebarLinks = document.querySelectorAll('.page-sidebar-links a[data-filter]');
    if (sidebarLinks.length > 0 && productsGrid) {
        const cards = productsGrid.querySelectorAll('.product-card-full');

        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = link.dataset.filter;

                // Update active state
                sidebarLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Filter cards
                cards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = '';
                    } else {
                        const name = card.dataset.name || '';
                        card.style.display = name === filter ? '' : 'none';
                    }
                });

                // Clear search
                if (searchInput) searchInput.value = '';
            });
        });
    }

    /* ========================
       NAVBAR SCROLL EFFECT
       ======================== */
    const navbar = document.querySelector('.navbar-inner');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            if (scroll > 50) {
                navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
                navbar.style.background = 'rgba(255,255,255,0.85)';
            } else {
                navbar.style.boxShadow = '';
                navbar.style.background = '';
            }
            lastScroll = scroll;
        }, { passive: true });
    }

    /* ========================
       WELCOME POPUP (Home page only)
       Auto-shows after 5s, minimizes to pill
       ======================== */
    const popupOverlay = document.getElementById('ppPopupOverlay');
    const popupClose = document.getElementById('ppPopupClose');
    const popupMini = document.getElementById('ppPopupMini');

    if (popupOverlay && popupClose && popupMini) {
        // Show popup after 5 seconds (only once per session)
        if (!sessionStorage.getItem('pp_popup_shown')) {
            setTimeout(() => {
                popupOverlay.classList.add('active');
                sessionStorage.setItem('pp_popup_shown', '1');
            }, 5000);
        } else {
            // If already shown this session, show the mini button
            popupMini.classList.add('visible');
        }

        // Close popup → show mini button
        popupClose.addEventListener('click', () => {
            popupOverlay.classList.remove('active');
            setTimeout(() => {
                popupMini.classList.add('visible');
            }, 300);
        });

        // Click overlay background to close
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('active');
                setTimeout(() => {
                    popupMini.classList.add('visible');
                }, 300);
            }
        });

        // Mini button → re-open popup
        popupMini.addEventListener('click', () => {
            popupMini.classList.remove('visible');
            popupOverlay.classList.add('active');
        });
    }
});

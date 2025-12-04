// ============================================
// BRASILVET - V.M-SAL PLUS
// JavaScript Principal - Funcionalidades Interativas
// ============================================

// ==================== VARIÁVEIS GLOBAIS ====================
let notificationInterval;
let timerInterval;
let offerEndTime;

// Dados para simulação de vendas em tempo real
const buyerNames = [
    'João Silva', 'Maria Santos', 'José Oliveira', 'Ana Paula Costa',
    'Carlos Mendes', 'Patricia Lima', 'Roberto Souza', 'Fernanda Alves',
    'Marcelo Silva', 'Juliana Rocha', 'Pedro Henrique', 'Beatriz Ferreira'
];

const buyerLocations = [
    'Goiânia, GO', 'Anápolis, GO', 'Jataí, GO', 'Rio Verde, GO',
    'Catalão, GO', 'Itumbiara, GO', 'Caldas Novas, GO', 'Formosa, GO',
    'Brasília, DF', 'Uberlândia, MG', 'Uberaba, MG', 'Campo Grande, MS'
];

// ==================== DOM CONTENT LOADED ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ==================== INICIALIZAÇÃO ====================
function initializeApp() {
    // Header scroll effect
    initScrollHeader();

    // Mobile menu
    initMobileMenu();

    // Animated counters
    initCounters();

    // FAQ accordion
    initFAQ();

    // Calculator
    initCalculator();

    // Offer countdown
    initOfferTimer();

    // Notification bar
    initNotificationBar();

    // Back to top button
    initBackToTop();

    // Smooth scroll
    initSmoothScroll();

    // Video modal
    initVideoModal();

    // Form validations
    initFormValidations();

    // Add to cart buttons
    initCartButtons();

    // Scroll animations
    initScrollAnimations();

    // Contact form
    initContactForm();
}

// ==================== HEADER SCROLL EFFECT ====================
function initScrollHeader() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');

            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// ==================== ANIMATED COUNTERS ====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));

                if (target) {
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==================== FAQ ACCORDION ====================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ==================== CALCULADORA DE ROI ====================
function initCalculator() {
    const calculateBtn = document.getElementById('calculateBtn');

    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateROI);
    }
}

function calculateROI() {
    const animalCount = parseInt(document.getElementById('animalCount').value);
    const currentWeight = parseInt(document.getElementById('currentWeight').value);
    const feedingMonths = parseInt(document.getElementById('feedingMonths').value);

    // Validação
    if (!animalCount || !currentWeight || !feedingMonths) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (animalCount < 1 || animalCount > 10000) {
        alert('Número de animais deve estar entre 1 e 10.000');
        return;
    }

    // Cálculos baseados em dados reais
    const extraWeightPerMonth = 18; // kg extra por mês
    const pricePerArroba = 280; // R$ por arroba
    const productCostPerAnimal = 6.50; // R$ por animal/mês

    // Resultados
    const totalExtraWeight = animalCount * extraWeightPerMonth * feedingMonths;
    const extraArrobas = totalExtraWeight / 15; // 15kg = 1 arroba
    const extraRevenue = extraArrobas * pricePerArroba;
    const investment = animalCount * productCostPerAnimal * feedingMonths;
    const netProfit = extraRevenue - investment;

    // Exibir resultados
    document.getElementById('extraWeight').textContent = formatNumber(totalExtraWeight) + ' kg';
    document.getElementById('extraRevenue').textContent = formatCurrency(extraRevenue);
    document.getElementById('investment').textContent = formatCurrency(investment);
    document.getElementById('netProfit').textContent = formatCurrency(netProfit);

    // Mostrar seção de resultados com animação
    const resultsSection = document.getElementById('calculatorResults');
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==================== TIMER DE OFERTA ====================
function initOfferTimer() {
    // Define tempo de término (24 horas a partir de agora)
    const now = new Date().getTime();
    const endTime = now + (24 * 60 * 60 * 1000);

    // Salvar no localStorage para persistir
    if (!localStorage.getItem('offerEndTime')) {
        localStorage.setItem('offerEndTime', endTime);
        offerEndTime = endTime;
    } else {
        offerEndTime = parseInt(localStorage.getItem('offerEndTime'));

        // Se já expirou, reinicia
        if (offerEndTime < now) {
            const newEndTime = now + (24 * 60 * 60 * 1000);
            localStorage.setItem('offerEndTime', newEndTime);
            offerEndTime = newEndTime;
        }
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = new Date().getTime();
    const distance = offerEndTime - now;

    if (distance < 0) {
        // Reinicia o timer
        const newEndTime = now + (24 * 60 * 60 * 1000);
        localStorage.setItem('offerEndTime', newEndTime);
        offerEndTime = newEndTime;
        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ==================== NOTIFICATION BAR ====================
function initNotificationBar() {
    updateNotification();
    notificationInterval = setInterval(updateNotification, 8000);
}

function updateNotification() {
    const buyerName = buyerNames[Math.floor(Math.random() * buyerNames.length)];
    const buyerLocation = buyerLocations[Math.floor(Math.random() * buyerLocations.length)];

    document.getElementById('buyerName').textContent = buyerName;
    document.getElementById('buyerLocation').textContent = buyerLocation;

    // Animação suave
    const notificationBar = document.getElementById('notificationBar');
    notificationBar.style.animation = 'none';
    setTimeout(() => {
        notificationBar.style.animation = 'slideInUp 0.5s ease';
    }, 10);
}

// ==================== BACK TO TOP BUTTON ====================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Ignora se for apenas "#"
            if (href === '#' || href === '#!') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== VIDEO MODAL ====================
function initVideoModal() {
    const playButtons = document.querySelectorAll('.play-button');
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('videoModalClose');
    const videoPlayer = document.getElementById('videoModalPlayer');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.getAttribute('data-video');
            const videoUrl = getVideoUrl(videoId);

            videoPlayer.querySelector('source').src = videoUrl;
            videoPlayer.load();
            videoPlayer.play();
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', closeVideoModal);

    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoModalPlayer');

    videoModal.classList.remove('active');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.querySelector('source').src = '';
    document.body.style.overflow = '';
}

function getVideoUrl(videoId) {
    // Todos os depoimentos usam o mesmo vídeo local por enquanto
    // Pode adicionar vídeos específicos depois
    return 'assets/videos/hero-rebanho.mp4';
}

// ==================== FORM VALIDATIONS ====================
function initFormValidations() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });
    });
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// ==================== ADD TO CART ====================
function initCartButtons() {
    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            addToCart(productName);
        });
    });
}

function addToCart(productName) {
    // Animação de feedback
    const button = event.target.closest('.add-to-cart');
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
    button.style.background = 'var(--sucesso)';

    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 2000);

    // Analytics tracking (substituir com código real)
    console.log('Produto adicionado ao carrinho:', productName);

    // Redirecionar para WhatsApp com mensagem personalizada
    const messages = {
        'premium': 'Olá! Gostaria de comprar o V.M-SAL PLUS Premium',
        'reproducao': 'Olá! Gostaria de comprar o V.M-SAL PLUS Reprodução',
        'manutencao': 'Olá! Gostaria de comprar o V.M-SAL PLUS Manutenção'
    };

    const message = encodeURIComponent(messages[productName] || 'Olá! Gostaria de fazer um pedido');
    const whatsappUrl = `https://wa.me/5562999999999?text=${message}`;

    // Abre em nova aba após 2 segundos
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 2000);
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.benefit-card, .problem-card, .product-card, .testimonial-card, .step-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// ==================== UTILITY FUNCTIONS ====================
function formatCurrency(value) {
    return 'R$ ' + value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function formatNumber(value) {
    return value.toLocaleString('pt-BR');
}

// ==================== ANALYTICS & TRACKING ====================
// Integração com Google Analytics, Facebook Pixel, etc.
function trackEvent(category, action, label) {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', action, {
            category: category,
            label: label
        });
    }

    console.log('Event tracked:', category, action, label);
}

// Track page views
trackEvent('Page', 'View', 'Homepage');

// Track scroll depth
let scrollDepth = 0;
window.addEventListener('scroll', () => {
    const depth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

    if (depth > scrollDepth && depth % 25 === 0) {
        scrollDepth = depth;
        trackEvent('Scroll', 'Depth', `${depth}%`);
    }
});

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-success').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();
        trackEvent('CTA', 'Click', buttonText);
    });
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Lazy loading de imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== CLEANUP ====================
window.addEventListener('beforeunload', () => {
    if (notificationInterval) clearInterval(notificationInterval);
    if (timerInterval) clearInterval(timerInterval);
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c🐄 Brasilvet - Suplementos Veterinários', 'color: #2D5016; font-size: 20px; font-weight: bold;');
console.log('%cSaúde Animal 100% Brasileira!', 'color: #F4A900; font-size: 14px;');
console.log('%cDesde 1997 - 28 anos de tradição', 'color: #666; font-size: 12px;');

// ==================== CONTACT FORM ====================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleContactSubmit(contactForm);
        });
    }
}

function handleContactSubmit(form) {
    const formData = {
        name: form.querySelector('#contactName').value,
        phone: form.querySelector('#contactPhone').value,
        email: form.querySelector('#contactEmail').value,
        message: form.querySelector('#contactMessage').value
    };

    // Validação básica
    if (!formData.name || !formData.phone || !formData.message) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `
*Nova mensagem do site Brasilvet*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
${formData.email ? `*E-mail:* ${formData.email}` : ''}

*Mensagem:*
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5517997339566?text=${encodedMessage}`;

    // Feedback visual
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviando...';
    submitBtn.disabled = true;

    // Redirecionar após delay
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');

        // Reset form
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Mensagem de sucesso
        alert('Mensagem preparada! Você será redirecionado para o WhatsApp.');
    }, 500);

    // Track evento
    trackEvent('Contact', 'Form Submit', 'Contact Page');
}

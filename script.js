/**
 * ============================================
 * SCRIPT PRINCIPAL - DaTech Landing Page
 * ============================================
 * 
 * Este archivo contiene toda la funcionalidad interactiva
 * de la página web de DaTech para TickEat.
 * 
 * Funcionalidades:
 * - Menú móvil responsive
 * - Navegación suave
 * - Formulario de contacto
 * - Animaciones al hacer scroll
 * - Efectos de hover mejorados
 */

// ============================================
// MENÚ MÓVIL
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animación del icono hamburguesa
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ============================================
// NAVEGACIÓN SUAVE
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Compensar altura del navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// EFECTO DE NAVBAR AL HACER SCROLL
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// ANIMACIONES AL HACER SCROLL (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciones a elementos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.feature-item, .advantage-card, .feature-card, .about-text'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            business: document.getElementById('business').value,
            message: document.getElementById('message').value
        };
        
        // Validación básica
        if (!formData.name || !formData.email || !formData.phone || !formData.business || !formData.message) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }
        
        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Por favor, introduce un email válido.');
            return;
        }
        
        // Simulación de envío (aquí conectarías con tu backend)
        console.log('Datos del formulario:', formData);
        
        // Mostrar mensaje de éxito
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simular envío (reemplazar con llamada real a tu API)
        setTimeout(() => {
            alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
        
        // NOTA: Para producción, reemplaza el setTimeout con una llamada real a tu API:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        })
        .catch(error => {
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
        */
    });
}

// ============================================
// EFECTOS DE HOVER MEJORADOS
// ============================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ============================================
// OCULTAR INDICADOR DE SCROLL AL HACER SCROLL
// ============================================
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.3s ease';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// ============================================
// EFECTO PARALLAX SUAVE EN HERO
// ============================================
const hero = document.querySelector('.hero');
const circuitPattern = document.querySelector('.circuit-pattern');

if (hero && circuitPattern) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (scrolled < hero.offsetHeight) {
            circuitPattern.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================
console.log('DaTech - TickEat Landing Page cargada correctamente');

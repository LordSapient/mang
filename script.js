// script.js
// Интерактивность для сайта команды по пауэрлифтингу "Бурхан"

document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Плавная прокрутка для всех ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Изменение навигации при прокрутке
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    });
    
    // Обработка формы
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // В реальном проекте здесь был бы код отправки данных на сервер
            const submitButton = this.querySelector('.btn-submit');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Отправка...';
            submitButton.disabled = true;
            
            // Имитация отправки
            setTimeout(() => {
                alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // Анимация появления элементов при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами, которые нужно анимировать
    const elementsToAnimate = document.querySelectorAll('.team-card, .achievement-item, .gallery-item');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Добавляем стили для анимации
    const style = document.createElement('style');
    style.textContent = `
        .team-card, .achievement-item, .gallery-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .team-card.animated, .achievement-item.animated, .gallery-item.animated {
            opacity: 1;
            transform: translateY(0);
        }
        
        .team-card:nth-child(1) { transition-delay: 0.1s; }
        .team-card:nth-child(2) { transition-delay: 0.2s; }
        .team-card:nth-child(3) { transition-delay: 0.3s; }
        .team-card:nth-child(4) { transition-delay: 0.4s; }
        
        .achievement-item:nth-child(1) { transition-delay: 0.1s; }
        .achievement-item:nth-child(2) { transition-delay: 0.2s; }
        .achievement-item:nth-child(3) { transition-delay: 0.3s; }
        .achievement-item:nth-child(4) { transition-delay: 0.4s; }
        
        .gallery-item:nth-child(1) { transition-delay: 0.1s; }
        .gallery-item:nth-child(2) { transition-delay: 0.2s; }
        .gallery-item:nth-child(3) { transition-delay: 0.3s; }
        .gallery-item:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
});
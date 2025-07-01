// رسائل واتساب للخدمات المختلفة
const whatsappMessages = {
    'mortgage': 'مرحباً، أرغب في الاستفسار عن خدمة الرهن العقاري وإعادة التمويل',
    'ready-units': 'مرحباً، أرغب في الاستفسار عن خدمة تمويل الوحدات الجاهزة',
    'self-build': 'مرحباً، أرغب في الاستفسار عن خدمة البناء الذاتي مع توفير الأرض'
};

// فتح واتساب مع رسالة محددة
function openWhatsApp(serviceType) {
    const phoneNumber = '966596880375';
    const message = whatsappMessages[serviceType] || 'مرحباً، أرغب في الاستفسار عن خدماتكم';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// إضافة تأثيرات التحريك
document.addEventListener('DOMContentLoaded', function() {
    // تأثير التحريك للبطاقات
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // تأثير التحريك لآراء العملاء
    const testimonials = document.querySelectorAll('.testimonial-card');
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
    
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(30px)';
        testimonial.style.transition = 'all 0.6s ease';
        observer.observe(testimonial);
    });
});

// إضافة تأثير hover للبطاقات
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    });
});


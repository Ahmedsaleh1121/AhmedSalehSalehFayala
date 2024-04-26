document.addEventListener("DOMContentLoaded", function() {
    // تأثير تحميل الصفحة بشكل سلس
    document.body.style.opacity = 0;
    window.setTimeout(function() {
        document.body.style.opacity = 1;
        document.body.style.transition = 'opacity 2s';
    }, 10);

    // تحسينات التفاعل مع الأزرار
    const phoneButtons = document.querySelectorAll('.phone-button');
    
    phoneButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#f0f0f0'; // لون خلفية الزر عند تمرير المؤشر
            button.style.transform = 'translateY(-5px)'; // رفع الزر قليلاً
            button.style.transition = 'background-color 0.2s, transform 0.2s';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = ''; // إعادة اللون الأصلي
            button.style.transform = ''; // إعادة الزر لمكانه الأصلي
        });
    });
});
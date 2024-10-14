document.getElementById('arabic-btn').addEventListener('click', function() {
    document.getElementById('welcome-message').innerHTML = 'مرحباً بكم في <span class="home__title-color">CodeMaster</span><br> لتعليم البرمجة';
    document.getElementById('contact-button').innerText = 'اتصل بنا';
    document.getElementById('about-title').innerText = 'حول';
    document.getElementById('mission-title').innerText = 'مهمة الشركة';
    document.getElementById('mission-text').innerText = 'تمكين الأفراد من تعلم البرمجة وتطوير مهاراتهم التقنية من خلال تقديم محتوى تعليمي عالي الجودة مناسب لجميع المستويات.';
    document.getElementById('vision-title').innerText = 'رؤية الشركة';
    document.getElementById('vision-text').innerText = 'أن نكون المنصة الرائدة لتعليم البرمجة في العالم العربي، والمساهمة في تطوير مجتمع تقني متقدم ومبتكر.';
    document.getElementById('services-title').innerText = 'خدماتنا';
    document.getElementById('services-list').innerHTML = `
        <li>دورات تدريبية في مختلف لغات البرمجة.</li>
        <li>دروس متقدمة ومقالات تعليمية.</li>
        <li>ورش عمل وتدريب عملي.</li>
        <li>استشارات تقنية ومهنية.</li>
    `;
    document.getElementById('courses-title').innerText = 'الدورات';
    document.getElementById('contact-title').innerText = 'اتصل بنا';
    document.getElementById('contact-name').placeholder = 'الاسم';
    document.getElementById('contact-email').placeholder = 'البريد الإلكتروني';
    document.getElementById('contact-message').placeholder = 'الرسالة';
    document.getElementById('contact-send').value = 'إرسال';
});

document.getElementById('english-btn').addEventListener('click', function() {
    document.getElementById('welcome-message').innerHTML = 'Welcome to <span class="home__title-color">CodeMaster</span><br> for Programming Education';
    document.getElementById('contact-button').innerText = 'Contact Us';
    document.getElementById('about-title').innerText = 'About';
    document.getElementById('mission-title').innerText = 'Company Mission';
    document.getElementById('mission-text').innerText = 'Empowering individuals to learn programming and develop their technical skills by providing high-quality educational content suitable for all levels.';
    document.getElementById('vision-title').innerText = 'Company Vision';
    document.getElementById('vision-text').innerText = 'To be the leading platform for programming education in the Arab world, contributing to the development of an advanced and innovative tech community.';
    document.getElementById('services-title').innerText = 'Our Services';
    document.getElementById('services-list').innerHTML = `
        <li>Training courses in various programming languages.</li>
        <li>Advanced tutorials and educational articles.</li>
        <li>Workshops and practical training.</li>
        <li>Technical and professional consultations.</li>
    `;
    document.getElementById('courses-title').innerText = 'Courses';
    document.getElementById('contact-title').innerText = 'Contact';
    document.getElementById('contact-name').placeholder = 'Name';
    document.getElementById('contact-email').placeholder = 'Email';
    document.getElementById('contact-message').placeholder = 'Message';
    document.getElementById('contact-send').value = 'Send';
});

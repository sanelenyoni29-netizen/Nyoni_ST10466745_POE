document.addEventListener("DOMContentLoaded", function() {
    
    // 1. HAMBURGER MENU
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. IMAGE LIGHTBOX
    const images = document.querySelectorAll('.product-img');
    if (images.length > 0) {
        const modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.style.cssText = 'display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background-color:rgba(0,0,0,0.8); justify-content:center; align-items:center; cursor: zoom-out;';
        const modalImg = document.createElement('img');
        modalImg.style.cssText = 'max-width:90%; max-height:90%; border-radius:8px; box-shadow: 0 4px 20px rgba(255,255,255,0.2);';
        modal.appendChild(modalImg);
        document.body.appendChild(modal);
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = 'flex';
                modalImg.src = this.src;
            });
        });
        modal.addEventListener('click', function() { modal.style.display = 'none'; });
    }

    // 3. ENQUIRY FORM
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const type = document.getElementById('enquiryType').value;
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const formResponse = document.getElementById('formResponse');
            
            nameError.textContent = ''; emailError.textContent = ''; formResponse.innerHTML = '';
            let isValid = true;

            if (name.length < 12) {
                nameError.textContent = "Name must be at least 12 characters long.";
                isValid = false;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (isValid) {
                const submitBtn = enquiryForm.querySelector('button');
                submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
                submitBtn.style.cursor = 'wait';

                setTimeout(function() {
                    enquiryForm.style.display = 'none';
                    let typeText = type === 'custom-cake' ? "your custom cake order" : type === 'catering' ? "your catering event" : "your request";
                    formResponse.innerHTML = `<h3 style="color: green;">Thank you, ${name}!</h3><p>Your enquiry regarding <strong>${typeText}</strong> has been received.</p><p>We will email you back at <strong>${email}</strong> shortly with availability and cost details.</p>`;
                    formResponse.style.cssText = "background-color: #e8f5e9; padding: 1.5rem; border-radius: 8px; border-left: 5px solid green; margin-top: 1rem;";
                }, 1500); 
            }
        });
    }

    // 4. CONTACT FORM
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const phone = document.getElementById('contact-phone').value.trim();
            const reason = document.getElementById('contact-reason').value;
            const consent = document.getElementById('contact-consent').checked;

            const nameError = document.getElementById('contactNameError');
            const emailError = document.getElementById('contactEmailError');
            const phoneError = document.getElementById('contactPhoneError');
            const reasonError = document.getElementById('contactReasonError');
            const consentError = document.getElementById('contactConsentError');
            const formResponse = document.getElementById('contactFormResponse');

            nameError.textContent = ''; emailError.textContent = ''; phoneError.textContent = ''; reasonError.textContent = ''; consentError.textContent = ''; formResponse.innerHTML = '';
            let isValid = true;

            if (name.length < 12) {
                nameError.textContent = "Name must be at least 12 characters long.";
                isValid = false;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }
            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone.replace(/\s/g, ''))) {
                phoneError.textContent = "Please enter a valid 10-digit phone number (e.g. 0821234567).";
                isValid = false;
            }
            if (reason === "") {
                reasonError.textContent = "Please select a reason for contact.";
                isValid = false;
            }
            if (!consent) {
                consentError.textContent = "You must consent to us storing your details.";
                isValid = false;
            }

            if (isValid) {
                const submitBtn = document.getElementById('contactSubmitBtn');
                submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
                submitBtn.style.cursor = 'wait';

                setTimeout(function() {
                    contactForm.style.display = 'none';
                    formResponse.innerHTML = `<h3 style="color: green;">Message Sent!</h3><p>Thank you, ${name}. Your message regarding <strong>${reason}</strong> has been received.</p><p>We will contact you at <strong>${email}</strong> or <strong>${phone}</strong> shortly.</p>`;
                    formResponse.style.cssText = "background-color: #e8f5e9; padding: 1.5rem; border-radius: 8px; border-left: 5px solid green; margin-top: 1rem;";
                }, 1500);
            }
        });
    }
});
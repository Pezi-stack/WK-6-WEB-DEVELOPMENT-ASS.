// Part 1: JavaScript Event Handling
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });

    // Keyboard event example
    const keyInput = document.getElementById('keyInput');
    const keyFeedback = document.getElementById('keyFeedback');
    
    keyInput.addEventListener('keydown', function(e) {
        keyFeedback.textContent = `Key down: ${e.key}`;
    });
    
    keyInput.addEventListener('keyup', function(e) {
        keyFeedback.textContent = `Key up: ${e.key}`;
    });

    // Click event example
    const clickButton = document.getElementById('clickButton');
    const clickFeedback = document.getElementById('clickFeedback');
    
    clickButton.addEventListener('click', function() {
        clickFeedback.textContent = 'Button was clicked!';
        setTimeout(() => {
            clickFeedback.textContent = 'Button not clicked yet';
        }, 2000);
    });

    // Mouse events example
    const mouseArea = document.getElementById('mouseArea');
    const mouseFeedback = document.getElementById('mouseFeedback');
    
    mouseArea.addEventListener('mouseover', function() {
        mouseFeedback.textContent = 'Mouse is over the area';
    });
    
    mouseArea.addEventListener('mouseout', function() {
        mouseFeedback.textContent = 'Mouse left the area';
    });
    
    mouseArea.addEventListener('dblclick', function() {
        mouseFeedback.textContent = 'Double click detected!';
    });

    // Part 2: Interactive Elements
    // Counter game
    let count = 0;
    const counterValue = document.getElementById('counterValue');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetCounterBtn = document.getElementById('resetCounterBtn');
    
    function updateCounter() {
        counterValue.textContent = count;
        counterValue.style.color = count < 0 ? '#e74c3c' : (count > 0 ? '#2ecc71' : 'inherit');
    }
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    resetCounterBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });

    // FAQ section
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('span:last-child');
            
            answer.classList.toggle('active');
            icon.textContent = answer.classList.contains('active') ? '-' : '+';
        });
    });

    // Tabbed interface
    const tablinks = document.querySelectorAll('.tablinks');
    const tabcontents = document.querySelectorAll('.tabcontent');
    
    tablinks.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Hide all tab contents
            tabcontents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Remove active class from all tabs
            tablinks.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show the selected tab and mark as active
            document.getElementById(tabName).style.display = 'block';
            this.classList.add('active');
        });
    });

    // Part 3: Form Validation
    const form = document.getElementById('validationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const formSuccess = document.getElementById('formSuccess');

    // Name validation
    nameInput.addEventListener('input', function() {
        const nameRegex = /^[A-Za-z\s]{2,}$/;
        if (!nameRegex.test(this.value)) {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    });

    // Email validation
    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.value)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });

    // Password validation
    passwordInput.addEventListener('input', function() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(this.value)) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
        
        // Also validate confirm password if it has value
        if (confirmPasswordInput.value) {
            if (this.value !== confirmPasswordInput.value) {
                confirmPasswordError.style.display = 'block';
            } else {
                confirmPasswordError.style.display = 'none';
            }
        }
    });

    // Confirm password validation
    confirmPasswordInput.addEventListener('input', function() {
        if (this.value !== passwordInput.value) {
            confirmPasswordError.style.display = 'block';
        } else {
            confirmPasswordError.style.display = 'none';
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate name
        const nameRegex = /^[A-Za-z\s]{2,}$/;
        if (!nameRegex.test(nameInput.value)) {
            nameError.style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        }
        
        // Validate password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.style.display = 'block';
            isValid = false;
        }
        
        // Validate confirm password
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            formSuccess.style.display = 'block';
            // Reset form after 2 seconds
            setTimeout(() => {
                form.reset();
                formSuccess.style.display = 'none';
            }, 2000);
        }
    });
});
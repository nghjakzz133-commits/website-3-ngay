/* ==========================================
LANDING.JS - LANDING PAGE SPECIFIC SCRIPTS
Chỉ chứa JS riêng cho trang landing
========================================== */

(function() {
‘use strict’;

/* ==========================================
HERO TYPING EFFECT
========================================== */

function typeWriter(element, text, speed = 100) {
let i = 0;
element.innerHTML = ‘’;

```
function type() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}

type();
```

}

// Optional: Uncomment để enable typing effect
// window.addEventListener(‘load’, function() {
//   const heroSpan = document.querySelector(’.hero h1 span’);
//   if (heroSpan) {
//     const originalText = heroSpan.textContent;
//     typeWriter(heroSpan, originalText, 80);
//   }
// });

/* ==========================================
PRICING CARD HOVER EFFECT
========================================== */

const priceCards = document.querySelectorAll(’.price-card’);

priceCards.forEach(card => {
card.addEventListener(‘mouseenter’, function() {
// Scale up other cards slightly
priceCards.forEach(otherCard => {
if (otherCard !== this && !otherCard.classList.contains(‘highlight’)) {
otherCard.style.opacity = ‘0.8’;
}
});
});

```
card.addEventListener('mouseleave', function() {
  priceCards.forEach(otherCard => {
    otherCard.style.opacity = '1';
  });
});
```

});

/* ==========================================
DEMO CARDS INTERACTIVE
========================================== */

const demoCards = document.querySelectorAll(’.demo-card’);

demoCards.forEach((card, index) => {
// Random color accent on hover
const colors = [
‘linear-gradient(135deg, #667eea 0%, #764ba2 100%)’,
‘linear-gradient(135deg, #f093fb 0%, #f5576c 100%)’,
‘linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)’,
‘linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)’
];

```
card.addEventListener('mouseenter', function() {
  this.style.background = colors[index % colors.length];
  this.style.color = 'white';
});

card.addEventListener('mouseleave', function() {
  this.style.background = 'white';
  this.style.color = 'var(--color-dark)';
});
```

});

/* ==========================================
PROCESS STEP COUNTER ANIMATION
========================================== */

function animateCounter(element, target, duration = 1000) {
let start = 0;
const increment = target / (duration / 16);

```
function updateCounter() {
  start += increment;
  if (start < target) {
    element.textContent = Math.ceil(start);
    requestAnimationFrame(updateCounter);
  } else {
    element.textContent = target;
  }
}

updateCounter();
```

}

// Animate process numbers when they come into view
const processObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const numberSpan = entry.target.querySelector(‘span’);
if (numberSpan && !numberSpan.classList.contains(‘animated’)) {
const targetNumber = parseInt(numberSpan.textContent);
numberSpan.textContent = ‘0’;
animateCounter(numberSpan, targetNumber, 800);
numberSpan.classList.add(‘animated’);
}
processObserver.unobserve(entry.target);
}
});
}, { threshold: 0.5 });

document.querySelectorAll(’.process-item’).forEach(item => {
processObserver.observe(item);
});

/* ==========================================
FAQ TOGGLE FUNCTIONALITY
========================================== */

const faqItems = document.querySelectorAll(’.faq-item’);

faqItems.forEach((item, index) => {
const question = item.querySelector(‘h3’);
const answer = item.querySelector(‘p’);

```
if (question && answer) {
  // Add icon
  question.style.cursor = 'pointer';
  question.style.position = 'relative';
  question.style.paddingRight = '30px';
  
  const icon = document.createElement('span');
  icon.innerHTML = '+';
  icon.style.cssText = `
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    font-weight: bold;
    color: var(--color-primary);
    transition: transform 0.3s ease;
  `;
  question.appendChild(icon);
  
  // Set initial state (first item open)
  if (index === 0) {
    item.classList.add('active');
    icon.style.transform = 'translateY(-50%) rotate(45deg)';
    answer.style.maxHeight = answer.scrollHeight + 'px';
    answer.style.marginTop = '1rem';
  } else {
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.marginTop = '0';
  }
  
  answer.style.transition = 'max-height 0.3s ease, margin-top 0.3s ease';
  
  // Toggle on click
  question.addEventListener('click', function() {
    const isActive = item.classList.contains('active');
    
    // Close all other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('p');
        const otherIcon = otherItem.querySelector('h3 span');
        if (otherAnswer) {
          otherAnswer.style.maxHeight = '0';
          otherAnswer.style.marginTop = '0';
        }
        if (otherIcon) {
          otherIcon.style.transform = 'translateY(-50%) rotate(0deg)';
        }
      }
    });
    
    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.marginTop = '1rem';
      icon.style.transform = 'translateY(-50%) rotate(45deg)';
    } else {
      item.classList.remove('active');
      answer.style.maxHeight = '0';
      answer.style.marginTop = '0';
      icon.style.transform = 'translateY(-50%) rotate(0deg)';
    }
  });
}
```

});

/* ==========================================
TRUST SECTION NUMBER COUNTER
========================================== */

function createStatsSection() {
const trustSection = document.querySelector(’.trust’);
if (!trustSection) return;

```
// Optional: Add stats numbers
const stats = [
  { number: 150, label: 'website đã làm', suffix: '+' },
  { number: 3, label: 'ngày bàn giao', suffix: '' },
  { number: 100, label: 'khách hài lòng', suffix: '%' }
];

// Uncomment để thêm stats
// const statsHTML = stats.map(stat => `
//   <div class="stat-item">
//     <div class="stat-number" data-target="${stat.number}">${stat.suffix}</div>
//     <div class="stat-label">${stat.label}</div>
//   </div>
// `).join('');

// const statsContainer = document.createElement('div');
// statsContainer.className = 'stats-container';
// statsContainer.innerHTML = statsHTML;
// trustSection.appendChild(statsContainer);
```

}

/* ==========================================
SCROLL PROGRESS BAR
========================================== */

function createScrollProgress() {
const progressBar = document.createElement(‘div’);
progressBar.style.cssText = `position: fixed; top: 0; left: 0; width: 0%; height: 3px; background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%); z-index: 9999; transition: width 0.1s ease;`;
document.body.appendChild(progressBar);

```
window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.pageYOffset / windowHeight) * 100;
  progressBar.style.width = scrolled + '%';
});
```

}

// Initialize scroll progress
createScrollProgress();

/* ==========================================
CTA BUTTON PULSE ANIMATION
========================================== */

const ctaButtons = document.querySelectorAll(’.cta .btn, .hero-actions .btn-primary’);

ctaButtons.forEach(btn => {
// Add pulse animation
setInterval(() => {
btn.style.animation = ‘pulse 0.5s ease’;
setTimeout(() => {
btn.style.animation = ‘’;
}, 500);
}, 5000);
});

/* ==========================================
PARALLAX EFFECT
========================================== */

function parallaxEffect() {
const heroImg = document.querySelector(’.hero-img’);
if (!heroImg) return;

```
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * 0.3;
  heroImg.style.transform = `translateY(${rate}px)`;
});
```

}

// Initialize parallax (optional)
// parallaxEffect();

/* ==========================================
DEMO CARD PREVIEW ON HOVER
========================================== */

const demoCardLinks = document.querySelectorAll(’.demo-card’);

demoCardLinks.forEach(card => {
// Add preview image on hover (optional)
card.addEventListener(‘mouseenter’, function() {
// Could add a preview image here
this.style.boxShadow = ‘0 20px 40px rgba(102, 126, 234, 0.3)’;
});

```
card.addEventListener('mouseleave', function() {
  this.style.boxShadow = '';
});
```

});

/* ==========================================
PRICE CALCULATOR (Optional)
========================================== */

function createPriceCalculator() {
// Optional: Add interactive price calculator
// Could show real-time price based on selected features
}

/* ==========================================
CONTACT FORM ENHANCEMENT
========================================== */

const contactLinks = document.querySelectorAll(‘a[href^=“https://zalo.me”]’);

contactLinks.forEach(link => {
link.addEventListener(‘click’, function(e) {
// Track conversion (Google Analytics, etc.)
if (typeof gtag !== ‘undefined’) {
gtag(‘event’, ‘click’, {
‘event_category’: ‘Contact’,
‘event_label’: ‘Zalo Link’,
‘value’: this.href
});
}

```
  // Add visual feedback
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = '';
  }, 200);
});
```

});

/* ==========================================
TESTIMONIAL SLIDER (If needed)
========================================== */

function createTestimonialSlider() {
// Optional: Add testimonial carousel/slider
// const testimonials = [
//   { text: “Dịch vụ tuyệt vời!”, author: “Anh A” },
//   { text: “Website đẹp, giao nhanh!”, author: “Chị B” }
// ];
}

/* ==========================================
SOCIAL PROOF NOTIFICATIONS
========================================== */

function showSocialProofNotification() {
const notifications = [
“Anh Minh vừa đặt làm website spa 🎉”,
“Chị Hoa vừa nhận website trong 2 ngày ⚡”,
“Shop ABC vừa nâng cấp lên gói Pro 🚀”
];

```
let currentIndex = 0;

function createNotification() {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 30px;
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 999;
    transform: translateX(-400px);
    transition: transform 0.5s ease;
    max-width: 300px;
    font-size: 14px;
    border-left: 4px solid #6366f1;
  `;
  notification.textContent = notifications[currentIndex];
  document.body.appendChild(notification);
  
  // Slide in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Slide out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(-400px)';
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 5000);
  
  currentIndex = (currentIndex + 1) % notifications.length;
}

// Show first notification after 10 seconds
setTimeout(createNotification, 10000);

// Show new notification every 30 seconds
setInterval(createNotification, 30000);
```

}

// Initialize social proof notifications
showSocialProofNotification();

/* ==========================================
ANIMATE NUMBERS IN PRICING
========================================== */

const priceObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const priceElement = entry.target.querySelector(’.price’);
if (priceElement && !priceElement.classList.contains(‘animated’)) {
const priceText = priceElement.textContent;
const priceNumber = parseInt(priceText.replace(/\D/g, ‘’));

```
      priceElement.textContent = '0đ';
      
      let current = 0;
      const increment = priceNumber / 50;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= priceNumber) {
          priceElement.textContent = priceText;
          clearInterval(timer);
        } else {
          priceElement.textContent = Math.floor(current).toLocaleString('vi-VN') + 'đ';
        }
      }, 20);
      
      priceElement.classList.add('animated');
    }
    priceObserver.unobserve(entry.target);
  }
});
```

}, { threshold: 0.3 });

document.querySelectorAll(’.price-card’).forEach(card => {
priceObserver.observe(card);
});

/* ==========================================
CURSOR TRAIL EFFECT (Optional)
========================================== */

function createCursorTrail() {
// Optional: Add fancy cursor trail effect
// For premium feel
}

/* ==========================================
EASTER EGG
========================================== */

let clickCount = 0;
const logo = document.querySelector(’.header-logo’);

if (logo) {
logo.addEventListener(‘click’, function(e) {
e.preventDefault();
clickCount++;

```
  if (clickCount === 5) {
    alert('🎉 Chúc mừng bạn đã tìm ra Easter Egg! Nhắn "EASTER EGG" qua Zalo để nhận ưu đãi đặc biệt!');
    clickCount = 0;
  }
});
```

}

/* ==========================================
INIT ALL FEATURES
========================================== */

document.addEventListener(‘DOMContentLoaded’, function() {
console.log(’%c Landing.js loaded successfully! ’, ‘background: #10b981; color: white; padding: 5px 10px; border-radius: 3px;’);

```
// Initialize additional features here
createStatsSection();
```

});

/* ==========================================
PERFORMANCE MONITORING
========================================== */

window.addEventListener(‘load’, function() {
const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
console.log(`⚡ Page loaded in ${loadTime}ms`);
});

})();

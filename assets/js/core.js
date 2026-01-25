/* ==========================================
CORE.JS - GLOBAL JAVASCRIPT
Dùng chung cho tất cả các trang
========================================== */

(function() {
‘use strict’;

/* ==========================================
MOBILE MENU TOGGLE
========================================== */

const menuToggle = document.getElementById(‘menuToggle’);
const menuOverlay = document.getElementById(‘menuOverlay’);
const menuClose = document.getElementById(‘menuClose’);
const menuLinks = document.querySelectorAll(’.mobile-menu a’);

// Mở menu
if (menuToggle && menuOverlay) {
menuToggle.addEventListener(‘click’, function(e) {
e.preventDefault();
menuOverlay.classList.add(‘active’);
document.body.style.overflow = ‘hidden’;

```
  // Animation cho menu items
  const items = document.querySelectorAll('.mobile-menu li');
  items.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.4s ease forwards ${index * 0.1}s`;
  });
});
```

}

// Đóng menu
function closeMenu() {
if (menuOverlay) {
menuOverlay.classList.remove(‘active’);
document.body.style.overflow = ‘’;
}
}

if (menuClose) {
menuClose.addEventListener(‘click’, closeMenu);
}

// Đóng khi click overlay
if (menuOverlay) {
menuOverlay.addEventListener(‘click’, function(e) {
if (e.target === menuOverlay) {
closeMenu();
}
});
}

// Đóng khi click menu link
menuLinks.forEach(link => {
link.addEventListener(‘click’, function() {
// Delay để animation mượt
setTimeout(closeMenu, 300);
});
});

// Đóng menu khi nhấn ESC
document.addEventListener(‘keydown’, function(e) {
if (e.key === ‘Escape’ && menuOverlay && menuOverlay.classList.contains(‘active’)) {
closeMenu();
}
});

/* ==========================================
SMOOTH SCROLL
========================================== */

document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {
anchor.addEventListener(‘click’, function(e) {
const href = this.getAttribute(‘href’);

```
  // Skip nếu chỉ là "#"
  if (!href || href === '#') return;
  
  const target = document.querySelector(href);
  
  if (target) {
    e.preventDefault();
    
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
});
```

});

/* ==========================================
HEADER SCROLL EFFECT
========================================== */

const header = document.querySelector(’.site-header’);
let lastScroll = 0;

window.addEventListener(‘scroll’, function() {
const currentScroll = window.pageYOffset;

```
if (!header) return;

// Thêm shadow khi scroll
if (currentScroll > 100) {
  header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
} else {
  header.style.boxShadow = 'none';
}

// Hide/show header khi scroll (optional)
// if (currentScroll > lastScroll && currentScroll > 500) {
//   header.style.transform = 'translateY(-100%)';
// } else {
//   header.style.transform = 'translateY(0)';
// }

lastScroll = currentScroll;
```

});

/* ==========================================
INTERSECTION OBSERVER - ANIMATE ON SCROLL
========================================== */

const observerOptions = {
threshold: 0.1,
rootMargin: ‘0px 0px -50px 0px’
};

const observer = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = ‘1’;
entry.target.style.animation = ‘fadeInUp 0.6s ease forwards’;
observer.unobserve(entry.target);
}
});
}, observerOptions);

// Chờ DOM load xong
document.addEventListener(‘DOMContentLoaded’, function() {

```
// Các elements cần animate
const animateElements = document.querySelectorAll(
  '.demo-card, .process-item, .price-card, .faq-item, .fit li'
);

animateElements.forEach((el, index) => {
  el.style.opacity = '0';
  el.style.animationDelay = `${index * 0.1}s`;
  observer.observe(el);
});
```

});

/* ==========================================
ACTIVE PAGE LINK
========================================== */

const currentPath = window.location.pathname;
const fileName = currentPath.split(’/’).pop() || ‘index.html’;

document.querySelectorAll(’.mobile-menu a’).forEach(link => {
const linkHref = link.getAttribute(‘href’);

```
if (linkHref === fileName || 
    (fileName === '' && linkHref === 'index.html') ||
    (currentPath === '/' && linkHref === 'index.html')) {
  link.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  link.style.color = 'white';
}
```

});

/* ==========================================
BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(’.btn’).forEach(button => {
button.addEventListener(‘click’, function(e) {
// Tạo ripple element
const ripple = document.createElement(‘span’);
const rect = this.getBoundingClientRect();
const size = Math.max(rect.width, rect.height);
const x = e.clientX - rect.left - size / 2;
const y = e.clientY - rect.top - size / 2;

```
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  `;
  
  ripple.classList.add('ripple');
  this.appendChild(ripple);
  
  // Xóa ripple sau khi animation xong
  setTimeout(() => ripple.remove(), 600);
});
```

});

// Thêm ripple animation vào head
if (!document.querySelector(’#ripple-style’)) {
const rippleStyle = document.createElement(‘style’);
rippleStyle.id = ‘ripple-style’;
rippleStyle.textContent = `.btn { position: relative; overflow: hidden; } @keyframes ripple-animation { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(rippleStyle);
}

/* ==========================================
LAZY LOAD IMAGES
========================================== */

if (‘IntersectionObserver’ in window) {
const imageObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (entry.isIntersecting) {
const img = entry.target;

```
      // Load image từ data-src
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
      }
      
      imageObserver.unobserve(img);
    }
  });
});

// Observe tất cả images có data-src
document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

}

/* ==========================================
BACK TO TOP BUTTON (Optional)
========================================== */

// Tạo button back to top
const backToTopBtn = document.createElement(‘button’);
backToTopBtn.innerHTML = ‘↑’;
backToTopBtn.classList.add(‘back-to-top’);
backToTopBtn.style.cssText = `position: fixed; bottom: 30px; right: 30px; width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; font-size: 24px; cursor: pointer; opacity: 0; visibility: hidden; transition: all 0.3s ease; z-index: 999; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);`;

document.body.appendChild(backToTopBtn);

// Show/hide button
window.addEventListener(‘scroll’, function() {
if (window.pageYOffset > 500) {
backToTopBtn.style.opacity = ‘1’;
backToTopBtn.style.visibility = ‘visible’;
} else {
backToTopBtn.style.opacity = ‘0’;
backToTopBtn.style.visibility = ‘hidden’;
}
});

// Scroll to top khi click
backToTopBtn.addEventListener(‘click’, function() {
window.scrollTo({
top: 0,
behavior: ‘smooth’
});
});

// Hover effect
backToTopBtn.addEventListener(‘mouseenter’, function() {
this.style.transform = ‘translateY(-5px)’;
this.style.boxShadow = ‘0 6px 20px rgba(102, 126, 234, 0.4)’;
});

backToTopBtn.addEventListener(‘mouseleave’, function() {
this.style.transform = ‘translateY(0)’;
this.style.boxShadow = ‘0 4px 15px rgba(0, 0, 0, 0.2)’;
});

/* ==========================================
FAQ ACCORDION (Optional Enhancement)
========================================== */

const faqItems = document.querySelectorAll(’.faq-item’);

faqItems.forEach(item => {
const answer = item.querySelector(‘p’);

```
// Set initial state
if (answer) {
  answer.style.maxHeight = answer.scrollHeight + 'px';
  answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
}

// Optional: Thêm toggle functionality
// item.addEventListener('click', function() {
//   this.classList.toggle('active');
//   if (answer) {
//     if (this.classList.contains('active')) {
//       answer.style.maxHeight = answer.scrollHeight + 'px';
//       answer.style.opacity = '1';
//     } else {
//       answer.style.maxHeight = '0';
//       answer.style.opacity = '0';
//     }
//   }
// });
```

});

/* ==========================================
FORM VALIDATION (Optional - for contact forms)
========================================== */

const forms = document.querySelectorAll(‘form’);

forms.forEach(form => {
form.addEventListener(‘submit’, function(e) {
const inputs = this.querySelectorAll(‘input[required], textarea[required]’);
let isValid = true;

```
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = '#ef4444';
      
      // Thêm error message
      if (!input.nextElementSibling?.classList.contains('error-message')) {
        const error = document.createElement('span');
        error.classList.add('error-message');
        error.textContent = 'Vui lòng điền thông tin này';
        error.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem; display: block;';
        input.parentNode.insertBefore(error, input.nextSibling);
      }
    } else {
      input.style.borderColor = '';
      const errorMsg = input.nextElementSibling;
      if (errorMsg?.classList.contains('error-message')) {
        errorMsg.remove();
      }
    }
  });
  
  if (!isValid) {
    e.preventDefault();
  }
});

// Clear error on input
form.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', function() {
    this.style.borderColor = '';
    const errorMsg = this.nextElementSibling;
    if (errorMsg?.classList.contains('error-message')) {
      errorMsg.remove();
    }
  });
});
```

});

/* ==========================================
LOADING STATE
========================================== */

window.addEventListener(‘load’, function() {
// Fade in body content
document.body.style.opacity = ‘0’;
document.body.style.transition = ‘opacity 0.3s ease’;

```
setTimeout(() => {
  document.body.style.opacity = '1';
}, 100);

// Lazy load images
const images = document.querySelectorAll('img');
images.forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
  }
});
```

});

/* ==========================================
UTILITY FUNCTIONS
========================================== */

// Debounce function
function debounce(func, wait) {
let timeout;
return function executedFunction(…args) {
const later = () => {
clearTimeout(timeout);
func(…args);
};
clearTimeout(timeout);
timeout = setTimeout(later, wait);
};
}

// Throttle function
function throttle(func, limit) {
let inThrottle;
return function(…args) {
if (!inThrottle) {
func.apply(this, args);
inThrottle = true;
setTimeout(() => inThrottle = false, limit);
}
};
}

// Expose utilities to window
window.siteUtils = {
debounce,
throttle,
closeMenu
};

/* ==========================================
CONSOLE MESSAGE
========================================== */

console.log(’%c Website 3 Ngày ‘, ‘background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;’);
console.log(’%c Liên hệ: 0373453757 ’, ‘color: #6366f1; font-size: 14px;’);

})();

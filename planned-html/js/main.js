/**
 * Cloudpe Landing Page - Main JavaScript
 * jQuery-based interactions for React-like features
 */

$(document).ready(function() {
  
  // ===== MOBILE MENU TOGGLE =====
  const $mobileMenuBtn = $('.mobile-menu-btn');
  const $mobileNav = $('.mobile-nav');
  const $menuIcon = $mobileMenuBtn.find('.menu-icon');
  const $closeIcon = $mobileMenuBtn.find('.close-icon');
  
  $mobileMenuBtn.on('click', function() {
    $mobileNav.toggleClass('open');
    $menuIcon.toggle();
    $closeIcon.toggle();
  });
  
  // Close mobile menu when clicking a link
  $mobileNav.find('a').on('click', function() {
    $mobileNav.removeClass('open');
    $menuIcon.show();
    $closeIcon.hide();
  });

  // ===== SCROLL ANIMATIONS =====
  function initScrollAnimations() {
    const $animatedElements = $('.scroll-animate, .scroll-animate-stagger');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).addClass('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    $animatedElements.each(function() {
      observer.observe(this);
    });
  }
  
  initScrollAnimations();

  // ===== PRICING CALCULATOR =====
  const HOURLY_RATE = 300;
  
  const commitmentPlans = [
    { id: 'hourly', name: 'On-Demand', duration: 'Pay as you go', discount: 0 },
    { id: 'monthly', name: '30 Days', duration: 'Monthly commitment', discount: 15 },
    { id: '6months', name: '6 Months', duration: 'Half-yearly commitment', discount: 25 },
    { id: 'annual', name: 'Annual', duration: 'Yearly commitment', discount: 35 }
  ];
  
  let selectedPlan = 'hourly';
  
  function formatNumber(num) {
    return num.toLocaleString('en-IN');
  }
  
  function updateCalculator() {
    const hours = parseInt($('#hours-input').val()) || 0;
    const plan = commitmentPlans.find(p => p.id === selectedPlan);
    const discount = plan ? plan.discount : 0;
    
    const basePrice = hours * HOURLY_RATE;
    const discountAmount = basePrice * (discount / 100);
    const finalPrice = basePrice - discountAmount;
    
    // Update display
    $('#calc-hours').text(formatNumber(hours));
    $('#calc-subtotal').text('₹' + formatNumber(basePrice));
    $('#calc-total').text('₹' + formatNumber(finalPrice));
    
    // Show/hide discount row
    if (discount > 0) {
      $('#calc-discount-row').show();
      $('#calc-discount-percent').text(discount);
      $('#calc-discount-amount').text('-₹' + formatNumber(discountAmount));
      $('#calc-savings').show();
      $('#savings-amount').text('₹' + formatNumber(discountAmount));
      $('#savings-plan').text(plan.name);
    } else {
      $('#calc-discount-row').hide();
      $('#calc-savings').hide();
    }
  }
  
  // Hours input change
  $('#hours-input').on('input', updateCalculator);
  
  // Commitment plan selection
  $('.commitment-btn').on('click', function() {
    const planId = $(this).data('plan');
    selectedPlan = planId;
    
    // Update active state
    $('.commitment-btn').removeClass('active');
    $(this).addClass('active');
    
    updateCalculator();
  });
  
  // Initialize calculator
  updateCalculator();

  // ===== FAQ ACCORDION =====
  $('.faq-trigger').on('click', function() {
    const $item = $(this).closest('.faq-item');
    const isOpen = $item.hasClass('open');
    
    // Close all items
    $('.faq-item').removeClass('open');
    
    // Open clicked item if it wasn't open
    if (!isOpen) {
      $item.addClass('open');
    }
  });

  // ===== CONTACT FORM VALIDATION =====
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validateForm($form) {
    let isValid = true;
    const errors = {};
    
    // Clear previous errors
    $form.find('.error-text').remove();
    $form.find('.input, .textarea').removeClass('error');
    
    // Get form values
    const name = $form.find('input[name="name"]').val().trim();
    const email = $form.find('input[name="email"]').val().trim();
    const company = $form.find('input[name="company"]').val().trim();
    const useCase = $form.find('input[name="useCase"], textarea[name="useCase"]').val().trim();
    
    // Validate name
    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (name.length > 100) {
      errors.name = 'Name must be less than 100 characters';
      isValid = false;
    }
    
    // Validate email
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }
    
    // Validate company
    if (!company) {
      errors.company = 'Company is required';
      isValid = false;
    }
    
    // Validate use case (if present)
    if (useCase !== undefined && useCase.length > 0 && useCase.length < 10) {
      errors.useCase = 'Please describe your use case (min 10 characters)';
      isValid = false;
    }
    
    // Display errors
    Object.keys(errors).forEach(field => {
      const $input = $form.find(`[name="${field}"]`);
      $input.addClass('error');
      $input.after(`<p class="error-text">${errors[field]}</p>`);
    });
    
    return isValid;
  }
  
  // Hero contact form
  $('#hero-contact-form').on('submit', function(e) {
    e.preventDefault();
    const $form = $(this);
    
    if (!validateForm($form)) {
      return;
    }
    
    const $btn = $form.find('button[type="submit"]');
    const originalText = $btn.html();
    
    // Show loading state
    $btn.prop('disabled', true).text('Submitting...');
    
    // Simulate API call (replace with actual HubSpot form submission)
    setTimeout(function() {
      // Reset form
      $form[0].reset();
      $btn.prop('disabled', false).html(originalText);
      
      // Show success message
      showToast('Demo request submitted!', 'Our team will get back to you within 24 hours.');
    }, 1000);
  });
  
  // Bottom contact form
  $('#bottom-contact-form').on('submit', function(e) {
    e.preventDefault();
    const $form = $(this);
    
    if (!validateForm($form)) {
      return;
    }
    
    const $btn = $form.find('button[type="submit"]');
    const originalText = $btn.html();
    
    // Show loading state
    $btn.prop('disabled', true).text('Submitting...');
    
    // Simulate API call (replace with actual HubSpot form submission)
    setTimeout(function() {
      // Reset form
      $form[0].reset();
      $btn.prop('disabled', false).html(originalText);
      
      // Show success message
      showToast('Request submitted!', 'Our team will get back to you within 24 hours.');
    }, 1000);
  });

  // ===== TOAST NOTIFICATIONS =====
  function showToast(title, message) {
    // Remove existing toasts
    $('.toast-notification').remove();
    
    const $toast = $(`
      <div class="toast-notification">
        <div class="toast-content">
          <div class="toast-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div class="toast-text">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
          </div>
          <button class="toast-close">&times;</button>
        </div>
      </div>
    `);
    
    $('body').append($toast);
    
    // Animate in
    setTimeout(() => $toast.addClass('visible'), 10);
    
    // Close button
    $toast.find('.toast-close').on('click', function() {
      $toast.removeClass('visible');
      setTimeout(() => $toast.remove(), 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(function() {
      $toast.removeClass('visible');
      setTimeout(() => $toast.remove(), 300);
    }, 5000);
  }

  // ===== SMOOTH SCROLL =====
  $('a[href^="#"]').on('click', function(e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 600);
    }
  });

  // ===== HEADER SCROLL EFFECT =====
  let lastScroll = 0;
  
  $(window).on('scroll', function() {
    const currentScroll = $(window).scrollTop();
    const $header = $('.header');
    
    if (currentScroll > 100) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // ===== CARD HOVER EFFECTS =====
  $('.highlight-card, .stat-card, .feature-card, .use-case-card, .advantage-card, .benchmark-card')
    .on('mouseenter', function() {
      $(this).addClass('hovering');
    })
    .on('mouseleave', function() {
      $(this).removeClass('hovering');
    });

});

// Toast notification styles (injected dynamically)
const toastStyles = `
  .toast-notification {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 1000;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }
  
  .toast-notification.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .toast-content {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    background: white;
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    max-width: 360px;
  }
  
  .toast-icon {
    color: var(--primary);
    flex-shrink: 0;
  }
  
  .toast-text {
    flex: 1;
  }
  
  .toast-title {
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }
  
  .toast-message {
    font-size: 0.8125rem;
    color: var(--muted-foreground);
  }
  
  .toast-close {
    background: none;
    border: none;
    font-size: 1.25rem;
    color: var(--muted-foreground);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  
  .toast-close:hover {
    color: var(--foreground);
  }
  
  .input.error, .textarea.error {
    border-color: var(--destructive);
  }
`;

// Inject toast styles
const styleSheet = document.createElement('style');
styleSheet.textContent = toastStyles;
document.head.appendChild(styleSheet);

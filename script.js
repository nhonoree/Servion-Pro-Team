
    // <!-- JavaScript -->
// window.addEventListener("scroll", function () {
//     const header = document.querySelector("header");
//     const hero = document.querySelector(".hero");

//     if (window.scrollY > hero.offsetHeight - 80) {
//         header.classList.add("scrolled");
//     } else {
//         header.classList.remove("scrolled");
//     }
// });

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// // Get the phone input element
// const phoneInput = document.getElementById('phone');

// // Add event listener to validate input
// phoneInput.addEventListener('input', function(e) {
//     // Remove any non-digit characters and plus sign
//     this.value = this.value.replace(/[^0-9+]/g, '');
// });

// // Optional: Add validation on form submission
// document.querySelector('form').addEventListener('submit', function(e) {
//     // Remove any remaining invalid characters before submission
//     phoneInput.value = phoneInput.value.replace(/[^0-9+]/g, '');
// });

 const phoneInput = document.querySelector("#phone");

  // Initialize with Rwanda default
  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "rw",
    separateDialCode: true,
    preferredCountries: ["rw", "us", "gb"],
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });

  // Prevent letters: allow only numbers, space, +, -
  phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9+\-\s]/g, "");
  });

  // Validate before form submission
  document.querySelector("form").addEventListener("submit", function(e) {
    if (!iti.isValidNumber()) {
      e.preventDefault();
      alert("Please enter a valid phone number.");
      return;
    }
    // Save full number in international format
    phoneInput.value = iti.getNumber();
  });
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('nav');
        
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
        
        // Sticky Header
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Accordion Functionality
        const accordionItems = document.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', () => {
                const currentlyActive = document.querySelector('.accordion-item.active');
                if (currentlyActive && currentlyActive !== item) {
                    currentlyActive.classList.remove('active');
                    currentlyActive.querySelector('.accordion-content').style.maxHeight = null;
                }
                
                item.classList.toggle('active');
                const content = item.querySelector('.accordion-content');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }
            });
        });
        
        // Portfolio Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter items
                const filter = btn.getAttribute('data-filter');
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Testimonial Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const sliderDots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        
        function showSlide(index) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            sliderDots.forEach(dot => dot.classList.remove('active'));
            
            testimonialSlides[index].classList.add('active');
            sliderDots[index].classList.add('active');
            currentSlide = index;
        }
        
        sliderDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                showSlide(slideIndex);
            });
        });
        
        // Auto slide change
        setInterval(() => {
            let nextSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(nextSlide);
        }, 5000);
        
        // Back to Top Button
        const backToTopBtn = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
      

           
//               document.getElementById('contactForm').addEventListener('submit', function (e) {
//     e.preventDefault(); // prevent default page reload (remove if you want actual submit)

//     // ✅ Show success message immediately after form submission
//     document.getElementById('successMessage').style.display = 'block';

//     // ✅ Reset form after 3 seconds
//     setTimeout(function () {
//       document.getElementById('contactForm').reset();
//       document.getElementById('successMessage').style.display = 'none';
//     }, 3000);
//   });
              var submitted = false;

  function showSuccessMessage() {
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(function () {
      document.getElementById('contactForm').reset();
      document.getElementById('successMessage').style.display = 'none';
      submitted = false;
    }, 3000);
  }
        // Scroll Animation for Elements
const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .feature-item, .testimonial-slide, .accordion-item');
    
    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };
    
    const displayScrollAnimation = () => {
        animatedElements.forEach(el => {
            if (el.classList.contains('animate')) return;
            
            if (elementInView(el, 100)) {
                let delay = el.dataset.delay || 0;
                
                setTimeout(() => {
                    el.classList.add('animate');
                }, delay);
            }
        });
    };
    
    // Initialize scroll animation
    window.addEventListener('load', displayScrollAnimation);
    window.addEventListener('scroll', displayScrollAnimation);
};

// Call the function
animateOnScroll();

// Hero Text Animation
const animateHeroText = () => {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const heroButtons = document.querySelector('.hero-btns');
    
    if (heroTitle && heroText && heroButtons) {
        // Initial state
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(30px)';
        heroButtons.style.opacity = '0';
        heroButtons.style.transform = 'translateY(30px)';
        
        // Animate in
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s ease-out';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
        
        setTimeout(() => {
            heroText.style.transition = 'all 0.8s ease-out 0.3s';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 500);
        
        setTimeout(() => {
            heroButtons.style.transition = 'all 0.8s ease-out 0.6s';
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 700);
    }
};

// Call the function
animateHeroText();
// Floating Animation for Elements
const floatingElements = () => {
    const floaters = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-slide');
    
    floaters.forEach((el, index) => {
        // Add event listener for mouse enter
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'translateY(-10px)';
            el.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        // Add event listener for mouse leave
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translateY(0)';
            el.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        // Add slight delay for staggered effect
        el.style.transitionDelay = `${index * 0.1}s`;
    });
};

// Call the function
floatingElements();

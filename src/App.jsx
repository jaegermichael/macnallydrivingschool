import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const carouselItems = [
  {
    image: '/images/WhatsApp%20Image%202026-05-12%20at%2014.00.46.jpeg',
    label: 'Normal Vehicles',
    title: 'Class 4',
    price: 4,
  },
  {
    image: '/images/WhatsApp%20Image%202026-05-12%20at%2014.00.47%20(2).jpeg',
    label: 'Truck',
    title: 'Class 2',
    price: 6,
  },
  {
    image: '/images/WhatsApp%20Image%202026-05-12%20at%2014.00.45%20(1).jpeg',
    label: 'Buses',
    title: 'Class 1',
    price: 12,
  },
];

const pricingPlans = [
  {
    title: 'Oral Provisional',
    description: 'Theory & Road Rules',
    amount: '20',
    unit: '/week',
    features: [
      'Comprehensive theory lessons',
      'Road sign mastery',
      'Mock tests included',
      'Study materials provided',
    ],
    buttonText: 'Get Started',
    buttonLink:
      'https://wa.me/263772329050?text=Hi, I am interested in the Oral Provisional course ($20/week)',
    style: 'standard',
  },
  {
    title: 'Class 4 Package',
    description: 'Normal Vehicles',
    amount: '40',
    unit: '/10 lessons',
    features: [
      '1 Lesson - $4',
      '10 Lessons - $40',
      '20 Lessons - $80',
      '30 Lessons - $120',
      'Car hire - $40',
      'Refresher - $6',
      'Modern sedan vehicles',
      'Experienced instructors',
    ],
    buttonText: 'Enroll Now',
    buttonLink:
      'https://wa.me/263772329050?text=Hi, I am interested in the Class 4 Package ($40 for 10 lessons)',
    style: 'featured',
  },
  {
    title: 'Class 2 Package',
    description: 'Truck License',
    amount: '60',
    unit: '/10 lessons',
    features: [
      '1 Lesson - $6',
      '10 Lessons - $60',
      '20 Lessons - $120',
      '30 Lessons - $180',
      'Car hire - $50',
      'Refresher - $8',
    ],
    buttonText: 'Get Started',
    buttonLink:
      'https://wa.me/263772329050?text=Hi, I am interested in the Class 2 Truck Package ($60 for 10 lessons)',
    style: 'standard',
  },
  {
    title: 'Class 1 Package',
    description: 'Bus License',
    amount: '120',
    unit: '/10 lessons',
    features: [
      '1 Lesson - $12',
      '5 Lessons - $60',
      '10 Lessons - $120',
      '15 Lessons - $180',
      'Bus hire - $60',
      'Refresher - $15',
    ],
    buttonText: 'Get Started',
    buttonLink:
      'https://wa.me/263772329050?text=Hi, I am interested in the Class 1 Bus Package ($120 for 10 lessons)',
    style: 'standard',
  },
];

const services = [
  {
    icon: 'fas fa-user-tie',
    title: 'Expert Instructors',
    description:
      'Certified professionals with years of experience in driver education and road safety training.',
  },
  {
    icon: 'fas fa-car',
    title: 'Modern Fleet',
    description:
      'Well-maintained vehicles equipped with dual controls for your safety and peace of mind.',
  },
  {
    icon: 'fas fa-clock',
    title: 'Flexible Scheduling',
    description: 'Book lessons at times that work for you, including weekends and evening sessions.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Safety First',
    description: 'Comprehensive safety training and defensive driving techniques integrated into every lesson.',
  },
  {
    icon: 'fas fa-certificate',
    title: 'High Pass Rate',
    description: 'Our structured approach ensures a 98% first-time pass rate for all license classes.',
  },
  {
    icon: 'fas fa-hand-holding-usd',
    title: 'Affordable Rates',
    description: 'Competitive pricing with package deals and payment plans to suit every budget.',
  },
];

const testimonials = [
  {
    type: 'text',
    quote:
      'Macnally Driving School gave me the confidence I needed to pass my test on the first try. The instructors are patient and professional.',
    author: 'Tatenda K.',
    subtitle: 'Class 4 License',
    initials: 'TK',
  },
  {
    type: 'video',
    title: "Sarah's Success Story",
    description:
      'Watch how Sarah passed her Class 4 test on the first attempt after just 8 lessons.',
  },
  {
    type: 'text',
    quote:
      'Best driving school in Harare! The oral provisional lessons were thorough and helped me understand road rules perfectly.',
    author: 'Sarah M.',
    subtitle: 'Provisional License',
    initials: 'SM',
  },
  {
    type: 'video',
    title: "John's Truck License Journey",
    description: 'From beginner to Class 2 licensed driver in just 3 weeks with Macnally.',
  },
  {
    type: 'text',
    quote:
      'I got my Class 2 license through Macnally. The truck training was excellent and the instructors really know their stuff.',
    author: 'John N.',
    subtitle: 'Class 2 License',
    initials: 'JN',
  },
  {
    type: 'text',
    quote:
      'Professional service from start to finish. Flexible scheduling meant I could learn while working full-time. Highly recommended!',
    author: 'Patricia C.',
    subtitle: 'Class 4 License',
    initials: 'PC',
  },
];

const classOptions = {
  '4': { label: 'Class 4 - Normal Vehicles', price: 4, short: 'Class 4' },
  '2': { label: 'Class 2 - Truck', price: 6, short: 'Class 2' },
  '1': { label: 'Class 1 - Buses', price: 12, short: 'Class 1' },
  oral: { label: 'Oral Provisional', price: 20, short: 'Oral Provisional' },
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );
  const [calculator, setCalculator] = useState({
    classValue: '4',
    lessons: 10,
    hire: 0,
    refresher: 0,
  });
  const [totalAmount, setTotalAmount] = useState(60);

  useEffect(() => {
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const price = classOptions[calculator.classValue].price;
    const computedTotal =
      calculator.classValue === 'oral'
        ? price * Math.ceil(calculator.lessons / 7) + calculator.hire + calculator.refresher
        : price * calculator.lessons + calculator.hire + calculator.refresher;

    const animated = { value: totalAmount };
    gsap.to(animated, {
      value: computedTotal,
      duration: 0.5,
      ease: 'power2.out',
      roundProps: 'value',
      onUpdate: () => setTotalAmount(animated.value),
    });
  }, [calculator]);

  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [isCarouselPaused]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.to('.hero-badge', { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: 'power3.out' });
      gsap.to('.hero h1', { opacity: 1, y: 0, duration: 1, delay: 1.4, ease: 'power3.out' });
      gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, delay: 1.6, ease: 'power3.out' });
      gsap.to('.hero-buttons', { opacity: 1, y: 0, duration: 1, delay: 1.8, ease: 'power3.out' });
      gsap.to('.stat-item', { opacity: 1, y: 0, duration: 1, delay: 2, stagger: 0.2, ease: 'power3.out' });

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.to('.parallax-bg', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.fleet-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      }
    };

    const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    const handleAnchorClick = (event) => {
      const href = event.currentTarget.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const particlesContainer = document.getElementById('particles');
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 50; i += 1) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15 + 3}s`;
        particle.style.animationDuration = `${10 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
      }
    }

    return () => {
      anchorLinks.forEach((link) => link.removeEventListener('click', handleAnchorClick));
      window.removeEventListener('scroll', handleScroll);
      context.revert();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCalcChange = (field) => (event) => {
    const value =
      field === 'classValue'
        ? event.target.value
        : Math.max(0, parseInt(event.target.value) || 0);
    setCalculator((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const goToSlide = (index) => {
    const nextIndex = (index + carouselItems.length) % carouselItems.length;
    setCurrentSlide(nextIndex);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bookingDetails = [
      `Name: ${formData.get('fullName')}`,
      `Phone: ${formData.get('phone')}`,
      `Class: ${formData.get('licenseClass')}`,
      `Date: ${formData.get('lessonDate')}`,
      `Time: ${formData.get('lessonTime')}`,
      formData.get('message') ? `Message: ${formData.get('message')}` : null,
    ].filter(Boolean);

    const message = `Hi, I want to book a driving lesson.\n\n${bookingDetails.join('\n')}`;
    window.open(`https://wa.me/263772329050?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const selectedClass = classOptions[calculator.classValue].label;
  const calcWhatsAppLink = `https://wa.me/263772329050?text=${encodeURIComponent(`Hi, I calculated my cost for ${selectedClass} (${calculator.lessons} lessons, total $${totalAmount}). Can I book?`)}`;
  const heroWhatsAppLink = `https://wa.me/263772329050?text=${encodeURIComponent('Hi, I am interested in the Macnally Driving School courses.')}`;
  const angle = 360 / carouselItems.length;

  const renderSlideStyle = (index) => {
    let offset = index - currentSlide;
    const half = carouselItems.length / 2;
    if (offset > half) offset -= carouselItems.length;
    if (offset < -half) offset += carouselItems.length;
    const isCompact = viewportWidth <= 768;
    const spacing = isCompact ? 92 : 280;
    const scale = offset === 0 ? 1 : isCompact ? 0.82 : 0.88;
    return {
      transform: `translateX(${offset * spacing}px) scale(${scale})`,
      opacity: 1,
      zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
    };
  };

  return (
    <>
      <div className={`loading-screen${isLoading ? '' : ' hidden'}`} id="loadingScreen">
        <div className="loading-logo" aria-label="Macnally Driving School">
          <img src="/images/macnally-logo.png" alt="" />
        </div>
        <div className="loading-bar">
          <div className="loading-bar-fill"></div>
        </div>
      </div>

      <button
        className="theme-toggle"
        id="themeToggle"
        title="Toggle Dark Mode"
        onClick={() => setIsDark((prev) => !prev)}
      >
        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>

      <nav className="navbar">
        <div className="logo">
          <a className="site-logo" href="#home">
            <img src="/images/macnally-logo.png" alt="Macnally Driving School" />
          </a>
        </div>
        <ul className={`nav-links${isMenuOpen ? ' active' : ''}`} id="mainNavigation">
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#fleet" onClick={closeMenu}>Fleet</a>
          </li>
          <li>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
          </li>
          <li>
            <a href="#calculator" onClick={closeMenu}>Calculator</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
          <li>
            <a href="https://wa.me/263772329050" className="nav-whatsapp" target="_blank" rel="noreferrer" onClick={closeMenu}>
              <i className="fab fa-whatsapp"></i> Book Now
            </a>
          </li>
        </ul>
        <button
          className="mobile-menu"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mainNavigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-video-bg">
          <img
            src="/images/WhatsApp%20Image%202026-05-12%20at%2014.00.27.jpeg"
            alt="Macnally Driving School Fleet"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-particles" id="particles"></div>
        <div className="hero-content">
          <div className="hero-badge">Zimbabwe's Premier Driving School</div>
          <h1>Building Confident Drivers Beyond Learner's Expectations</h1>
          <p className="hero-subtitle">
            Professional driving instruction with modern vehicles, experienced instructors, and a
            commitment to road safety excellence since 2005.
          </p>
          <div className="hero-buttons">
            <a href="#pricing" className="btn btn-primary">
              <i className="fas fa-graduation-cap"></i> View Courses
            </a>
            <a href={heroWhatsAppLink} className="btn btn-secondary" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">15000</span>
            <span className="stat-label">Graduates</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98</span>
            <span className="stat-label">% Pass Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">18</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      <section className="fleet-section" id="fleet">
        <div className="parallax-bg"></div>
        <div className="section-header reveal">
          <div className="section-tag">Our Fleet</div>
          <h2 className="section-title">Modern Vehicles for Every Class</h2>
          <p className="section-subtitle">
            Use arrows to explore our vehicles. Click on any car to see full pricing details.
          </p>
        </div>
        <div
          className="carousel-container"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          <div className="carousel-track" id="carouselTrack">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="carousel-item"
                style={renderSlideStyle(index)}
                data-index={index}
              >
                <img src={item.image} alt={item.label} />
                <div className="carousel-item-info">
                  <div className="carousel-item-class">{item.label}</div>
                  <h3 className="carousel-item-name">{item.title}</h3>
                  <div className="carousel-item-price">
                    ${item.price} <span>/ lesson</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-nav">
          <button className="carousel-btn" id="prevBtn" onClick={() => goToSlide(currentSlide - 1)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn" id="nextBtn" onClick={() => goToSlide(currentSlide + 1)}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className="carousel-dots" id="carouselDots">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot${index === currentSlide ? ' active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="section-header reveal">
          <div className="section-tag">Pricing Plans</div>
          <h2 className="section-title">Transparent Pricing for All</h2>
          <p className="section-subtitle">
            Choose the package that fits your needs. All prices include vehicle, fuel, and instructor
            fees.
          </p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card reveal${plan.style === 'featured' ? ' featured' : ''}`}>
              {plan.style === 'featured' && <div className="featured-badge">POPULAR</div>}
              <div className="pricing-header">
                <div className="pricing-class">{plan.title}</div>
                <div className="pricing-desc">{plan.description}</div>
              </div>
              <div style={{ padding: '0 30px' }}>
                <div className="pricing-amount">
                  {plan.amount}
                  <span>{plan.unit}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      {feature} <i className="fas fa-check-circle"></i>
                    </li>
                  ))}
                </ul>
                <a href={plan.buttonLink} className={`btn ${plan.style === 'featured' ? 'btn-primary' : 'btn-secondary'}`} target="_blank" rel="noreferrer">
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="calculator-section" id="calculator">
        <div className="section-header reveal">
          <div className="section-tag">Calculate Your Cost</div>
          <h2 className="section-title" style={{ color: 'white' }}>
            Lesson Cost Calculator
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Select your license class and number of lessons to see your total cost instantly.
          </p>
        </div>
        <div className="calculator-container reveal">
          <div className="calc-row">
            <div className="calc-group">
              <label>License Class</label>
              <select value={calculator.classValue} onChange={handleCalcChange('classValue')}>
                <option value="4">Class 4 - Normal Vehicles ($4/lesson)</option>
                <option value="2">Class 2 - Truck ($6/lesson)</option>
                <option value="1">Class 1 - Buses ($12/lesson)</option>
                <option value="oral">Oral Provisional ($20/week)</option>
              </select>
            </div>
            <div className="calc-group">
              <label>Number of Lessons</label>
              <input type="number" value={calculator.lessons} min="1" max="50" onChange={handleCalcChange('lessons')} />
            </div>
          </div>
          <div className="calc-row">
            <div className="calc-group">
              <label>Need Car Hire for Test?</label>
              <select value={calculator.hire} onChange={handleCalcChange('hire')}>
                <option value="0">No</option>
                <option value="40">Yes - Class 4 ($40)</option>
                <option value="50">Yes - Class 2 ($50)</option>
                <option value="60">Yes - Class 1 ($60)</option>
              </select>
            </div>
            <div className="calc-group">
              <label>Refresher Course?</label>
              <select value={calculator.refresher} onChange={handleCalcChange('refresher')}>
                <option value="0">No</option>
                <option value="6">Yes - Class 4 ($6)</option>
                <option value="8">Yes - Class 2 ($8)</option>
                <option value="15">Yes - Class 1 ($15)</option>
              </select>
            </div>
          </div>
          <div className="calc-total">
            <div className="calc-total-label">Estimated Total</div>
            <div className="calc-total-amount">
              ${totalAmount}
              <span> USD</span>
            </div>
          </div>
          <div className="calc-note">* Prices are estimates. Contact us for exact quotes and package deals.</div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <a href={calcWhatsAppLink} className="btn btn-primary" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i> Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-header reveal">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="section-title">Premium Services</h2>
          <p className="section-subtitle">
            We go beyond basic driving instruction to ensure you become a confident, safe driver for life.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header reveal">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">What Our Students Say</h2>
        </div>
        <div className="testimonials-track" id="testimonialsTrack">
          {testimonials.map((item, index) =>
            item.type === 'text' ? (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">{item.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{item.initials}</div>
                  <div className="author-info">
                    <h4>{item.author}</h4>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="video-testimonial">
                <div className="video-placeholder">
                  <div className="play-btn">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
                <div className="video-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <div className="contact-bar">
        <h2>CONTACT US</h2>
        <div className="contact-bar-grid">
          <div className="contact-bar-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <strong>Tel:</strong> <a href="tel:+2634775447">+263-4-775 447</a>
            </div>
          </div>
          <div className="contact-bar-item">
            <i className="fas fa-mobile-alt"></i>
            <div>
              <a href="tel:+263772329050">+263 772 329 050</a> | <a href="tel:+263713468228">0713 468 228</a>
              <br />
              <a href="tel:+263779277250">+263 779 277 250</a> | <a href="tel:+263772955378">772 955 378</a>
            </div>
          </div>
          <div className="contact-bar-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              18 Jason Moyo / Mbuya Nehanda,
              <br />
              Suite 1 First Floor Azhari House, Harare
            </div>
          </div>
        </div>
      </div>

      <section className="contact-section" id="contact">
        <div className="section-header reveal">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Start Your Journey Today</h2>
          <p className="section-subtitle">
            Contact us to book your first lesson or ask any questions about our courses.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Contact Information</h3>
            <div className="contact-photo">
              <img src="/images/WhatsApp%20Image%202026-05-12%20at%2014.00.37.jpeg" alt="Macnally Driving School training vehicle" />
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Phone Numbers</h4>
                <p>
                  <a href="tel:+263772329050">+263 772 329 050</a>
                  <br />
                  <a href="tel:+263713468228">+263 713 468 228</a>
                  <br />
                  <a href="tel:+263779277250">+263 779 277 250</a>
                  <br />
                  <a href="tel:+263772955378">+263 772 955 378</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>
                  18 Jason Moyo / Mbuya Nehanda
                  <br />
                  Suite 1 First Floor Azhari House
                  <br />
                  Harare, Zimbabwe
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href="https://wa.me/263772329050" target="_blank" rel="noreferrer">
                    +263 772 329 050
                  </a>
                  <br />Click to chat instantly
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Working Hours</h4>
                <p>
                  Monday - Saturday: 8:00 AM - 5:00 PM
                  <br />Sunday: Closed
                </p>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1234567890123!2d31.0333!3d-17.8333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDUwJzAwLjAiUyAzMcKwMDInMDAuMCJF!5e0!3m2!1sen!2szw!4v1600000000000!5m2!1sen!2szw"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="contact-form reveal">
            <form id="bookingForm" onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input name="fullName" type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" type="tel" placeholder="+263 77X XXX XXX" required />
              </div>
              <div className="form-group">
                <label>License Class</label>
                <select name="licenseClass" required>
                  <option value="">Select License Class</option>
                  <option value="Oral Provisional">Oral Provisional</option>
                  <option value="Class 4 - Normal Vehicles">Class 4 - Normal Vehicles</option>
                  <option value="Class 2 - Truck">Class 2 - Truck</option>
                  <option value="Class 1 - Buses">Class 1 - Buses</option>
                  <option value="Refresher Course">Refresher Course</option>
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <div className="date-picker">
                  <input type="date" id="lessonDate" name="lessonDate" required />
                  <select name="lessonTime" required>
                    <option value="">Select Time</option>
                    <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                    <option value="Afternoon (12PM - 5PM)">Afternoon (12PM - 5PM)</option>
                    <option value="Evening (5PM - 7PM)">Evening (5PM - 7PM)</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us about your driving experience or any questions..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', border: 'none' }}>
                <i className="fas fa-paper-plane"></i> Submit Booking Request
              </button>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <a
                  href="https://wa.me/263772329050?text=Hi, I want to book a driving lesson"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '100%', display: 'block', textAlign: 'center' }}
                >
                  <i className="fab fa-whatsapp"></i> Or Book via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

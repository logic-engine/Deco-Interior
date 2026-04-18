// PRELOADER
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  }, 1000);
});

// STICKY NAVBAR
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    nav.style.background = 'rgba(10, 10, 10, 0.95)';
  }
});

// SMOOTH SCROLL
document.querySelectorAll('.nav-link, .btn-primary, .btn-outline, .call-btn, .banner-call').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks')?.classList.remove('active');
      }
    }
  });
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
  });
}

// MEDIA WALLS DATA (Main Focus)
const mediaWalls = [
  { name: "Neon LED Media Wall", img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&w=400", desc: "RGB LED backlit panel" },
  { name: "Modern Slat Wall", img: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&w=400", desc: "Wooden slats with lighting" },
  { name: "Minimalist TV Panel", img: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&w=400", desc: "Clean lines, marble finish" },
  { name: "Luxury Marble Wall", img: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&w=400", desc: "Premium marble texture" }
];

function renderMediaWalls() {
  const grid = document.getElementById('mediaGrid');
  if (!grid) return;
  grid.innerHTML = mediaWalls.map(item => `
    <div class="media-item" data-img="${item.img}" data-name="${item.name}" data-desc="${item.desc}">
      <div class="media-img" style="background-image: url('${item.img}');"></div>
      <div class="media-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.media-item').forEach(item => {
    item.addEventListener('click', () => openModal(item.dataset.img, item.dataset.name, item.dataset.desc));
  });
}

// GALLERY DATA (Filterable)
const galleryItems = [
  { name: "Neon Media Wall", category: "Media Walls", img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&w=400", desc: "Vibrant LED media wall" },
  { name: "Modern TV Panel", category: "TV Panels", img: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&w=400", desc: "Sleek TV unit design" },
  { name: "Minimalist Living Room", category: "Modern Interiors", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=400", desc: "Contemporary home styling" },
  { name: "Textured Accent Wall", category: "Wall Designs", img: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&w=400", desc: "3D textured wall panel" },
  { name: "Luxury Media Console", category: "Media Walls", img: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&w=400", desc: "High-end media unit" },
  { name: "Wood Slat TV Wall", category: "TV Panels", img: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&w=400", desc: "Natural wood paneling" },
  { name: "Bedroom Decor", category: "Modern Interiors", img: "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&w=400", desc: "Stylish bedroom setup" },
  { name: "Geometric Wall Art", category: "Wall Designs", img: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&w=400", desc: "Modern geometric patterns" }
];

function renderGallery(filter = "all") {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const filtered = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);
  grid.innerHTML = filtered.map(item => `
    <div class="gallery-item" data-img="${item.img}" data-name="${item.name}" data-desc="${item.desc}">
      <div class="gallery-img" style="background-image: url('${item.img}');"></div>
      <div class="gallery-info">
        <h3>${item.name}</h3>
        <p style="color:#bc13fe">${item.category}</p>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openModal(item.dataset.img, item.dataset.name, item.dataset.desc));
  });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery(btn.dataset.filter);
  });
});

// Modal function
function openModal(imgSrc, name, desc) {
  const modal = document.getElementById('imageModal');
  const container = document.getElementById('modalImageContainer');
  container.innerHTML = `
    <img src="${imgSrc}" style="width:100%; border-radius:16px;">
    <h3 style="color:#bc13fe; margin-top:1rem;">${name}</h3>
    <p>${desc}</p>
  `;
  modal.style.display = 'flex';
}

// Close modal
document.querySelector('.close-modal')?.addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});
window.onclick = (e) => {
  if (e.target === document.getElementById('imageModal')) {
    document.getElementById('imageModal').style.display = 'none';
  }
};

// INSTAGRAM FEED (Static)
const instagramPosts = [
  "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&w=300",
  "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&w=300",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=300",
  "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&w=300"
];

const instagramGrid = document.getElementById('instagramGrid');
if (instagramGrid) {
  instagramGrid.innerHTML = instagramPosts.map(img => `
    <div class="insta-post" style="background-image: url('${img}');" onclick="window.open('https://www.instagram.com/decointeriorpk', '_blank')"></div>
  `).join('');
}

// TIKTOK THUMBNAILS
const tiktokVideos = [
  "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&w=150",
  "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&w=150",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=150"
];

const tiktokContainer = document.getElementById('tiktokThumbnails');
if (tiktokContainer) {
  tiktokContainer.innerHTML = tiktokVideos.map(img => `
    <div class="tiktok-thumb" style="background-image: url('${img}');" onclick="window.open('https://www.tiktok.com/@decointeriorpk', '_blank')">
      <i class="fab fa-tiktok" style="position: relative; top: 80px; left: 60px; font-size: 30px; color: white; text-shadow: 0 0 10px black;"></i>
    </div>
  `).join('');
}

// FORM SUBMIT TO WHATSAPP
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bookName').value;
    const phone = document.getElementById('bookPhone').value;
    const service = document.getElementById('bookService').value;
    const message = `Hello Deco Interior! I need a design quote.%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}`;
    window.open(`https://wa.me/923022802222?text=${message}`, '_blank');
  });
}

// REVIEWS SLIDER
let currentReview = 0;
const reviewsContainer = document.getElementById('reviewsContainer');
const reviewCards = document.querySelectorAll('.review-card');
const prevReview = document.getElementById('prevReview');
const nextReview = document.getElementById('nextReview');

function updateReviewSlider() {
  if (reviewsContainer) {
    reviewsContainer.style.transform = `translateX(-${currentReview * 100}%)`;
  }
}
if (nextReview) {
  nextReview.addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviewCards.length;
    updateReviewSlider();
  });
}
if (prevReview) {
  prevReview.addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
    updateReviewSlider();
  });
}

// SCROLL ANIMATIONS
const faders = document.querySelectorAll('.fade-up, .fade-right, .fade-left');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('appear');
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Initialize all renders
renderMediaWalls();
renderGallery();

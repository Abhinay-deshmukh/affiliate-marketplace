// Application data and state
const productsData = {
  "products": [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "description": "Premium quality wireless headphones with noise cancellation and 30-hour battery life",
      "price": 199.99,
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/1",
        "flipkart": "https://flipkart.com/product/1",
        "bestbuy": "https://bestbuy.com/product/1"
      },
      "categories": ["Electronics", "Technology", "Gaming"],
      "target_demographics": {
        "age": ["18-25", "26-35"],
        "gender": ["Male", "Female"],
        "profession": ["Student", "Engineer", "Business"]
      },
      "rating": 4.5,
      "commission_rate": 8,
      "trending": true
    },
    {
      "id": 2,
      "name": "Skincare Routine Set",
      "description": "Complete 5-step skincare routine with cleanser, toner, serum, moisturizer, and SPF",
      "price": 89.99,
      "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/2",
        "sephora": "https://sephora.com/product/2",
        "ulta": "https://ulta.com/product/2"
      },
      "categories": ["Beauty", "Health", "Skincare"],
      "target_demographics": {
        "age": ["18-25", "26-35", "36-50"],
        "gender": ["Female"],
        "profession": ["Student", "Teacher", "Business", "Doctor"]
      },
      "rating": 4.7,
      "commission_rate": 12,
      "trending": false
    },
    {
      "id": 3,
      "name": "Smart Home Security Camera",
      "description": "WiFi enabled 4K security camera with night vision, motion detection, and mobile app",
      "price": 149.99,
      "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/3",
        "bestbuy": "https://bestbuy.com/product/3",
        "homedepot": "https://homedepot.com/product/3"
      },
      "categories": ["Technology", "Home", "Security"],
      "target_demographics": {
        "age": ["26-35", "36-50"],
        "gender": ["Male", "Female"],
        "profession": ["Engineer", "Business", "Doctor"]
      },
      "rating": 4.3,
      "commission_rate": 6,
      "trending": true
    },
    {
      "id": 4,
      "name": "Premium Yoga Mat",
      "description": "Non-slip yoga mat with alignment guides, perfect for all types of yoga and exercise",
      "price": 49.99,
      "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/4",
        "target": "https://target.com/product/4",
        "walmart": "https://walmart.com/product/4"
      },
      "categories": ["Fitness", "Health", "Sports"],
      "target_demographics": {
        "age": ["18-25", "26-35", "36-50"],
        "gender": ["Female", "Male"],
        "profession": ["Student", "Teacher", "Doctor", "Artist"]
      },
      "rating": 4.6,
      "commission_rate": 10,
      "trending": false
    },
    {
      "id": 5,
      "name": "Smart Coffee Maker",
      "description": "Programmable coffee maker with thermal carafe, WiFi connectivity, and mobile app control",
      "price": 129.99,
      "image": "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/5",
        "williams-sonoma": "https://williams-sonoma.com/product/5",
        "crate-barrel": "https://crateandbarrel.com/product/5"
      },
      "categories": ["Home & Kitchen", "Appliances", "Technology"],
      "target_demographics": {
        "age": ["26-35", "36-50", "50+"],
        "gender": ["Male", "Female"],
        "profession": ["Engineer", "Business", "Doctor", "Teacher"]
      },
      "rating": 4.4,
      "commission_rate": 7,
      "trending": false
    },
    {
      "id": 6,
      "name": "RGB Gaming Keyboard",
      "description": "Mechanical gaming keyboard with customizable RGB lighting and programmable keys",
      "price": 159.99,
      "image": "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/6",
        "newegg": "https://newegg.com/product/6",
        "bestbuy": "https://bestbuy.com/product/6"
      },
      "categories": ["Gaming", "Technology", "Electronics"],
      "target_demographics": {
        "age": ["18-25", "26-35"],
        "gender": ["Male"],
        "profession": ["Student", "Engineer"]
      },
      "rating": 4.8,
      "commission_rate": 9,
      "trending": true
    },
    {
      "id": 7,
      "name": "Professional Art Supply Set",
      "description": "Complete drawing and painting set with pencils, paints, brushes, and canvas",
      "price": 79.99,
      "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/7",
        "michaels": "https://michaels.com/product/7",
        "dickblick": "https://dickblick.com/product/7"
      },
      "categories": ["Art Supplies", "Creative", "Education"],
      "target_demographics": {
        "age": ["18-25", "26-35", "36-50"],
        "gender": ["Female", "Male"],
        "profession": ["Artist", "Teacher", "Student"]
      },
      "rating": 4.5,
      "commission_rate": 11,
      "trending": false
    },
    {
      "id": 8,
      "name": "Fitness Tracker Watch",
      "description": "Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking",
      "price": 249.99,
      "image": "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/8",
        "bestbuy": "https://bestbuy.com/product/8",
        "target": "https://target.com/product/8"
      },
      "categories": ["Fitness", "Technology", "Health"],
      "target_demographics": {
        "age": ["18-25", "26-35", "36-50"],
        "gender": ["Male", "Female"],
        "profession": ["Student", "Engineer", "Doctor", "Teacher"]
      },
      "rating": 4.4,
      "commission_rate": 8,
      "trending": true
    },
    {
      "id": 9,
      "name": "Professional Hair Dryer",
      "description": "Ionic hair dryer with multiple heat settings and styling attachments",
      "price": 119.99,
      "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/9",
        "sephora": "https://sephora.com/product/9",
        "sally-beauty": "https://sallybeauty.com/product/9"
      },
      "categories": ["Beauty", "Hair Care", "Appliances"],
      "target_demographics": {
        "age": ["18-25", "26-35", "36-50"],
        "gender": ["Female"],
        "profession": ["Student", "Business", "Teacher", "Artist"]
      },
      "rating": 4.6,
      "commission_rate": 10,
      "trending": false
    },
    {
      "id": 10,
      "name": "Business Laptop Backpack",
      "description": "Professional laptop backpack with multiple compartments and USB charging port",
      "price": 69.99,
      "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/10",
        "target": "https://target.com/product/10",
        "staples": "https://staples.com/product/10"
      },
      "categories": ["Business", "Technology", "Travel"],
      "target_demographics": {
        "age": ["26-35", "36-50"],
        "gender": ["Male", "Female"],
        "profession": ["Business", "Engineer", "Teacher", "Doctor"]
      },
      "rating": 4.3,
      "commission_rate": 12,
      "trending": false
    },
    {
      "id": 11,
      "name": "Smart LED Strip Lights",
      "description": "WiFi-enabled LED strip lights with millions of colors and app control",
      "price": 39.99,
      "image": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/11",
        "bestbuy": "https://bestbuy.com/product/11",
        "homedepot": "https://homedepot.com/product/11"
      },
      "categories": ["Home Decor", "Technology", "Gaming"],
      "target_demographics": {
        "age": ["18-25", "26-35"],
        "gender": ["Male", "Female"],
        "profession": ["Student", "Engineer", "Artist"]
      },
      "rating": 4.2,
      "commission_rate": 9,
      "trending": true
    },
    {
      "id": 12,
      "name": "Educational Coding Kit",
      "description": "Learn programming with hands-on projects and step-by-step tutorials",
      "price": 89.99,
      "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
      "affiliate_links": {
        "amazon": "https://amazon.com/product/12",
        "target": "https://target.com/product/12",
        "educational-insights": "https://educationalinsights.com/product/12"
      },
      "categories": ["Education", "Technology", "STEM"],
      "target_demographics": {
        "age": ["18-25"],
        "gender": ["Male", "Female"],
        "profession": ["Student", "Engineer", "Teacher"]
      },
      "rating": 4.7,
      "commission_rate": 13,
      "trending": false
    }
  ],
  "demographic_weights": {
    "age_weight": 0.4,
    "gender_weight": 0.3,
    "profession_weight": 0.3
  },
  "categories": ["Electronics", "Technology", "Gaming", "Beauty", "Health", "Skincare", "Home", "Security", "Fitness", "Sports", "Home & Kitchen", "Appliances", "Art Supplies", "Creative", "Education", "Hair Care", "Business", "Travel", "Home Decor", "STEM"]
};

// Application state
let currentUser = null;
let currentSection = 'home';
let filteredProducts = [...productsData.products];
let recommendedProducts = [];

// DOM Elements
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const profileForm = document.getElementById('profileForm');
const currentProfile = document.getElementById('currentProfile');
const getRecommendationsBtn = document.getElementById('getRecommendationsBtn');
const updateProfileBtn = document.getElementById('updateProfileBtn');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    populateFilters();
    showSection('home');
    renderAllProducts();
    renderAnalytics();
});

function initializeApp() {
    // Check if user profile exists (simulated since we can't use localStorage)
    // In a real app, this would check localStorage or a database
}

function setupEventListeners() {
    // Navigation
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            showSection(section);
            updateActiveNav(btn);
        });
    });

    // Profile form
    profileForm.addEventListener('submit', handleProfileSubmit);
    
    // Get recommendations button
    getRecommendationsBtn.addEventListener('click', () => {
        showSection('profile');
        updateActiveNav(document.querySelector('[data-section="profile"]'));
    });

    // Update profile button
    updateProfileBtn.addEventListener('click', () => {
        toggleProfileForm();
    });

    // Modal
    closeModal.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal || e.target.classList.contains('modal__backdrop')) {
            closeProductModal();
        }
    });

    // Filters
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('priceFilter').addEventListener('change', applyFilters);
    document.getElementById('ratingFilter').addEventListener('change', applyFilters);
}

function showSection(sectionName) {
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        currentSection = sectionName;
    }

    // Update recommendations visibility based on user profile
    if (sectionName === 'catalog') {
        updateRecommendationsVisibility();
    }
}

function updateActiveNav(activeBtn) {
    navBtns.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

function handleProfileSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(profileForm);
    currentUser = {
        age: formData.get('age'),
        gender: formData.get('gender'),
        profession: formData.get('profession')
    };

    updateProfileDisplay();
    generateRecommendations();
    showSection('catalog');
    updateActiveNav(document.querySelector('[data-section="catalog"]'));
}

function updateProfileDisplay() {
    if (currentUser) {
        document.getElementById('profileAge').textContent = currentUser.age;
        document.getElementById('profileGender').textContent = currentUser.gender;
        document.getElementById('profileProfession').textContent = currentUser.profession;
        
        currentProfile.classList.remove('hidden');
        profileForm.parentElement.classList.add('hidden');
    }
}

function toggleProfileForm() {
    profileForm.parentElement.classList.remove('hidden');
    currentProfile.classList.add('hidden');
}

// Machine Learning Recommendation Engine
function generateRecommendations() {
    if (!currentUser) {
        recommendedProducts = [];
        return;
    }

    const scoredProducts = productsData.products.map(product => ({
        ...product,
        score: calculateRecommendationScore(product, currentUser)
    }));

    // Sort by score descending and take top 6
    recommendedProducts = scoredProducts
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);

    renderRecommendations();
}

function calculateRecommendationScore(product, user) {
    const weights = productsData.demographic_weights;
    let score = 0;
    
    // Age matching
    const ageMatch = product.target_demographics.age.includes(user.age) ? 1 : 0;
    score += ageMatch * weights.age_weight;
    
    // Gender matching
    const genderMatch = product.target_demographics.gender.includes(user.gender) ? 1 : 0;
    score += genderMatch * weights.gender_weight;
    
    // Profession matching
    const professionMatch = product.target_demographics.profession.includes(user.profession) ? 1 : 0;
    score += professionMatch * weights.profession_weight;
    
    // Bonus for high rating products
    const ratingBonus = (product.rating - 4.0) / 4.0 * 0.2;
    score += ratingBonus;
    
    // Bonus for trending products
    const trendingBonus = product.trending ? 0.1 : 0;
    score += trendingBonus;
    
    // Bonus for high commission rate
    const commissionBonus = (product.commission_rate / 15) * 0.1;
    score += commissionBonus;
    
    return Math.max(0, Math.min(1, score)); // Normalize to 0-1
}

function updateRecommendationsVisibility() {
    const recommendationsSection = document.getElementById('recommendationsSection');
    if (currentUser && recommendedProducts.length > 0) {
        recommendationsSection.classList.remove('hidden');
    } else {
        recommendationsSection.classList.add('hidden');
    }
}

function renderRecommendations() {
    const grid = document.getElementById('recommendationsGrid');
    
    if (recommendedProducts.length === 0) {
        grid.innerHTML = '<div class="empty-state">No recommendations available. Please update your profile.</div>';
        return;
    }

    grid.innerHTML = recommendedProducts.map(product => 
        createProductCard(product, true)
    ).join('');
}

function renderAllProducts() {
    const grid = document.getElementById('allProductsGrid');
    grid.innerHTML = filteredProducts.map(product => 
        createProductCard(product, false)
    ).join('');
}

function createProductCard(product, showMatchScore = false) {
    const stars = '★'.repeat(Math.floor(product.rating)) + 
                  (product.rating % 1 >= 0.5 ? '☆' : '');
    
    const matchScore = showMatchScore && currentUser ? 
        Math.round(product.score * 100) : null;

    return `
        <div class="product-card" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-card__image">
            <div class="product-card__content">
                <div class="product-card__header">
                    <h3 class="product-card__title">${product.name}</h3>
                    <p class="product-card__description">${product.description}</p>
                </div>
                
                <div class="product-card__meta">
                    <span class="product-card__price">$${product.price}</span>
                    <div class="product-card__rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-value">(${product.rating})</span>
                    </div>
                </div>
                
                <div class="product-card__footer">
                    <span class="commission-rate">${product.commission_rate}% Commission</span>
                    ${product.trending ? '<span class="trending-badge">Trending</span>' : ''}
                    ${matchScore ? `<span class="match-score">${matchScore}% Match</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Product Modal
document.addEventListener('click', function(e) {
    const productCard = e.target.closest('.product-card');
    if (productCard) {
        const productId = parseInt(productCard.dataset.productId);
        showProductModal(productId);
    }
});

function formatStoreName(store) {
    // Handle special cases for store names with hyphens
    const storeNameMap = {
        'williams-sonoma': 'Williams Sonoma',
        'crate-barrel': 'Crate & Barrel',
        'sally-beauty': 'Sally Beauty',
        'educational-insights': 'Educational Insights',
        'dickblick': 'Blick Art Materials',
        'homedepot': 'Home Depot'
    };
    
    return storeNameMap[store] || store.charAt(0).toUpperCase() + store.slice(1);
}

function showProductModal(productId) {
    const product = productsData.products.find(p => p.id === productId);
    if (!product) return;

    const stars = '★'.repeat(Math.floor(product.rating)) + 
                  (product.rating % 1 >= 0.5 ? '☆' : '');

    // Create affiliate links with proper formatting and event handling
    const affiliateLinksElements = Object.entries(product.affiliate_links)
        .map(([store, url]) => {
            const displayName = formatStoreName(store);
            return `<button class="affiliate-link" data-url="${url}" data-store="${displayName}">${displayName}</button>`;
        }).join('');

    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-product">
            <img src="${product.image}" alt="${product.name}" class="modal-product__image">
            <h3 class="modal-product__title">${product.name}</h3>
            <p class="modal-product__description">${product.description}</p>
            
            <div class="modal-product__meta">
                <div class="meta-item">
                    <span class="meta-label">Price</span>
                    <span class="meta-value">$${product.price}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Rating</span>
                    <span class="meta-value">${stars} (${product.rating})</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Commission</span>
                    <span class="meta-value">${product.commission_rate}%</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Categories</span>
                    <span class="meta-value">${product.categories.join(', ')}</span>
                </div>
            </div>
            
            <div class="affiliate-links">
                <h4>Buy from these stores:</h4>
                <div class="affiliate-links-grid">
                    ${affiliateLinksElements}
                </div>
            </div>
        </div>
    `;

    // Add event listeners for affiliate links
    const affiliateLinks = productModal.querySelectorAll('.affiliate-link[data-url]');
    affiliateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const url = this.getAttribute('data-url');
            const store = this.getAttribute('data-store');
            
            // Show confirmation before redirecting (for demo purposes)
            if (confirm(`This will redirect you to ${store}. Continue?`)) {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
    });

    productModal.classList.remove('hidden');
}

function closeProductModal() {
    productModal.classList.add('hidden');
}

// Filters
function populateFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    productsData.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;

    filteredProducts = productsData.products.filter(product => {
        const categoryMatch = !categoryFilter || product.categories.includes(categoryFilter);
        const priceMatch = !priceFilter || product.price <= parseFloat(priceFilter);
        const ratingMatch = !ratingFilter || product.rating >= parseFloat(ratingFilter);
        
        return categoryMatch && priceMatch && ratingMatch;
    });

    renderAllProducts();
}

// Analytics
function renderAnalytics() {
    renderDemographicStats();
    renderCategoryStats();
    renderCommissionStats();
    renderTrendingStats();
}

function renderDemographicStats() {
    const container = document.getElementById('demographicStats');
    
    const ageGroups = {};
    const genderGroups = {};
    const professionGroups = {};

    productsData.products.forEach(product => {
        product.target_demographics.age.forEach(age => {
            ageGroups[age] = (ageGroups[age] || 0) + 1;
        });
        product.target_demographics.gender.forEach(gender => {
            genderGroups[gender] = (genderGroups[gender] || 0) + 1;
        });
        product.target_demographics.profession.forEach(profession => {
            professionGroups[profession] = (professionGroups[profession] || 0) + 1;
        });
    });

    container.innerHTML = `
        <div style="margin-bottom: var(--space-16);">
            <h4>By Age Group:</h4>
            ${Object.entries(ageGroups)
                .sort((a, b) => b[1] - a[1])
                .map(([age, count]) => `
                    <div class="stat-item">
                        <span class="stat-label">${age}</span>
                        <span class="stat-value">${count} products</span>
                    </div>
                `).join('')}
        </div>
        <div>
            <h4>By Profession:</h4>
            ${Object.entries(professionGroups)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 4)
                .map(([profession, count]) => `
                    <div class="stat-item">
                        <span class="stat-label">${profession}</span>
                        <span class="stat-value">${count} products</span>
                    </div>
                `).join('')}
        </div>
    `;
}

function renderCategoryStats() {
    const container = document.getElementById('categoryStats');
    
    const categoryCounts = {};
    productsData.products.forEach(product => {
        product.categories.forEach(category => {
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });
    });

    container.innerHTML = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([category, count]) => `
            <div class="stat-item">
                <span class="stat-label">${category}</span>
                <span class="stat-value">${count} products</span>
            </div>
        `).join('');
}

function renderCommissionStats() {
    const container = document.getElementById('commissionStats');
    
    const totalProducts = productsData.products.length;
    const avgCommission = productsData.products.reduce((sum, p) => sum + p.commission_rate, 0) / totalProducts;
    const maxCommission = Math.max(...productsData.products.map(p => p.commission_rate));
    const totalPotential = productsData.products.reduce((sum, p) => sum + (p.price * p.commission_rate / 100), 0);

    container.innerHTML = `
        <div class="stat-item">
            <span class="stat-label">Average Commission</span>
            <span class="stat-value">${avgCommission.toFixed(1)}%</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Highest Commission</span>
            <span class="stat-value">${maxCommission}%</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Total Potential</span>
            <span class="stat-value">$${totalPotential.toFixed(0)}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Products</span>
            <span class="stat-value">${totalProducts}</span>
        </div>
    `;
}

function renderTrendingStats() {
    const container = document.getElementById('trendingStats');
    
    const trendingProducts = productsData.products.filter(p => p.trending);
    
    container.innerHTML = trendingProducts.length > 0 
        ? trendingProducts.map(product => `
            <div class="stat-item">
                <span class="stat-label">${product.name}</span>
                <span class="stat-value">${product.commission_rate}%</span>
            </div>
        `).join('')
        : '<div class="empty-state">No trending products</div>';
}
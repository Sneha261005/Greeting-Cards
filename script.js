// Greeting Cards Creator - Main JavaScript File

// Global state
let currentPage = 'home';
let selectedTemplate = null;
let previewMode = false;
let currentCardData = {
    title: 'Happy Birthday!',
    message: 'Wishing you a wonderful day filled with joy and happiness!',
    recipient: 'Dear Friend',
    signature: 'With love,',
    backgroundColor: ['from-pink-400', 'to-purple-400'],
    textColor: '#ffffff',
    fontSize: 'text-xl',
    fontFamily: 'font-sans'
};

// Card templates data
const cardTemplates = [
    {
        id: 1,
        name: 'Birthday Celebration',
        icon: 'fa-birthday-cake',
        colors: ['from-pink-400', 'to-purple-400'],
        occasion: 'birthday'
    },
    {
        id: 2,
        name: 'Holiday Greetings',
        icon: 'fa-tree',
        colors: ['from-green-400', 'to-red-400'],
        occasion: 'holiday'
    },
    {
        id: 3,
        name: 'Love & Romance',
        icon: 'fa-heart',
        colors: ['from-pink-400', 'to-red-400'],
        occasion: 'love'
    },
    {
        id: 4,
        name: 'Congratulations',
        icon: 'fa-star',
        colors: ['from-yellow-400', 'to-orange-400'],
        occasion: 'congratulations'
    },
    {
        id: 5,
        name: 'Thank You',
        icon: 'fa-gift',
        colors: ['from-blue-400', 'to-purple-400'],
        occasion: 'thankyou'
    },
    {
        id: 6,
        name: 'Get Well Soon',
        icon: 'fa-magic',
        colors: ['from-green-400', 'to-blue-400'],
        occasion: 'getwell'
    }
];

// Gallery cards data
const galleryCards = [
    {
        id: 1,
        title: 'Birthday Wishes',
        category: 'birthday',
        colors: ['from-pink-400', 'to-purple-400'],
        likes: 245,
        views: 1820,
        featured: true,
        preview: 'Happy Birthday! May your special day be filled with joy and laughter!'
    },
    {
        id: 2,
        title: 'Christmas Joy',
        category: 'holiday',
        colors: ['from-red-400', 'to-green-400'],
        likes: 189,
        views: 1456,
        featured: true,
        preview: 'Merry Christmas! Wishing you peace, joy, and happiness this holiday season.'
    },
    {
        id: 3,
        title: 'Love You Forever',
        category: 'love',
        colors: ['from-pink-400', 'to-red-400'],
        likes: 312,
        views: 2341,
        featured: false,
        preview: 'You make my world brighter just by being in it. Love you always!'
    },
    {
        id: 4,
        title: 'Congratulations!',
        category: 'congratulations',
        colors: ['from-yellow-400', 'to-orange-400'],
        likes: 156,
        views: 987,
        featured: false,
        preview: 'Congratulations on your amazing achievement! You deserve all the success!'
    },
    {
        id: 5,
        title: 'Thank You Note',
        category: 'thankyou',
        colors: ['from-blue-400', 'to-purple-400'],
        likes: 134,
        views: 876,
        featured: false,
        preview: 'Thank you for your kindness and support. It means the world to me!'
    },
    {
        id: 6,
        title: 'Get Well Soon',
        category: 'getwell',
        colors: ['from-green-400', 'to-blue-400'],
        likes: 98,
        views: 654,
        featured: false,
        preview: 'Sending you healing thoughts and wishing you a speedy recovery!'
    }
];

// Color options for editor
const colorOptions = [
    { name: 'Pink Purple', colors: ['from-pink-400', 'to-purple-400'] },
    { name: 'Blue Indigo', colors: ['from-blue-400', 'to-indigo-400'] },
    { name: 'Green Teal', colors: ['from-green-400', 'to-teal-400'] },
    { name: 'Orange Red', colors: ['from-orange-400', 'to-red-400'] },
    { name: 'Yellow Orange', colors: ['from-yellow-400', 'to-orange-400'] },
    { name: 'Purple Pink', colors: ['from-purple-400', 'to-pink-400'] }
];

const textColors = ['#ffffff', '#000000', '#1f2937', '#dc2626', '#059669', '#2563eb'];

// Categories for gallery
const categories = [
    { id: 'all', name: 'All Cards' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'holiday', name: 'Holiday' },
    { id: 'love', name: 'Love & Romance' },
    { id: 'congratulations', name: 'Congratulations' },
    { id: 'thankyou', name: 'Thank You' },
    { id: 'getwell', name: 'Get Well Soon' }
];

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// Initialize the app
function initApp() {
    renderTemplates();
    renderGallery();
    renderColorOptions();
    renderTextColorOptions();
    renderCategoryFilters();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add mobile menu functionality
    initMobileMenu();
    
    // Add keyboard navigation
    initKeyboardNavigation();
}

// Page navigation
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageName).classList.add('active');
    currentPage = pageName;
    
    // Update nav active state
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-purple-600');
        btn.classList.add('text-gray-700');
    });
    
    // Add fade-in animation
    const activePage = document.getElementById(pageName);
    activePage.classList.add('fade-in');
    setTimeout(() => activePage.classList.remove('fade-in'), 500);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Initialize mobile menu
function initMobileMenu() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuButton = event.target.closest('button[onclick="toggleMobileMenu()"]');
        
        if (!menuButton && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Add smooth scrolling
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        // ESC key to close mobile menu
        if (event.key === 'Escape') {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.add('hidden');
        }
        
        // Ctrl/Cmd + K for search focus
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
                showPage('gallery');
            }
        }
    });
}

// Render templates on home page
function renderTemplates() {
    const templateGrid = document.getElementById('templateGrid');
    if (!templateGrid) return;
    
    templateGrid.innerHTML = '';
    
    cardTemplates.forEach((template, index) => {
        const templateCard = document.createElement('div');
        templateCard.className = 'bg-white rounded-xl overflow-hidden card-shadow hover-lift cursor-pointer fade-in';
        templateCard.style.animationDelay = `${index * 0.1}s`;
        
        templateCard.innerHTML = `
            <div class="h-48 bg-gradient-to-br ${template.colors[0]} ${template.colors[1]} flex items-center justify-center">
                <i class="fas ${template.icon} text-white text-4xl float-animation"></i>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${template.name}</h3>
                <p class="text-gray-600 mb-4">Perfect for ${template.occasion} occasions</p>
                <button class="text-purple-600 font-semibold hover:text-purple-700">
                    Use Template &rarr;
                </button>
            </div>
        `;
        
        templateCard.onclick = () => selectTemplate(template);
        templateGrid.appendChild(templateCard);
    });
}

// Select a template
function selectTemplate(template) {
    selectedTemplate = template;
    currentCardData.backgroundColor = template.colors;
    currentCardData.title = template.name;
    showPage('editor');
    updateCard();
}

// Render gallery
function renderGallery() {
    renderGalleryCards();
}

// Render gallery cards
function renderGalleryCards() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeCategoryBtn = document.querySelector('.category-btn.active');
    const selectedCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all';
    
    let filteredCards = galleryCards.filter(card => {
        const matchesSearch = card.title.toLowerCase().includes(searchTerm) ||
                             card.preview.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    const featuredCards = filteredCards.filter(card => card.featured);
    const regularCards = filteredCards.filter(card => !card.featured);
    
    // Update results count
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${filteredCards.length} card${filteredCards.length !== 1 ? 's' : ''}`;
    }
    
    // Show/hide no results
    const noResults = document.getElementById('noResults');
    if (noResults) {
        noResults.style.display = filteredCards.length === 0 ? 'block' : 'none';
    }
    
    // Render featured cards
    const featuredSection = document.getElementById('featuredSection');
    const featuredCardsContainer = document.getElementById('featuredCards');
    
    if (featuredCards.length > 0 && featuredSection && featuredCardsContainer) {
        featuredSection.style.display = 'block';
        featuredCardsContainer.innerHTML = '';
        featuredCards.forEach(card => {
            featuredCardsContainer.appendChild(createGalleryCardElement(card, true));
        });
    } else if (featuredSection) {
        featuredSection.style.display = 'none';
    }
    
    // Render regular cards
    const allCardsContainer = document.getElementById('galleryCards');
    if (allCardsContainer) {
        allCardsContainer.innerHTML = '';
        regularCards.forEach(card => {
            allCardsContainer.appendChild(createGalleryCardElement(card, false));
        });
    }
}

// Create gallery card element
function createGalleryCardElement(card, isFeatured) {
    const cardElement = document.createElement('div');
    cardElement.className = 'bg-white rounded-xl overflow-hidden card-shadow hover-lift fade-in';
    
    cardElement.innerHTML = `
        <div class="h-48 bg-gradient-to-br ${card.colors[0]} ${card.colors[1]} flex items-center justify-center relative">
            ${isFeatured ? '<div class="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">Featured</div>' : ''}
            <i class="fas fa-heart text-white text-3xl opacity-80"></i>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${card.title}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">${card.preview}</p>
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4 text-sm text-gray-500">
                    <span class="flex items-center gap-1">
                        <i class="fas fa-heart w-4 h-4"></i>
                        ${card.likes}
                    </span>
                    <span class="flex items-center gap-1">
                        <i class="fas fa-eye w-4 h-4"></i>
                        ${card.views}
                    </span>
                </div>
                <span class="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    ${card.category}
                </span>
            </div>
            <div class="flex gap-2">
                <button onclick="useGalleryCard(${card.id})" class="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-center hover:shadow-lg transition-all duration-300">
                    Use This Card
                </button>
                <button class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <i class="fas fa-download w-4 h-4 text-gray-600"></i>
                </button>
            </div>
        </div>
    `;
    
    return cardElement;
}

// Use gallery card
function useGalleryCard(cardId) {
    const card = galleryCards.find(c => c.id === cardId);
    if (card) {
        currentCardData.backgroundColor = card.colors;
        currentCardData.title = card.title;
        currentCardData.message = card.preview;
        showPage('editor');
        updateCard();
    }
}

// Render category filters
function renderCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    if (!container) return;
    
    container.innerHTML = '';
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = `category-btn px-4 py-2 rounded-lg transition-colors ${
            category.id === 'all' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`;
        button.dataset.category = category.id;
        button.textContent = category.name;
        button.onclick = () => selectCategory(category.id);
        container.appendChild(button);
    });
}

// Select category
function selectCategory(categoryId) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-purple-500', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    });
    
    const selectedBtn = document.querySelector(`[data-category="${categoryId}"]`);
    if (selectedBtn) {
        selectedBtn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        selectedBtn.classList.add('bg-purple-500', 'text-white');
    }
    
    renderGalleryCards();
}

// Filter cards
function filterCards() {
    renderGalleryCards();
}

// Render color options
function renderColorOptions() {
    const container = document.getElementById('colorOptions');
    if (!container) return;
    
    container.innerHTML = '';
    
    colorOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = `h-12 bg-gradient-to-r ${option.colors[0]} ${option.colors[1]} rounded-lg hover:scale-105 transition-transform`;
        button.title = option.name;
        button.onclick = () => selectColorScheme(option.colors);
        
        if (currentCardData.backgroundColor[0] === option.colors[0]) {
            button.classList.add('ring-2', 'ring-purple-500');
        }
        
        container.appendChild(button);
    });
}

// Select color scheme
function selectColorScheme(colors) {
    currentCardData.backgroundColor = colors;
    updateCard();
    renderColorOptions();
}

// Render text color options
function renderTextColorOptions() {
    const container = document.getElementById('textColorOptions');
    if (!container) return;
    
    container.innerHTML = '';
    
    textColors.forEach(color => {
        const button = document.createElement('button');
        button.className = `w-10 h-10 rounded-lg border-2 ${
            currentCardData.textColor === color ? 'border-purple-500' : 'border-gray-300'
        }`;
        button.style.backgroundColor = color;
        button.onclick = () => selectTextColor(color);
        container.appendChild(button);
    });
}

// Select text color
function selectTextColor(color) {
    currentCardData.textColor = color;
    updateCard();
    renderTextColorOptions();
}

// Update card preview
function updateCard() {
    const preview = document.getElementById('cardPreview');
    const titleInput = document.getElementById('titleInput');
    const messageInput = document.getElementById('messageInput');
    const recipientInput = document.getElementById('recipientInput');
    const signatureInput = document.getElementById('signatureInput');
    const fontSizeSelect = document.getElementById('fontSizeSelect');
    const fontFamilySelect = document.getElementById('fontFamilySelect');
    
    if (!preview || !titleInput || !messageInput || !recipientInput || !signatureInput || !fontSizeSelect || !fontFamilySelect) {
        return;
    }
    
    const title = titleInput.value;
    const message = messageInput.value;
    const recipient = recipientInput.value;
    const signature = signatureInput.value;
    const fontSize = fontSizeSelect.value;
    const fontFamily = fontFamilySelect.value;
    
    // Update card data
    currentCardData.title = title;
    currentCardData.message = message;
    currentCardData.recipient = recipient;
    currentCardData.signature = signature;
    currentCardData.fontSize = fontSize;
    currentCardData.fontFamily = fontFamily;
    
    // Update preview
    preview.className = `w-full h-96 bg-gradient-to-br ${currentCardData.backgroundColor[0]} ${currentCardData.backgroundColor[1]} rounded-xl flex flex-col justify-center items-center p-8 text-center shadow-2xl`;
    
    const cardTitle = document.getElementById('cardTitle');
    const cardRecipient = document.getElementById('cardRecipient');
    const cardMessage = document.getElementById('cardMessage');
    const cardSignature = document.getElementById('cardSignature');
    
    if (cardTitle) {
        cardTitle.className = `${fontSize} font-bold mb-4 ${fontFamily}`;
        cardTitle.style.color = currentCardData.textColor;
        cardTitle.textContent = title;
    }
    
    if (cardRecipient) {
        cardRecipient.className = 'text-lg mb-6';
        cardRecipient.style.color = currentCardData.textColor;
        cardRecipient.textContent = recipient;
    }
    
    if (cardMessage) {
        cardMessage.className = 'text-base mb-6 max-w-md';
        cardMessage.style.color = currentCardData.textColor;
        cardMessage.textContent = message;
    }
    
    if (cardSignature) {
        cardSignature.className = 'text-lg mt-auto';
        cardSignature.style.color = currentCardData.textColor;
        cardSignature.textContent = signature;
    }
}

// Toggle preview mode
function togglePreviewMode() {
    previewMode = !previewMode;
    const editorSection = document.getElementById('editorSection');
    const toggleText = document.getElementById('previewToggleText');
    
    if (editorSection && toggleText) {
        if (previewMode) {
            editorSection.style.display = 'none';
            toggleText.textContent = 'Edit';
        } else {
            editorSection.style.display = 'block';
            toggleText.textContent = 'Preview';
        }
    }
}

// Download card
function downloadCard() {
    const cardElement = document.getElementById('cardPreview');
    
    if (!cardElement) {
        alert('Card preview not found. Please try again.');
        return;
    }
    
    // Check if html2canvas is available
    if (typeof html2canvas === 'undefined') {
        alert('Download functionality is not available. Please make sure html2canvas library is loaded.');
        return;
    }
    
    html2canvas(cardElement, {
        scale: 2,
        backgroundColor: null,
        logging: false,
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'greeting-card.png';
        link.href = canvas.toDataURL('image/png', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        showNotification('Card downloaded successfully!', 'success');
    }).catch(error => {
        console.error('Error downloading card:', error);
        alert('Error downloading card. Please try again.');
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-20 right-6 px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    
    // Set background color based on type
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
    } else {
        notification.classList.add('bg-blue-500', 'text-white');
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add parallax effect to hero section
function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-gradient');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect
    addParallaxEffect();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add hover effects to cards
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Export functions for global access
window.showPage = showPage;
window.toggleMobileMenu = toggleMobileMenu;
window.selectTemplate = selectTemplate;
window.useGalleryCard = useGalleryCard;
window.selectCategory = selectCategory;
window.filterCards = filterCards;
window.selectColorScheme = selectColorScheme;
window.selectTextColor = selectTextColor;
window.updateCard = updateCard;
window.togglePreviewMode = togglePreviewMode;
window.downloadCard = downloadCard;
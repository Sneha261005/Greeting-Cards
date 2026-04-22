// Gallery page JavaScript
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
    },
    {
        id: 7,
        title: 'Anniversary Celebration',
        category: 'love',
        colors: ['from-purple-400', 'to-pink-400'],
        likes: 267,
        views: 1987,
        featured: false,
        preview: 'Happy Anniversary! Celebrating your love and commitment.'
    },
    {
        id: 8,
        title: 'New Baby Welcome',
        category: 'congratulations',
        colors: ['from-blue-400', 'to-indigo-400'],
        likes: 178,
        views: 1234,
        featured: false,
        preview: 'Welcome to the world, little one! Your adventure begins now.'
    },
    {
        id: 9,
        title: 'Graduation Success',
        category: 'congratulations',
        colors: ['from-green-400', 'to-teal-400'],
        likes: 145,
        views: 890,
        featured: false,
        preview: 'Congratulations on your graduation! The future is bright!'
    }
];

// Categories for filtering
const categories = [
    { id: 'all', name: 'All Cards' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'holiday', name: 'Holiday' },
    { id: 'love', name: 'Love & Romance' },
    { id: 'congratulations', name: 'Congratulations' },
    { id: 'thankyou', name: 'Thank You' },
    { id: 'getwell', name: 'Get Well Soon' }
];

// Global state
let currentPage = 1;
let postsPerPage = 9;
let currentCategory = 'all';
let searchTerm = '';
let filteredCards = [...galleryCards];

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial category to 'all'
    currentCategory = 'all';
    
    // Set initial active button state
    const allBtn = document.querySelector('[data-category="all"]');
    if (allBtn) {
        allBtn.classList.add('bg-purple-500', 'text-white', 'active');
        allBtn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    }
    
    renderGalleryCards();
});

// Render gallery cards
function renderGalleryCards() {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
    const activeCategoryBtn = document.querySelector('.category-btn.active');
    const selectedCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : currentCategory;
    
    filteredCards = galleryCards.filter(card => {
        const matchesSearch = card.title.toLowerCase().includes(searchValue) ||
                             card.preview.toLowerCase().includes(searchValue);
        const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
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
    const featuredCards = filteredCards.filter(card => card.featured);
    const regularCards = filteredCards.filter(card => !card.featured);
    
    // Render featured section
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
    const allCardsContainer = document.getElementById('galleryGrid');
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
                <button onclick="useCard(${card.id})" class="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-center hover:shadow-lg transition-all duration-300">
                    Use This Card
                </button>
                <button onclick="toggleFavorite(${card.id})" class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <i class="fas fa-heart w-4 h-4 text-gray-600"></i>
                </button>
                <button onclick="downloadCard(${card.id})" class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <i class="fas fa-download w-4 h-4 text-gray-600"></i>
                </button>
            </div>
        </div>
    `;
    
    return cardElement;
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update button states
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-purple-500', 'text-white', 'active');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    });
    
    const selectedBtn = document.querySelector(`[data-category="${category}"]`);
    if (selectedBtn) {
        selectedBtn.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        selectedBtn.classList.add('bg-purple-500', 'text-white', 'active');
    }
    
    renderGalleryCards();
}

// Search cards
function searchCards() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchTerm = searchInput.value.toLowerCase();
        renderGalleryCards();
    }
}

// Use card in editor
function useCard(cardId) {
    // Store selected card data in localStorage for editor
    const card = galleryCards.find(c => c.id === cardId);
    if (card) {
        // Save to recent cards
        saveCardToRecent(card);
        
        // Store selected card data for editor
        localStorage.setItem('selectedCard', JSON.stringify(card));
        
        // Show notification
        showNotification(`Loading "${card.title}" in editor...`, 'info');
        
        // Navigate to editor with transition
        setTimeout(() => {
            window.location.href = 'editor.html';
        }, 500);
    }
}

// Download card
function downloadCard(cardId) {
    const card = galleryCards.find(c => c.id === cardId);
    if (card) {
        // Create a simple text-based card preview for download
        const cardContent = `
            Card Title: ${card.title}
            Category: ${card.category}
            Preview: ${card.preview}
            Likes: ${card.likes}
            Views: ${card.views}
        `;
        
        // Create blob and download
        const blob = new Blob([cardContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${card.title.replace(/\s+/g, '-').toLowerCase()}-card-info.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Toggle favorite
function toggleFavorite(cardId) {
    const card = galleryCards.find(c => c.id === cardId);
    if (!card) return;
    
    const favoriteCards = JSON.parse(localStorage.getItem('favoriteCards') || '[]');
    const isFavorited = favoriteCards.some(c => c.id === cardId);
    
    if (isFavorited) {
        removeCardFromFavorites(cardId);
        showNotification(`"${card.title}" removed from favorites`, 'info');
    } else {
        saveCardToFavorites(card);
        showNotification(`"${card.title}" added to favorites!`, 'success');
    }
}

// Load more cards
function loadMoreCards() {
    currentPage++;
    renderGalleryCards();
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Export functions for global access
window.filterByCategory = filterByCategory;
window.searchCards = searchCards;
window.loadMoreCards = loadMoreCards;
window.useCard = useCard;
window.downloadCard = downloadCard;
window.toggleFavorite = toggleFavorite;
window.toggleMobileMenu = toggleMobileMenu;

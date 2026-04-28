// Gallery Data with sample greeting cards
const galleryCards = [
    {
        id: 1,
        title: "Happy Birthday Celebration",
        preview: "A vibrant birthday card with colorful balloons and confetti design",
        category: "birthday",
        image: "https://picsum.photos/seed/birthday1/400/600.jpg",
        tags: ["birthday", "celebration", "colorful"],
        featured: true,
        createdAt: "2024-01-15"
    },
    {
        id: 2,
        title: "Love & Romance",
        preview: "Elegant romantic card with hearts and floral elements",
        category: "love",
        image: "https://picsum.photos/seed/love1/400/600.jpg",
        tags: ["love", "romance", "hearts"],
        featured: true,
        createdAt: "2024-01-14"
    },
    {
        id: 3,
        title: "Holiday Greetings",
        preview: "Festive holiday card with snowflakes and warm wishes",
        category: "holiday",
        image: "https://picsum.photos/seed/holiday1/400/600.jpg",
        tags: ["holiday", "christmas", "winter"],
        featured: false,
        createdAt: "2024-01-13"
    },
    {
        id: 4,
        title: "Thank You Appreciation",
        preview: "Simple and elegant thank you card with typography focus",
        category: "thank-you",
        image: "https://picsum.photos/seed/thank1/400/600.jpg",
        tags: ["thank you", "appreciation", "simple"],
        featured: false,
        createdAt: "2024-01-12"
    },
    {
        id: 5,
        title: "Congratulations Achievement",
        preview: "Modern congratulations card with geometric patterns",
        category: "congratulations",
        image: "https://picsum.photos/seed/congrats1/400/600.jpg",
        tags: ["congratulations", "achievement", "modern"],
        featured: true,
        createdAt: "2024-01-11"
    },
    {
        id: 6,
        title: "Birthday Cake Design",
        preview: "Fun birthday card with cake and candles illustration",
        category: "birthday",
        image: "https://picsum.photos/seed/birthday2/400/600.jpg",
        tags: ["birthday", "cake", "fun"],
        featured: false,
        createdAt: "2024-01-10"
    },
    {
        id: 7,
        title: "Anniversary Love",
        preview: "Romantic anniversary card with elegant typography",
        category: "love",
        image: "https://picsum.photos/seed/love2/400/600.jpg",
        tags: ["anniversary", "love", "elegant"],
        featured: false,
        createdAt: "2024-01-09"
    },
    {
        id: 8,
        title: "New Year Celebration",
        preview: "Sparkling New Year card with gold accents",
        category: "holiday",
        image: "https://picsum.photos/seed/newyear1/400/600.jpg",
        tags: ["new year", "celebration", "gold"],
        featured: true,
        createdAt: "2024-01-08"
    },
    {
        id: 9,
        title: "Get Well Soon",
        preview: "Cheerful get well card with flowers and healing vibes",
        category: "get-well",
        image: "https://picsum.photos/seed/getwell1/400/600.jpg",
        tags: ["get well", "flowers", "cheerful"],
        featured: false,
        createdAt: "2024-01-07"
    },
    {
        id: 10,
        title: "Birthday Party Invitation",
        preview: "Colorful birthday party invitation with modern design",
        category: "birthday",
        image: "https://picsum.photos/seed/birthday3/400/600.jpg",
        tags: ["birthday", "invitation", "party"],
        featured: false,
        createdAt: "2024-01-06"
    },
    {
        id: 11,
        title: "Valentine's Day Special",
        preview: "Romantic Valentine's card with roses and love hearts",
        category: "love",
        image: "https://picsum.photos/seed/valentine1/400/600.jpg",
        tags: ["valentine", "roses", "romantic"],
        featured: true,
        createdAt: "2024-01-05"
    },
    {
        id: 12,
        title: "Graduation Success",
        preview: "Achievement-focused graduation card with cap and diploma",
        category: "congratulations",
        image: "https://picsum.photos/seed/grad1/400/600.jpg",
        tags: ["graduation", "success", "achievement"],
        featured: false,
        createdAt: "2024-01-04"
    }
];

// State management
let currentCategory = 'all';
let searchTerm = '';
let displayedCards = 8;
let filteredCards = [...galleryCards];

// Initialize the gallery page
document.addEventListener('DOMContentLoaded', function() {
    renderGalleryCards();
    updateCategoryButtons();
    initializeEventListeners();
});

// Initialize event listeners
function initializeEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('gallerySearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchTerm = this.value.toLowerCase();
            applyFilters();
        });
    }

    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            currentCategory = this.value;
            applyFilters();
        });
    }
}

// Render gallery cards
function renderGalleryCards() {
    const galleryGrid = document.getElementById('galleryGrid');
    const emptyState = document.getElementById('emptyState');
    const cardsToShow = filteredCards.slice(0, displayedCards);
    
    if (cardsToShow.length === 0) {
        galleryGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    galleryGrid.innerHTML = cardsToShow.map(card => `
        <div class="gallery-card bg-white rounded-xl overflow-hidden card-shadow hover-lift fade-in" data-category="${card.category}">
            <div class="relative">
                <img src="${card.image}" alt="${card.title}" class="w-full h-64 object-cover">
                <div class="absolute top-4 left-4">
                    <span class="category-tag">${formatCategory(card.category)}</span>
                </div>
                ${card.featured ? '<div class="absolute top-4 right-4"><i class="fas fa-star text-yellow-400 text-xl"></i></div>' : ''}
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-4 left-4 right-4 text-white">
                        <h3 class="font-bold text-lg mb-2">${card.title}</h3>
                        <p class="text-sm opacity-90">${card.preview}</p>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="font-semibold text-lg">${card.title}</h3>
                    <div class="flex gap-2">
                        <button onclick="saveCardToFavorites(${JSON.stringify(card).replace(/"/g, '&quot;')})" 
                                class="text-gray-400 hover:text-red-500 transition-colors">
                            <i class="far fa-heart"></i>
                        </button>
                        <button onclick="shareCard(${card.id})" 
                                class="text-gray-400 hover:text-blue-500 transition-colors">
                            <i class="fas fa-share"></i>
                        </button>
                    </div>
                </div>
                <p class="text-gray-600 text-sm mb-3">${card.preview}</p>
                <div class="flex flex-wrap gap-1 mb-3">
                    ${card.tags.map(tag => `
                        <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            #${tag}
                        </span>
                    `).join('')}
                </div>
                <div class="flex gap-2">
                    <button onclick="useCardTemplate(${card.id})" 
                            class="flex-1 bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm">
                        <i class="fas fa-magic mr-1"></i>
                        Use Template
                    </button>
                    <button onclick="previewCard(${card.id})" 
                            class="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <i class="fas fa-eye mr-1"></i>
                        Preview
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Hide load more button if all cards are displayed
    const loadMoreBtn = document.querySelector('button[onclick="loadMoreCards()"]');
    if (loadMoreBtn) {
        if (cardsToShow.length >= filteredCards.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// Filter cards by category
function filterByCategory(category) {
    currentCategory = category;
    applyFilters();
    updateCategoryButtons();
}

// Apply all filters
function applyFilters() {
    filteredCards = galleryCards.filter(card => {
        const matchesCategory = currentCategory === 'all' || card.category === currentCategory;
        const matchesSearch = searchTerm === '' || 
            card.title.toLowerCase().includes(searchTerm) ||
            card.preview.toLowerCase().includes(searchTerm) ||
            card.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });
    
    displayedCards = 8; // Reset displayed cards
    renderGalleryCards();
    updateCategoryButtons();
}

// Update category button styles
function updateCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        const btnCategory = btn.textContent.toLowerCase().replace(' ', '').replace('&', '').replace('-', '');
        const isActive = (currentCategory === 'all' && btn.textContent === 'All Cards') ||
                        (currentCategory !== 'all' && btnCategory === currentCategory.replace('-', ''));
        
        if (isActive) {
            btn.className = 'category-btn px-4 py-2 rounded-lg transition-colors bg-purple-500 text-white';
        } else {
            btn.className = 'category-btn px-4 py-2 rounded-lg transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200';
        }
    });
}

// Load more cards
function loadMoreCards() {
    displayedCards += 4;
    renderGalleryCards();
}

// Format category name
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Use card template
function useCardTemplate(cardId) {
    const card = galleryCards.find(c => c.id === cardId);
    if (card) {
        // Save to recent cards
        saveCardToRecent(card);
        
        // Navigate to editor with template
        window.location.href = `editor.html?template=${cardId}`;
    }
}

// Preview card
function previewCard(cardId) {
    const card = galleryCards.find(c => c.id === cardId);
    if (card) {
        // Create preview modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-xl max-w-2xl max-h-[90vh] overflow-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold">${card.title}</h3>
                        <button onclick="closeModal(this)" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    <img src="${card.image}" alt="${card.title}" class="w-full h-96 object-cover rounded-lg mb-4">
                    <p class="text-gray-600 mb-4">${card.preview}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${card.tags.map(tag => `
                            <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                #${tag}
                            </span>
                        `).join('')}
                    </div>
                    <div class="flex gap-3">
                        <button onclick="useCardTemplate(${card.id}); closeModal(this);" 
                                class="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                            <i class="fas fa-magic mr-2"></i>
                            Use This Template
                        </button>
                        <button onclick="closeModal(this)" 
                                class="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on backdrop click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
}

// Share card
function shareCard(cardId) {
    const card = galleryCards.find(c => c.id === cardId);
    if (card) {
        // Create share modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-xl max-w-md w-full mx-4">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-4">Share ${card.title}</h3>
                    <div class="space-y-3">
                        <button onclick="shareOnSocial('facebook', ${card.id}); closeModal(this);" 
                                class="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            <i class="fab fa-facebook"></i>
                            Share on Facebook
                        </button>
                        <button onclick="shareOnSocial('twitter', ${card.id}); closeModal(this);" 
                                class="w-full flex items-center justify-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                            <i class="fab fa-twitter"></i>
                            Share on Twitter
                        </button>
                        <button onclick="copyShareLink(${card.id}); closeModal(this);" 
                                class="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <i class="fas fa-link"></i>
                            Copy Link
                        </button>
                    </div>
                    <button onclick="closeModal(this)" 
                            class="w-full mt-4 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on backdrop click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
}

// Share on social media
function shareOnSocial(platform, cardId) {
    const card = galleryCards.find(c => c.id === cardId);
    if (card) {
        const url = `${window.location.origin}/gallery.html?card=${cardId}`;
        const text = `Check out this beautiful greeting card: ${card.title}`;
        
        let shareUrl = '';
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }
}

// Copy share link
function copyShareLink(cardId) {
    const url = `${window.location.origin}/gallery.html?card=${cardId}`;
    navigator.clipboard.writeText(url).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy link', 'error');
    });
}

// Close modal
function closeModal(button) {
    const modal = button.closest('.fixed');
    if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
    }
}

// Export functions for global access
window.filterByCategory = filterByCategory;
window.loadMoreCards = loadMoreCards;
window.useCardTemplate = useCardTemplate;
window.previewCard = previewCard;
window.shareCard = shareCard;


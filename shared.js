// Shared JavaScript for cross-page interactions and visualization
// This file handles common functionality across all pages

// Global app state
const appState = {
    currentPage: window.location.pathname.split('/').pop() || 'index.html',
    userPreferences: JSON.parse(localStorage.getItem('userPreferences') || '{}'),
    recentCards: JSON.parse(localStorage.getItem('recentCards') || '[]'),
    favoriteCards: JSON.parse(localStorage.getItem('favoriteCards') || '[]')
};

// Initialize shared functionality
document.addEventListener('DOMContentLoaded', function() {
    initSharedFunctionality();
});

// Initialize shared functionality
function initSharedFunctionality() {
    // Set up navigation highlighting
    updateActiveNavigation();

    // Initialize mobile menu
    initMobileMenu();

    // Add smooth scrolling
    addSmoothScrolling();

    // Initialize keyboard shortcuts
    initKeyboardShortcuts();

    // Load user preferences
    loadUserPreferences();

    // Add page transitions
    addPageTransitions();

    // Initialize analytics
    initAnalytics();
}

// Update active navigation highlighting
function updateActiveNavigation() {
    const currentPage = appState.currentPage;
    const navLinks = document.querySelectorAll('nav a[href], .mobile-menu a[href]');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('text-purple-600', 'font-semibold');
            link.classList.remove('text-gray-700');
        } else {
            link.classList.remove('text-purple-600', 'font-semibold');
            link.classList.add('text-gray-700');
        }
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('button[onclick="toggleMobileMenu()"]');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                mobileMenu.classList.add('hidden');
            }
        });
    }
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

// Initialize keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Ctrl/Cmd + K for search
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
                // Navigate to gallery if not already there
                if (!window.location.pathname.includes('gallery.html')) {
                    window.location.href = 'gallery.html';
                }
            }
        }

        // Ctrl/Cmd + B for blog (now About)
        if ((event.ctrlKey || event.metaKey) && event.key === 'b') {
            event.preventDefault();
            window.location.href = 'blog.html';
        }

        // Ctrl/Cmd + H for home
        if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
            event.preventDefault();
            window.location.href = 'index.html';
        }

        // Ctrl/Cmd + E for editor
        if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
            event.preventDefault();
            window.location.href = 'editor.html';
        }
    });
}

// Load user preferences
function loadUserPreferences() {
    // Apply dark mode if enabled
    if (appState.userPreferences.darkMode) {
        document.body.classList.add('dark-mode');
    }

    // Apply font size preference
    if (appState.userPreferences.fontSize) {
        document.body.style.fontSize = appState.userPreferences.fontSize;
    }
}

// Save user preferences
function saveUserPreferences(preferences) {
    appState.userPreferences = { ...appState.userPreferences, ...preferences };
    localStorage.setItem('userPreferences', JSON.stringify(appState.userPreferences));
}

// Add page transitions
function addPageTransitions() {
    // Add fade-in animation to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Add transition to all internal links
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault();

                // Fade out
                document.body.style.opacity = '0';

                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}

// Initialize analytics
function initAnalytics() {
    // Track page view
    trackPageView(appState.currentPage);

    // Track user interactions
    trackUserInteractions();
}

// Track page view
function trackPageView(page) {
    // Simple analytics tracking (replace with actual analytics in production)
    const pageViews = JSON.parse(localStorage.getItem('pageViews') || '{}');
    pageViews[page] = (pageViews[page] || 0) + 1;
    localStorage.setItem('pageViews', JSON.stringify(pageViews));

    console.log(`Page view: ${page} (${pageViews[page]} total)`);
}

// Track user interactions
function trackUserInteractions() {
    // Track button clicks
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('click', function() {
            const text = this.textContent.trim();
            const action = `click: ${text}`;
            trackInteraction(action);
        });
    });

    // Track form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function() {
            trackInteraction('form_submit');
        });
    });
}

// Track interaction
function trackInteraction(action) {
    const interactions = JSON.parse(localStorage.getItem('interactions') || '[]');
    interactions.push({
        action: action,
        page: appState.currentPage,
        timestamp: new Date().toISOString()
    });

    // Keep only last 100 interactions
    if (interactions.length > 100) {
        interactions.shift();
    }

    localStorage.setItem('interactions', JSON.stringify(interactions));
    console.log(`Interaction tracked: ${action}`);
}

// Show notification (global function)
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;

    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-white'
    };

    notification.classList.add(...colors[type].split(' '));

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };

    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fas ${icons[type]}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after duration
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Card data management
function saveCardToRecent(cardData) {
    const recentCards = appState.recentCards.filter(card => card.id !== cardData.id);
    recentCards.unshift({
        ...cardData,
        timestamp: new Date().toISOString()
    });

    // Keep only last 10 recent cards
    if (recentCards.length > 10) {
        recentCards.pop();
    }

    appState.recentCards = recentCards;
    localStorage.setItem('recentCards', JSON.stringify(recentCards));
}

function saveCardToFavorites(cardData) {
    const favorites = appState.favoriteCards.filter(card => card.id !== cardData.id);
    favorites.push({
        ...cardData,
        timestamp: new Date().toISOString()
    });

    appState.favoriteCards = favorites;
    localStorage.setItem('favoriteCards', JSON.stringify(favorites));

    showNotification('Card added to favorites!', 'success');
}

function removeCardFromFavorites(cardId) {
    const favorites = appState.favoriteCards.filter(card => card.id !== cardId);
    appState.favoriteCards = favorites;
    localStorage.setItem('favoriteCards', JSON.stringify(favorites));

    showNotification('Card removed from favorites', 'info');
}

// Search functionality
function performSearch(query, context = 'all') {
    const searchResults = {
        cards: [],
        blogPosts: [],
        templates: []
    };

    // Search cards (if gallery data is available)
    if (typeof galleryCards !== 'undefined') {
        searchResults.cards = galleryCards.filter(card => 
            card.title.toLowerCase().includes(query.toLowerCase()) ||
            card.preview.toLowerCase().includes(query.toLowerCase()) ||
            card.category.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Search blog posts (if blog data is available)
    if (typeof blogPosts !== 'undefined') {
        searchResults.blogPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
    }

    // Search templates (if template data is available)
    if (typeof cardTemplates !== 'undefined') {
        searchResults.templates = cardTemplates.filter(template => 
            template.name.toLowerCase().includes(query.toLowerCase()) ||
            template.occasion.toLowerCase().includes(query.toLowerCase())
        );
    }

    return searchResults;
}

// Theme management
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    saveUserPreferences({ darkMode: isDarkMode });
    showNotification(`${isDarkMode ? 'Dark' : 'Light'} mode enabled`, 'info');
}

// Font size management
function setFontSize(size) {
    document.body.style.fontSize = size;
    saveUserPreferences({ fontSize: size });
    showNotification(`Font size changed`, 'info');
}

// Export functions for global access
window.showNotification = showNotification;
window.saveCardToRecent = saveCardToRecent;
window.saveCardToFavorites = saveCardToFavorites;
window.removeCardFromFavorites = removeCardFromFavorites;
window.performSearch = performSearch;
window.toggleDarkMode = toggleDarkMode;
window.setFontSize = setFontSize;
window.saveUserPreferences = saveUserPreferences;

// Mobile menu toggle (for compatibility)
window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
};

// Editor page JavaScript
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

const colorOptions = [
    { name: 'Pink Purple', colors: ['from-pink-400', 'to-purple-400'] },
    { name: 'Blue Indigo', colors: ['from-blue-400', 'to-indigo-400'] },
    { name: 'Green Teal', colors: ['from-green-400', 'to-teal-400'] },
    { name: 'Orange Red', colors: ['from-orange-400', 'to-red-400'] },
    { name: 'Yellow Orange', colors: ['from-yellow-400', 'to-orange-400'] },
    { name: 'Purple Pink', colors: ['from-purple-400', 'to-pink-400'] }
];

const textColors = ['#ffffff', '#000000', '#1f2937', '#dc2626', '#059669', '#2563eb'];

// Global state
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

let previewMode = false;
let selectedTemplate = null;

// Initialize editor when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initEditor();
});

// Initialize editor
function initEditor() {
    renderColorOptions();
    renderTextColorOptions();
    updateCard();
    
    // Check for selected card from gallery
    const selectedCard = localStorage.getItem('selectedCard');
    if (selectedCard) {
        const card = JSON.parse(selectedCard);
        applyGalleryCard(card);
        localStorage.removeItem('selectedCard');
    }
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add mobile menu functionality
    initMobileMenu();
    
    // Add keyboard navigation
    initKeyboardNavigation();
}

// Render color options
function renderColorOptions() {
    const colorContainer = document.getElementById('colorOptions');
    if (!colorContainer) return;
    
    colorContainer.innerHTML = '';
    
    colorOptions.forEach((option, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-option rounded-lg p-4 cursor-pointer';
        colorDiv.style.background = `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`;
        colorDiv.style.setProperty('--tw-gradient-from', option.colors[0].replace('from-', 'rgb(var(--tw-'));
        colorDiv.style.setProperty('--tw-gradient-to', option.colors[1].replace('to-', 'rgb(var(--tw-'));
        
        colorDiv.innerHTML = `
            <div class="h-12 w-full bg-gradient-to-br ${option.colors[0]} ${option.colors[1]} rounded"></div>
            <p class="text-xs text-center mt-2">${option.name}</p>
        `;
        
        colorDiv.onclick = () => selectColorOption(option, colorDiv);
        colorContainer.appendChild(colorDiv);
    });
}

// Render text color options
function renderTextColorOptions() {
    const textColorContainer = document.getElementById('textColorOptions');
    if (!textColorContainer) return;
    
    textColorContainer.innerHTML = '';
    
    textColors.forEach((color, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'text-color-option w-8 h-8 rounded-full border-2 border-gray-300';
        colorDiv.style.backgroundColor = color;
        
        colorDiv.onclick = () => selectTextColor(color, colorDiv);
        textColorContainer.appendChild(colorDiv);
    });
}

// Select color option
function selectColorOption(option, element) {
    // Remove selected class from all options
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    element.classList.add('selected');
    
    // Update card data
    currentCardData.backgroundColor = option.colors;
    updateCard();
}

// Select text color
function selectTextColor(color, element) {
    // Remove selected class from all options
    document.querySelectorAll('.text-color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    element.classList.add('selected');
    
    // Update card data
    currentCardData.textColor = color;
    updateCard();
}

// Update card preview
function updateCard() {
    const cardPreview = document.getElementById('cardPreview');
    if (!cardPreview) return;
    
    // Update text content
    const titleInput = document.getElementById('titleInput');
    const recipientInput = document.getElementById('recipientInput');
    const messageInput = document.getElementById('messageInput');
    const signatureInput = document.getElementById('signatureInput');
    const fontSizeSelect = document.getElementById('fontSizeSelect');
    const fontFamilySelect = document.getElementById('fontFamilySelect');
    
    if (titleInput) currentCardData.title = titleInput.value;
    if (recipientInput) currentCardData.recipient = recipientInput.value;
    if (messageInput) currentCardData.message = messageInput.value;
    if (signatureInput) currentCardData.signature = signatureInput.value;
    if (fontSizeSelect) currentCardData.fontSize = fontSizeSelect.value;
    if (fontFamilySelect) currentCardData.fontFamily = fontFamilySelect.value;
    
    // Update preview HTML
    cardPreview.className = `w-full h-96 bg-gradient-to-br ${currentCardData.backgroundColor[0]} ${currentCardData.backgroundColor[1]} rounded-xl flex flex-col justify-center items-center p-8 text-center shadow-2xl`;
    cardPreview.innerHTML = `
        <div id="cardTitle" class="text-2xl font-bold mb-4 ${currentCardData.fontSize} ${currentCardData.fontFamily}" style="color: ${currentCardData.textColor}">${currentCardData.title}</div>
        <div id="cardRecipient" class="text-lg mb-6 ${currentCardData.fontFamily}" style="color: ${currentCardData.textColor}">${currentCardData.recipient}</div>
        <div id="cardMessage" class="text-base mb-6 max-w-md ${currentCardData.fontFamily}" style="color: ${currentCardData.textColor}">${currentCardData.message}</div>
        <div id="cardSignature" class="text-lg mt-auto ${currentCardData.fontFamily}" style="color: ${currentCardData.textColor}">${currentCardData.signature}</div>
    `;
}

// Toggle preview mode
function togglePreviewMode() {
    previewMode = !previewMode;
    const toggleText = document.getElementById('previewToggleText');
    const cardPreview = document.getElementById('cardPreview');
    
    if (previewMode) {
        toggleText.textContent = 'Edit Mode';
        cardPreview.style.transform = 'scale(0.8)';
        cardPreview.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.25)';
    } else {
        toggleText.textContent = 'Preview Mode';
        cardPreview.style.transform = 'scale(1)';
        cardPreview.style.boxShadow = '';
    }
}

// Download card
function downloadCard() {
    const cardElement = document.getElementById('cardPreview');
    if (!cardElement) return;
    
    // Show loading state
    const downloadBtn = event.target.closest('button');
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin w-4 h-4"></i> <span>Generating...</span>';
    downloadBtn.disabled = true;
    
    // Use html2canvas to capture the card
    html2canvas(cardElement, {
        backgroundColor: null,
        scale: 2,
        logging: false
    }).then(canvas => {
        // Create download link
        const link = document.createElement('a');
        link.download = `${currentCardData.title.replace(/\s+/g, '-').toLowerCase()}-card.png`;
        link.href = canvas.toDataURL();
        link.click();
        
        // Reset button
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        
        // Show success notification
        showNotification('Card downloaded successfully!', 'success');
    }).catch(error => {
        console.error('Error generating card:', error);
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        showNotification('Error generating card. Please try again.', 'error');
    });
}

// Start from template
function startFromTemplate() {
    const modal = document.getElementById('templatesModal');
    const modalContent = modal.querySelector('.grid');
    
    modalContent.innerHTML = '';
    
    cardTemplates.forEach((template, index) => {
        const templateCard = document.createElement('div');
        templateCard.className = 'bg-white rounded-xl overflow-hidden card-shadow hover-lift cursor-pointer';
        
        templateCard.innerHTML = `
            <div class="h-48 bg-gradient-to-br ${template.colors[0]} ${template.colors[1]} flex items-center justify-center">
                <i class="fas ${template.icon} text-white text-4xl"></i>
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
        modalContent.appendChild(templateCard);
    });
    
    modal.classList.remove('hidden');
}

// Start from scratch
function startFromScratch() {
    // Reset to default values
    currentCardData = {
        title: 'Your Title',
        message: 'Your message here',
        recipient: 'Dear',
        signature: 'Best wishes,',
        backgroundColor: ['from-pink-400', 'to-purple-400'],
        textColor: '#ffffff',
        fontSize: 'text-xl',
        fontFamily: 'font-sans'
    };
    
    // Update form inputs
    document.getElementById('titleInput').value = currentCardData.title;
    document.getElementById('recipientInput').value = currentCardData.recipient;
    document.getElementById('messageInput').value = currentCardData.message;
    document.getElementById('signatureInput').value = currentCardData.signature;
    document.getElementById('fontSizeSelect').value = currentCardData.fontSize;
    document.getElementById('fontFamilySelect').value = currentCardData.fontFamily;
    
    updateCard();
    showNotification('Started with blank template!', 'info');
}

// Select template
function selectTemplate(template) {
    selectedTemplate = template;
    currentCardData.backgroundColor = template.colors;
    currentCardData.title = template.name;
    
    // Update form
    document.getElementById('titleInput').value = currentCardData.title;
    
    updateCard();
    closeTemplatesModal();
    showNotification(`Selected "${template.name}" template!`, 'success');
}

// Apply gallery card
function applyGalleryCard(card) {
    currentCardData.title = card.title;
    currentCardData.message = card.preview;
    currentCardData.backgroundColor = card.colors;
    
    // Update form
    document.getElementById('titleInput').value = currentCardData.title;
    document.getElementById('messageInput').value = currentCardData.message;
    
    updateCard();
    showNotification(`Gallery card "${card.title}" loaded!`, 'success');
}

// Close templates modal
function closeTemplatesModal() {
    const modal = document.getElementById('templatesModal');
    modal.classList.add('hidden');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    
    const colors = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white',
        warning: 'bg-yellow-500 text-white'
    };
    
    notification.classList.add(...colors[type].split(' '));
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
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

// Initialize keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        // ESC key to close modal or mobile menu
        if (event.key === 'Escape') {
            const modal = document.getElementById('templatesModal');
            const mobileMenu = document.getElementById('mobileMenu');
            
            if (!modal.classList.contains('hidden')) {
                closeTemplatesModal();
            } else {
                mobileMenu.classList.add('hidden');
            }
        }
        
        // Ctrl/Cmd + S to save/download
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            downloadCard();
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Export functions for global access
window.togglePreviewMode = togglePreviewMode;
window.downloadCard = downloadCard;
window.startFromTemplate = startFromTemplate;
window.startFromScratch = startFromScratch;
window.closeTemplatesModal = closeTemplatesModal;
window.toggleMobileMenu = toggleMobileMenu;

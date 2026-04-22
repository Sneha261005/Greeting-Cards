// Blog Data with SEO-optimized content
const blogPosts = [
    {
        id: 1,
        title: "10 Creative Birthday Card Design Ideas That Will Wow Your Friends",
        slug: "creative-birthday-card-design-ideas",
        category: "design",
        author: "Sarah Johnson",
        date: "2024-01-15",
        readTime: "5 min read",
        excerpt: "Discover innovative birthday card designs that go beyond the ordinary. From pop-up cards to interactive elements, these ideas will make your birthday wishes unforgettable.",
        image: "https://picsum.photos/seed/birthday-designs/800/400.jpg",
        tags: ["birthday", "design", "creative", "DIY"],
        featured: true,
        seo: {
            metaTitle: "10 Creative Birthday Card Design Ideas | Greeting Cards Blog",
            metaDescription: "Explore innovative birthday card designs with pop-ups, interactive elements, and creative techniques. Make your birthday wishes stand out with these unique card ideas.",
            keywords: "birthday card designs, creative birthday cards, DIY birthday cards, card making ideas"
        }
    },
    {
        id: 2,
        title: "The Ultimate Guide to Writing Heartfelt Birthday Messages",
        slug: "birthday-card-message-writing-guide",
        category: "writing",
        author: "Michael Chen",
        date: "2024-01-12",
        readTime: "7 min read",
        excerpt: "Learn the art of crafting perfect birthday messages that touch the heart. This guide covers tone, personalization, and examples for every relationship.",
        image: "https://picsum.photos/seed/birthday-messages/800/400.jpg",
        tags: ["birthday", "writing", "messages", "guide"],
        featured: true,
        seo: {
            metaTitle: "Birthday Card Message Writing Guide | Heartfelt Messages",
            metaDescription: "Master the art of writing birthday messages with our comprehensive guide. Learn tone, personalization tips, and get examples for every relationship.",
            keywords: "birthday messages, card writing tips, heartfelt birthday wishes, message examples"
        }
    },
    {
        id: 3,
        title: "Valentine's Day Card Trends 2024: What's Hot This Year",
        slug: "valentines-day-card-trends-2024",
        category: "seasonal",
        author: "Emma Davis",
        date: "2024-01-28",
        readTime: "4 min read",
        excerpt: "Stay ahead of the curve with the latest Valentine's Day card trends. From minimalist designs to sustainable materials, discover what's popular this year.",
        image: "https://picsum.photos/seed/valentines-trends/800/400.jpg",
        tags: ["valentines", "trends", "seasonal", "2024"],
        featured: false,
        seo: {
            metaTitle: "Valentine's Day Card Trends 2024 | Latest Design Ideas",
            metaDescription: "Discover the hottest Valentine's Day card trends for 2024. From minimalist designs to sustainable materials, find the perfect style for your love.",
            keywords: "Valentine's Day cards, card trends 2024, love card designs, romantic cards"
        }
    },
    {
        id: 4,
        title: "How to Make Professional-Looking Greeting Cards at Home",
        slug: "professional-greeting-cards-home-diy",
        category: "tips",
        author: "Alex Rivera",
        date: "2024-01-20",
        readTime: "6 min read",
        excerpt: "Transform your home card-making setup with these professional techniques. Learn about tools, materials, and methods that give your cards a polished finish.",
        image: "https://picsum.photos/seed/professional-cards/800/400.jpg",
        tags: ["DIY", "professional", "tools", "techniques"],
        featured: false,
        seo: {
            metaTitle: "DIY Professional Greeting Cards | Home Card Making Guide",
            metaDescription: "Learn how to make professional-looking greeting cards at home. Discover tools, materials, and techniques for polished, professional results.",
            keywords: "DIY greeting cards, professional card making, home crafts, card tools"
        }
    },
    {
        id: 5,
        title: "Christmas Card Photography Tips for Stunning Results",
        slug: "christmas-card-photography-tips",
        category: "seasonal",
        author: "Lisa Wang",
        date: "2023-12-15",
        readTime: "8 min read",
        excerpt: "Capture the perfect holiday photo for your Christmas cards. Professional photography tips that work with any camera or smartphone.",
        image: "https://picsum.photos/seed/christmas-photos/800/400.jpg",
        tags: ["christmas", "photography", "holidays", "tips"],
        featured: true,
        seo: {
            metaTitle: "Christmas Card Photography Tips | Holiday Photo Guide",
            metaDescription: "Take stunning Christmas card photos with our professional photography guide. Perfect for any camera or smartphone user.",
            keywords: "Christmas card photos, holiday photography tips, family photos, card pictures"
        }
    },
    {
        id: 6,
        title: "Color Psychology in Greeting Cards: Choosing the Right Palette",
        slug: "color-psychology-greeting-cards",
        category: "design",
        author: "Dr. Rachel Green",
        date: "2024-01-18",
        readTime: "9 min read",
        excerpt: "Understand how colors affect emotions and choose the perfect palette for your greeting cards. Scientific insights into color combinations.",
        image: "https://picsum.photos/seed/color-psychology/800/400.jpg",
        tags: ["color", "psychology", "design", "theory"],
        featured: false,
        seo: {
            metaTitle: "Color Psychology in Greeting Cards | Design Guide",
            metaDescription: "Learn color psychology for greeting cards. Choose the perfect color palette based on emotional impact and design theory.",
            keywords: "color psychology, greeting card colors, design theory, color combinations"
        }
    },
    {
        id: 7,
        title: "Thank You Card Etiquette: When and How to Send Them",
        slug: "thank-you-card-etiquette-guide",
        category: "writing",
        author: "James Mitchell",
        date: "2024-01-10",
        readTime: "5 min read",
        excerpt: "Master the art of thank you card etiquette. Learn when to send them, what to write, and proper timing for any occasion.",
        image: "https://picsum.photos/seed/thank-you-etiquette/800/400.jpg",
        tags: ["thank you", "etiquette", "manners", "writing"],
        featured: false,
        seo: {
            metaTitle: "Thank You Card Etiquette Guide | When & How to Send",
            metaDescription: "Complete guide to thank you card etiquette. Learn proper timing, what to write, and when to send thank you cards.",
            keywords: "thank you card etiquette, card manners, writing thank yous, gratitude cards"
        }
    },
    {
        id: 8,
        title: "Easter Card Ideas: Beyond the Traditional Bunny",
        slug: "easter-card-ideas-creative",
        category: "seasonal",
        author: "Sophie Turner",
        date: "2024-03-20",
        readTime: "6 min read",
        excerpt: "Explore creative Easter card designs that go beyond the usual. From spring florals to modern abstract designs, find fresh inspiration.",
        image: "https://picsum.photos/seed/easter-cards/800/400.jpg",
        tags: ["easter", "spring", "creative", "seasonal"],
        featured: false,
        seo: {
            metaTitle: "Creative Easter Card Ideas | Modern Spring Designs",
            metaDescription: "Discover unique Easter card ideas beyond traditional designs. From spring florals to modern abstract concepts.",
            keywords: "Easter cards, spring card ideas, creative holiday cards, Easter crafts"
        }
    },
    {
        id: 9,
        title: "Typography Tips for Greeting Cards: Font Selection Guide",
        slug: "typography-greeting-cards-font-guide",
        category: "design",
        author: "Mark Thompson",
        date: "2024-01-22",
        readTime: "7 min read",
        excerpt: "Choose the perfect fonts for your greeting cards with this comprehensive typography guide. Learn about readability, mood, and pairing.",
        image: "https://picsum.photos/seed/typography-guide/800/400.jpg",
        tags: ["typography", "fonts", "design", "text"],
        featured: false,
        seo: {
            metaTitle: "Typography Guide for Greeting Cards | Font Selection Tips",
            metaDescription: "Master typography for greeting cards. Learn font selection, pairing, and readability tips for professional card design.",
            keywords: "greeting card fonts, typography tips, font pairing, card text design"
        }
    },
    {
        id: 10,
        title: "Mother's Day Card Messages That Make Her Cry (Happy Tears!)",
        slug: "mothers-day-emotional-messages",
        category: "writing",
        author: "Jennifer Lopez",
        date: "2024-04-25",
        readTime: "8 min read",
        excerpt: "Craft heartfelt Mother's Day messages that celebrate your mom. Emotional examples and writing tips for every type of mother-child relationship.",
        image: "https://picsum.photos/seed/mothers-day-messages/800/400.jpg",
        tags: ["mother's day", "emotional", "messages", "family"],
        featured: true,
        seo: {
            metaTitle: "Mother's Day Card Messages | Heartfelt Emotional Wishes",
            metaDescription: "Write emotional Mother's Day card messages that celebrate your mom. Examples and tips for heartfelt wishes.",
            keywords: "Mother's Day messages, emotional card wishes, mom card ideas, heartfelt messages"
        }
    },
    {
        id: 11,
        title: "Sustainable Greeting Cards: Eco-Friendly Options",
        slug: "sustainable-eco-friendly-greeting-cards",
        category: "tips",
        author: "Green Living Team",
        date: "2024-01-25",
        readTime: "6 min read",
        excerpt: "Discover eco-friendly greeting card options that don't compromise on style. From recycled materials to digital alternatives.",
        image: "https://picsum.photos/seed/sustainable-cards/800/400.jpg",
        tags: ["sustainable", "eco-friendly", "environment", "green"],
        featured: false,
        seo: {
            metaTitle: "Sustainable Greeting Cards | Eco-Friendly Options",
            metaDescription: "Explore eco-friendly greeting card options. From recycled materials to sustainable practices for environmentally conscious card makers.",
            keywords: "sustainable cards, eco-friendly greeting cards, green crafts, recycled cards"
        }
    },
    {
        id: 12,
        title: "Father's Day Card Ideas for Every Type of Dad",
        slug: "fathers-day-card-ideas-personalities",
        category: "seasonal",
        author: "Tom Harris",
        date: "2024-05-28",
        readTime: "5 min read",
        excerpt: "Find the perfect Father's Day card idea based on your dad's personality. From sports themes to tech-inspired designs.",
        image: "https://picsum.photos/seed/fathers-day-ideas/800/400.jpg",
        tags: ["father's day", "personality", "masculine", "ideas"],
        featured: false,
        seo: {
            metaTitle: "Father's Day Card Ideas for Every Personality Type",
            metaDescription: "Discover Father's Day card ideas tailored to different dad personalities. From sports fans to tech enthusiasts.",
            keywords: "Father's Day cards, dad card ideas, masculine card designs, personality-based gifts"
        }
    },
    {
        id: 13,
        title: "Calligraphy for Beginners: Beautiful Card Lettering",
        slug: "calligraphy-beginners-greeting-cards",
        category: "tips",
        author: "Maria Rodriguez",
        date: "2024-01-30",
        readTime: "10 min read",
        excerpt: "Learn basic calligraphy techniques to elevate your greeting cards. Step-by-step guide for beautiful lettering.",
        image: "https://picsum.photos/seed/calligraphy-guide/800/400.jpg",
        tags: ["calligraphy", "lettering", "technique", "beginner"],
        featured: false,
        seo: {
            metaTitle: "Calligraphy for Greeting Cards | Beginner's Guide",
            metaDescription: "Learn calligraphy basics for beautiful greeting card lettering. Step-by-step techniques for beginners.",
            keywords: "calligraphy for cards, lettering techniques, beginner calligraphy, card writing"
        }
    },
    {
        id: 14,
        title: "Wedding Card Wishes: Modern & Traditional Messages",
        slug: "wedding-card-wishes-modern-traditional",
        category: "writing",
        author: "Wedding Experts",
        date: "2024-02-10",
        readTime: "7 min read",
        excerpt: "Find the perfect wedding card message with our collection of modern and traditional wishes. For couples, parents, and friends.",
        image: "https://picsum.photos/seed/wedding-wishes/800/400.jpg",
        tags: ["wedding", "marriage", "congratulations", "messages"],
        featured: false,
        seo: {
            metaTitle: "Wedding Card Wishes | Modern & Traditional Messages",
            metaDescription: "Perfect wedding card messages for every relationship. Modern and traditional wishes for couples, parents, and friends.",
            keywords: "wedding card wishes, marriage congratulations, wedding messages, card writing"
        }
    },
    {
        id: 15,
        title: "Graduation Card Messages: Inspirational & Funny Options",
        slug: "graduation-card-messages-inspirational-funny",
        category: "writing",
        author: "Education Team",
        date: "2024-05-15",
        readTime: "6 min read",
        excerpt: "Celebrate academic achievement with the perfect graduation card message. Mix of inspirational quotes and humorous options.",
        image: "https://picsum.photos/seed/graduation-messages/800/400.jpg",
        tags: ["graduation", "achievement", "inspirational", "funny"],
        featured: false,
        seo: {
            metaTitle: "Graduation Card Messages | Inspirational & Funny Wishes",
            metaDescription: "Find the perfect graduation card message. Collection of inspirational quotes and humorous wishes for graduates.",
            keywords: "graduation card messages, graduation wishes, achievement cards, congratulations"
        }
    },
    {
        id: 16,
        title: "Minimalist Greeting Card Design: Less is More",
        slug: "minimalist-greeting-card-design",
        category: "design",
        author: "Design Studio",
        date: "2024-02-05",
        readTime: "5 min read",
        excerpt: "Explore the beauty of minimalist greeting card design. Learn how simplicity creates impact with these clean, modern approaches.",
        image: "https://picsum.photos/seed/minimalist-design/800/400.jpg",
        tags: ["minimalist", "simple", "clean", "modern"],
        featured: false,
        seo: {
            metaTitle: "Minimalist Greeting Card Design | Simple & Clean Ideas",
            metaDescription: "Discover minimalist greeting card design principles. Learn how simplicity creates impact with clean, modern approaches.",
            keywords: "minimalist cards, simple card design, clean design, modern greeting cards"
        }
    },
    {
        id: 17,
        title: "Get Well Soon Card Ideas: Cheerful & Comforting Designs",
        slug: "get-well-soon-card-ideas",
        category: "seasonal",
        author: "Health & Wellness",
        date: "2024-01-08",
        readTime: "4 min read",
        excerpt: "Create thoughtful get well soon cards that bring comfort and cheer. Design ideas and message inspiration for recovery.",
        image: "https://picsum.photos/seed/get-well-cards/800/400.jpg",
        tags: ["get well", "recovery", "comfort", "health"],
        featured: false,
        seo: {
            metaTitle: "Get Well Soon Card Ideas | Cheerful Comforting Designs",
            metaDescription: "Create thoughtful get well soon cards with cheerful designs. Design ideas and comforting messages for recovery.",
            keywords: "get well soon cards, recovery cards, comfort messages, health wishes"
        }
    },
    {
        id: 18,
        title: "Digital vs Physical Greeting Cards: Pros and Cons",
        slug: "digital-vs-physical-greeting-cards-comparison",
        category: "tips",
        author: "Tech Analyst",
        date: "2024-02-15",
        readTime: "8 min read",
        excerpt: "Comprehensive comparison of digital and physical greeting cards. Help readers choose the best option for their needs.",
        image: "https://picsum.photos/seed/digital-physical-cards/800/400.jpg",
        tags: ["digital", "physical", "comparison", "technology"],
        featured: false,
        seo: {
            metaTitle: "Digital vs Physical Greeting Cards | Complete Comparison",
            metaDescription: "Compare digital and physical greeting cards. Pros, cons, and help choosing the best option for your needs.",
            keywords: "digital greeting cards, physical cards, e-cards vs paper, card comparison"
        }
    },
    {
        id: 19,
        title: "Sympathy Card Messages: What to Write in Difficult Times",
        slug: "sympathy-card-messages-difficult-times",
        category: "writing",
        author: "Compassion Team",
        date: "2024-01-05",
        readTime: "9 min read",
        excerpt: "Navigate sympathy card writing with sensitivity and care. Appropriate messages for different situations and relationships.",
        image: "https://picsum.photos/seed/sympathy-messages/800/400.jpg",
        tags: ["sympathy", "condolences", "difficult", "support"],
        featured: false,
        seo: {
            metaTitle: "Sympathy Card Messages | What to Write in Difficult Times",
            metaDescription: "Write appropriate sympathy card messages with care and sensitivity. Examples for different situations and relationships.",
            keywords: "sympathy card messages, condolence cards, difficult times, support messages"
        }
    },
    {
        id: 20,
        title: "Anniversary Card Ideas: Romantic & Creative Celebrations",
        slug: "anniversary-card-ideas-romantic-creative",
        category: "seasonal",
        author: "Romance Experts",
        date: "2024-02-20",
        readTime: "6 min read",
        excerpt: "Celebrate love with creative anniversary card ideas. From romantic to humorous, find the perfect way to mark the occasion.",
        image: "https://picsum.photos/seed/anniversary-ideas/800/400.jpg",
        tags: ["anniversary", "romantic", "celebration", "love"],
        featured: false,
        seo: {
            metaTitle: "Anniversary Card Ideas | Romantic & Creative Celebrations",
            metaDescription: "Find creative anniversary card ideas to celebrate love. From romantic to humorous, perfect for every couple.",
            keywords: "anniversary card ideas, romantic cards, celebration messages, love cards"
        }
    }
];

// Global state
let currentPage = 1;
let postsPerPage = 9;
let currentCategory = 'all';
let searchTerm = '';
let filteredPosts = [...blogPosts];

// Initialize blog when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
    updateSEO();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Render blog posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);
    
    postsToShow.forEach((post, index) => {
        const postCard = createBlogCard(post);
        postCard.style.animationDelay = `${index * 0.1}s`;
        blogGrid.appendChild(postCard);
    });
    
    updateLoadMoreButton();
}

// Create blog card element
function createBlogCard(post) {
    const card = document.createElement('article');
    card.className = 'blog-card bg-white rounded-xl overflow-hidden card-shadow hover-lift fade-in';
    
    const categoryColors = {
        design: 'from-blue-400 to-purple-400',
        writing: 'from-green-400 to-teal-400',
        seasonal: 'from-orange-400 to-red-400',
        tips: 'from-pink-400 to-purple-400'
    };
    
    card.innerHTML = `
        <div class="relative">
            <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover" loading="lazy">
            ${post.featured ? '<div class="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">Featured</div>' : ''}
            <div class="absolute top-4 right-4">
                <span class="category-tag">${post.category}</span>
            </div>
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-3">
                <span class="text-sm text-gray-500">${post.readTime}</span>
                <span class="text-sm text-gray-500">${formatDate(post.date)}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 line-clamp-2">
                <a href="blog-post.html?id=${post.id}" class="hover:text-purple-600 transition-colors">
                    ${post.title}
                </a>
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">${post.excerpt}</p>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <img src="https://picsum.photos/seed/author-${post.author}/40/40.jpg" alt="${post.author}" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-gray-700">${post.author}</span>
                </div>
                <a href="blog-post.html?id=${post.id}" class="text-purple-600 hover:text-purple-700 font-medium">
                    Read More &rarr;
                </a>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
                ${post.tags.map(tag => `<span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">#${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Search blogs
function searchBlogs() {
    const searchInput = document.getElementById('blogSearch');
    if (!searchInput) return;
    
    searchTerm = searchInput.value.toLowerCase();
    filterPosts();
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update button states
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-purple-500', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    });
    
    event.target.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
    event.target.classList.add('bg-purple-500', 'text-white');
    
    filterPosts();
}

// Filter posts
function filterPosts() {
    filteredPosts = blogPosts.filter(post => {
        const matchesCategory = currentCategory === 'all' || post.category === currentCategory;
        const matchesSearch = searchTerm === '' || 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });
    
    currentPage = 1;
    renderBlogPosts();
}

// Load more posts
function loadMorePosts() {
    currentPage++;
    renderBlogPosts();
}

// Update load more button
function updateLoadMoreButton() {
    const loadMoreBtn = document.querySelector('button[onclick="loadMorePosts()"]');
    if (!loadMoreBtn) return;
    
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const hasMore = filteredPosts.length > endIndex;
    
    if (hasMore) {
        loadMoreBtn.style.display = 'inline-block';
        loadMoreBtn.textContent = `Load More Posts (${filteredPosts.length - endIndex} remaining)`;
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

// Update SEO metadata
function updateSEO() {
    // Update page title
    document.title = filteredPosts.length > 0 ? 
        "Greeting Cards Blog - Tips, Ideas & Inspiration | Card Creator" :
        "No Results - Greeting Cards Blog";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = filteredPosts.length > 0 ?
            "Discover expert tips, creative ideas, and inspiration for creating beautiful greeting cards. Learn design techniques, writing tips, and seasonal card ideas." :
            "No blog posts found. Try different search terms or browse all categories.";
    }
}

// Export functions for global access
window.toggleMobileMenu = toggleMobileMenu;
window.searchBlogs = searchBlogs;
window.filterByCategory = filterByCategory;
window.loadMorePosts = loadMorePosts;

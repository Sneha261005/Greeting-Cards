// Main React Application for Greeting Cards Website

const { useState, useEffect } = React;

// Load blog data
let blogPosts = [];

// Load blog data from external file
try {
    // In a real implementation, this would be handled by a module system
    // For now, we'll include a simplified version of the blog data
    blogPosts = [
        {
            id: 1,
            title: "The Art of Writing Heartfelt Birthday Messages",
            excerpt: "Discover how to craft the perfect birthday message that will make your loved ones feel truly special.",
            content: `Birthdays are special occasions that deserve more than just a simple "Happy Birthday." They're opportunities to express genuine appreciation, love, and hope for the person celebrating another year of life.

When writing birthday messages, consider the personality of the recipient. Are they someone who appreciates humor, or do they prefer sentimental words? Are they celebrating a milestone birthday or just another year older?

Here are some tips for crafting the perfect birthday message:

1. **Be Specific**: Instead of generic wishes, mention specific qualities you admire about the person. "I love how your laughter lights up every room" is more meaningful than "You're great."

2. **Share a Memory**: Recall a special moment you've shared together. This personal touch shows you've taken time to reflect on your relationship.

3. **Look Forward**: Express excitement about future adventures and memories you'll create together.

4. **Keep it Authentic**: Write in your natural voice. Don't try to be poetic if you're not – sincerity matters more than sophistication.

Remember, the best birthday messages come from the heart. Whether you're writing for a parent, friend, partner, or colleague, your genuine emotions will shine through and make the recipient feel cherished.`,
            author: "Sarah Johnson",
            date: "2024-03-15",
            category: "Birthday",
            readTime: "5 min read",
            image: "https://picsum.photos/seed/birthday-writing/800/400.jpg"
        },
        {
            id: 2,
            title: "Wedding Card Etiquette: What to Write and What to Avoid",
            excerpt: "Navigate the delicate art of wedding card messages with our comprehensive guide to proper etiquette.",
            content: `Wedding cards are more than just congratulations – they're keepsakes that couples often treasure for years. Getting the message right requires thoughtfulness, sensitivity, and understanding of wedding etiquette.

**Do's for Wedding Cards:**

1. **Address the Couple Personally**: Use both partners' names if you know them well. If you only know one, address both but acknowledge your relationship with the person you know.

2. **Be Sincere**: Share genuine wishes for their future together. "I'm so happy to see two wonderful people build a life together" is always appropriate.

3. **Include Personal Touches**: If you have a special memory with the couple, briefly mention it. "I'll never forget when you two met at Sarah's party..."

4. **Focus on Their Future**: Express excitement about their journey ahead. "May your life together be as beautiful as your wedding day."

**What to Avoid:**

1. **Don't Mention Past Relationships**: Never reference ex-partners or previous marriages.

2. **Avoid Money Talk**: Don't mention the cost of the wedding or your gift amount.

3. **Skip Inside Jokes**: Unless you're very close to the couple, keep jokes general and appropriate.

4. **Don't Make It About You**: Keep the focus on the couple, not your own relationship experiences.

Remember, wedding cards become part of the couple's story. Your thoughtful words will be revisited anniversaries from now, making them worth the extra consideration.`,
            author: "Michael Chen",
            date: "2024-03-12",
            category: "Wedding",
            readTime: "4 min read",
            image: "https://picsum.photos/seed/wedding-etiquette/800/400.jpg"
        }
        // Include more blog posts as needed
    ];
} catch (error) {
    console.error('Error loading blog data:', error);
}

// Card data
const cardsData = [
    {
        id: 1,
        category: 'birthday',
        title: 'Happy Birthday',
        description: 'Celebrate their special day with joy and laughter',
        price: '$4.99',
        gradient: 'linear-gradient(135deg, #ff6b6b, #ffd93d)',
        defaultMessage: 'Happy Birthday! 🎉',
        icon: '🎂'
    },
    {
        id: 2,
        category: 'wedding',
        title: 'Wedding Wishes',
        description: 'Send your best wishes on their special day',
        price: '$5.99',
        gradient: 'linear-gradient(135deg, #ff6b9d, #c44569)',
        defaultMessage: 'Congratulations on your wedding! 💒',
        icon: '💑'
    },
    {
        id: 3,
        category: 'anniversary',
        title: 'Anniversary Love',
        description: 'Celebrate years of love and commitment',
        price: '$4.99',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        defaultMessage: 'Happy Anniversary! 💕',
        icon: '💍'
    },
    {
        id: 4,
        category: 'thank-you',
        title: 'Thank You',
        description: 'Express your gratitude with style',
        price: '$3.99',
        gradient: 'linear-gradient(135deg, #56ab2f, #a8e063)',
        defaultMessage: 'Thank you so much! 🙏',
        icon: '🌻'
    },
    {
        id: 5,
        category: 'congratulations',
        title: 'Congratulations',
        description: 'Celebrate their amazing achievement',
        price: '$4.99',
        gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
        defaultMessage: 'Congratulations! 🎊',
        icon: '🏆'
    },
    {
        id: 6,
        category: 'get-well',
        title: 'Get Well Soon',
        description: 'Send healing thoughts and well wishes',
        price: '$3.99',
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        defaultMessage: 'Get Well Soon! 💙',
        icon: '🌈'
    },
    {
        id: 7,
        category: 'birthday',
        title: 'Birthday Cake',
        description: 'Sweet wishes for a sweet person',
        price: '$4.99',
        gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
        defaultMessage: 'Have a sweet birthday! 🍰',
        icon: '🧁'
    },
    {
        id: 8,
        category: 'wedding',
        title: 'Forever Love',
        description: 'A beautiful beginning to forever',
        price: '$6.99',
        gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
        defaultMessage: 'Forever starts today! 💖',
        icon: '🌸'
    },
    {
        id: 9,
        category: 'anniversary',
        title: 'Golden Years',
        description: 'Celebrating golden memories',
        price: '$5.99',
        gradient: 'linear-gradient(135deg, #f2994a, #f2c94c)',
        defaultMessage: 'Golden years ahead! ⭐',
        icon: '🥂'
    }
];

// Color options for customization
const colorOptions = [
    { name: 'Sunset', value: 'linear-gradient(135deg, #ff6b6b, #ffd93d)' },
    { name: 'Ocean', value: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { name: 'Forest', value: 'linear-gradient(135deg, #56ab2f, #a8e063)' },
    { name: 'Purple Dream', value: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { name: 'Pink Bliss', value: 'linear-gradient(135deg, #ff6b9d, #c44569)' },
    { name: 'Golden', value: 'linear-gradient(135deg, #f2994a, #f2c94c)' }
];

// Header Component
const Header = () => {
    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo">
                    <i className="fas fa-envelope-open-text"></i> CardCraft
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#gallery" className="nav-link">Gallery</a></li>
                        <li><a href="#blog" className="nav-link">Blog</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

// Hero Section Component
const Hero = () => {
    return (
        <section className="hero" id="home">
            <h1>Beautiful Greeting Cards</h1>
            <p>Create and personalize stunning cards for every special moment</p>
            <a href="#gallery" className="cta-button">
                <i className="fas fa-magic"></i> Explore Cards
            </a>
        </section>
    );
};

// Category Filter Component
const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
    const categories = ['All', 'Birthday', 'Wedding', 'Anniversary', 'Thank You', 'Congratulations', 'Get Well'];
    
    return (
        <div className="categories">
            {categories.map(category => (
                <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

// Card Item Component
const CardItem = ({ card, onCardClick }) => {
    return (
        <div className="card-item" onClick={() => onCardClick(card)}>
            <div className={`card-preview ${card.category}`} style={{ background: card.gradient }}>
                <div className="card-message">
                    <div style={{ fontSize: '3rem' }}>{card.icon}</div>
                    <div style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>{card.defaultMessage}</div>
                </div>
            </div>
            <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <div className="card-price">{card.price}</div>
            </div>
        </div>
    );
};

// Card Gallery Component
const CardGallery = ({ cards, onCardClick }) => {
    return (
        <div className="card-gallery" id="gallery">
            {cards.map(card => (
                <CardItem key={card.id} card={card} onCardClick={onCardClick} />
            ))}
        </div>
    );
};

// Blog Post Item Component
const BlogPostItem = ({ post, onPostClick }) => {
    return (
        <article className="blog-post-item" onClick={() => onPostClick(post)}>
            <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-post-content">
                <div className="blog-post-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-author">
                    <span>{post.author}</span>
                    <span className="blog-date">{post.date}</span>
                </div>
            </div>
        </article>
    );
};

// Blog Section Component
const BlogSection = ({ posts, onPostClick }) => {
    return (
        <section className="blog-section" id="blog">
            <div className="section-header">
                <h2 className="section-title">Card Crafting Blog</h2>
                <p className="section-subtitle">Tips, inspiration, and stories behind the art of greeting cards</p>
            </div>
            <div className="blog-grid">
                {posts.map(post => (
                    <BlogPostItem key={post.id} post={post} onPostClick={onPostClick} />
                ))}
            </div>
        </section>
    );
};

// Individual Blog Post Component
const BlogPostPage = ({ post, onBack }) => {
    if (!post) return null;

    return (
        <div className="blog-post-page">
            <button className="back-button" onClick={onBack}>
                <i className="fas fa-arrow-left"></i> Back to Blog
            </button>
            <article className="blog-post-full">
                <header className="blog-post-header">
                    <div className="blog-post-hero-image">
                        <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-post-meta-header">
                        <span className="blog-category">{post.category}</span>
                        <span className="blog-read-time">{post.readTime}</span>
                        <span className="blog-date">{post.date}</span>
                    </div>
                    <h1 className="blog-post-full-title">{post.title}</h1>
                    <div className="blog-post-author-info">
                        <span>By {post.author}</span>
                    </div>
                </header>
                <div className="blog-post-body">
                    {post.content.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <footer className="blog-post-footer">
                    <div className="blog-post-actions">
                        <button className="blog-action-btn">
                            <i className="fas fa-heart"></i> Like
                        </button>
                        <button className="blog-action-btn">
                            <i className="fas fa-share"></i> Share
                        </button>
                        <button className="blog-action-btn">
                            <i className="fas fa-bookmark"></i> Save
                        </button>
                    </div>
                </footer>
            </article>
        </div>
    );
};

// Customization Modal Component
const CustomizationModal = ({ card, isOpen, onClose, onCustomize }) => {
    const [customMessage, setCustomMessage] = useState(card ? card.defaultMessage : '');
    const [recipientName, setRecipientName] = useState('');
    const [senderName, setSenderName] = useState('');
    const [selectedColor, setSelectedColor] = useState(card ? card.gradient : colorOptions[0].value);

    useEffect(() => {
        if (card) {
            setCustomMessage(card.defaultMessage);
            setSelectedColor(card.gradient);
        }
    }, [card]);

    if (!isOpen || !card) return null;

    const handleCustomize = () => {
        onCustomize({
            ...card,
            customMessage,
            recipientName,
            senderName,
            selectedColor
        });
        onClose();
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                
                <div className="modal-body">
                    <div className="card-full-preview" style={{ background: selectedColor }}>
                        <div className="card-message">
                            {recipientName && <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Dear {recipientName},</div>}
                            <div>{customMessage}</div>
                            {senderName && <div style={{ fontSize: '1.2rem', marginTop: '1rem' }}>From {senderName}</div>}
                        </div>
                    </div>
                    
                    <div className="customization-panel">
                        <div className="form-group">
                            <label className="form-label">Recipient Name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Enter recipient's name"
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Custom Message</label>
                            <textarea
                                className="form-textarea"
                                placeholder="Write your personal message..."
                                value={customMessage}
                                onChange={(e) => setCustomMessage(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Your Name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Enter your name"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Card Color Theme</label>
                            <div className="color-options">
                                {colorOptions.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`color-option ${selectedColor === color.value ? 'selected' : ''}`}
                                        style={{ background: color.value }}
                                        onClick={() => setSelectedColor(color.value)}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <div className="action-buttons">
                            <button className="btn btn-secondary" onClick={onClose}>
                                <i className="fas fa-arrow-left"></i> Back
                            </button>
                            <button className="btn btn-primary" onClick={handleCustomize}>
                                <i className="fas fa-check"></i> Customize Card
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// URL Router Component
const URLRouter = () => {
    const [currentView, setCurrentView] = useState('home');
    const [selectedPost, setSelectedPost] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredCards, setFilteredCards] = useState(cardsData);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customizedCards, setCustomizedCards] = useState([]);

    // Handle URL routing
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#blog/')) {
                const postId = parseInt(hash.replace('#blog/', ''));
                const post = blogPosts.find(p => p.id === postId);
                if (post) {
                    setSelectedPost(post);
                    setCurrentView('blog-post');
                } else {
                    setCurrentView('home');
                }
            } else if (hash === '#blog') {
                setCurrentView('blog');
                setSelectedPost(null);
            } else {
                setCurrentView('home');
                setSelectedPost(null);
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredCards(cardsData);
        } else {
            const categoryMap = {
                'Birthday': 'birthday',
                'Wedding': 'wedding',
                'Anniversary': 'anniversary',
                'Thank You': 'thank-you',
                'Congratulations': 'congratulations',
                'Get Well': 'get-well'
            };
            const filtered = cardsData.filter(card => card.category === categoryMap[selectedCategory]);
            setFilteredCards(filtered);
        }
    }, [selectedCategory]);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCustomize = (customizedCard) => {
        setCustomizedCards([...customizedCards, customizedCard]);
        alert('Card customized successfully! In a real app, this would be saved or sent to print.');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    const handleBlogPostClick = (post) => {
        setSelectedPost(post);
        window.location.hash = `blog/${post.id}`;
    };

    const handleBackToBlog = () => {
        window.location.hash = 'blog';
    };

    // Render different views based on current route
    if (currentView === 'blog-post' && selectedPost) {
        return (
            <div className="App">
                <Header />
                <main className="main-content blog-main">
                    <BlogPostPage post={selectedPost} onBack={handleBackToBlog} />
                </main>
            </div>
        );
    }

    if (currentView === 'blog') {
        return (
            <div className="App">
                <Header />
                <main className="main-content">
                    <Hero />
                    <BlogSection posts={blogPosts} onPostClick={handleBlogPostClick} />
                </main>
            </div>
        );
    }

    // Default home view
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <Hero />
                <CategoryFilter 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                />
                <CardGallery cards={filteredCards} onCardClick={handleCardClick} />
                <BlogSection posts={blogPosts.slice(0, 3)} onPostClick={handleBlogPostClick} />
            </main>
            <CustomizationModal
                card={selectedCard}
                isOpen={isModalOpen}
                onClose={closeModal}
                onCustomize={handleCustomize}
            />
        </div>
    );
};

// Main App Component (simplified)
const App = () => {
    return <URLRouter />;
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

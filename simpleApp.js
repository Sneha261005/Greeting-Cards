// Simplified React App that will definitely work
const { useState, useEffect } = React;

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
    }
];

// Blog posts data - CSS and External Styling Focus
const blogPosts = [
    {
        id: 1,
        title: "Mastering External CSS: Complete Guide to Stylesheet Organization",
        excerpt: "Learn how to structure and organize external CSS files for scalable, maintainable web applications.",
        content: "External CSS is the foundation of modern web styling. This comprehensive guide covers everything from basic stylesheet linking to advanced organization strategies. Learn how to create modular CSS architectures, implement naming conventions, and build stylesheets that scale with your application complexity.",
        author: "Sarah Mitchell",
        date: "2024-03-15",
        category: "CSS Basics",
        readTime: "10 min read",
        image: "https://picsum.photos/seed/css-organization/800/400.jpg"
    },
    {
        id: 2,
        title: "CSS Grid vs Flexbox: When to Use Each Layout System",
        excerpt: "Understand the differences between CSS Grid and Flexbox and learn when to use each for optimal layouts.",
        content: "CSS Grid and Flexbox are powerful layout systems, but knowing when to use each can be confusing. This guide breaks down their strengths, use cases, and how they can work together to create sophisticated layouts. Master both systems with practical examples and best practices.",
        author: "Michael Rodriguez",
        date: "2024-03-14",
        category: "Layout",
        readTime: "12 min read",
        image: "https://picsum.photos/seed/css-grid-flexbox/800/400.jpg"
    },
    {
        id: 3,
        title: "Advanced CSS Selectors: Beyond the Basics",
        excerpt: "Explore powerful CSS selectors that will transform the way you style your web applications.",
        content: "Move beyond simple class and ID selectors. Learn about attribute selectors, pseudo-classes, pseudo-elements, combinators, and the new :is() and :where() selectors. This guide will help you write more efficient and maintainable CSS with advanced selector techniques.",
        author: "Emily Watson",
        date: "2024-03-13",
        category: "Selectors",
        readTime: "14 min read",
        image: "https://picsum.photos/seed/css-selectors/800/400.jpg"
    },
    {
        id: 4,
        title: "CSS Custom Properties (Variables): Dynamic Styling Made Easy",
        excerpt: "Master CSS custom properties for creating dynamic, themeable, and maintainable stylesheets.",
        content: "CSS custom properties revolutionize the way we approach dynamic styling. Learn how to create theme systems, implement dark mode, manage color palettes, and build responsive designs using CSS variables. Includes practical examples and integration with JavaScript.",
        author: "David Kim",
        date: "2024-03-12",
        category: "Variables",
        readTime: "11 min read",
        image: "https://picsum.photos/seed/css-variables/800/400.jpg"
    },
    {
        id: 5,
        title: "Responsive Design with CSS Media Queries and Modern Techniques",
        excerpt: "Build responsive websites that work perfectly on all devices using modern CSS techniques.",
        content: "Responsive design is essential in today's multi-device world. Learn how to use media queries effectively, implement mobile-first design, utilize container queries, and combine with modern CSS features like clamp() and min/max functions for truly responsive layouts.",
        author: "Lisa Anderson",
        date: "2024-03-11",
        category: "Responsive",
        readTime: "13 min read",
        image: "https://picsum.photos/seed/responsive-css/800/400.jpg"
    },
    {
        id: 6,
        title: "CSS Animations and Transitions: Bringing Your UI to Life",
        excerpt: "Create smooth, performant animations and transitions that enhance user experience.",
        content: "Learn the art of CSS animations and transitions. From simple hover effects to complex keyframe animations, discover how to create engaging micro-interactions, loading animations, and page transitions that delight users while maintaining performance.",
        author: "James Wilson",
        date: "2024-03-10",
        category: "Animations",
        readTime: "15 min read",
        image: "https://picsum.photos/seed/css-animations/800/400.jpg"
    },
    {
        id: 7,
        title: "CSS Architecture: BEM, SMACSS, and Other Methodologies",
        excerpt: "Implement scalable CSS architectures using proven methodologies and best practices.",
        content: "Good CSS architecture prevents spaghetti code and maintenance nightmares. Explore BEM, SMACSS, OOCSS, and other methodologies. Learn how to structure your stylesheets, create naming conventions, and build CSS that scales with your team and application.",
        author: "Rachel Green",
        date: "2024-03-09",
        category: "Architecture",
        readTime: "16 min read",
        image: "https://picsum.photos/seed/css-architecture/800/400.jpg"
    },
    {
        id: 8,
        title: "CSS Performance Optimization: Faster Loading and Rendering",
        excerpt: "Optimize your CSS for blazing-fast performance and better user experience.",
        content: "Slow CSS can cripple your website performance. Learn critical CSS techniques, CSS minification, unused CSS removal, efficient selector writing, and how to use browser developer tools to identify and fix CSS performance bottlenecks.",
        author: "Robert Chen",
        date: "2024-03-08",
        category: "Performance",
        readTime: "12 min read",
        image: "https://picsum.photos/seed/css-performance/800/400.jpg"
    },
    {
        id: 9,
        title: "Modern CSS Features: Grid, Container Queries, and Beyond",
        excerpt: "Explore cutting-edge CSS features that are changing web development.",
        content: "CSS is evolving rapidly with powerful new features. Learn about container queries, cascade layers, :has() selector, CSS functions, and other modern features that are reshaping how we build web interfaces. Stay ahead of the curve with future-ready CSS techniques.",
        author: "Jennifer Adams",
        date: "2024-03-07",
        category: "Modern CSS",
        readTime: "14 min read",
        image: "https://picsum.photos/seed/modern-css/800/400.jpg"
    },
    {
        id: 10,
        title: "CSS Frameworks: Tailwind, Bootstrap, and Custom Solutions",
        excerpt: "Choose the right CSS framework for your project and learn custom framework development.",
        content: "CSS frameworks can accelerate development but come with trade-offs. Compare popular frameworks like Tailwind CSS and Bootstrap, understand their philosophies, and learn when to build your own custom framework for optimal control and performance.",
        author: "Mark Davidson",
        date: "2024-03-06",
        category: "Frameworks",
        readTime: "13 min read",
        image: "https://picsum.photos/seed/css-frameworks/800/400.jpg"
    },
    {
        id: 11,
        title: "CSS Typography: Mastering Web Fonts and Text Styling",
        excerpt: "Create beautiful, readable typography with advanced CSS font techniques.",
        content: "Typography is crucial for user experience and design. Learn about web font loading strategies, font pairing, line height optimization, responsive typography, and how to create stunning text effects with CSS. Master the art of web typography.",
        author: "Patricia Williams",
        date: "2024-03-05",
        category: "Typography",
        readTime: "11 min read",
        image: "https://picsum.photos/seed/css-typography/800/400.jpg"
    },
    {
        id: 12,
        title: "CSS Forms and Input Styling: Beyond the Browser Defaults",
        excerpt: "Create beautiful, accessible form designs with custom CSS styling techniques.",
        content: "Forms don't have to be boring. Learn how to style form elements consistently across browsers, create custom checkboxes and radio buttons, implement floating labels, add validation feedback, and build forms that are both beautiful and accessible.",
        author: "Alex Rivera",
        date: "2024-03-04",
        category: "Forms",
        readTime: "12 min read",
        image: "https://picsum.photos/seed/css-forms/800/400.jpg"
    },
    {
        id: 13,
        title: "CSS Debugging: Tools and Techniques for Troubleshooting Styles",
        excerpt: "Master CSS debugging with developer tools and proven troubleshooting techniques.",
        content: "CSS bugs can be frustrating and time-consuming. Learn how to effectively use browser developer tools, understand the cascade, debug specificity issues, trace inheritance, and solve common CSS problems with systematic debugging approaches.",
        author: "Emma Woods",
        date: "2024-03-03",
        category: "Debugging",
        readTime: "10 min read",
        image: "https://picsum.photos/seed/css-debugging/800/400.jpg"
    },
    {
        id: 14,
        title: "CSS and Accessibility: Building Inclusive Web Experiences",
        excerpt: "Ensure your CSS creates accessible experiences for all users, including those with disabilities.",
        content: "Accessibility is not optional. Learn how to use CSS to enhance accessibility, implement proper color contrast, support screen readers, create focus indicators, respect user preferences, and build interfaces that work for everyone.",
        author: "David Kim",
        date: "2024-03-02",
        category: "Accessibility",
        readTime: "13 min read",
        image: "https://picsum.photos/seed/css-accessibility/800/400.jpg"
    },
    {
        id: 15,
        title: "CSS-in-JS vs External CSS: Choosing the Right Approach",
        excerpt: "Compare CSS-in-JS solutions with traditional external CSS for your project needs.",
        content: "The styling landscape has evolved with CSS-in-JS libraries. Understand the pros and cons of styled-components, emotion, and other CSS-in-JS solutions compared to traditional external CSS. Make informed decisions for your project architecture.",
        author: "Lisa Thompson",
        date: "2024-03-01",
        category: "CSS-in-JS",
        readTime: "11 min read",
        image: "https://picsum.photos/seed/css-in-js/800/400.jpg"
    },
    {
        id: 16,
        title: "CSS Grid Layouts: Advanced Patterns and Techniques",
        excerpt: "Master complex grid layouts with advanced CSS Grid patterns and techniques.",
        content: "CSS Grid enables layouts that were impossible before. Learn advanced grid patterns, asymmetric layouts, grid-based responsive design, combining grid with other layout systems, and creating sophisticated magazine-style layouts with pure CSS.",
        author: "James Harrington",
        date: "2024-02-29",
        category: "Grid Layout",
        readTime: "15 min read",
        image: "https://picsum.photos/seed/css-grid-advanced/800/400.jpg"
    },
    {
        id: 17,
        title: "CSS Filters and Blend Modes: Creative Visual Effects",
        excerpt: "Create stunning visual effects with CSS filters, blend modes, and clipping paths.",
        content: "Unlock creative possibilities with CSS visual effects. Learn how to use filters for image manipulation, blend modes for layering effects, clipping paths for custom shapes, and mask properties for advanced visual treatments that will make your designs stand out.",
        author: "Dr. Lisa Chen",
        date: "2024-02-28",
        category: "Visual Effects",
        readTime: "12 min read",
        image: "https://picsum.photos/seed/css-filters/800/400.jpg"
    },
    {
        id: 18,
        title: "CSS Preprocessors: SASS, LESS, and PostCSS Deep Dive",
        excerpt: "Supercharge your CSS workflow with preprocessors and post-processors.",
        content: "CSS preprocessors can dramatically improve your development workflow. Learn SASS/SCSS, LESS syntax, variables, mixins, functions, and how to set up PostCSS for automated optimizations. Build a modern CSS pipeline that saves time and improves code quality.",
        author: "Sarah Johnson",
        date: "2024-02-27",
        category: "Preprocessors",
        readTime: "14 min read",
        image: "https://picsum.photos/seed/css-preprocessors/800/400.jpg"
    },
    {
        id: 19,
        title: "CSS Shapes and Clipping: Breaking Out of the Box",
        excerpt: "Create non-rectangular layouts and designs with CSS shapes and clipping paths.",
        content: "Break free from rectangular constraints with CSS shapes. Learn how to wrap text around complex shapes, create circular and polygonal layouts, use clipping paths for custom designs, and build unique visual layouts that stand out from typical box-based designs.",
        author: "Michael Foster",
        date: "2024-02-26",
        category: "Shapes",
        readTime: "11 min read",
        image: "https://picsum.photos/seed/css-shapes/800/400.jpg"
    },
    {
        id: 20,
        title: "The Future of CSS: Houdini, Container Queries, and Emerging Features",
        excerpt: "Explore the future of CSS with Houdini worklets, container queries, and experimental features.",
        content: "CSS is evolving with exciting new capabilities. Learn about CSS Houdini for low-level CSS APIs, container queries for component-based responsive design, cascade layers for better specificity control, and what's coming next in the CSS specification roadmap.",
        author: "Alex Thompson",
        date: "2024-02-25",
        category: "Future CSS",
        readTime: "13 min read",
        image: "https://picsum.photos/seed/future-css-houdini/800/400.jpg"
    }
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
const BlogPostItem = ({ post }) => {
    const handleClick = () => {
        window.open(`blog-post.html?id=${post.id}`, '_blank');
    };

    return (
        <article className="blog-post-item" onClick={handleClick}>
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
const BlogSection = ({ posts }) => {
    return (
        <section className="blog-section" id="blog">
            <div className="section-header">
                <h2 className="section-title">CSS Development Blog</h2>
                <p className="section-subtitle">Master modern CSS techniques and best practices</p>
            </div>
            <div className="blog-grid">
                {posts.map(post => (
                    <BlogPostItem key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};

// About Section Component
const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="section-header">
                <h2 className="section-title">About CSS Development Hub</h2>
                <p className="section-subtitle">Your comprehensive resource for modern CSS development</p>
            </div>
            <div className="about-content">
                <div className="about-grid">
                    <div className="about-text">
                        <h3>Welcome to Your CSS Learning Journey</h3>
                        <p>
                            Our CSS Development Hub is dedicated to helping developers master the art and science of modern web styling. 
                            Whether you're just starting with external CSS or looking to advanced techniques, we provide comprehensive 
                            tutorials, best practices, and real-world examples.
                        </p>
                        <p>
                            With 20+ in-depth articles covering everything from basic CSS organization to cutting-edge features 
                            like CSS Houdini and container queries, you'll find everything you need to become a CSS expert.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h4>20+</h4>
                                <p>Expert Articles</p>
                            </div>
                            <div className="stat-item">
                                <h4>15+</h4>
                                <p>CSS Topics</p>
                            </div>
                            <div className="stat-item">
                                <h4>100%</h4>
                                <p>Practical Content</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-features">
                        <h3>What You'll Learn</h3>
                        <ul className="features-list">
                            <li><i className="fas fa-check"></i> External CSS organization and architecture</li>
                            <li><i className="fas fa-check"></i> Modern layout systems (Grid & Flexbox)</li>
                            <li><i className="fas fa-check"></i> CSS animations and transitions</li>
                            <li><i className="fas fa-check"></i> Performance optimization techniques</li>
                            <li><i className="fas fa-check"></i> Responsive design strategies</li>
                            <li><i className="fas fa-check"></i> CSS preprocessors and tools</li>
                            <li><i className="fas fa-check"></i> Accessibility best practices</li>
                            <li><i className="fas fa-check"></i> Future CSS features and trends</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Have questions or suggestions? We'd love to hear from you!</p>
            </div>
            <div className="contact-content">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Connect With Us</h3>
                        <p>
                            Whether you have questions about our CSS tutorials, suggestions for new content, 
                            or want to share your own CSS projects, we're here to help and learn from the community.
                        </p>
                        <div className="contact-methods">
                            <div className="contact-method">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>hello@cssdevhub.com</p>
                                </div>
                            </div>
                            <div className="contact-method">
                                <i className="fab fa-twitter"></i>
                                <div>
                                    <h4>Twitter</h4>
                                    <p>@cssdevhub</p>
                                </div>
                            </div>
                            <div className="contact-method">
                                <i className="fab fa-github"></i>
                                <div>
                                    <h4>GitHub</h4>
                                    <p>github.com/cssdevhub</p>
                                </div>
                            </div>
                            <div className="contact-method">
                                <i className="fab fa-discord"></i>
                                <div>
                                    <h4>Discord</h4>
                                    <p>Join our community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h3>Send Us a Message</h3>
                        <form className="form">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-input" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="your@email.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-input" placeholder="How can we help?" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" placeholder="Tell us more..." rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                <i className="fas fa-paper-plane"></i> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Main App Component
const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredCards, setFilteredCards] = useState(cardsData);

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
        alert(`You selected: ${card.title}\n\nIn a real app, this would open the customization modal.`);
    };

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
                <BlogSection posts={blogPosts} />
                <AboutSection />
                <ContactSection />
            </main>
        </div>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

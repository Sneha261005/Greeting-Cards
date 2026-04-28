// Blog Application for CardCraft Website

const { useState, useEffect } = React;

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
                        <li><a href="index.html" className="nav-link">Home</a></li>
                        <li><a href="index.html#gallery" className="nav-link">Gallery</a></li>
                        <li><a href="blog.html" className="nav-link">Blog</a></li>
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
            <h1>Card Crafting Blog</h1>
            <p>Tips, inspiration, and stories behind the art of greeting cards</p>
            <a href="#blog-posts" className="cta-button">
                <i className="fas fa-book-open"></i> Read Articles
            </a>
        </section>
    );
};

// Blog Post Item Component
const BlogPostItem = ({ post }) => {
    const handleClick = () => {
        window.location.href = `blog-post.html?id=${post.id}`;
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
        <section className="blog-section" id="blog-posts">
            <div className="section-header">
                <h2 className="section-title">Latest Articles</h2>
                <p className="section-subtitle">Discover the art and craft of greeting cards</p>
            </div>
            <div className="blog-grid">
                {posts.map(post => (
                    <BlogPostItem key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};

// Category Filter Component
const CategoryFilter = ({ selectedCategory, setSelectedCategory, categories }) => {
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

// Main Blog App Component
const BlogApp = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
        // Load blog posts
        if (typeof blogPosts !== 'undefined') {
            setPosts(blogPosts);
            setFilteredPosts(blogPosts);
            
            // Extract unique categories
            const uniqueCategories = ['All', ...new Set(blogPosts.map(post => post.category))];
            setCategories(uniqueCategories);
        }
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(post => post.category === selectedCategory);
            setFilteredPosts(filtered);
        }
    }, [selectedCategory, posts]);

    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <Hero />
                <CategoryFilter 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                    categories={categories}
                />
                <BlogSection posts={filteredPosts} />
            </main>
        </div>
    );
};

// Render the blog app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BlogApp />);

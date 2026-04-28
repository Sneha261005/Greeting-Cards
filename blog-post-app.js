// Individual Blog Post Application for CardCraft Website

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

// Back Button Component
const BackButton = () => {
    return (
        <a href="blog.html" className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Blog
        </a>
    );
};

// Individual Blog Post Component
const BlogPostPage = ({ post }) => {
    if (!post) {
        return (
            <div className="blog-post-page">
                <BackButton />
                <div className="blog-post-full">
                    <div className="blog-post-body">
                        <h2>Blog post not found</h2>
                        <p>The requested blog post could not be found.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            <BackButton />
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
                    {post.content.split('\n').map((paragraph, index) => {
                        // Handle markdown-like formatting
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return <strong key={index}>{paragraph.slice(2, -2)}</strong>;
                        }
                        if (paragraph.startsWith('# ')) {
                            return <h2 key={index}>{paragraph.slice(2)}</h2>;
                        }
                        if (paragraph.startsWith('## ')) {
                            return <h3 key={index}>{paragraph.slice(3)}</h3>;
                        }
                        if (paragraph.trim() === '') {
                            return <br key={index} />;
                        }
                        return <p key={index}>{paragraph}</p>;
                    })}
                </div>
                <footer className="blog-post-footer">
                    <div className="blog-post-actions">
                        <button className="blog-action-btn" onClick={() => alert('Like functionality would be implemented here')}>
                            <i className="fas fa-heart"></i> Like
                        </button>
                        <button className="blog-action-btn" onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: post.title,
                                    text: post.excerpt,
                                    url: window.location.href
                                });
                            } else {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Link copied to clipboard!');
                            }
                        }}>
                            <i className="fas fa-share"></i> Share
                        </button>
                        <button className="blog-action-btn" onClick={() => alert('Bookmark functionality would be implemented here')}>
                            <i className="fas fa-bookmark"></i> Save
                        </button>
                    </div>
                </footer>
            </article>
        </div>
    );
};

// Related Posts Component
const RelatedPosts = ({ currentPost, posts }) => {
    const relatedPosts = posts
        .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
        .slice(0, 3);

    if (relatedPosts.length === 0) return null;

    return (
        <section className="related-posts">
            <h3>Related Posts</h3>
            <div className="blog-grid" style={{ marginTop: '2rem' }}>
                {relatedPosts.map(post => (
                    <article key={post.id} className="blog-post-item" onClick={() => window.location.href = `blog-post.html?id=${post.id}`}>
                        <div className="blog-post-image">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="blog-post-content">
                            <div className="blog-post-meta">
                                <span className="blog-category">{post.category}</span>
                                <span className="blog-read-time">{post.readTime}</span>
                            </div>
                            <h4 className="blog-post-title">{post.title}</h4>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

// Main Blog Post App Component
const BlogPostApp = () => {
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get post ID from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));

        // Load blog posts
        if (typeof blogPosts !== 'undefined') {
            setPosts(blogPosts);
            
            // Find the specific post
            const foundPost = blogPosts.find(p => p.id === postId);
            setPost(foundPost || null);
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="App">
                <Header />
                <main className="main-content blog-main">
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem' }}></i>
                        <p>Loading blog post...</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="App">
            <Header />
            <main className="main-content blog-main">
                <BlogPostPage post={post} />
                {post && <RelatedPosts currentPost={post} posts={posts} />}
            </main>
        </div>
    );
};

// Render the blog post app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BlogPostApp />);

// Blog Data with React.js Full Stack Development content
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with React.js: A Complete Beginner's Guide",
        slug: "getting-started-react-js-beginner-guide",
        category: "frontend",
        author: "React Developer",
        date: "2024-01-15",
        readTime: "8 min read",
        excerpt: "Learn the fundamentals of React.js, from components and state management to hooks and modern development practices. Start your journey into modern front-end development.",
        image: "https://picsum.photos/seed/react-basics/800/400.jpg",
        tags: ["react", "javascript", "frontend", "beginner"],
        featured: true,
        seo: {
            metaTitle: "Getting Started with React.js | Complete Beginner's Guide",
            metaDescription: "Learn React.js fundamentals with our comprehensive beginner's guide. Cover components, state management, hooks, and modern development practices.",
            keywords: "React.js tutorial, beginner React guide, React components, React hooks, front-end development"
        }
    },
    {
        id: 2,
        title: "Building RESTful APIs with Node.js and Express",
        slug: "building-restful-apis-nodejs-express",
        category: "backend",
        author: "Backend Developer",
        date: "2024-01-12",
        readTime: "10 min read",
        excerpt: "Master the art of building scalable RESTful APIs using Node.js and Express. Learn about routing, middleware, authentication, and best practices for API development.",
        image: "https://picsum.photos/seed/nodejs-api/800/400.jpg",
        tags: ["nodejs", "express", "api", "backend"],
        featured: true,
        seo: {
            metaTitle: "Building RESTful APIs with Node.js and Express | Complete Guide",
            metaDescription: "Learn to build scalable RESTful APIs with Node.js and Express. Cover routing, middleware, authentication, and API best practices.",
            keywords: "Node.js API development, Express.js tutorial, RESTful API design, backend development"
        }
    },
    {
        id: 3,
        title: "React Hooks Deep Dive: useState, useEffect, and Custom Hooks",
        slug: "react-hooks-deep-dive-usestate-useeffect-custom",
        category: "frontend",
        author: "React Expert",
        date: "2024-01-28",
        readTime: "12 min read",
        excerpt: "Explore React Hooks in depth. Understand useState, useEffect, and how to create custom hooks for reusable logic in your React applications.",
        image: "https://picsum.photos/seed/react-hooks/800/400.jpg",
        tags: ["react", "hooks", "useState", "useEffect"],
        featured: false,
        seo: {
            metaTitle: "React Hooks Deep Dive | useState, useEffect, Custom Hooks Guide",
            metaDescription: "Master React Hooks with our comprehensive guide. Learn useState, useEffect, and how to build custom hooks for reusable logic.",
            keywords: "React Hooks tutorial, useState useEffect guide, custom React hooks, React patterns"
        }
    },
    {
        id: 4,
        title: "MongoDB vs PostgreSQL: Choosing the Right Database for Your Project",
        slug: "mongodb-vs-postgresql-database-comparison",
        category: "backend",
        author: "Database Specialist",
        date: "2024-01-20",
        readTime: "9 min read",
        excerpt: "Compare MongoDB and PostgreSQL to choose the best database for your application. Learn about use cases, performance, scalability, and when to use each.",
        image: "https://picsum.photos/seed/database-comparison/800/400.jpg",
        tags: ["database", "mongodb", "postgresql", "backend"],
        featured: false,
        seo: {
            metaTitle: "MongoDB vs PostgreSQL | Database Comparison Guide",
            metaDescription: "Compare MongoDB and PostgreSQL for your next project. Learn about use cases, performance, scalability, and database selection criteria.",
            keywords: "MongoDB vs PostgreSQL, database comparison, NoSQL vs SQL, database selection"
        }
    },
    {
        id: 5,
        title: "Modern JavaScript ES6+ Features Every Developer Should Know",
        slug: "modern-javascript-es6-features-developer-guide",
        category: "frontend",
        author: "JavaScript Expert",
        date: "2024-01-18",
        readTime: "11 min read",
        excerpt: "Master modern JavaScript features including arrow functions, destructuring, async/await, and more. Level up your JavaScript skills with ES6+ syntax.",
        image: "https://picsum.photos/seed/javascript-es6/800/400.jpg",
        tags: ["javascript", "es6", "modern-js", "frontend"],
        featured: true,
        seo: {
            metaTitle: "Modern JavaScript ES6+ Features | Complete Developer Guide",
            metaDescription: "Learn essential JavaScript ES6+ features including arrow functions, destructuring, async/await, and modern syntax patterns.",
            keywords: "JavaScript ES6 tutorial, modern JavaScript features, ES6+ guide, JavaScript best practices"
        }
    },
    {
        id: 6,
        title: "Full Stack Authentication: JWT, OAuth, and Security Best Practices",
        slug: "full-stack-authentication-jwt-oauth-security",
        category: "backend",
        author: "Security Expert",
        date: "2024-01-25",
        readTime: "13 min read",
        excerpt: "Implement secure authentication in your full-stack applications. Learn about JWT tokens, OAuth 2.0, password hashing, and security best practices.",
        image: "https://picsum.photos/seed/authentication-security/800/400.jpg",
        tags: ["authentication", "security", "jwt", "oauth"],
        featured: false,
        seo: {
            metaTitle: "Full Stack Authentication Guide | JWT, OAuth, Security Best Practices",
            metaDescription: "Learn to implement secure authentication with JWT, OAuth 2.0, and security best practices in full-stack applications.",
            keywords: "JWT authentication, OAuth 2.0, web security, full-stack authentication"
        }
    },
    {
        id: 7,
        title: "React State Management: Context API vs Redux vs Zustand",
        slug: "react-state-management-context-api-redux-zustand",
        category: "frontend",
        author: "State Management Expert",
        date: "2024-01-22",
        readTime: "10 min read",
        excerpt: "Compare React state management solutions. Learn when to use Context API, Redux, or Zustand for optimal performance and developer experience.",
        image: "https://picsum.photos/seed/state-management/800/400.jpg",
        tags: ["react", "state-management", "redux", "context-api"],
        featured: false,
        seo: {
            metaTitle: "React State Management Comparison | Context API vs Redux vs Zustand",
            metaDescription: "Compare React state management solutions. Learn when to use Context API, Redux, or Zustand for your applications.",
            keywords: "React state management, Context API vs Redux, Zustand tutorial, state management patterns"
        }
    },
    {
        id: 8,
        title: "Docker for Node.js Applications: Containerization Guide",
        slug: "docker-nodejs-applications-containerization-guide",
        category: "tools",
        author: "DevOps Engineer",
        date: "2024-01-30",
        readTime: "8 min read",
        excerpt: "Learn to containerize Node.js applications with Docker. Master Dockerfile creation, multi-stage builds, and deployment strategies.",
        image: "https://picsum.photos/seed/docker-nodejs/800/400.jpg",
        tags: ["docker", "nodejs", "containerization", "devops"],
        featured: false,
        seo: {
            metaTitle: "Docker for Node.js Applications | Containerization Guide",
            metaDescription: "Learn to containerize Node.js applications with Docker. Master Dockerfile creation, multi-stage builds, and deployment.",
            keywords: "Docker Node.js tutorial, containerization guide, Dockerfile best practices, DevOps"
        }
    },
    {
        id: 9,
        title: "Testing React Applications: Jest, React Testing Library, and Cypress",
        slug: "testing-react-applications-jest-rtl-cypress",
        category: "best-practices",
        author: "QA Engineer",
        date: "2024-02-01",
        readTime: "12 min read",
        excerpt: "Master testing strategies for React applications. Learn unit testing with Jest, component testing with React Testing Library, and E2E testing with Cypress.",
        image: "https://picsum.photos/seed/react-testing/800/400.jpg",
        tags: ["testing", "jest", "react-testing-library", "cypress"],
        featured: true,
        seo: {
            metaTitle: "Testing React Applications | Jest, React Testing Library, Cypress Guide",
            metaDescription: "Learn comprehensive testing strategies for React applications with Jest, React Testing Library, and Cypress.",
            keywords: "React testing tutorial, Jest guide, React Testing Library, Cypress E2E testing"
        }
    },
    {
        id: 10,
        title: "Building Scalable Microservices with Node.js",
        slug: "building-scalable-microservices-nodejs",
        category: "backend",
        author: "Microservices Architect",
        date: "2024-02-03",
        readTime: "14 min read",
        excerpt: "Design and build scalable microservices using Node.js. Learn about service architecture, inter-service communication, and deployment patterns.",
        image: "https://picsum.photos/seed/microservices-nodejs/800/400.jpg",
        tags: ["microservices", "nodejs", "architecture", "scalability"],
        featured: false,
        seo: {
            metaTitle: "Building Scalable Microservices with Node.js | Architecture Guide",
            metaDescription: "Learn to design and build scalable microservices with Node.js. Cover architecture, communication patterns, and deployment.",
            keywords: "Microservices Node.js, scalable architecture, service design, Node.js patterns"
        }
    },
    {
        id: 11,
        title: "React Performance Optimization: Tips and Best Practices",
        slug: "react-performance-optimization-tips-best-practices",
        category: "best-practices",
        author: "Performance Expert",
        date: "2024-02-05",
        readTime: "9 min read",
        excerpt: "Optimize React applications for better performance. Learn about memoization, code splitting, lazy loading, and performance monitoring techniques.",
        image: "https://picsum.photos/seed/react-performance/800/400.jpg",
        tags: ["react", "performance", "optimization", "best-practices"],
        featured: false,
        seo: {
            metaTitle: "React Performance Optimization | Tips and Best Practices",
            metaDescription: "Optimize React applications with performance tips. Learn memoization, code splitting, lazy loading, and monitoring techniques.",
            keywords: "React performance optimization, React best practices, web performance, React optimization"
        }
    },
    {
        id: 12,
        title: "GraphQL vs REST: Choosing the Right API Architecture",
        slug: "graphql-vs-rest-api-architecture-comparison",
        category: "backend",
        author: "API Architect",
        date: "2024-02-07",
        readTime: "11 min read",
        excerpt: "Compare GraphQL and REST API architectures. Learn about query efficiency, type safety, caching, and when to choose each approach for your project.",
        image: "https://picsum.photos/seed/graphql-rest/800/400.jpg",
        tags: ["graphql", "rest", "api", "architecture"],
        featured: false,
        seo: {
            metaTitle: "GraphQL vs REST | API Architecture Comparison Guide",
            metaDescription: "Compare GraphQL and REST API architectures. Learn about query efficiency, type safety, and when to choose each approach.",
            keywords: "GraphQL vs REST, API architecture comparison, GraphQL tutorial, REST API design"
        }
    }
];

// State management
let currentCategory = 'all';
let searchTerm = '';
let displayedPosts = 6;
let filteredPosts = [...blogPosts];

// Initialize the blog page
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
    updateCategoryButtons();
});

// Render blog posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    const postsToShow = filteredPosts.slice(0, displayedPosts);
    
    blogGrid.innerHTML = postsToShow.map(post => `
        <article class="blog-card bg-white rounded-xl overflow-hidden card-shadow hover-lift fade-in">
            <div class="relative">
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                <div class="absolute top-4 left-4">
                    <span class="category-tag">${post.category}</span>
                </div>
                ${post.featured ? '<div class="absolute top-4 right-4"><i class="fas fa-star text-yellow-400 text-xl"></i></div>' : ''}
            </div>
            <div class="p-6">
                <div class="flex items-center mb-3 text-sm text-gray-600">
                    <span class="mr-4"><i class="far fa-calendar mr-1"></i> ${formatDate(post.date)}</span>
                    <span class="mr-4"><i class="far fa-clock mr-1"></i> ${post.readTime}</span>
                    <span><i class="far fa-user mr-1"></i> ${post.author}</span>
                </div>
                <h3 class="text-xl font-bold mb-3 line-clamp-2">
                    <a href="#" class="text-gray-900 hover:text-purple-600 transition-colors">
                        ${post.title}
                    </a>
                </h3>
                <p class="text-gray-600 mb-4 line-clamp-3">
                    ${post.excerpt}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${post.tags.map(tag => `
                        <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            #${tag}
                        </span>
                    `).join('')}
                </div>
                <a href="#" class="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                    Read More
                    <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </article>
    `).join('');

    // Hide load more button if all posts are displayed
    const loadMoreBtn = document.querySelector('button[onclick="loadMorePosts()"]');
    if (postsToShow.length >= filteredPosts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Filter posts by category
function filterByCategory(category) {
    currentCategory = category;
    applyFilters();
}

// Search posts
function searchBlogs() {
    searchTerm = document.getElementById('blogSearch').value.toLowerCase();
    applyFilters();
}

// Apply all filters
function applyFilters() {
    filteredPosts = blogPosts.filter(post => {
        const matchesCategory = currentCategory === 'all' || post.category === currentCategory;
        const matchesSearch = searchTerm === '' || 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });
    
    displayedPosts = 6; // Reset displayed posts
    renderBlogPosts();
    updateCategoryButtons();
}

// Update category button styles
function updateCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        const btnCategory = btn.textContent.toLowerCase().replace(' ', '');
        const isActive = (currentCategory === 'all' && btn.textContent === 'All Topics') ||
                        (currentCategory !== 'all' && btnCategory === currentCategory);
        
        if (isActive) {
            btn.className = 'category-btn px-4 py-2 rounded-lg transition-colors bg-purple-500 text-white';
        } else {
            btn.className = 'category-btn px-4 py-2 rounded-lg transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200';
        }
    });
}

// Load more posts
function loadMorePosts() {
    displayedPosts += 3;
    renderBlogPosts();
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Toggle mobile menu (from shared.js)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

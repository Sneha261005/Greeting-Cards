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
        content: `
            <h2>Introduction to React.js</h2>
            <p>React.js is a powerful JavaScript library for building user interfaces, particularly single-page applications where data changes over time. Developed by Facebook, React has become one of the most popular front-end frameworks in modern web development.</p>
            
            <h3>What Makes React Special?</h3>
            <p>React's component-based architecture allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs. This approach promotes reusability and maintainability in large applications.</p>
            
            <h3>Core Concepts Every Beginner Should Know</h3>
            
            <h4>1. Components</h4>
            <p>Components are the building blocks of React applications. They can be functional or class-based, though functional components with hooks have become the modern standard.</p>
            <pre><code>// Functional Component Example
function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}</code></pre>
            
            <h4>2. JSX</h4>
            <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes React components more readable and intuitive.</p>
            <pre><code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code></pre>
            
            <h4>3. Props and State</h4>
            <p>Props are read-only properties passed from parent to child components, while state is mutable data managed within a component. Understanding the difference is crucial for React development.</p>
            
            <h4>4. Hooks</h4>
            <p>Hooks are functions that let you use state and other React features in functional components. The most common hooks are useState and useEffect.</p>
            <pre><code>import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
            
            <h3>Setting Up Your First React Project</h3>
            <p>The easiest way to start a React project is using Create React App:</p>
            <pre><code>npx create-react-app my-first-app
cd my-first-app
npm start</code></pre>
            
            <h3>Best Practices for Beginners</h3>
            <ul>
                <li>Start with functional components and hooks</li>
                <li>Keep components small and focused</li>
                <li>Use descriptive names for components and props</li>
                <li>Learn the React Developer Tools browser extension</li>
                <li>Practice with small projects before moving to complex applications</li>
            </ul>
            
            <h3>Next Steps</h3>
            <p>Once you're comfortable with the basics, explore advanced topics like context API, custom hooks, and React Router for navigation. The React ecosystem is vast and continuously evolving, so keep learning and building!</p>
        `,
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
        content: `
            <h2>Introduction to RESTful APIs</h2>
            <p>REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP methods to perform CRUD (Create, Read, Update, Delete) operations on resources, making them stateless and scalable.</p>
            
            <h3>Why Node.js and Express?</h3>
            <p>Node.js provides an event-driven, non-blocking I/O model that's perfect for building scalable network applications. Express.js, built on top of Node.js, simplifies the process of creating robust APIs with minimal code.</p>
            
            <h3>Setting Up Your Express Server</h3>
            <p>Let's start by creating a basic Express server:</p>
            <pre><code>// Install Express
npm install express

// Create server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});</code></pre>
            
            <h3>Designing RESTful Routes</h3>
            <p>RESTful APIs follow consistent naming conventions and HTTP methods:</p>
            <pre><code>// GET all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single user
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});</code></pre>
            
            <h3>Implementing Middleware</h3>
            <p>Middleware functions are essential for handling cross-cutting concerns like authentication, logging, and error handling:</p>
            <pre><code>// Logging middleware
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});</code></pre>
            
            <h3>Authentication and Authorization</h3>
            <p>Secure your API using JWT (JSON Web Tokens):</p>
            <pre><code>const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Protected route
app.post('/api/posts', authenticateToken, async (req, res) => {
  // Only authenticated users can create posts
  const post = new Post({
    ...req.body,
    author: req.user.id
  });
  
  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});</code></pre>
            
            <h3>Input Validation</h3>
            <p>Always validate incoming data to prevent errors and security issues:</p>
            <pre><code>const { body, validationResult } = require('express-validator');

// Validation rules
const userValidation = [
  body('email').isEmail().normalizeEmail(),
  body('name').isLength({ min: 3, max: 50 }).trim(),
  body('password').isLength({ min: 6 })
];

// Apply validation
app.post('/api/users', userValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // Process valid data
  next();
});</code></pre>
            
            <h3>Best Practices for API Development</h3>
            <ul>
                <li><strong>Use proper HTTP status codes:</strong> 200 for success, 201 for created, 400 for bad requests, 404 for not found, 500 for server errors</li>
                <li><strong>Implement rate limiting:</strong> Prevent abuse and ensure fair usage</li>
                <li><strong>Version your API:</strong> Use /api/v1/ to allow for future updates</li>
                <li><strong>Document your API:</strong> Use tools like Swagger or OpenAPI</li>
                <li><strong>Handle errors gracefully:</strong> Provide meaningful error messages</li>
                <li><strong>Use environment variables:</strong> Never hardcode sensitive information</li>
            </ul>
            
            <h3>Testing Your API</h3>
            <p>Use tools like Postman or automated testing with Jest and Supertest:</p>
            <pre><code>const request = require('supertest');
const app = require('../app');

describe('Users API', () => {
  test('GET /api/users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });
  
  test('POST /api/users', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    };
    
    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201);
    
    expect(response.body.name).toBe(userData.name);
    expect(response.body.email).toBe(userData.email);
  });
});</code></pre>
            
            <h3>Conclusion</h3>
            <p>Building RESTful APIs with Node.js and Express provides a solid foundation for modern web applications. By following best practices and implementing proper security measures, you can create scalable and maintainable APIs that serve your front-end applications effectively.</p>
        `,
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
                    <a href="#" onclick="showBlogPostDetail(${post.id}); return false;" class="text-gray-900 hover:text-purple-600 transition-colors">
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
                <button onclick="showBlogPostDetail(${post.id})" class="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                    Read More
                    <i class="fas fa-arrow-right ml-2"></i>
                </button>
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

// Show blog post detail in modal
function showBlogPostDetail(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post || !post.content) {
        showNotification('Detailed content not available for this post', 'warning');
        return;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.style.overflowY = 'auto';
    
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto my-8">
            <div class="sticky top-0 bg-white border-b p-6 z-10">
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="category-tag">${post.category}</span>
                            ${post.featured ? '<i class="fas fa-star text-yellow-400"></i>' : ''}
                        </div>
                        <h1 class="text-3xl font-bold text-gray-900 mb-3">${post.title}</h1>
                        <div class="flex items-center text-sm text-gray-600 space-x-4">
                            <span><i class="far fa-calendar mr-1"></i> ${formatDate(post.date)}</span>
                            <span><i class="far fa-clock mr-1"></i> ${post.readTime}</span>
                            <span><i class="far fa-user mr-1"></i> ${post.author}</span>
                        </div>
                    </div>
                    <button onclick="closeBlogModal(this)" class="text-gray-500 hover:text-gray-700 ml-4">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
            </div>
            
            <div class="p-6">
                <img src="${post.image}" alt="${post.title}" class="w-full h-64 object-cover rounded-lg mb-8">
                
                <div class="blog-content prose prose-lg max-w-none">
                    ${post.content}
                </div>
                
                <div class="mt-8 pt-8 border-t">
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${post.tags.map(tag => `
                            <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                #${tag}
                            </span>
                        `).join('')}
                    </div>
                    
                    <div class="flex gap-4">
                        <button onclick="shareBlogPost(${post.id})" class="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            <i class="fas fa-share"></i>
                            Share
                        </button>
                        <button onclick="copyBlogLink(${post.id})" class="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <i class="fas fa-link"></i>
                            Copy Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeBlogModal(modal.querySelector('button'));
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeBlogModal(modal.querySelector('button'));
            document.removeEventListener('keydown', escapeHandler);
        }
    });
    
    // Track blog post view
    trackBlogPostView(postId);
}

// Close blog modal
function closeBlogModal(button) {
    const modal = button.closest('.fixed');
    if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
    }
}

// Share blog post
function shareBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        const url = `${window.location.origin}/blog.html?post=${postId}`;
        const text = `Check out this blog post: ${post.title}`;
        
        // Create share modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-xl max-w-md w-full mx-4">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-4">Share ${post.title}</h3>
                    <div class="space-y-3">
                        <button onclick="shareOnSocial('facebook', ${postId}); closeBlogModal(this);" 
                                class="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            <i class="fab fa-facebook"></i>
                            Share on Facebook
                        </button>
                        <button onclick="shareOnSocial('twitter', ${postId}); closeBlogModal(this);" 
                                class="w-full flex items-center justify-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                            <i class="fab fa-twitter"></i>
                            Share on Twitter
                        </button>
                        <button onclick="shareOnSocial('linkedin', ${postId}); closeBlogModal(this);" 
                                class="w-full flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                            <i class="fab fa-linkedin"></i>
                            Share on LinkedIn
                        </button>
                        <button onclick="copyBlogLink(${postId}); closeBlogModal(this);" 
                                class="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            <i class="fas fa-link"></i>
                            Copy Link
                        </button>
                    </div>
                    <button onclick="closeBlogModal(this)" 
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
function shareOnSocial(platform, postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        const url = `${window.location.origin}/blog.html?post=${postId}`;
        const text = `Check out this blog post: ${post.title}`;
        
        let shareUrl = '';
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    }
}

// Copy blog link
function copyBlogLink(postId) {
    const url = `${window.location.origin}/blog.html?post=${postId}`;
    navigator.clipboard.writeText(url).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy link', 'error');
    });
}

// Track blog post view
function trackBlogPostView(postId) {
    const views = JSON.parse(localStorage.getItem('blogPostViews') || '{}');
    views[postId] = (views[postId] || 0) + 1;
    localStorage.setItem('blogPostViews', JSON.stringify(views));
    console.log(`Blog post ${postId} viewed ${views[postId]} times`);
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

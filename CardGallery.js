import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Download, Eye, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cards' },
    { id: 'birthday', name: 'Birthday' },
    { id: 'holiday', name: 'Holiday' },
    { id: 'love', name: 'Love & Romance' },
    { id: 'congratulations', name: 'Congratulations' },
    { id: 'thankyou', name: 'Thank You' },
    { id: 'getwell', name: 'Get Well Soon' }
  ];

  const galleryCards = [
    {
      id: 1,
      title: 'Birthday Wishes',
      category: 'birthday',
      colors: ['from-pink-400', 'to-purple-400'],
      likes: 245,
      views: 1820,
      featured: true,
      preview: 'Happy Birthday! May your special day be filled with joy and laughter!'
    },
    {
      id: 2,
      title: 'Christmas Joy',
      category: 'holiday',
      colors: ['from-red-400', 'to-green-400'],
      likes: 189,
      views: 1456,
      featured: true,
      preview: 'Merry Christmas! Wishing you peace, joy, and happiness this holiday season.'
    },
    {
      id: 3,
      title: 'Love You Forever',
      category: 'love',
      colors: ['from-pink-400', 'to-red-400'],
      likes: 312,
      views: 2341,
      featured: false,
      preview: 'You make my world brighter just by being in it. Love you always!'
    },
    {
      id: 4,
      title: 'Congratulations!',
      category: 'congratulations',
      colors: ['from-yellow-400', 'to-orange-400'],
      likes: 156,
      views: 987,
      featured: false,
      preview: 'Congratulations on your amazing achievement! You deserve all the success!'
    },
    {
      id: 5,
      title: 'Thank You Note',
      category: 'thankyou',
      colors: ['from-blue-400', 'to-purple-400'],
      likes: 134,
      views: 876,
      featured: false,
      preview: 'Thank you for your kindness and support. It means the world to me!'
    },
    {
      id: 6,
      title: 'Get Well Soon',
      category: 'getwell',
      colors: ['from-green-400', 'to-blue-400'],
      likes: 98,
      views: 654,
      featured: false,
      preview: 'Sending you healing thoughts and wishing you a speedy recovery!'
    },
    {
      id: 7,
      title: 'Anniversary Love',
      category: 'love',
      colors: ['from-purple-400', 'to-pink-400'],
      likes: 267,
      views: 1987,
      featured: true,
      preview: 'Happy Anniversary! Every moment with you is a treasure.'
    },
    {
      id: 8,
      title: 'New Year Celebration',
      category: 'holiday',
      colors: ['from-purple-400', 'to-indigo-400'],
      likes: 201,
      views: 1543,
      featured: false,
      preview: 'Happy New Year! May this year bring you endless joy and success!'
    },
    {
      id: 9,
      title: 'Graduation Success',
      category: 'congratulations',
      colors: ['from-indigo-400', 'to-blue-400'],
      likes: 178,
      views: 1234,
      featured: false,
      preview: 'Congratulations on your graduation! The future is bright!'
    }
  ];

  const filteredCards = galleryCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         card.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCards = filteredCards.filter(card => card.featured);
  const regularCards = filteredCards.filter(card => !card.featured);

  const CardComponent = ({ card, isFeatured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl overflow-hidden card-shadow hover-lift"
    >
      <div className={`h-48 bg-gradient-to-br ${card.colors[0]} ${card.colors[1]} flex items-center justify-center relative`}>
        {isFeatured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        <Heart className="w-12 h-12 text-white opacity-80" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{card.preview}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {card.likes}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {card.views}
            </span>
          </div>
          <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            {card.category}
          </span>
        </div>
        
        <div className="flex gap-2">
          <Link 
            to="/editor" 
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-center hover:shadow-lg transition-all duration-300"
          >
            Use This Card
          </Link>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-2">Card Gallery</h1>
        <p className="text-gray-600">Browse our collection of beautiful greeting cards</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-6 card-shadow mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredCards.length} {filteredCards.length === 1 ? 'card' : 'cards'}
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
        </p>
      </div>

      {/* Featured Cards */}
      {featuredCards.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            Featured Cards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCards.map((card) => (
              <CardComponent key={card.id} card={card} isFeatured={true} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Cards */}
      {regularCards.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">All Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCards.map((card) => (
              <CardComponent key={card.id} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No cards found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Load More Button */}
      {filteredCards.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-300">
            Load More Cards
          </button>
        </div>
      )}
    </div>
  );
};

export default CardGallery;

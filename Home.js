import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, Gift, Cake, TreePine } from 'lucide-react';

const Home = ({ setSelectedCard }) => {
  const cardTemplates = [
    {
      id: 1,
      name: 'Birthday Celebration',
      icon: Cake,
      colors: ['from-pink-400', 'to-purple-400'],
      occasion: 'birthday'
    },
    {
      id: 2,
      name: 'Holiday Greetings',
      icon: TreePine,
      colors: ['from-green-400', 'to-red-400'],
      occasion: 'holiday'
    },
    {
      id: 3,
      name: 'Love & Romance',
      icon: Heart,
      colors: ['from-pink-400', 'to-red-400'],
      occasion: 'love'
    },
    {
      id: 4,
      name: 'Congratulations',
      icon: Star,
      colors: ['from-yellow-400', 'to-orange-400'],
      occasion: 'congratulations'
    },
    {
      id: 5,
      name: 'Thank You',
      icon: Gift,
      colors: ['from-blue-400', 'to-purple-400'],
      occasion: 'thankyou'
    },
    {
      id: 6,
      name: 'Get Well Soon',
      icon: Sparkles,
      colors: ['from-green-400', 'to-blue-400'],
      occasion: 'getwell'
    }
  ];

  const handleCardSelect = (template) => {
    setSelectedCard(template);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Create Beautiful</span>
          <br />
          <span className="text-gray-800">Greeting Cards</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Design personalized greeting cards for every occasion. 
          Choose from our templates or create your own unique design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/editor" 
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Start Creating
          </Link>
          <Link 
            to="/gallery" 
            className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-all duration-300"
          >
            Browse Gallery
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <div className="text-center p-6 bg-white rounded-xl card-shadow hover-lift">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Beautiful Designs</h3>
          <p className="text-gray-600">Choose from professionally designed templates for any occasion</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-xl card-shadow hover-lift">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
          <p className="text-gray-600">Personalize colors, text, and images with our intuitive editor</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-xl card-shadow hover-lift">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
          <p className="text-gray-600">Download your creation instantly in high-quality formats</p>
        </div>
      </motion.div>

      {/* Card Templates Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Choose a Template</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardTemplates.map((template, index) => {
            const Icon = template.icon;
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden card-shadow hover-lift cursor-pointer"
                onClick={() => handleCardSelect(template)}
              >
                <Link to="/editor">
                  <div className={`h-48 bg-gradient-to-br ${template.colors[0]} ${template.colors[1]} flex items-center justify-center`}>
                    <Icon className="w-16 h-16 text-white float-animation" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                    <p className="text-gray-600 mb-4">Perfect for {template.occasion} occasions</p>
                    <button className="text-purple-600 font-semibold hover:text-purple-700">
                      Use Template &rarr;
                    </button>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-12 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Create Something Special?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of people creating beautiful greeting cards</p>
        <Link 
          to="/editor" 
          className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
        >
          Get Started Now
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;

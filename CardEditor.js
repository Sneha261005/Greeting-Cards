import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Palette, Type, Image, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';

const CardEditor = ({ selectedCard }) => {
  const cardRef = useRef(null);
  const [cardData, setCardData] = useState({
    title: selectedCard?.name || 'Happy Birthday!',
    message: 'Wishing you a wonderful day filled with joy and happiness!',
    recipient: 'Dear Friend',
    signature: 'With love,',
    backgroundColor: selectedCard?.colors || ['from-pink-400', 'to-purple-400'],
    textColor: '#ffffff',
    fontSize: 'text-2xl',
    fontFamily: 'font-serif'
  });

  const [showPreview, setShowPreview] = useState(false);

  const colorOptions = [
    { name: 'Pink Purple', colors: ['from-pink-400', 'to-purple-400'] },
    { name: 'Blue Indigo', colors: ['from-blue-400', 'to-indigo-400'] },
    { name: 'Green Teal', colors: ['from-green-400', 'to-teal-400'] },
    { name: 'Orange Red', colors: ['from-orange-400', 'to-red-400'] },
    { name: 'Yellow Orange', colors: ['from-yellow-400', 'to-orange-400'] },
    { name: 'Purple Pink', colors: ['from-purple-400', 'to-pink-400'] }
  ];

  const fontSizes = [
    { label: 'Small', value: 'text-lg' },
    { label: 'Medium', value: 'text-xl' },
    { label: 'Large', value: 'text-2xl' },
    { label: 'Extra Large', value: 'text-3xl' }
  ];

  const fontFamilies = [
    { label: 'Serif', value: 'font-serif' },
    { label: 'Sans-serif', value: 'font-sans' },
    { label: 'Monospace', value: 'font-mono' }
  ];

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          scale: 2,
          backgroundColor: null,
          logging: false
        });
        
        const link = document.createElement('a');
        link.download = 'greeting-card.png';
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error downloading card:', error);
      }
    }
  };

  const updateCardData = (field, value) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const CardPreview = () => (
    <div 
      ref={cardRef}
      className={`w-full h-96 bg-gradient-to-br ${cardData.backgroundColor[0]} ${cardData.backgroundColor[1]} rounded-xl flex flex-col justify-center items-center p-8 text-center shadow-2xl`}
    >
      <div className={`${cardData.fontFamily} ${cardData.fontSize} font-bold mb-4`} style={{ color: cardData.textColor }}>
        {cardData.title}
      </div>
      <div className="text-lg mb-6 opacity-90" style={{ color: cardData.textColor }}>
        {cardData.recipient}
      </div>
      <div className="text-base mb-6 max-w-md" style={{ color: cardData.textColor }}>
        {cardData.message}
      </div>
      <div className="text-lg mt-auto" style={{ color: cardData.textColor }}>
        {cardData.signature}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <Link to="/" className="flex items-center text-purple-600 hover:text-purple-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold gradient-text">Card Editor</h1>
        <p className="text-gray-600 mt-2">Customize your greeting card with our easy-to-use editor</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Preview Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Preview</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
              >
                <Eye className="w-4 h-4" />
                {showPreview ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="card-preview p-8"
          >
            <CardPreview />
          </motion.div>
        </div>

        {/* Editor Section */}
        {!showPreview && (
          <div className="space-y-6">
            {/* Text Content */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Type className="w-5 h-5 text-purple-600" />
                Text Content
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={cardData.title}
                    onChange={(e) => updateCardData('title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recipient</label>
                  <input
                    type="text"
                    value={cardData.recipient}
                    onChange={(e) => updateCardData('recipient', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    value={cardData.message}
                    onChange={(e) => updateCardData('message', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Signature</label>
                  <input
                    type="text"
                    value={cardData.signature}
                    onChange={(e) => updateCardData('signature', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Style Options */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-600" />
                Style Options
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background Colors</label>
                  <div className="grid grid-cols-3 gap-2">
                    {colorOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => updateCardData('backgroundColor', option.colors)}
                        className={`h-12 bg-gradient-to-r ${option.colors[0]} ${option.colors[1]} rounded-lg hover:scale-105 transition-transform ${cardData.backgroundColor[0] === option.colors[0] ? 'ring-2 ring-purple-500' : ''}`}
                        title={option.name}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                  <div className="flex gap-2">
                    {['#ffffff', '#000000', '#1f2937', '#dc2626', '#059669', '#2563eb'].map((color) => (
                      <button
                        key={color}
                        onClick={() => updateCardData('textColor', color)}
                        className={`w-10 h-10 rounded-lg border-2 ${cardData.textColor === color ? 'border-purple-500' : 'border-gray-300'}`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Font Size</label>
                  <select
                    value={cardData.fontSize}
                    onChange={(e) => updateCardData('fontSize', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {fontSizes.map((size) => (
                      <option key={size.value} value={size.value}>{size.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Font Family</label>
                  <select
                    value={cardData.fontFamily}
                    onChange={(e) => updateCardData('fontFamily', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {fontFamilies.map((font) => (
                      <option key={font.value} value={font.value}>{font.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardEditor;

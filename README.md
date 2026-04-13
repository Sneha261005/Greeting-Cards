Greeting Cards Creator - React.js Application
A beautiful, modern, and interactive greeting cards creator application built with React.js, featuring card customization, preview, and download functionality.

Features
- **Card Templates**: Pre-designed templates for various occasions (Birthday, Holiday, Love, Congratulations, Thank You, Get Well)
- **Interactive Editor**: Real-time card customization with text, colors, fonts, and styling options
- **Card Gallery**: Browse and search through a collection of beautiful greeting cards
- **Preview & Download**: Live preview and high-quality card download functionality
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful transitions and micro-interactions using Framer Motion
- **Modern UI**: Clean and professional interface with gradient accents

Technologies Used
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for navigation
- **TailwindCSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **html2canvas**: Library for downloading cards as images
- **Lucide React**: Beautiful icon library

Project Structure

```
greeting-cards-app/
|-- public/
|   |-- index.html         # Main HTML template
|-- src/
|   |-- components/
|   |   |-- Header.js      # Navigation header
|   |   |-- Home.js        # Landing page with templates
|   |   |-- CardEditor.js  # Card customization editor
|   |   |-- CardGallery.js # Gallery of cards
|   |-- App.js             # Main App component with routing
|   |-- App.css            # Global styles and animations
|   |-- index.js           # React entry point
|-- package.json           # Dependencies and scripts
|-- README.md              # This file
```

Getting Started
# Greeting Cards Creator - React.js Application

A beautiful, modern, and interactive greeting cards creator application built with React.js, featuring card customization, preview, and download functionality.

## Features

- **Card Templates**: Pre-designed templates for various occasions (Birthday, Holiday, Love, Congratulations, Thank You, Get Well)
- **Interactive Editor**: Real-time card customization with text, colors, fonts, and styling options
- **Card Gallery**: Browse and search through a collection of beautiful greeting cards
- **Preview & Download**: Live preview and high-quality card download functionality
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful transitions and micro-interactions using Framer Motion
- **Modern UI**: Clean and professional interface with gradient accents

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for navigation
- **TailwindCSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **html2canvas**: Library for downloading cards as images
- **Lucide React**: Beautiful icon library

## Project Structure

```
greeting-cards-app/
|-- public/
|   |-- index.html         # Main HTML template
|-- src/
|   |-- components/
|   |   |-- Header.js      # Navigation header
|   |   |-- Home.js        # Landing page with templates
|   |   |-- CardEditor.js  # Card customization editor
|   |   |-- CardGallery.js # Gallery of cards
|   |-- App.js             # Main App component with routing
|   |-- App.css            # Global styles and animations
|   |-- index.js           # React entry point
|-- package.json           # Dependencies and scripts
|-- README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

3. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Application Features

### Home Page
- Hero section with call-to-action
- Feature highlights
- Template selection grid
- Responsive navigation

### Card Editor
- Real-time preview
- Text customization (title, message, recipient, signature)
- Color schemes and gradients
- Font options (size, family, color)
- Download functionality
- Preview mode toggle

### Card Gallery
- Search functionality
- Category filtering
- Featured cards section
- Like and view counts
- Card preview and usage

## Customization

### Adding New Card Templates

1. **Update Home.js**: Add new template objects to the `cardTemplates` array
2. **Update CardGallery.js**: Add new cards to the `galleryCards` array
3. **Create new color schemes**: Add to `colorOptions` in CardEditor.js

### Styling Customization

- **Colors**: Modify gradient classes in component files
- **Fonts**: Update font families in App.css or component-specific styles
- **Layout**: Adjust TailwindCSS classes for responsive design
- **Animations**: Customize Framer Motion animations in components

### Adding New Features

The application is structured for easy extension:
- Add new routes in App.js
- Create new components in the components folder
- Update the Header navigation for new pages

## Browser Support

This application supports all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Features

- **Code Splitting**: React.lazy loading for optimal performance
- **Optimized Animations**: Hardware-accelerated with Framer Motion
- **Efficient Rendering**: React.memo and useCallback optimizations
- **Image Export**: High-quality card generation with html2canvas

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

1. **Netlify**
   ```bash
   # Deploy the build folder
   netlify deploy --prod --dir=build
   ```

2. **Vercel**
   ```bash
   # Install Vercel CLI and deploy
   npm i -g vercel
   vercel --prod
   ```

3. **GitHub Pages**
   ```bash
   # Install gh-pages and deploy
   npm install --save-dev gh-pages
   npm run deploy
   ```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with customization:
- Create an issue in the repository
- Check the documentation
- Review the component code for implementation details

---

**Built with React.js and modern web technologies**
### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

3. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Application Features

### Home Page
- Hero section with call-to-action
- Feature highlights
- Template selection grid
- Responsive navigation

### Card Editor
- Real-time preview
- Text customization (title, message, recipient, signature)
- Color schemes and gradients
- Font options (size, family, color)
- Download functionality
- Preview mode toggle

### Card Gallery
- Search functionality
- Category filtering
- Featured cards section
- Like and view counts
- Card preview and usage

## Customization

### Adding New Card Templates

1. **Update Home.js**: Add new template objects to the `cardTemplates` array
2. **Update CardGallery.js**: Add new cards to the `galleryCards` array
3. **Create new color schemes**: Add to `colorOptions` in CardEditor.js

### Styling Customization

- **Colors**: Modify gradient classes in component files
- **Fonts**: Update font families in App.css or component-specific styles
- **Layout**: Adjust TailwindCSS classes for responsive design
- **Animations**: Customize Framer Motion animations in components

### Adding New Features

The application is structured for easy extension:
- Add new routes in App.js
- Create new components in the components folder
- Update the Header navigation for new pages

## Browser Support

This application supports all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Features

- **Code Splitting**: React.lazy loading for optimal performance
- **Optimized Animations**: Hardware-accelerated with Framer Motion
- **Efficient Rendering**: React.memo and useCallback optimizations
- **Image Export**: High-quality card generation with html2canvas

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

1. **Netlify**
   ```bash
   # Deploy the build folder
   netlify deploy --prod --dir=build
   ```

2. **Vercel**
   ```bash
   # Install Vercel CLI and deploy
   npm i -g vercel
   vercel --prod
   ```

3. **GitHub Pages**
   ```bash
   # Install gh-pages and deploy
   npm install --save-dev gh-pages
   npm run deploy
   ```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with customization:
- Create an issue in the repository
- Check the documentation
- Review the component code for implementation details

---

**Built with React.js and modern web technologies**

# Interactive 404 Page with Light Toggle

A beautifully designed, interactive 404 error page built with React, TypeScript, and Tailwind CSS. Features a unique light/dark mode toggle that transforms the entire page experience, complete with animated characters, spider web effects, and smooth transitions.

# Deployement- 

## ✨ Features

- **Interactive Light Toggle**: Switch between dark and light modes with a custom toggle switch
- **Animated Characters**: Cute bouncing characters appear when the light is turned on
- **Spider Web Effect**: Realistic spider web with a hanging spider in dark mode
- **Shuffle Text Animation**: "PAGE NOT FOUND" text with a glitch/shuffle effect
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Transitions**: Beautiful animations and transitions throughout
- **Ambient Effects**: Subtle lighting effects and background animations

## 🎨 Design Highlights

### Dark Mode
- Deep gradient background with purple and black tones
- Realistic spider web with hanging spider
- Mysterious ambient lighting effects
- Muted text colors for atmospheric feel

### Light Mode
- Bright lime and yellow gradient background
- Animated green characters with tools
- Prominent "GO HOME" button
- Vibrant ambient light effects

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interactive-404-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Icon library (for future enhancements)

## 📁 Project Structure

```
src/
├── components/
│   ├── Character.tsx       # Animated character components
│   ├── ShuffleText.tsx     # Text animation component
│   └── ToggleSwitch.tsx    # Light toggle switch component
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.css              # Global styles and animations
└── vite-env.d.ts         # TypeScript declarations
```

## 🎯 Component Details

### ToggleSwitch
Custom toggle switch with smooth animations and accessibility features. Includes directional arrow and descriptive text.

### Character
Animated character components that appear in light mode. Features:
- Three different positions (left, right, top)
- Bouncing animations with staggered delays
- Each character holds different tools/objects

### ShuffleText
Text component with a matrix-style shuffle animation that reveals the final text character by character.

## 🎨 Customization

### Colors
The color scheme can be easily modified in the Tailwind classes within `App.tsx`:
- Dark mode: `bg-gradient-to-br from-black via-gray-900 to-purple-900`
- Light mode: `bg-gradient-to-br from-lime-200 to-yellow-200`

### Characters
Add more characters by modifying the `Character.tsx` component or adding new instances in `App.tsx`.

### Spider Web
The spider web is created using SVG and can be customized in the main `App.tsx` file.

## 🌟 Features in Detail

1. **Responsive Design**: Works seamlessly on desktop and mobile devices
2. **Performance Optimized**: Uses React 18 features and efficient animations
3. **Accessibility**: Proper focus states and keyboard navigation
4. **Type Safe**: Full TypeScript implementation
5. **Modern CSS**: Utilizes CSS Grid, Flexbox, and CSS custom properties

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder ready for deployment.

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎁 Future Enhancements

- [ ] Sound effects for interactions
- [ ] More character animations
- [ ] Additional themes
- [ ] Particle effects
- [ ] Custom 404 messages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ [@astro-prog](https://github.com/astro-prog)

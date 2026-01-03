# PASEO App - Functional Prototype

## Overview
This is a fully functional frontend prototype of the PASEO mobile application, built with vanilla HTML, CSS, and JavaScript. The app connects pet owners with trusted dog walkers and provides real-time walk tracking.

## Features

### Implemented Screens
1. **Login Screen** - Email/password authentication with social login options
2. **Registration Screen** - New user signup
3. **Role Selection** - Choose between pet owner or service provider
4. **Home Screen** - Personalized greeting, service cards, and quick actions
5. **Services Screen** - Browse all available pet services
6. **Profile/Menu Screen** - Access to app settings and features

### Key Functionality
- ✅ Screen navigation without page reloads
- ✅ Form validation and user authentication
- ✅ Responsive design (402px mobile-first)
- ✅ Smooth transitions and micro-interactions
- ✅ Bottom navigation bar
- ✅ State management for user data
- ✅ Hover and active states on interactive elements

## Technology Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS Variables), Flexbox, Grid
- **Vanilla JavaScript** - No frameworks or libraries
- **Google Fonts** - Inter typeface

## Design System

### Colors
- Background: `#F5F5F5`
- Card Background: `#FFFFFF`
- Primary: `#111111`
- Muted Text: `#7A7A7A`

### Border Radius
- Large: `20px`
- Medium: `14px`

### Typography
- Font Family: Inter
- Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Project Structure
```
/
├── index.html           # Main HTML file with all screens
├── styles/
│   ├── tokens.css       # Design tokens (colors, spacing, shadows)
│   ├── base.css         # Global resets and base styles
│   └── components.css   # Component styles (buttons, cards, etc.)
├── js/
│   ├── router.js        # Navigation and routing logic
│   └── app.js           # Application state and interactions
└── README-FRONTEND.md   # This file
```

## How to Run

### Option 1: Simple HTTP Server (Python)
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Node.js HTTP Server
```bash
npx http-server -p 8000
```

### Option 3: VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Usage

### Login Credentials
- Email: `demo@paseo.com`
- Password: `demo123`

### Navigation
- Use the **bottom navigation bar** to switch between main screens
- Click on **service cards** to explore different services
- Use the **"Programar cita"** button to schedule appointments

## Features in Detail

### Authentication
- Login with email/password
- Social login buttons (Google, Apple) - mock implementation
- Registration flow with name and email
- "Inspect app" option to skip login

### Role Selection
- Choose between "Tengo mascota" (I have a pet) or "Ofrezco servicios" (I offer services)
- Location permission checkbox
- Smooth transition to home screen

### Home Screen
- Personalized greeting with user name
- Quick action button to schedule appointments
- Last walk information
- Grid of service cards with images
- Easy access to all main services

### Services Screen
- Complete list of available services
- Clickable service cards
- Visual feedback on hover and click

### Profile/Menu Screen
- List of all available features
- Service history access
- Settings and preferences

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance
- Lightweight (< 50KB total)
- No external dependencies except Google Fonts
- Fast page transitions
- Optimized CSS with design tokens

## Future Enhancements
- Real-time walk tracking
- Advanced walker verification
- Push notifications
- Rewards and reviews system
- Integration with backend API
- Appointment booking functionality
- Payment processing

## Credits
- **Design**: Based on PASEO UX case study
- **Development**: Vanilla HTML, CSS, JavaScript
- **Images**: Placeholder images from Unsplash (not loaded in restricted environments)

## License
This is a prototype for educational and portfolio purposes.

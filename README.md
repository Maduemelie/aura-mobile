# Aura Mobile - React Native Personal Manager

A React Native mobile application built with Expo for managing tasks, notes, and personal productivity.

## Features

- **Dashboard**: Quick overview with task stats and recent activity
- **Tasks**: Create, manage, and track tasks with priority levels
- **Notes**: Organize notes in a card-based layout
- **Profile**: User profile management and app settings
- **Cross-Platform**: Runs on iOS, Android, and Web

## Project Structure

```
app/
├── (tabs)/          # Tab navigation screens
│   ├── _layout.tsx  # Tab navigator configuration
│   ├── index.tsx    # Dashboard screen
│   ├── tasks.tsx    # Tasks management screen
│   ├── notes.tsx    # Notes screen
│   └── profile.tsx  # User profile screen
├── index.tsx        # Root layout
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v20.14.0 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your platform:
- **iOS**: Press `i` (requires macOS)
- **Android**: Press `a` (requires Android SDK)
- **Web**: Press `w`
- **Expo Go**: Scan QR code with Expo Go app

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device (macOS only)
- `npm run web` - Run in web browser

## Technology Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **Expo Router** - File-based routing
- **React Navigation** - Navigation library
- **Material Icons** - Icon library
- **TypeScript** - Type safety

## Converting from Web to React Native

This project was converted from a React web app to React Native. Key differences:

- No DOM elements - use React Native components
- No CSS - use StyleSheet for styles
- Different navigation patterns (Tabs instead of browser routes)
- Native platform APIs accessed through Expo modules

## Customization

### Adding New Screens
1. Create a new `.tsx` file in `app/(tabs)/`
2. Add it to the Tabs navigator in `app/(tabs)/_layout.tsx`

### Styling
All screens use `StyleSheet.create()` for styles. The color scheme uses purple (`#8b5cf6`) as the primary color.

### State Management
Currently using React's built-in `useState`. For larger apps, consider:
- Redux
- Context API with useReducer
- Zustand
- MobX

## Future Enhancements

- Backend integration for data persistence
- User authentication
- Push notifications
- Sync across devices
- Dark mode support
- Advanced task scheduling

## License

MIT

## Support

For issues or questions, create an issue in the repository.

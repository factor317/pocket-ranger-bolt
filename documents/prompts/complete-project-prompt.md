# Pocket Ranger - Complete Project Replication Prompt

## Project Overview
Create a React Native mobile application called "Pocket Ranger" - an outdoor adventure planning app that helps users discover and plan outdoor activities. The app should be built using Expo SDK 53 with TypeScript and feature a modern, outdoor-inspired design.

## Technical Stack Requirements

### Core Framework
- **React Native**: 0.79.1
- **Expo SDK**: 53.0.0
- **Expo Router**: 5.0.2 with file-based routing
- **TypeScript**: ~5.8.3
- **Node.js**: 18 or higher

### Key Dependencies
```json
{
  "@expo-google-fonts/inter": "^0.2.3",
  "@expo/vector-icons": "^14.1.0",
  "@lucide/lab": "^0.1.2",
  "@react-navigation/bottom-tabs": "^7.3.17",
  "@react-navigation/native": "^7.1.13",
  "@react-navigation/stack": "^7.3.6",
  "expo": "^53.0.0",
  "expo-av": "~15.0.0",
  "expo-blur": "~14.1.3",
  "expo-camera": "~16.1.5",
  "expo-constants": "~17.1.3",
  "expo-font": "~13.2.2",
  "expo-haptics": "~14.1.3",
  "expo-linear-gradient": "~14.1.3",
  "expo-linking": "~7.1.3",
  "expo-router": "~5.0.2",
  "expo-splash-screen": "~0.30.6",
  "expo-status-bar": "~2.2.2",
  "expo-symbols": "~0.4.3",
  "expo-system-ui": "~5.0.5",
  "expo-web-browser": "~14.1.5",
  "firebase": "^10.8.0",
  "lucide-react-native": "^0.475.0",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "react-native": "0.79.1",
  "react-native-gesture-handler": "~2.24.0",
  "react-native-reanimated": "~3.17.4",
  "react-native-safe-area-context": "5.3.0",
  "react-native-screens": "~4.10.0",
  "react-native-svg": "15.11.2",
  "react-native-url-polyfill": "^2.0.0",
  "react-native-web": "^0.20.0",
  "react-native-webview": "13.13.5"
}
```

## Design System & Styling

### Color Palette (Outdoor-Inspired Theme)
Create a comprehensive color system in `/assets/styles/colors.ts`:

**Primary Colors (Green Palette)**:
- 50: '#f0f9f4' (lightest)
- 100: '#dcf2e4'
- 200: '#bce5cd'
- 300: '#8dd1a8'
- 400: '#5bb57d'
- 500: '#51946c' (main brand color)
- 600: '#3f7a56'
- 700: '#346147'
- 800: '#2c4e3a'
- 900: '#254131' (darkest)

**Secondary Colors (Olive/Nature)**:
- 50: '#f8fbfa'
- 100: '#f1f4f2'
- 200: '#e8f2ec'
- 300: '#d1e6d9'
- 400: '#94e0b2' (accent color)
- 500: '#6B8E23' (OliveDrab)
- 600: '#5a7a1e'
- 700: '#4a651a'
- 800: '#3d5316'
- 900: '#334515'

**Text Colors**:
- Primary: '#121714'
- Secondary: '#0e1a13'
- Tertiary: '#688273'
- Quaternary: '#51946c'
- Inverse: '#ffffff'

**Background Colors**:
- Primary: '#ffffff'
- Secondary: '#f8fbfa'
- Tertiary: '#f1f4f2'

### Typography System
Use Inter font family with these specifications:

**Font Weights**: Regular (400), SemiBold (600), Bold (700)

**Text Styles**:
- **H1**: 28px, Bold, line-height 1.2, letter-spacing -0.5px
- **H2**: 24px, Bold, line-height 1.2, letter-spacing -0.5px
- **H3**: 20px, Bold, line-height 1.2
- **H4**: 18px, SemiBold, line-height 1.4
- **Body**: 16px, Regular, line-height 1.6
- **Body Small**: 14px, Regular, line-height 1.6
- **Label**: 14px, SemiBold, line-height 1.4
- **Caption**: 12px, Regular, line-height 1.4
- **Button**: 14px, Bold, letter-spacing 0.15px
- **Button Large**: 16px, Bold, letter-spacing 0.15px

### Spacing System (8px Grid)
- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px
- 2xl: 24px
- 3xl: 32px
- 4xl: 40px
- 5xl: 48px
- 6xl: 64px
- 7xl: 80px
- 8xl: 96px

### Shadow System
**Small**: boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
**Medium**: boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)'
**Large**: boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)'
**Extra Large**: boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)'

## Icons & Visual Assets

### Icon Library
Use **Lucide React Native** exclusively for all icons:
- Import icons as React components: `import { IconName } from 'lucide-react-native'`
- Default props: size={24}, color="currentColor", strokeWidth={2}

**Required Icons**:
- Home, Search, Map, User (tab navigation)
- MapPin, Clock, ExternalLink (itinerary)
- ArrowLeft, Save, RotateCcw (actions)
- Mountains, Utensils, Waves, Moon, Compass, TreePine, Camera, Coffee (activities)
- Bug (debug)
- Calendar, Settings, LogIn, UserPlus (profile)

### Images
Use Pexels stock photos with these specific URLs:

**Hero Background**: 
```
https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
```

**Adventure Recommendations**:
- Colorado: `https://images.pexels.com/photos/2743287/pexels-photo-2743287.jpeg?auto=compress&cs=tinysrgb&w=800`
- Desert/Utah: `https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800`
- Mountains/Glacier: `https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800`
- Coastal/Maine: `https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800`

## Application Structure

### File Organization
```
pocket-ranger-app/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Tab navigation layout
│   │   ├── index.tsx            # Home screen (adventure planning)
│   │   ├── explore.tsx          # AI recommendations
│   │   ├── itinerary.tsx        # Adventure itinerary display
│   │   └── profile.tsx          # User profile and settings
│   ├── api/
│   │   ├── pocPlan+api.ts       # Main adventure planning API
│   │   ├── groq-chat+api.ts     # AI chat integration
│   │   ├── ai-recommendations+api.ts # Curated recommendations
│   │   ├── health+api.ts        # Health check endpoint
│   │   └── debug-adventures+api.ts   # Debug utilities
│   ├── _layout.tsx              # Root layout with fonts
│   ├── plans.tsx                # Saved adventures management
│   ├── debug-adventures.tsx     # Debug screen
│   └── +not-found.tsx          # 404 page
├── assets/
│   └── styles/
│       ├── colors.ts            # Color palette
│       ├── typography.ts        # Font system
│       ├── spacing.ts           # Spacing/layout
│       ├── shadows.ts           # Shadow system
│       ├── components.ts        # Component styles
│       └── index.ts             # Style system exports
├── components/
│   ├── ErrorBoundary.tsx        # Error handling
│   ├── LoadingSpinner.tsx       # Loading component
│   ├── AiResponseDisplay.tsx    # AI response display
│   └── RecommendationDisplay.tsx # Adventure display
├── data/
│   ├── adventures/              # Adventure JSON files
│   ├── sample-queries.json      # Query mappings
│   └── ai-sample-adventures.json # AI recommendations
├── hooks/
│   └── useFrameworkReady.ts     # Framework initialization
└── types/
    └── env.d.ts                 # Environment types
```

### Navigation Structure
**Tab-based navigation** with 4 main tabs:
1. **Home** (index.tsx) - Adventure planning input
2. **Explore** (explore.tsx) - AI-curated recommendations
3. **Itinerary** (itinerary.tsx) - Adventure details and schedule
4. **Profile** (profile.tsx) - User settings and saved adventures

## Core Features & Functionality

### 1. Home Screen (Adventure Planning)
**Layout**:
- Hero image background (320px height)
- Debug button (top-right corner)
- Main content with title "Plan your next adventure"
- Large text input area (144px min-height)
- "Plan" button (centered, 40px height)

**Functionality**:
- Text input for natural language adventure requests
- API integration with validation
- Loading states with "Planning..." text
- Error handling with user-friendly messages
- Navigation to itinerary on success

### 2. Explore Screen (AI Recommendations)
**Layout**:
- Header with back button and "AI Recommendations" title
- Grid of recommendation cards
- Each card: image, "Recommended" label, title, description

**Functionality**:
- Load curated adventure recommendations from API
- Handle recommendation selection
- Two-step API process (AI analysis → adventure loading)
- Error handling and retry functionality

### 3. Itinerary Screen (Adventure Details)
**Layout**:
- Header with location pin, adventure name, city
- "Unsaved" badge (if applicable)
- Description section
- Timeline-style schedule with:
  - Left: Activity icons in circles with connecting lines
  - Right: Activity details, time, location, description
  - Partner links (AllTrails, OpenTable)

**Functionality**:
- Display adventure schedule in timeline format
- Handle partner link opening
- Save/discard functionality
- Modal for naming saved adventures
- Complete state reset on discard

### 4. Profile Screen
**Layout**:
- Settings section with "Adventures" vs "Plans" toggle
- "My Adventures/Plans" navigation with count badge
- Recent adventures preview (last 3)
- Authentication section with sign-up/sign-in buttons

**Functionality**:
- Toggle between "Adventures" and "Plans" terminology
- Navigate to saved adventures management
- Preview recent adventures with navigation

### 5. Plans Management Screen
**Layout**:
- Header with back button and dynamic title
- Empty state with call-to-action
- Adventure cards with delete functionality
- Each card: name, location, date, activity count

**Functionality**:
- Display saved adventures
- Delete with confirmation dialog
- Navigate to adventure details
- Empty state handling

## API Endpoints & Data Structure

### Adventure Data Structure
```typescript
interface LocationRecommendation {
  name: string;
  activity: string;
  city: string;
  description: string;
  schedule: ScheduleItem[];
}

interface ScheduleItem {
  time: string;
  activity: string;
  location: string;
  description?: string;
  partnerLink?: string;
  partnerName?: string;
}
```

### Required API Endpoints

**POST /api/pocPlan**:
- Input: `{ userInput: string, recommendedFile?: string }`
- Output: `LocationRecommendation`
- Logic: Keyword matching to adventure files

**POST /api/groq-chat**:
- Input: `{ message: string, conversationHistory: array }`
- Output: `{ response: string, shouldSearch: boolean, recommendedFile: string }`
- Logic: AI analysis with file recommendation

**GET /api/ai-recommendations**:
- Output: `{ recommendations: Recommendation[] }`
- Logic: Return curated adventure list

**GET /api/health**:
- Output: `{ status: string, timestamp: string }`
- Logic: Health check endpoint

### Adventure Data Files
Create JSON files in `/data/adventures/` for each location:

**Required Adventures**:
1. `avon-colorado.json` - Colorado mountain adventure
2. `moab-utah.json` - Utah desert/red rock adventure
3. `glacier-montana.json` - Montana alpine adventure
4. `lake-tahoe.json` - California alpine lake adventure
5. `sedona-arizona.json` - Arizona red rock spiritual adventure
6. `asheville-north-carolina.json` - Blue Ridge Mountains adventure
7. `olympic-washington.json` - Pacific Northwest rainforest adventure
8. `acadia-maine.json` - Maine coastal adventure
9. `big-sur-california.json` - California coastal adventure
10. `great-smoky-mountains.json` - Tennessee mountain adventure

Each adventure file must include:
- Name, activity type, city, description
- Detailed schedule with times, activities, locations
- Partner links to AllTrails and OpenTable where appropriate
- Activity-specific descriptions and recommendations

## State Management

### Global State Variables
```typescript
declare global {
  var currentRecommendation: LocationRecommendation | null;
  var isUnsavedItinerary: boolean;
  var savedAdventures: SavedAdventure[];
  var planTermPreference: 'Plans' | 'Adventures';
}
```

### State Flow
1. **Home → API → Itinerary**: User input → API processing → adventure display
2. **Explore → API → Itinerary**: Recommendation selection → API processing → adventure display
3. **Itinerary → Save**: Adventure saving with custom naming
4. **Itinerary → Discard**: Complete state reset and navigation to home
5. **Profile → Plans**: Saved adventures management

## Error Handling & Validation

### Critical Validation Points
1. **API Response Validation**: Ensure all required fields exist
2. **Text Rendering Safety**: Use `{text ? <Text>{text}</Text> : null}` pattern
3. **Global State Clearing**: Proper cleanup on navigation
4. **Adventure Data Structure**: Validate before storing globally
5. **Partner Link Validation**: Check URL format and availability

### Error Boundary Implementation
- Wrap entire app in ErrorBoundary component
- Detect and handle "text node cannot be a child of View" errors
- Provide debugging information and recovery options
- Log errors with component stack traces

## Platform Considerations

### Web Platform Specifics
- Use custom modals instead of Alert.prompt
- Handle platform-specific styling differences
- Ensure proper CORS headers for API endpoints
- Optimize for both mobile and desktop web viewing

### Mobile Platform Features
- Use Alert.prompt for text input dialogs
- Implement proper safe area handling
- Support haptic feedback where appropriate
- Handle platform-specific navigation patterns

## Development & Deployment

### Environment Setup
```bash
npm install
npm run dev  # Start development server
```

### Build Commands
```bash
npm run build:web     # Build for web
npm run build:docker  # Build Docker image
npm test             # Run tests
```

### Required Environment Variables
```
EXPO_PUBLIC_API_URL=http://localhost:8081
GROQ_API_KEY=your_groq_api_key_here
BORGCLOUD_API_KEY=your_borgcloud_api_key_here
NODE_ENV=development
```

## Testing Requirements

### Unit Tests
- API endpoint testing with Jest
- Component rendering tests
- Error handling validation
- State management testing

### Integration Tests
- Complete user flow testing
- API integration testing
- Navigation flow validation
- Error boundary testing

## Performance Optimization

### Code Organization
- Keep files under 300 lines
- Use proper imports/exports
- Implement lazy loading where appropriate
- Optimize image loading and caching

### Style Optimization
- Use StyleSheet.create() for all styles
- Implement consistent design tokens
- Minimize style recalculations
- Use platform-specific optimizations

## Security Considerations

### API Security
- Implement proper CORS policies
- Validate all user inputs
- Use HTTPS for all communications
- Implement rate limiting

### Data Protection
- Sanitize user inputs
- Secure partner link handling
- Implement proper error messages without data exposure
- Use secure authentication patterns

## Accessibility

### Screen Reader Support
- Proper semantic markup
- Descriptive button labels
- Image alt text where applicable
- Focus management for navigation

### Visual Accessibility
- Sufficient color contrast ratios
- Readable font sizes
- Touch target sizing (minimum 44px)
- Clear visual hierarchy

This prompt provides complete specifications for replicating the Pocket Ranger application with all design, functionality, and technical requirements clearly defined.
# Navigation Structure Template

## File Structure
```
app/
├── _layout.tsx                 # Root layout with fonts and error boundary
├── (tabs)/
│   ├── _layout.tsx            # Tab navigation configuration
│   ├── index.tsx              # Home tab - Adventure planning
│   ├── explore.tsx            # Explore tab - AI recommendations
│   ├── itinerary.tsx          # Itinerary tab - Adventure details
│   └── profile.tsx            # Profile tab - User settings
├── plans.tsx                  # Saved adventures management (stack route)
├── debug-adventures.tsx       # Debug utilities (stack route)
└── +not-found.tsx            # 404 page
```

## Tab Configuration (_layout.tsx)
```typescript
import { Tabs } from 'expo-router';
import { Home, Search, Map, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0e1a13',
        tabBarInactiveTintColor: '#51946c',
        tabBarStyle: {
          backgroundColor: '#f8fbfa',
          borderTopColor: '#e8f2ec',
          borderTopWidth: 1,
          paddingBottom: 12,
          paddingTop: 8,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          letterSpacing: 0.15,
        },
        tabBarIconStyle: {
          marginBottom: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Home size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ size, color }) => (
            <Search size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="itinerary"
        options={{
          title: 'Itinerary',
          tabBarIcon: ({ size, color }) => (
            <Map size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <User size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

## Root Layout (_layout.tsx)
```typescript
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import ErrorBoundary from '@/components/ErrorBoundary';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ErrorBoundary>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ErrorBoundary>
  );
}
```

## Navigation Patterns

### Tab Navigation
- Primary navigation method
- 4 main tabs: Home, Explore, Itinerary, Profile
- Always visible at bottom of screen
- Icons from Lucide React Native

### Stack Navigation
- Secondary navigation for detailed views
- Used for: Plans management, Debug screens
- Accessed via buttons/links from tab screens
- Includes back navigation

### Navigation Methods
```typescript
import { router } from 'expo-router';

// Navigate to tab
router.push('/itinerary');

// Navigate to stack route
router.push('/plans');

// Go back
router.back();

// Replace current route (for reset functionality)
router.replace('/');
```

### Global State Navigation
```typescript
// Set global state before navigation
global.currentRecommendation = adventureData;
global.isUnsavedItinerary = true;
router.push('/itinerary');

// Clear state on reset
global.currentRecommendation = null;
global.isUnsavedItinerary = false;
router.replace('/');
```
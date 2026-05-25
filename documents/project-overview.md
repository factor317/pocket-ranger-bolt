# Pocket Ranger - Project Overview

**Version:** 1.0.0  
**Last Updated:** 2026-05-25  
**Platform:** iOS, Android, Web (React Native / Expo)

---

## What Is Pocket Ranger?

Pocket Ranger is a voice-first outdoor adventure planning application. It lets users describe the kind of adventure they want in plain language — "I want to hike in Utah this weekend" — and returns a complete, curated day itinerary with trail links, dining reservations, and activity scheduling.

The app sits at the intersection of AI-assisted planning and curated local knowledge. It is designed for people who want the personalization of a travel planner without the friction of search engines, booking sites, or social feeds.

---

## Core Value Proposition

| Problem | Pocket Ranger Solution |
|---------|----------------------|
| Outdoor planning is fragmented across many apps | Single-screen planning with AI understanding |
| Search engines return noise, not itineraries | Curated, locally-informed day plans |
| Booking trail times, restaurants, and gear rentals requires multiple apps | Partner integrations (AllTrails, OpenTable) in one place |
| Users don't know what to ask | Natural language input, no keywords required |

---

## Current Feature Set

### Adventure Planning
- Natural language text input for adventure requests
- AI-powered intent extraction via Groq (llama-3.1-70b-versatile)
- Two-step recommendation pipeline: AI intent → curated JSON adventure file
- Intelligent fallback chain ensuring results always return

### Itinerary Display
- Full day schedule with time-stamped activities
- Activity-appropriate icons (hiking, dining, sightseeing, etc.)
- Partner deep links embedded in each activity (AllTrails, OpenTable)
- Save/discard flow per itinerary

### Explore Screen
- Curated browse experience with featured adventure cards
- Preloaded recommendations covering diverse locations and activity types
- One-tap launch into the full recommendation flow

### User Profile
- Saved adventures library
- Preference toggle: "Plans" vs "Adventures" terminology
- Guest mode with sign-up prompt
- Recent adventures preview

### Developer / Debug
- Health check endpoint at `/api/health`
- Debug adventure inspection screen
- Test flow endpoint for end-to-end validation

---

## Adventure Destinations (Current Data Set)

Ten fully curated adventure locations ship with the app:

| Location | State | Featured Activity |
|----------|-------|------------------|
| Moab | Utah | Red rock desert hiking, Arches NP |
| Avon / Vail Valley | Colorado | Skiing, mountain biking, breweries |
| Glacier National Park | Montana | Backcountry hiking, wildlife |
| Lake Tahoe | California/Nevada | Alpine hiking, water sports |
| Sedona | Arizona | Red rock trails, spiritual retreats |
| Asheville | North Carolina | Blue Ridge Parkway, craft breweries |
| Olympic Peninsula | Washington | Rainforest hikes, coastal wilderness |
| Acadia National Park | Maine | Coastal hiking, sea kayaking |
| Big Sur | California | Coastal cliff walks, redwoods |
| Great Smoky Mountains | Tennessee/NC | Waterfall trails, scenic drives |

Each destination ships with a structured JSON file containing a full-day schedule with times, activity names, location details, descriptions, and partner links.

---

## Technical Architecture

### Frontend

```
Expo SDK 53 / React Native 0.79.1
  └── expo-router 5.0.2 (file-based routing)
       ├── app/(tabs)/         Tab navigation (4 screens)
       ├── app/api/            Server-side API routes
       └── app/_layout.tsx     Root layout + error boundary
```

**Navigation:** Tab-based (Home, Explore, Itinerary, Profile)  
**Styling:** Custom design system in `/assets/styles/` — 8px grid, Inter typography, 6-ramp color system  
**Animations:** react-native-reanimated 3.17  
**Icons:** lucide-react-native  
**Fonts:** Inter via @expo-google-fonts  

### Backend (API Routes)

Expo Router's built-in API route system runs server-side handlers co-located with the frontend. No separate backend service required.

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/health` | GET | Health check with version and environment |
| `/api/pocPlan` | POST | Core recommendation engine |
| `/api/groq-chat` | POST | AI intent extraction via Groq LLM |
| `/api/ai-recommendations` | GET | Curated recommendations feed |
| `/api/transcribe` | POST | Speech-to-text (BorgCloud integration) |
| `/api/test-adventure-flow` | POST | End-to-end flow validation |
| `/api/debug-adventures` | POST | Adventure data inspection |

### AI Integration

The Groq API (`llama-3.1-70b-versatile`) handles intent extraction. The LLM reads the user's plain-language request and returns:
- A natural language response acknowledging the request
- A `recommendedFile` pointing to the best matching adventure JSON
- Extracted metadata (location, activity type, preferences)
- A `shouldSearch` flag to trigger the itinerary load

**Fallback chain** (in order):
1. Groq LLM recommendation
2. Sample query keyword matching (`data/sample-queries.json`)
3. Location keyword scanning across all adventure files
4. Default fallback to `avon-colorado.json`

Development mode bypasses the Groq API and uses keyword scoring directly, ensuring the app runs without API credentials.

### State Management

The app uses React local state with cross-screen sharing via global object references:

| Global Key | Type | Purpose |
|-----------|------|---------|
| `global.currentRecommendation` | `LocationRecommendation` | Active adventure being displayed |
| `global.isUnsavedItinerary` | `boolean` | Whether current itinerary has been saved |
| `global.savedAdventures` | `LocationRecommendation[]` | User's saved adventure library |
| `global.planTermPreference` | `string` | "Plans" or "Adventures" display preference |

> Note: This is an intentional POC pattern. The migration path to Supabase-backed persistent storage is documented below.

### Data Model

```typescript
interface LocationRecommendation {
  name: string;           // "Red Rock Desert Escape"
  activity: string;       // "hiking"
  city: string;           // "Moab, Utah"
  description: string;    // Summary paragraph
  schedule: ScheduleItem[];
}

interface ScheduleItem {
  time: string;           // "7:00 AM"
  activity: string;       // "Delicate Arch Hike"
  location: string;       // "Arches National Park"
  description?: string;
  partnerLink?: string;   // Deep link URL
  partnerName?: string;   // "AllTrails" | "OpenTable"
}
```

---

## Deployment

The project ships with complete deployment infrastructure for multiple environments:

### Docker
- `Dockerfile` and `docker-compose.yml` for local and production containerization
- `docker-compose.dev.yml` for hot-reload development

### Kubernetes
Full manifests in `/k8s/`:
- `namespace.yaml` — isolated `pocket-ranger` namespace
- `deployment.yaml` — app deployment configuration
- `service.yaml` — cluster service definition
- `ingress.yaml` — external traffic routing
- `hpa.yaml` — horizontal pod autoscaler
- `configmap.yaml` — environment configuration
- `secret.yaml` — sensitive values (API keys)
- `rbac.yaml` — role-based access control

### Cloud
Deployment guides for GCP (Cloud Run), AWS (ECS/EKS), Azure (Container Apps), and IBM Cloud are in `/documents/guides/`.

---

## Testing

```bash
npm test          # Run all Jest tests
npm run test:watch  # Watch mode
```

Tests are located in `/__tests__/`:
- `components/LoadingSpinner.test.js` — component rendering
- `components/ExploreScreen.test.js` — screen behavior
- `api/pocPlan.test.js` — API route logic

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `EXPO_PUBLIC_API_URL` | Yes | Base URL for API calls |
| `GROQ_API_KEY` | Yes (prod) | Groq LLM API key |
| `BORGCLOUD_API_KEY` | No | Speech-to-text API key |
| `FIREBASE_*` | No | Firebase Auth configuration |

Copy `.env.example` to `.env` to get started.

---

## Project Structure

```
pocket-ranger-app/
├── app/
│   ├── _layout.tsx              Root layout with error boundary
│   ├── (tabs)/                  Tab navigation screens
│   │   ├── _layout.tsx          Tab bar configuration
│   │   ├── index.tsx            Home / planning screen
│   │   ├── explore.tsx          Browse recommendations
│   │   ├── itinerary.tsx        Day itinerary display
│   │   └── profile.tsx          User profile & saved adventures
│   ├── api/                     Server-side API routes
│   │   ├── health+api.ts
│   │   ├── pocPlan+api.ts
│   │   ├── groq-chat+api.ts
│   │   ├── ai-recommendations+api.ts
│   │   ├── transcribe+api.ts
│   │   ├── test-adventure-flow+api.ts
│   │   └── debug-adventures+api.ts
│   ├── plans.tsx                Saved plans full list
│   └── debug-adventures.tsx     Debug screen
├── assets/
│   └── styles/                  Design system
│       ├── colors.ts            6-ramp color palette
│       ├── typography.ts        Inter font scale
│       ├── spacing.ts           8px grid system
│       ├── components.ts        Shared component styles
│       └── shadows.ts           Elevation tokens
├── components/
│   ├── AiResponseDisplay.tsx    AI message rendering
│   ├── ErrorBoundary.tsx        Error boundary wrapper
│   ├── LoadingSpinner.tsx       Loading state component
│   └── RecommendationDisplay.tsx Adventure card component
├── data/
│   ├── adventures/              10 curated adventure JSON files
│   ├── ai-sample-adventures.json  Explore screen content
│   └── sample-queries.json     Keyword → file mappings
├── documents/                   Project documentation
├── hooks/
│   └── useFrameworkReady.ts    Expo framework init
├── k8s/                         Kubernetes manifests
├── scripts/                     Deploy and health check scripts
└── types/
    └── env.d.ts                 Environment variable types
```

---

## Roadmap

### Near Term (v1.1)
- Supabase database integration to replace global state with persistent storage
- User authentication via Supabase Auth
- Saved adventures synced per user account
- Expand adventure data set to 50+ destinations

### Medium Term (v1.2)
- Voice input via native speech recognition (replacing BorgCloud dependency)
- Real-time AI itinerary generation (replacing static JSON files)
- User-generated adventure sharing
- Push notifications for trip reminders

### Long Term (v2.0)
- Live trail conditions via external data APIs
- Dynamic weather-aware itinerary adjustment
- Collaborative trip planning (multi-user)
- In-app booking for partner integrations
- Offline mode with cached adventure data

---

## Key Design Decisions

**Why Expo Router for API routes?**  
Co-locating frontend and backend eliminates a separate server, simplifies deployment, and keeps the codebase unified during the POC phase.

**Why static JSON adventure files?**  
Predictable, reviewable, offline-capable. Allows full AI-quality itinerary output without real-time generation costs. The JSON schema is designed to be drop-in compatible with a future database-backed model.

**Why global state instead of Context/Redux?**  
Minimizes POC complexity. The cross-tab state surface is small (one active adventure, one user library). The migration path to Context or Supabase is straightforward when persistence is required.

**Why Groq over OpenAI?**  
Groq's inference speed is significantly faster for latency-sensitive mobile UX. The llama-3.1-70b-versatile model provides strong instruction-following for the structured intent extraction task.

---

## Contributing

See `/documents/` for:
- `api/testing-guide.md` — how to test API endpoints
- `architecture/system-overview.md` — full system architecture
- `guides/` — deployment guides for each platform
- `prompts/` — AI prompt templates and component scaffolding

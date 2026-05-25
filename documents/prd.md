# Product Requirements Document: Pocket Ranger

**Version:** 1.0  
**Status:** Active  
**Last Updated:** 2026-05-25  
**Owner:** Product  

---

## 1. Overview

### 1.1 Product Vision

Pocket Ranger is the adventure planning companion that lives in your pocket. Users describe what they want in plain language — "I want to hike somewhere remote in the Pacific Northwest this weekend" — and get back a complete, curated day itinerary with trail bookings, dining reservations, and local intel, all in one place.

The long-term vision is a personalized outdoor guide that knows your ability level, preferred activity types, and past adventures, and proactively suggests what to do next.

### 1.2 Problem Statement

Outdoor adventure planning is fragmented and friction-heavy:

- Hikers use AllTrails, diners use OpenTable, campers use Recreation.gov — each tool requires context-switching and separate searches
- Search engines surface reviews and listicles, not actionable day plans
- Social media gives inspiration but no logistics
- Travel agents exist for beach resorts, not trail runs and kayak trips
- The gap between "I want to go somewhere outdoors" and a confirmed, scheduled day is filled with hours of research

This problem is acute for time-constrained, experience-seeking adults (ages 28–45) who have the income and desire for regular outdoor adventures but not the time to plan them.

### 1.3 Solution

Pocket Ranger collapses the research-to-itinerary gap to under 60 seconds. It combines:

1. **Natural language input** — users say what they want, not what they need to search for
2. **AI-powered intent extraction** — the app understands location, activity type, intensity, and preferences from free text
3. **Curated itineraries** — human-reviewed day plans for the best adventure destinations, structured with times, activities, and logistics
4. **Partner integrations** — direct links into AllTrails, OpenTable, and future booking partners embedded in the itinerary

### 1.4 Target Platforms

- iOS (primary mobile)
- Android (primary mobile)
- Web (planning and reference use)

---

## 2. Goals and Success Metrics

### 2.1 Business Goals

| Goal | Description |
|------|-------------|
| Validate core hypothesis | Prove that AI-assisted, itinerary-first adventure planning drives meaningfully higher engagement than search-and-stitch |
| Build adventure inventory | Curate a defensible library of high-quality itinerary content that improves with usage data |
| Establish partner pipeline | Build the commercial model for partner referral fees (AllTrails Pro, OpenTable covers) |
| Grow registered user base | Establish a signed-in user cohort to enable personalization |

### 2.2 Key Performance Indicators

**Engagement**

| Metric | POC Target | v1.1 Target |
|--------|-----------|-------------|
| Itinerary completion rate (user reaches Itinerary tab) | > 60% of sessions | > 70% |
| Adventure save rate (saved / itineraries viewed) | > 30% | > 40% |
| Session depth (avg screens per session) | > 3 | > 4 |
| Return rate (sessions / user / month) | — | > 2.5 |

**AI Quality**

| Metric | Target |
|--------|--------|
| Intent match accuracy (user finds result relevant) | > 80% |
| Fallback rate (% sessions hitting default fallback) | < 15% |
| Groq API p95 latency | < 500ms |

**Business**

| Metric | v1.1 Target |
|--------|------------|
| Partner link click-through rate | > 20% of itineraries |
| Registered users | 1,000 in first 90 days |
| Adventure saves per registered user | > 5 |

### 2.3 Non-Goals (v1.0 POC)

- Real-time trail conditions or weather integration
- In-app booking or payment processing
- Offline mode
- User-generated content or social features
- Push notifications
- Multi-day trip planning
- International destinations

---

## 3. Users

### 3.1 Primary Persona: The Weekend Adventurer

**Name:** Alex, 34  
**Location:** Denver, CO  
**Job:** Product manager at a mid-size tech company  

**Behaviors:**
- Plans 1–2 outdoor adventures per month
- Uses AllTrails regularly but spends 20–30 min per trip researching before arriving
- Books restaurant reservations on OpenTable but does this separately
- Discovers new destinations through Instagram and friends

**Pain Points:**
- "I know what I want to do but I don't know where to go"
- "I always end up doing the same trails because research takes too long"
- "I never know what to eat near a trailhead"

**Goals with Pocket Ranger:**
- Discover new adventures without deep research
- Get a full-day plan in under a minute
- Know the dining option before driving 2 hours

---

### 3.2 Secondary Persona: The Trip Planner

**Name:** Jordan, 41  
**Location:** Seattle, WA  
**Job:** Marketing director  

**Behaviors:**
- Plans group trips for 4–8 people 3–4 times per year
- Does extensive advance research; builds shared Google Docs with itineraries
- Prefers to have a backup plan for each activity

**Pain Points:**
- "Planning for a group is 10x more work than planning for myself"
- "I need to find something that works for different fitness levels"
- "Coordinating restaurant reservations for 8 people is a nightmare"

**Goals with Pocket Ranger:**
- Draft a shareable itinerary quickly as a starting point
- Filter by difficulty/activity type for mixed-ability groups
- Make restaurant reservations for large parties

---

### 3.3 Tertiary Persona: The Spontaneous Explorer

**Name:** Sam, 28  
**Location:** San Francisco, CA  
**Job:** Software engineer  

**Behaviors:**
- Decides on weekend plans Friday evening or Saturday morning
- High tolerance for uncertainty; low tolerance for planning overhead
- Uses apps that give immediate, confident answers

**Pain Points:**
- "I don't want to plan, I want to go"
- "Most apps make me answer 10 questions before showing me anything"

**Goals with Pocket Ranger:**
- Zero-friction adventure selection
- Confident single recommendation, not a list of options to evaluate

---

## 4. User Stories

### 4.1 Core Journey

```
As a user, I want to describe the adventure I'm looking for in my own words
so that I don't have to learn a search syntax or browse categories.

As a user, I want to see a complete day itinerary with times and activities
so that I can evaluate the adventure at a glance and decide whether to commit.

As a user, I want partner links embedded in the itinerary
so that I can book a trail permit or reserve a table without leaving the app.

As a user, I want to save adventures to my profile
so that I can reference them later and track where I've been.
```

### 4.2 Discovery

```
As a user, I want to browse curated adventure recommendations
so that I can find inspiration when I don't have a specific destination in mind.

As a user, I want to filter adventures by activity type (hiking, skiing, cycling)
so that I can narrow results to what I'm interested in.

As a user, I want to see a brief preview of each adventure before clicking in
so that I can quickly evaluate relevance.
```

### 4.3 Personalization

```
As a registered user, I want my saved adventures to persist across devices
so that I can plan on desktop and reference on mobile.

As a registered user, I want to set my preferred activity types
so that recommendations are relevant to my interests by default.

As a registered user, I want to see my adventure history
so that I can remember where I've been and avoid repeating destinations.
```

### 4.4 Planning Flow

```
As a user planning an adventure, I want to see the full day schedule in time order
so that I can understand the pacing and logistics.

As a user planning an adventure, I want to see activity-specific icons
so that I can scan the itinerary type at a glance.

As a user planning an adventure, I want to open partner links in-app or externally
so that I can check trail details or make reservations without losing my place.
```

---

## 5. Feature Requirements

### 5.1 Adventure Planning (P0 — Must Have)

#### 5.1.1 Natural Language Input

| ID | Requirement | Priority |
|----|-------------|---------|
| F-001 | User can enter free-text adventure request from the home screen | P0 |
| F-002 | Input accepts any natural language phrasing (location, activity, vibe, duration) | P0 |
| F-003 | Input submission triggers AI intent extraction and returns an itinerary | P0 |
| F-004 | Loading state displayed while AI processing occurs | P0 |
| F-005 | AI response displayed as conversational confirmation before itinerary | P0 |
| F-006 | Error state displayed inline (not modal) if request fails | P0 |
| F-007 | App returns a result for any input — no dead ends | P0 |

#### 5.1.2 Itinerary Display

| ID | Requirement | Priority |
|----|-------------|---------|
| F-010 | Itinerary displayed as vertical time-ordered schedule | P0 |
| F-011 | Each item shows: time, activity name, location, description | P0 |
| F-012 | Activity icon rendered per item based on activity type | P0 |
| F-013 | Partner link displayed per item where available | P0 |
| F-014 | Partner link opens external app or browser | P0 |
| F-015 | Save and Discard controls on itinerary screen | P0 |
| F-016 | Unsaved badge visible on itinerary until saved | P0 |
| F-017 | Empty state with CTA when no itinerary is active | P0 |

#### 5.1.3 AI Recommendation Engine

| ID | Requirement | Priority |
|----|-------------|---------|
| F-020 | System extracts location, activity type, and preferences from free text | P0 |
| F-021 | System returns best-match adventure from curated inventory | P0 |
| F-022 | System falls back gracefully when input is ambiguous or unrecognized | P0 |
| F-023 | Fallback chain: AI recommendation → keyword match → location match → default | P0 |
| F-024 | App functions in development mode without AI API credentials | P0 |

---

### 5.2 Adventure Discovery (P0 — Must Have)

| ID | Requirement | Priority |
|----|-------------|---------|
| F-030 | Explore screen shows curated adventure recommendation cards | P0 |
| F-031 | Each card shows: adventure name, location, activity type, brief description | P0 |
| F-032 | Tapping a card triggers the full recommendation flow for that adventure | P0 |
| F-033 | Explore feed is populated from a maintained recommendations source | P0 |

---

### 5.3 User Profile and Saved Adventures (P0 — Must Have)

| ID | Requirement | Priority |
|----|-------------|---------|
| F-040 | User can save an adventure from the itinerary screen | P0 |
| F-041 | Saved adventures are listed on the profile screen | P0 |
| F-042 | Recent 3 saved adventures previewed on profile | P0 |
| F-043 | Full saved adventures list accessible from profile | P0 |
| F-044 | User can set display preference: "Plans" or "Adventures" | P1 |

---

### 5.4 Authentication (P1 — Should Have for v1.1)

| ID | Requirement | Priority |
|----|-------------|---------|
| F-050 | User can create an account with email and password | P1 |
| F-051 | User can sign in with email and password | P1 |
| F-052 | App functions in guest mode without sign-in | P1 |
| F-053 | Saved adventures persist to user account when signed in | P1 |
| F-054 | Guest adventures prompt sign-up on save | P1 |
| F-055 | Session persists across app restarts | P1 |

---

### 5.5 Adventure Inventory (P0 — Must Have)

| ID | Requirement | Priority |
|----|-------------|---------|
| F-060 | Minimum 10 curated adventure destinations at launch | P0 |
| F-061 | Each adventure includes minimum 6 schedule items | P0 |
| F-062 | Each adventure includes at least 1 partner link (trail or dining) | P0 |
| F-063 | Adventures cover geographic diversity (at minimum: West, Southwest, Southeast, Northeast, Pacific NW) | P0 |
| F-064 | Adventures cover activity diversity (hiking, skiing, cycling, coastal) | P0 |

---

### 5.6 Voice Input (P2 — Future)

| ID | Requirement | Priority |
|----|-------------|---------|
| F-070 | User can speak their adventure request instead of typing | P2 |
| F-071 | Speech transcribed to text and processed through same AI pipeline | P2 |
| F-072 | Microphone permission requested before first use | P2 |
| F-073 | Visual feedback during recording | P2 |

---

### 5.7 Personalization (P2 — Future)

| ID | Requirement | Priority |
|----|-------------|---------|
| F-080 | User sets preferred activity types in profile | P2 |
| F-081 | User sets fitness/ability level | P2 |
| F-082 | Recommendations weighted by user preferences | P2 |
| F-083 | User's adventure history excluded from recommendations by default | P2 |

---

## 6. Non-Functional Requirements

### 6.1 Performance

| Requirement | Target |
|-------------|--------|
| Time to first itinerary (input to schedule display) | < 3 seconds on 4G |
| AI API latency (Groq call) | p95 < 500ms |
| App cold start time | < 2 seconds |
| Explore screen load time | < 1 second |
| Smooth scroll on itinerary timeline | 60fps |

### 6.2 Reliability

| Requirement | Target |
|-------------|--------|
| API uptime | > 99.5% |
| Fallback itinerary delivery rate (user always gets a result) | 100% |
| Zero unhandled crashes visible to user | Required |

### 6.3 Security

| Requirement | Description |
|-------------|-------------|
| API keys never exposed to client | All third-party keys server-side only |
| Row Level Security on all database tables | Enforced via Supabase RLS |
| User data isolated by auth.uid() | No cross-user data leakage |
| HTTPS for all API calls | Enforced in production |

### 6.4 Accessibility

| Requirement | Description |
|-------------|-------------|
| Minimum contrast ratio | WCAG AA (4.5:1 for text) |
| Tappable targets | Minimum 44x44 points |
| Screen reader labels | All interactive elements labeled |
| Font scaling | Layout does not break at 2x system font size |

### 6.5 Compatibility

| Platform | Minimum Version |
|----------|----------------|
| iOS | 16.0 |
| Android | API level 26 (Android 8.0) |
| Web | Chrome 100+, Safari 15+, Firefox 100+ |

---

## 7. User Experience

### 7.1 Core Design Principles

**Confidence over choice.** Show one great adventure, not a ranked list. Decision fatigue is the enemy of spontaneous planning. If the first result isn't right, make it easy to refine — but lead with a recommendation.

**Speed above all else.** The app should feel faster than searching. Every screen should resolve in under 3 seconds. Loading states should be animated and never feel frozen.

**Itinerary as the product.** The scheduled day plan is what users come for. All other screens exist to get users to a great itinerary faster. Design decisions should optimize for itinerary quality and clarity.

**Outdoor aesthetic.** The visual language should evoke the outdoors: natural tones, clean lines, open whitespace. No neon, no dark patterns, no social feed anxiety.

### 7.2 Navigation Structure

```
Tab Bar (always visible)
  ├── Home          — Planning input + AI response
  ├── Explore       — Browse curated adventures
  ├── Itinerary     — Current day plan
  └── Profile       — Saved adventures + settings

Modal / Stack (contextual)
  ├── Plans         — Full saved adventures list
  └── Debug         — Development tooling
```

### 7.3 Color System

- **Primary**: Forest green tones (trust, nature, outdoor)
- **Secondary**: Stone/slate neutrals (clean, readable)
- **Accent**: Amber/gold (CTAs, highlights, energy)
- **Success/Warning/Error**: Standard semantic colors

### 7.4 Typography

- **Font**: Inter (geometric, clean, highly readable)
- **Scale**: h1–h4, body1, body2, caption, button, label
- **Line height**: 150% body, 120% headings
- **Max font weights**: 3 (Regular 400, Medium 500, Bold 700)

### 7.5 Key Interaction Patterns

**Home Screen Planning Flow:**
1. User lands on Home; large text input is prominent
2. User types request; keyboard opens automatically
3. Tap "Plan My Adventure" or submit
4. AI response appears above input (conversational, brief)
5. Itinerary tab badge pulses; user navigates there
6. Full schedule displayed with smooth entrance animation

**Itinerary Save Flow:**
1. Itinerary displayed with "Unsaved" badge
2. User taps Save
3. Badge disappears; haptic feedback on native
4. Confirmation toast: "Adventure saved"
5. Profile tab count increments

---

## 8. Adventure Data Requirements

### 8.1 Minimum Viable Inventory (v1.0)

10 destinations, each with:

| Field | Requirement |
|-------|-------------|
| Name | Descriptive, evocative (not just city name) |
| Activity type | Hiking / skiing / cycling / coastal / cultural |
| Location | City, State format |
| Description | 2–3 sentence summary, first-person voice |
| Schedule items | Minimum 6, maximum 10 |
| Time range | Full day (typically 7 AM – 9 PM) |
| Partner links | Minimum 1 AllTrails or OpenTable link per file |
| Geographic spread | Minimum 5 different US regions represented |

### 8.2 Schedule Item Requirements

Each schedule item must include:

| Field | Required | Notes |
|-------|----------|-------|
| `time` | Yes | "7:00 AM" format |
| `activity` | Yes | Short name, title case |
| `location` | Yes | Specific place name |
| `description` | Recommended | 1–2 sentences of detail |
| `partnerLink` | Where available | Full URL |
| `partnerName` | Where available | "AllTrails" or "OpenTable" |

### 8.3 Content Expansion Roadmap

| Phase | Destination Count | Notes |
|-------|-----------------|-------|
| v1.0 POC | 10 | Western US focus |
| v1.1 | 30 | National coverage, activity diversity |
| v1.2 | 75 | Seasonal variants, difficulty tiers |
| v2.0 | 200+ | AI-generated with human editorial review |

---

## 9. API Requirements

### 9.1 Endpoint Specifications

#### `POST /api/groq-chat`

**Purpose:** Extract adventure intent from natural language input.

**Request:**
```json
{
  "message": "string",
  "conversationHistory": [
    { "role": "user | assistant", "content": "string" }
  ]
}
```

**Response:**
```json
{
  "response": "string",
  "shouldSearch": "boolean",
  "recommendedFile": "string | null",
  "extractedInfo": {
    "location": "string",
    "activity": "string",
    "preferences": "string[]"
  }
}
```

**Requirements:**
- Must return `shouldSearch: true` when user intent is clear
- Must return `recommendedFile` matching a known adventure file slug
- Must handle ambiguous input gracefully (return general response, `shouldSearch: false`)
- Must fall back to keyword matching if AI API unavailable

---

#### `POST /api/pocPlan`

**Purpose:** Load and return a structured adventure itinerary.

**Request:**
```json
{
  "userInput": "string",
  "recommendedFile": "string | optional"
}
```

**Response:**
```json
{
  "name": "string",
  "activity": "string",
  "city": "string",
  "description": "string",
  "schedule": [
    {
      "time": "string",
      "activity": "string",
      "location": "string",
      "description": "string",
      "partnerLink": "string | optional",
      "partnerName": "string | optional"
    }
  ]
}
```

**Requirements:**
- Must always return a valid adventure (no empty responses)
- Must apply fallback chain: recommendedFile → keyword match → location match → default
- Must validate returned adventure has required fields before responding

---

#### `GET /api/ai-recommendations`

**Purpose:** Return curated adventure cards for the Explore screen.

**Response:**
```json
{
  "recommendations": [
    {
      "id": "string",
      "title": "string",
      "location": "string",
      "activity": "string",
      "description": "string",
      "searchQuery": "string"
    }
  ]
}
```

**Requirements:**
- Must return minimum 6 recommendations
- `searchQuery` must be a natural language string that, when passed to `groq-chat`, reliably returns the corresponding adventure

---

### 9.2 Error Response Format

All error responses follow:

```json
{
  "error": "string",
  "code": "string",
  "details": "object | optional"
}
```

Standard HTTP status codes: 400 (bad input), 404 (adventure not found), 500 (server error), 503 (AI service unavailable).

---

## 10. Data Model

### 10.1 Core Entities

#### `adventures` table (Supabase)

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `slug` | text | File reference slug (e.g., `moab-utah`) |
| `name` | text | Display name |
| `activity` | text | Primary activity type |
| `city` | text | City, State |
| `description` | text | Summary paragraph |
| `schedule` | jsonb | Array of ScheduleItem objects |
| `region` | text | US region for filtering |
| `difficulty` | text | easy / moderate / hard |
| `created_at` | timestamptz | Creation timestamp |
| `updated_at` | timestamptz | Last updated |

#### `saved_adventures` table (Supabase)

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | Foreign key to auth.users |
| `adventure_id` | uuid | Foreign key to adventures |
| `saved_at` | timestamptz | When the user saved it |
| `notes` | text | Optional user notes |

#### `user_profiles` table (Supabase)

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key, matches auth.users.id |
| `term_preference` | text | "plans" or "adventures" |
| `preferred_activities` | text[] | User's activity preferences |
| `created_at` | timestamptz | Account creation |
| `updated_at` | timestamptz | Last updated |

### 10.2 RLS Policies

- `saved_adventures`: Users can only read and write their own rows (`auth.uid() = user_id`)
- `user_profiles`: Users can only read and update their own profile (`auth.uid() = id`)
- `adventures`: Public read access for authenticated users; write restricted to service role

---

## 11. Integrations

### 11.1 Current Integrations

| Partner | Integration Type | Purpose |
|---------|----------------|---------|
| Groq | API (server-side) | LLM intent extraction |
| AllTrails | Deep link | Trail details and permit booking |
| OpenTable | Deep link | Restaurant reservations |

### 11.2 Planned Integrations

| Partner | Priority | Purpose |
|---------|---------|---------|
| Recreation.gov | P1 | Campsite and permit reservations |
| Weather API (OpenWeatherMap or NOAA) | P1 | Real-time conditions in itinerary |
| Google Maps | P1 | Turn-by-turn directions from itinerary |
| REI | P2 | Gear rental and purchase links |
| Airbnb / VRBO | P2 | Lodging near adventure destinations |
| Strava | P3 | Import completed adventures as activities |

### 11.3 Integration Requirements

All partner integrations must:
- Use server-side API calls (keys never exposed to client)
- Degrade gracefully if the partner API is unavailable
- Not block itinerary delivery if the integration call fails
- Provide fallback URL if deep link cannot open

---

## 12. Release Plan

### Phase 1: POC (Current)

**Goal:** Validate the core hypothesis with a small test group.

**Scope:**
- 10 curated destinations
- Text input only (no voice)
- Global state (no database persistence)
- Guest mode only (no auth)
- Web platform primary

**Success Criteria:**
- 60% of sessions reach the Itinerary tab
- Qualitative feedback confirms itinerary quality is "better than Google"
- No P0 crashes in 2 weeks of testing

---

### Phase 2: v1.1 — Registered Users

**Goal:** Build the registered user base and enable persistent personalization.

**New Features:**
- Supabase Auth (email/password)
- Persistent saved adventures (database-backed)
- Expand to 30 destinations
- Activity type filtering on Explore screen
- Share itinerary as link

**Timeline:** 6–8 weeks post-POC validation

**Success Criteria:**
- 1,000 registered users in 90 days post-launch
- > 5 saved adventures per active registered user
- < 15% fallback rate in AI recommendations

---

### Phase 3: v1.2 — Live Data

**Goal:** Integrate real-time data to make itineraries dynamically relevant.

**New Features:**
- Weather-aware itinerary adjustment
- Trail condition alerts
- Recreation.gov permit availability
- Voice input (replacing text-only)
- Push notifications for saved trip reminders

**Timeline:** 3 months post v1.1

---

### Phase 4: v2.0 — AI-Generated Itineraries

**Goal:** Move from curated JSON files to real-time AI-generated itineraries, enabling infinite destination coverage.

**New Features:**
- LLM-generated itineraries for any US destination
- Human editorial review pipeline for generated content
- User-generated adventure sharing
- Multi-day trip planning
- Group trip coordination

**Timeline:** 6+ months post v1.1

---

## 13. Open Questions

| # | Question | Owner | Due |
|---|----------|-------|-----|
| 1 | What is the partner revenue model — referral fees, affiliate links, or paid placements? | Business | Pre-v1.1 |
| 2 | Should the Explore screen be editorially curated or algorithmically ranked? | Product | Pre-v1.1 |
| 3 | What is the content review process for AI-generated itineraries (v2.0)? | Content | Pre-v2.0 |
| 4 | What data do we need from users before we can build a meaningful preference model? | Product/Data | Pre-v1.2 |
| 5 | International expansion: which markets first and what data partnerships are required? | Business | Pre-v2.0 |
| 6 | What is the moderation policy for user-generated adventures? | Policy | Pre-v1.2 |
| 7 | Do we pursue RevenueCat for premium tier (e.g., offline mode, pro partner integrations)? | Business | Pre-v1.1 |

---

## 14. Appendix

### A. Glossary

| Term | Definition |
|------|------------|
| Adventure | A curated outdoor day plan, structured as a time-ordered schedule of activities |
| Plan | User-facing synonym for Adventure (configurable via preference) |
| Itinerary | The screen displaying a full adventure schedule |
| Partner Link | A deep link into a third-party service (AllTrails, OpenTable) embedded in a schedule item |
| Intent Extraction | The AI process of parsing free-text user input into structured location, activity, and preference fields |
| Fallback Chain | The ordered sequence of matching strategies used when AI recommendation confidence is low |
| Curated File | A static JSON file representing one adventure destination, authored and reviewed by the content team |

### B. Key Dependencies

| Dependency | Purpose | Risk |
|-----------|---------|------|
| Groq API | LLM inference for intent extraction | API changes, rate limits, cost at scale |
| Expo SDK | Cross-platform build and deployment | SDK upgrades can break native dependencies |
| AllTrails | Hiking trail deep links | URL structure changes could break partner links |
| OpenTable | Dining reservation deep links | URL structure changes could break partner links |
| Supabase | Database and auth (v1.1+) | Platform reliability, pricing at scale |

### C. Competitive Landscape

| Competitor | Strength | Gap Pocket Ranger Fills |
|-----------|---------|------------------------|
| AllTrails | Best-in-class trail discovery | No dining, no full-day itinerary, no AI planning |
| Roadtrippers | Road trip planning | Not optimized for single-day outdoor adventures |
| The Dyrt | Camping focus | Not comprehensive for day hikers |
| Google Maps | Universal coverage | No curated outdoor adventure context |
| ChatGPT | Free-text planning | No partner integrations, no structured itinerary |

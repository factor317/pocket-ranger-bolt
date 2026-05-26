# Screen Build Order and Guidance Index

**Purpose:** This document describes what makes up the Pocket Ranger application, what each screen should contain, and the recommended sequence for building or rebuilding them. The individual screen documents in this folder go deeper on each one.

---

## The Application at a Glance

Pocket Ranger is a four-tab mobile app (also runnable on web) with two supporting screens reachable from within the tabs. The tab bar is always visible. Every user journey either starts on Home (intentional planning) or Explore (browsing), passes through Itinerary (the plan), and optionally ends on Profile (saving and reflection).

```
Tab Bar
├── Home          Starting point for intentional adventure planning
├── Explore       Starting point for inspiration and discovery
├── Itinerary     The adventure plan — the product itself
└── Profile       The user's identity, history, and preferences

Supporting Screens (no tab, reached contextually)
├── Plans         Full list of saved adventures (reached from Profile)
└── Debug         Development tooling (reached from Home, hidden in production)
```

---

## Screen Descriptions

### Home

The planning surface. A hero image, a headline, a generous text input, and a submit button. The user types what they want — "weekend hike near Sedona" — and the app calls an AI pipeline (Groq for intent, POC Plan for the itinerary) and hands off to the Itinerary tab.

What it should contain: a rotating set of suggested prompts to reduce blank-page anxiety, an AI confirmation message after submission, a clear navigational nudge toward Itinerary, a voice input entry point (no-op until voice is built), and recent session continuity for returning users.

What to focus on when building: the input experience and the post-submission handoff. Everything else is framing for those two moments.

See: `screen-home.md`

---

### Explore

The discovery surface. A curated feed of adventure cards that users browse when they don't have a specific destination in mind. Tapping a card runs the same AI pipeline as Home and drops the user into Itinerary with a full plan.

What it should contain: full-width image cards with destination photography, editorial framing (difficulty, duration, who it's for), an activity type filter strip at the top, a featured hero card, a "save for later" bookmark action on cards, and eventually a map view toggle.

What to focus on when building: the card design and photography. The Explore screen wins or loses on visual impact. A card with a strong photograph and a crisp headline drives taps; a list of text with a thumbnail does not.

See: `screen-explore.md`

---

### Itinerary

The product. A scrollable day plan with a header block (adventure name, city, hero image), a brief description, and a vertical timeline of activities. Each activity has a time, icon, location, description, and optional partner links for booking. Save and Discard controls at the bottom.

What it should contain: a destination hero image, total duration and difficulty at a glance, a well-structured timeline with legible time stamps, partner links for AllTrails / OpenTable / Google Maps directions, a save flow that auto-names and confirms, and eventually a static map of activity locations.

What to focus on when building: the timeline readability and the partner link treatment. This is a screen users will reference in the field, so clarity and hierarchy matter more here than anywhere else.

See: `screen-itinerary.md`

---

### Profile

The home base. Shows the user's saved adventure library, their preferences, and their account status (guest vs. signed-in). The terminology toggle (Adventures vs. Plans) lives here, along with a preview of their three most recent saved adventures and a link to the full list.

What it should contain: a personalized header for signed-in users, a segmented Adventures/Plans preference control, saved adventure preview cards with destination images, a benefit-forward auth card for guests, a preferences expansion (activity type, region, level), and eventually adventure statistics.

What to focus on when building: the saved adventure preview and the preferences card. The auth section is a nudge, not a gate — it should communicate genuine benefit without blocking anything.

See: `screen-profile.md`

---

### Plans (Supporting Screen)

The full library. Reached from Profile via the "My Adventures/Plans" row. Shows all saved adventures as cards with name, city, activity badge, description excerpt, and a delete action. Tapping a card reloads its full itinerary.

What it should contain: a back button returning to Profile, the full card list with destination images, an empty state that's encouraging (not just blank), swipe-to-delete or inline confirmation, and eventually filtering/sorting controls (by date, by activity, by location).

This screen does not have its own guidance document yet. It can be built as a straightforward extension of the Profile save library once the Profile and Itinerary screens are stable.

---

## Recommended Build Order

The order below prioritizes the user's primary value loop first, then adds the surrounding surfaces. Each phase builds on the previous without blocking it.

---

### Phase 1: Design System and Navigation Shell

**Before building any screen, establish the foundation.**

The tab navigation shell, the shared design system (colors, typography, spacing, component styles), and the root layout should all be consistent and final before individual screens are layered in. Profile currently uses hardcoded styles that don't match the theme system — this inconsistency should be resolved in this phase.

**Deliverables:**
- Tab bar with correct icons, labels, colors, and sizing
- Shared theme applied consistently across all screens
- Root layout with error boundary
- Font loading and initialization

**Why first:** Everything else is built on top of this. Inconsistent foundations multiply into inconsistent screens.

---

### Phase 2: Itinerary Screen

**Build the payoff before the path to it.**

Itinerary is the most important screen in the app. It's what users come for, what partners link to, and what determines whether Pocket Ranger is actually useful or just an interesting experiment. Building it first — before worrying about how users get there — forces the team to get the data model right, the timeline design right, and the partner link pattern right.

Building Itinerary first also means you have something real to demo immediately. Load a test adventure JSON file directly into the screen and build the full UI before any of the planning flows exist.

**Deliverables:**
- Hero header with destination image
- Adventure name, city, and description
- Vertical timeline with icons, times, locations, descriptions
- Partner link buttons (AllTrails, OpenTable)
- Save flow (auto-named, confirmation, with haptic on native)
- Discard/restart flow
- Empty state
- Difficulty and duration metadata display

**Why second:** The most important screen. Build it, get it right, and every other screen is just a path to reach it.

---

### Phase 3: Home Screen

**Build the primary planning entry point.**

With the Itinerary screen done and a known data structure, the Home screen has a clear handoff target. Build the input experience, the AI pipeline integration (Groq chat + POC Plan), and the post-submission transition to Itinerary.

**Deliverables:**
- Hero image header
- Text input with rotating placeholder suggestions
- Submit button with loading state
- AI conversational response display
- Post-submission navigation nudge to Itinerary
- Suggested query chips
- Inline error handling
- Session continuity on return visits

**Why third:** Home is simpler to build once Itinerary exists — you know what a successful handoff looks like. The AI pipeline is the complexity here, not the UI.

---

### Phase 4: Explore Screen

**Build the discovery entry point.**

Explore is an alternative path to the same Itinerary destination. Build it after Home because the API flow is identical — it uses the same two-step pipeline, just triggered from a card rather than a text input. The design work here is primarily visual: the card layout and photography.

**Deliverables:**
- Full-width image card layout
- Featured hero card at top
- Activity type filter chips
- Each card with difficulty/duration metadata
- Bookmark/save-for-later action on cards
- Loading and empty states
- Correct distinct photography for all 10 destinations

**Why fourth:** Same pipeline as Home, lower design complexity. The visual work (card layout, photography) is independent and can be done in parallel with Phase 3 if needed.

---

### Phase 5: Profile Screen

**Build the history and identity layer.**

Profile depends on the save flow from Itinerary (Phase 2) and the global state patterns established in Phases 3 and 4. It's also the first screen where authentication scaffolding matters — even if real auth isn't wired yet, the UI should be auth-aware.

**Deliverables:**
- Shared theme consistency (remove hardcoded styles)
- Personalized header block (signed-in state)
- Segmented Adventures/Plans preference control
- Saved adventure preview cards with images
- "View All" link to Plans screen
- Empty state for zero saved adventures
- Preferences card (terminology + placeholders for future prefs)
- Benefit-forward auth card with specific copy
- Account management section for signed-in users

**Why fifth:** Profile is most useful after the rest of the app is built — it reflects the user's history, and that history is built through Itinerary, Home, and Explore.

---

### Phase 6: Plans Screen (Supporting)

**Build the full saved library.**

The Plans screen is a natural extension of Profile. Once Profile's save preview is working and the data model is settled, Plans is a straightforward full-list view.

**Deliverables:**
- Full saved adventure card list
- Destination images on cards
- Delete with inline confirmation
- Empty state
- Back navigation to Profile

**Why last:** Depends on Profile being stable. Lowest complexity of all screens.

---

## Cross-Cutting Concerns

A few things span multiple screens and should be decided early:

**Photography sourcing.** Every destination needs a specific, appropriate Pexels image. This decision affects Explore cards, Itinerary headers, Plans cards, and the Profile preview. Settle on URLs for all 10 destinations before building Phases 2–6. Reusing images (as the current data does) undermines the visual quality of all screens at once.

**Terminology preference.** The Adventures/Plans toggle affects label text on Profile, Plans, and Itinerary's save confirmation. The mechanism (global state for POC, database for v1.1) should be consistent across all screens from the start.

**Error handling pattern.** All screens should handle errors inline (not with native Alert dialogs) and consistently. This pattern should be established in Phase 2 and followed through Phase 6.

**Empty states.** Every screen has an empty state. They should all follow the same visual pattern: a centered icon, a primary message, a secondary message, and a CTA button. Establish this pattern in Phase 2 (Itinerary's empty state) and reuse it everywhere.

**Authentication awareness.** All screens need to know whether the user is signed in or a guest, even before auth is wired. The UI should be auth-aware (show different content for guest vs. signed-in) before the auth flow itself is implemented. This prevents a rewrite when auth lands.

---

## Document Index

| Document | Screen | Covers |
|---------|--------|--------|
| `screen-home.md` | Home tab | Input experience, AI handoff, empty states, future voice |
| `screen-explore.md` | Explore tab | Card design, filtering, photography, save-for-later |
| `screen-itinerary.md` | Itinerary tab | Timeline, partner links, save flow, map opportunity |
| `screen-profile.md` | Profile tab | Identity, saved library, preferences, auth card |
| `screen-build-order.md` | All | This document — overview and sequencing |

# Screen Guidance: Explore Tab

**Role in the app:** The inspiration layer. Home is for users who know what they want. Explore is for users who don't — or who want to be surprised. It bridges the gap between "I want to go somewhere outdoors" and the first tap of a specific adventure.

---

## What This Screen Is

Explore is a browsable feed of curated adventure recommendations. It answers the question the user didn't know they were asking: "What's possible?" It's the equivalent of a well-edited magazine spread — not a search results page, not a social feed, but a thoughtfully assembled collection that feels like it was put together by someone who knows what's worth doing.

---

## What's Here Now

Six recommendation cards loaded from a static JSON file. Each card has a text block (a "Recommended" label, a title, a short description) and a thumbnail image side by side. Tapping a card triggers the full two-step API flow and navigates to the Itinerary screen. There's an empty state with a retry button if loading fails.

It works, but it reads more like a list than an experience. The cards are utilitarian where they could be evocative. The layout is functional where it could be editorial.

---

## What It Should Feel Like

Explore should feel like opening a well-curated outdoor magazine or a thoughtfully designed travel app. Users should feel the pull of each destination — they should want to tap, not just evaluate. The photography does most of this work, which means image quality and sizing matter enormously. A small thumbnail next to text doesn't create desire; a full-width landscape image does.

There should be a sense of curation — that someone has decided these are the best adventures worth featuring right now, not just a random list of what's in the database. Editorial framing ("Perfect for early summer", "Best for solo hikers", "Under 3 hours from Denver") elevates recommendations from inventory to guidance.

---

## Content and Layout Decisions

**The card format**
The current side-by-side layout (text left, image right) is space-efficient but emotionally flat. A card-first layout with the image as a full-width hero at the top — destination name and description overlaid at the bottom — is more immersive and better suited to aspirational browsing. Think the way Airbnb or Headspace presents cards: the visual comes first, the details follow.

Each card should convey:
- The destination (where)
- The primary activity (what kind of trip)
- The emotional promise (why this one)
- A visual thumbnail that matches that promise

**Photography**
The current implementation reuses two Pexels images across six cards. Every destination needs its own photograph. The image should be specific — not a generic mountain, but something that evokes Moab's red rock, or Acadia's rocky coast, or the Great Smokies' misty ridgeline. Users are making a gut decision when browsing; the right image closes that decision in seconds.

**Editorial framing**
Each card could carry a short "why now" or "who it's for" label: "Great for beginners", "4-season destination", "Best solo hike in the Southwest". These aren't filters — they're editorial signals that help users self-select without having to dig in.

**Categories and filtering**
The current flat list of six works at small scale. As the inventory grows, the Explore screen needs a way to orient users. This doesn't have to be a complex filter UI — a horizontal row of activity chips at the top (All / Hiking / Skiing / Coastal / Cycling) is enough to let users narrow to what they're interested in. The active chip is visually distinct; tapping a chip filters the cards below without a reload.

**Featured vs. regular cards**
An editorial "Featured Adventure" hero at the top — larger, more prominent, potentially with a short pull quote or recommendation — followed by the regular card grid below would give the screen a clear hierarchy. The featured slot could rotate weekly, could be seasonally relevant, or could be personalized to the user's location eventually.

**Sections**
As the inventory grows, the screen could naturally section itself: "Near You", "Popular This Week", "New to Pocket Ranger", "Perfect for Winter". These sections make the browse experience feel alive and curated, not static.

---

## What's Missing That Should Be Here

**Search within Explore.** Users on this screen who have something specific in mind shouldn't have to navigate back to Home. A search bar at the top of Explore — not a full NLP input, just a simple text filter — would let them narrow the browse set quickly.

**Difficulty or duration metadata.** Before committing to an adventure, users want to know if it's within their ability level and available time. A "Moderate difficulty" badge or "Full day" tag on each card sets expectations without requiring users to open the itinerary first.

**Save from Explore.** Currently users can only save after viewing the full itinerary. Allowing a "save for later" action directly from the Explore card — a bookmark icon in the corner — lets users build a wishlist during a browsing session without committing to planning.

**Recently viewed.** If the user has tapped into an adventure from Explore before, a subtle "Viewed" indicator on the card prevents them from re-exploring the same content without realizing it.

**Map view toggle.** A toggle between the card grid and a map view showing adventure pins geographically would serve users who think in terms of "how far away is this?" and "what's near me?" This is a v1.2 feature, but the design should accommodate a toggle in the header.

---

## Relationship to Other Screens

Explore feeds into Itinerary, same as Home but through a different entry point. The key difference is intent: Home users are searching; Explore users are browsing. The Explore screen should feel like a different mode, not just a different path to the same API call.

Explore and Profile are loosely connected — saved adventures originate from itineraries reached through both Home and Explore, and they surface on Profile. Eventually, a user's browse history on Explore could inform personalized recommendations on Profile.

---

## The Deeper Opportunity

The current Explore screen is an index. What it could become is a discovery engine. As the adventure inventory grows and user behavior data accumulates, the Explore feed becomes the most personalized surface in the app — surfacing destinations the user hasn't seen, activities that match their history, places that are seasonally appropriate. It's the part of the app that creates habitual return visits ("I wonder what's new this week"), which is why getting the design foundation right matters early.

The six-card static list is a placeholder for that vision. The design should feel like it's ready to grow, not like it's done.

---

## Build Notes

The current implementation is a good skeleton. The priorities for improvement are:

1. Replace side-by-side layout with full-width image cards
2. Ensure each adventure has a distinct, appropriate photograph
3. Add activity type filter chips at the top
4. Add difficulty/duration metadata to each card
5. Add a "save for later" bookmark action on cards
6. Featured hero card at the top of the feed
7. Search/filter input within Explore (doesn't need to hit the AI — just filters visible cards)

# Screen Guidance: Itinerary Tab

**Role in the app:** The payoff. This is what every other screen exists to deliver. If the Home screen is the entry and Explore is the inspiration, Itinerary is the product itself. The user arrives here expecting a plan that's worth following. Everything about this screen should communicate confidence, clarity, and readiness.

---

## What This Screen Is

The Itinerary screen displays a time-ordered day schedule for an adventure. It's the answer to the user's question: "What should I actually do?" It organizes activities with times, locations, descriptions, and direct links to external partners for booking and navigation.

In its current form it's a functional timeline. In its best form it's a pocket guide — something a user actually brings with them on the day of the adventure and references in the field.

---

## What's Here Now

A scrollable screen with a header block (adventure name, city, an unsaved badge), a description paragraph, and a vertical timeline. Each timeline item shows an activity-specific icon, the activity name, the time, the location name, a description, and optionally a partner link button to AllTrails or OpenTable.

At the bottom, there are two action buttons: Save (green, primary) and Restart (outlined). Saving on web prompts a modal for a custom name; on mobile it uses Alert.prompt. If no itinerary is loaded, an empty state with a "Plan Adventure" CTA is shown.

---

## What It Should Feel Like

The Itinerary screen should feel like a well-designed trail guide: organized, confident, and built for use in the real world. Not a spreadsheet, not a search result. The typography needs to be readable outdoors — good contrast, generous sizing. The hierarchy needs to be scannable at a glance: what time is it, what am I doing next, where am I going.

There should be a sense of completeness — the user should feel like they have everything they need for the day in front of them. Not overwhelming detail, but enough specificity that they trust the plan. The partner links are proof points: "We've already figured out the trail; here's the link to book it."

---

## Content and Layout Decisions

**The header block**
The adventure name and city are the right elements. The "Unsaved" badge is functional but feels like a system status indicator rather than a user-friendly nudge. Consider replacing it with something more inviting: a subtle "Save this adventure" prompt below the name, or a bookmark icon in the header that fills when saved. The header area also has room for a hero image — a landscape photo specific to the destination would ground the itinerary in the physical place and make the screen feel like it belongs to that adventure.

**The description**
A 2–3 sentence overview of the adventure is the right amount. It gives context without front-loading detail. This paragraph should read like a confident recommendation, not a data entry: "Moab is best experienced at sunrise, before the heat sets in. This day builds around Arches National Park's iconic trails and ends with the most celebrated sunset view in the Southwest."

**The timeline**
The vertical timeline is the right presentation format for a day plan. A few things that would make it stronger:

The connector line between items (a thin vertical stroke running through the icon column) helps the eye read the flow of the day. The current implementation has this; it's worth preserving and refining visually.

Activity icons add warmth and quick-scan value. The current mapping (Mountain for hiking, Utensils for dining, Waves for water, Coffee for cafes) is sensible and should be extended. The icons should feel cohesive — all from the same icon family at the same weight — and sized to feel like a visual accent, not a dominant element.

The time displayed on each item is critical. It's what makes this a plan rather than a list. The time should be visually prominent — bold, in the accent color — so users can scan the timeline vertically and instantly see the progression of the day.

Location names matter more than most apps give them credit for. "Arches National Park" means more than "Hike location." Specific place names (trailhead names, restaurant names, overlook names) are what a knowledgeable friend would give you, and they're what makes the itinerary feel researched rather than generated.

**Partner links**
The current implementation shows a small button for AllTrails or OpenTable where available. These links are one of the highest-value elements on the screen — they're where the user takes action. The button should be visually distinct enough to notice but not so large it competes with the itinerary content. A secondary button style with the partner name and a small external link icon is the right treatment.

The partners present now (AllTrails, OpenTable) are the right starting points. Over time, the partner link system should expand: Google Maps directions for each location, Recreation.gov for permit reservations, weather conditions for the destination. These are additive — each one increases the utility of the itinerary without requiring a new screen.

**Save and Discard**
Saving is a commitment. It should feel satisfying — a moment of completion. A haptic response on native, a smooth icon transition from bookmark-empty to bookmark-filled, and a brief confirmation message ("Adventure saved to your profile") close the loop well.

Discard is an escape hatch. It should be accessible but not prominent — the user is unlikely to abandon a plan from this screen, and the UI shouldn't suggest it as the primary action. A text link or a less prominent button style (outlined, smaller than Save) is the right treatment.

**The web modal for naming**
The current web-specific modal for entering a custom adventure name is a workaround for Alert.prompt not being available on web. The modal itself is fine, but the naming step is worth reconsidering. Most users won't want to name their adventures — they'll want to save quickly and get back to browsing. An auto-generated name (the destination name, or the date + activity) should be the default, with an optional "rename" action available from the Profile screen later.

---

## What's Missing That Should Be Here

**A map.** A static map showing all the activity locations pinned in sequence would help users understand the geography of their day — are these locations clustered or spread out? Is the routing logical? Even a simple embedded map view (not interactive, just visual) would add significant value. An interactive map with route drawing would be excellent for a future version.

**Total duration and distance.** "Full day — approximately 12 miles of hiking" at the top of the itinerary sets expectations before the user commits to the plan. Users want to know upfront if this day is within their ability and available time.

**Difficulty indicator.** A simple badge — Easy / Moderate / Strenuous — gives users confidence about whether this plan fits their level.

**Weather context.** A single-line weather summary for the destination on the planned date — once weather integration exists — would complete the "everything you need for the day" promise. Even a static note like "Best in spring and fall; summer temperatures exceed 100°F" adds value without requiring live data.

**Print or share.** A share button that generates a simple text or link version of the itinerary — sendable to a friend or saved to notes — extends the utility of the plan beyond the app. This matters for group trips where one person is planning for several.

**Notes per activity.** A light annotation system — tap an activity to add a personal note, "went here, highly recommend the north arch" — would evolve the Itinerary screen from a read-only plan into a living travel log. These notes, stored to the user's account, build up a rich adventure history over time.

---

## The Empty State

When no itinerary is loaded, the screen currently shows a MapPin icon and a "Plan Adventure" button. This is the right approach — don't leave a blank screen. But the empty state is an opportunity to communicate the product promise, not just offer a button. Something like: "Your next adventure starts on the Home tab. Describe what you're looking for and we'll build you a complete day plan." gives the user context and a path forward.

---

## Relationship to Other Screens

Itinerary is the destination of both the Home and Explore flows. It feeds into Profile via the Save action. It can loop back to Home via the Discard/Restart action.

The connection to Profile is important: when a user saves an adventure, it should feel like the Itinerary screen and the Profile screen are part of the same system — the adventure moves from "active" to "saved" cleanly, and the user can return to any saved itinerary on the Profile screen and pick up exactly where they left off.

---

## Build Notes

The current implementation is the most feature-complete of the four screens. The priorities for improvement are:

1. Hero destination image in the header
2. Auto-generated adventure name on save (remove the modal friction)
3. Total distance / duration summary at the top
4. Difficulty badge
5. Expanded partner link types (Google Maps directions as a default for every location)
6. Map view of activity locations (static image initially, interactive later)
7. Print/share action
8. Per-activity notes (requires auth + database, post-v1.0)

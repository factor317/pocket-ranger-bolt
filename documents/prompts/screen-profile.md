# Screen Guidance: Profile Tab

**Role in the app:** The keeper. This is where adventures live after they're saved, where the user's identity in the app takes shape, and where preferences are set. It's the screen that answers: "Who am I in this app, and what have I done here?"

---

## What This Screen Is

Profile is the home base of the registered user experience. It holds three things: the user's settings and preferences, their library of saved adventures, and their identity (account, auth state). Right now it carries all three of those in a single scrollable screen, which is the right call for the current scale of the app.

As the product grows, Profile will need to grow with it — not into a cluttered settings dump, but into a screen that feels like a personal dashboard for someone who uses Pocket Ranger regularly.

---

## What's Here Now

A scrollable screen with four distinct sections:

1. A settings card with a toggle for the "Plans vs. Adventures" terminology preference
2. A row navigating to the full saved adventures list (with a count badge)
3. A recent adventures preview showing the last three saved adventures
4. An authentication card prompting sign-up or sign-in

The header shows a User icon and the word "Profile." The screen uses hardcoded StyleSheet styles rather than the shared theme system, which creates a small visual inconsistency worth resolving.

The terminology toggle is functional: flipping it switches all instances of "Plans" to "Adventures" (and vice versa) throughout the app via global state.

---

## What It Should Feel Like

Profile should feel personal without being precious. It's not a public social profile — nobody else is looking at this. It's a private workspace that reflects the user's relationship with the outdoors over time.

For a first-time user, it's mostly empty and should communicate potential: "Your adventure history starts here." For a returning user with ten saved trips, it should feel like a travel journal — a record of where they've been and a tool for planning where to go next.

The tone should be warm and understated. No dark patterns, no growth-hacking prompts. The sign-up nudge should feel like a genuine benefit offer, not a gate.

---

## Content and Layout Decisions

**Header / identity block**
The current header is minimal: just an icon and the word "Profile." This works for a guest or new user, but for a signed-in user it's a missed opportunity. The header should be the most personal part of the screen — a place where the user sees themselves reflected back.

For a signed-in user, the header could show their name or display name, their member-since date or adventure count, and an avatar (initials-based initially, photo upload later). Something like "Jordan — 12 Adventures" communicates both identity and engagement without requiring a bio or a social profile.

For a guest, the header can stay minimal, with a gentle invitation to create an account below.

**The "Adventures vs. Plans" toggle**
This preference is small but meaningful — it's one of the first signs of personality in the app. The current implementation is a toggle switch labeled "Call them 'Adventures'". It works, but the framing is a bit odd: a binary toggle for a binary choice is fine, but the label should feel like the user is making a genuine choice between two real options.

A better treatment might be a segmented control with two clear options ("Adventures" / "Plans") rather than a toggle, so both states are equally legible and neither feels like the "off" state. The label above it could read "What should we call your saved trips?" — framing it as a personalization choice, not a settings flag.

The preference should persist to the user's account (not just global state) so it follows them across devices. When they sign in on a new phone, the app already knows they prefer "Adventures."

This toggle is a good signal of intent: the app is opinionated about terminology, and it lets users bring their own. That's worth expanding. Future preference options in this same card:
- Default activity type (Hiking / Skiing / Cycling / All)
- Home region (for location-aware recommendations)
- Experience level (Beginner / Intermediate / Advanced)
- Trip length preference (Half day / Full day / Multi-day)

None of these need to be built now, but the card should be designed to grow.

**Saved adventures library**
The current implementation shows a row linking to the full Plans screen and a preview of the last three saved adventures. This is the right pattern — summary on Profile, full list on a separate screen.

The three-item preview should feel like a real preview, not a list of names. Each item could show:
- The destination image (small thumbnail, meaningful at a glance)
- The adventure name
- The city and activity type
- The date it was saved

Tapping any of these loads the full itinerary directly — the user is back on-trail from Profile in two taps.

The "View All" link at the bottom of the preview should show the total count and use the user's preferred term: "View all 14 Adventures →". When the user has zero saved adventures, this section should show an empty state that's encouraging rather than empty: a small illustration or icon, and copy like "Your saved adventures will appear here. Start planning to add your first one."

**The Plans / Adventures full-list screen**
The dedicated Plans screen (`/plans`) is reached from Profile. It shows the complete saved library with cards that include the adventure name, city, activity badge, description excerpt, and a delete button. Tapping a card reloads the full itinerary.

This screen is doing its job but has the same opportunity as the Profile preview: destination photography would transform these cards from text records into recognizable memories. "Oh right, the Moab trip" lands very differently with a photo than without one.

The delete confirmation is appropriate — users shouldn't lose an adventure by accident. But the confirmation could be less formal than a native Alert: an inline swipe-to-delete gesture (on native) or a small "Are you sure?" expansion within the card is faster and more natural.

**Authentication section**
The current auth card says "Join the Adventure" and offers Create Account and Sign In buttons. The copy is on-brand and the CTA is honest. A few things would make it stronger:

The benefit statement should be specific: "Save your adventures across all your devices, build your trip history, and get personalized recommendations." Vague benefits ("sync your data") don't motivate action. Specific benefits do.

The guest mode disclaimer at the bottom ("You're browsing as a guest") is accurate but slightly negative. "No account needed to plan — sign up when you're ready" frames it more positively.

For signed-in users, this section should be replaced with account management: email address on file, an option to change password, and a sign-out option. Nothing more complex than that at this stage.

**Settings and support links**
Profile will eventually need a home for links that don't fit elsewhere: About, Privacy Policy, Terms of Service, Help / FAQ, Send Feedback. These don't need their own section yet — a simple row of text links at the very bottom of the screen is sufficient. They should feel like footnotes, not features.

---

## What's Missing That Should Be Here

**Adventure statistics.** A small "your year in adventures" block — total adventures saved, miles hiked, states visited, destinations explored — gamifies the experience gently and gives users a sense of their history in the app. This requires database persistence and calculation, so it's a post-v1.0 addition, but it's worth designing for.

**Personalization preferences.** As described above, the terminology toggle is the seed of a preferences card. Expanding it to include activity type, home region, and experience level would let the app deliver meaningfully personalized recommendations without requiring complex account setup.

**Upcoming trip context.** If a user has saved an adventure they plan to do this weekend, the Profile screen could surface that: "You're heading to Sedona in 3 days. Here's your itinerary." This requires date-stamping or "planning" vs. "completed" adventure states — a useful distinction that doesn't exist yet.

**Adventure completion tracking.** The current model treats saving and completing as the same thing. A "completed" state (user marks an adventure as done after returning) would let the app distinguish wishlist items from actual trips and enable the statistics feature above.

---

## The Terminology Toggle in Depth

It's worth taking a moment to understand what the Plans/Adventures toggle is actually doing and what it could become.

Right now it's a cosmetic preference: one word swaps for another. But it hints at something more interesting: that different users have different mental models for what they're doing in this app. Someone who thinks of their outdoor time as "plans" is organized, methodical, forward-looking. Someone who thinks of them as "adventures" is experiential, spontaneous, story-oriented.

This isn't just language. It could inform how the app presents content to them — the organized planner might want a detail-rich itinerary with logistics and alternatives; the adventurer might want a shorter, punchier plan and more emphasis on the unexpected.

For now, the toggle is a small delight. Over time, it could be the seed of a genuine personalization model.

---

## Relationship to Other Screens

Profile is the destination of saved adventures from the Itinerary screen. It links to the full Plans list. It's the only screen with account management. It's also the only screen that reflects the user's history in the app, which means it's the screen that answers "what has this app done for me?" — a question every returning user is silently asking.

---

## Build Notes

Profile is the screen most in need of design consistency (the current hardcoded styles don't match the theme system) and the screen with the most room to grow into a first-class feature. Priorities:

1. Migrate all styles to the shared theme system
2. Segmented control for Adventures / Plans preference (replacing the toggle)
3. Signed-in user header block (name, count, avatar)
4. Destination thumbnails on saved adventure preview cards
5. Specific, benefit-led copy in the auth card
6. Preferences card expansion (activity type, region, level)
7. Adventures statistics block (requires database, post-auth)
8. Completed vs. wishlist states for saved adventures

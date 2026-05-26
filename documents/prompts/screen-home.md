# Screen Guidance: Home Tab

**Role in the app:** The front door. This is where every planning session begins. It sets the tone, communicates the product promise, and gets out of the user's way as fast as possible.

---

## What This Screen Is

The Home screen is a single-purpose planning surface. The user arrives here wanting to go somewhere outdoors. They describe it. The app responds. That's the entire loop. Everything on this screen should serve that loop — nothing should distract from it.

The current implementation gets the basics right: there's an input, a button, and an AI response. But it has room to grow into something that feels genuinely exciting to open, not just functional.

---

## What's Here Now

A scrollable surface with a hero image header, a headline ("Plan your next adventure"), a multiline text input, a submit button, and a conversational AI response area that appears after submission. There's also a small debug button in the top-right corner for development use.

The screen clears itself on mount unless an adventure is already in progress — so returning from another tab doesn't wipe the user's session.

---

## What It Should Feel Like

Opening this screen should feel like standing at a trailhead. There's open sky, quiet, possibility. The UI shouldn't feel like a form to fill out — it should feel like a conversation starter. The input is an invitation, not a field.

The visual treatment should lean on the outdoor aesthetic: photography, natural tones, generous whitespace. The hero image is doing real work here — it should rotate or be destination-aware eventually, but even a single strong landscape image is more evocative than a blank gradient.

---

## Content and Layout Decisions

**Hero section**
The header image grounds the screen in the physical world. It should feel aspirational — wide open landscapes, golden hour light, the kind of image that makes someone want to go outside right now. A carousel of images cycling through different destinations would deepen this over time. For now, a single strong image is the right call.

**The headline**
"Plan your next adventure" is serviceable. It's accurate but not memorable. Something that speaks to the user's emotional state ("Where do you want to go?") might feel more conversational and less like a form header. The headline sets expectations — if it sounds like a planning tool, users will treat it like one. If it sounds like an invitation, they'll engage differently.

**The input**
This is the most important element on the screen. It should be prominent, generous in size, and feel comfortable to write in. The current 6-line multiline approach is good — it gives the user room to express themselves without feeling like they're being asked to write an essay. The placeholder copy ("What do you want to do?") is fine but could be more evocative. Rotating placeholder suggestions — "Rocky Mountain hiking this weekend", "Somewhere coastal for two days", "Desert camping, beginner-friendly" — would help users understand the range of what's possible and reduce the blank-page anxiety of an empty input.

**The submit button**
A single, confident CTA. "Plan My Adventure" is clear. It should be visually prominent and feel satisfying to tap — this is the moment the user commits. Disabling it until input exists is the right call. The loading state ("Planning...") is appropriate; a subtle animation (pulsing, or a progress indicator) would make the wait feel shorter.

**The AI response area**
After submission, the AI response should feel like a knowledgeable friend confirming they understood the request, not a system log. It should be warm, brief, and confident: "Great — here's a full day in Moab built around Arches National Park. Check your Itinerary tab." The current implementation displays the response above the input area; this works on scroll but could be more prominent as a transitional moment.

**Navigation to Itinerary**
The handoff from Home to Itinerary is the most important UX transition in the app. After the AI response appears, the user needs a clear signal that their plan is ready. A badge on the Itinerary tab is a start, but a more proactive nudge — a banner or a button appearing that says "View Your Plan" — would reduce the discovery gap for new users.

---

## What's Missing That Should Be Here

**Recent adventure continuity.** If the user has been here before and has saved adventures, the screen has an opportunity to acknowledge that. A small "Continue from where you left off" link or a preview of their last adventure keeps them engaged without cluttering the planning surface.

**Suggested prompts.** New users don't know what to type. A horizontal row of suggested queries — chips like "Hike near Sedona", "Coastal trip in Maine", "Colorado skiing" — would dramatically lower the barrier to first use. Tapping one populates the input.

**Seasonal or context-aware framing.** A home screen that knows it's winter and nudges toward ski destinations, or knows the user is in Colorado and surfaces nearby adventures, would feel genuinely personalized rather than generic. This is a v1.2 concern, but the design should leave room for it.

**Voice input entry point.** The microphone icon should live adjacent to the text input, dormant until tapped. When the voice feature is built, it should slot in here without requiring a layout change.

---

## Interaction Notes

The submit flow has two API calls in sequence (Groq chat, then POC Plan). The loading state covers both. If the first call fails, the error should be surfaced inline — not as a native Alert — with a clear message and a retry path. "Couldn't find an adventure right now. Try rephrasing or check your connection." is better than a raw error string.

The screen resets on mount intentionally. If a user taps Home while mid-itinerary, they're signaling intent to start fresh. The reset should not clear saved adventures — only the active in-progress session.

---

## Relationship to Other Screens

Home feeds into Itinerary. That's its only job. Explore is the alternative entry point for users who don't know what to ask for. Profile is where the fruits of planning are stored. Home doesn't need to know about any of that — it just needs to hand off a great plan.

---

## Build Notes

The current implementation is functional. The priorities for improvement are:

1. Rotating placeholder suggestions in the input
2. A clearer post-submission transition nudging toward the Itinerary tab
3. Inline error handling (replacing any Alert-based errors)
4. Suggested query chips below the input for new users
5. Voice input stub (UI element, no-op until feature is built)

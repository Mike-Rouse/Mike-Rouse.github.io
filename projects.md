---
title: "All Projects — Shipped & In-Progress"
layout: single
permalink: /projects/
---
*C# gameplay systems — controllers & camera, interaction, AI/perception, UI, save/load, performance.  
Shipped: iOS/Android (AR) & VR. PC/Steam in development.*{: #top }

[In Development](#in-development) · [Released Projects](#projects-chronological) · [Internal Tools & Frameworks](#internal-tools)

## In Development {#in-development}

### 3:10am — PC (Steam) {#three-ten-am}

*Small, atmospheric haunted-house game to learn the full Steam release pipeline.*

{% include video id="F-aJi8AOgAU" provider="youtube" caption="3:10am — PC gameplay clip (controller + interaction + inner monologue)." %}

**Goal:** Ship a small, engaging PC horror slice with a tight loop, readable interactions, and strong audio-visual atmosphere; take it through the full Steam release pipeline (capsules, depots, build updates).

**How:** Responsive first-person controls (**gamepad + KBM**), clear interaction prompts (Use/Open/Inspect), a simple, flexible ability system (e.g., flashlight), single-slot save with autosave on exit, core settings (FOV/AA/audio), and focused content/performance passes for smooth frame pacing.

**Proof:** 20s gameplay clip above. Next: Steam “Coming Soon” page → public downloadable build → post-launch hotfix flow.

**Scope:** 15–20 minutes  
**Target milestone:** Full release **Nov 2025**  
**Next:** Public “Coming Soon” page

<!-- TODO: Add store page trailer + Steam Page Link -->
<!-- **Proof:** store page trailer + Steam Page Link -->
{% comment %}
When ready, switch the two lines above to:
**Proof:** {% include video id="YOUTUBE_ID" provider="youtube" caption="Steam Page Trailer." %}
or
**Proof:** {% include button url="STEAM_URL" text="View on Steam" target="_blank" %}
{% endcomment %}  

---

### Untitled Horror Game — PC (Steam)

*Evade, resist, and escape across a cursed open area; tension/stealth first.*

**Scope:** ~4–5 hours  
**Target milestone:** Demo Release **Oct 2026**  
**Next:** Slice content lock **Jan 2026**; store assets from prototypes  
<!-- TODO: Add store page trailer + Steam Page Link -->
<!-- **Proof:** store page trailer + Steam Page Link -->

{% comment %}
When proof exists:
**Proof:** {% include video id="YOUTUBE_ID" provider="youtube" caption="Steam Page Trailer." %}
or
**Proof:** {% include button url="STEAM_COMING_SOON_URL" text="View on Steam" target="_blank" %}
{% endcomment %}

<!-- TODO: Make VR/AR Showreel. Add to page nav -->
<!-- ## Shipped VR/AR Showreel {#showreel} -->

{% comment %}
{% include video id="YOUTUBE_ID" provider="youtube" caption="30s showreel: VR/AR systems, tools, and perf."%}
{% endcomment %}

## Released Projects {#projects-chronological}

*This page highlights hands-on Unity work. I’ve also led project management and delivery on additional projects, plus prototypes for pitches and tenders that aren’t shown here.*

### Cognetic Training Demo (Jul 2025)

*Training demo for Quest; optimised from a Quest 3 prototype to run smoothly on Quest 2 and released on the Meta Quest Store.*

**Type:** Public release · **Platforms:** Meta Quest · **Engine:** Unity 2022 LTS · **Pipeline:** URP

[Meta Quest](https://www.meta.com/en-gb/experiences/cognetic-training-demo/24339813342291975/)

{% capture owned_cognetic %}

- **Optimised for Quest 2** — profiled and refactored scenes/assets to meet Quest 2 performance budgets (original build targeted Quest 3 only); stabilised frame pacing and reduced spikes to shipable levels.

- **Environment-adaptive audio** — implemented reverb/routing that shifts with environment state (hall → mountain → underwater) so shared FX remain convincing and spatially grounded across locations.

- **Release ops** end-to-end (Meta Quest Store) — defined store asset list, gathered screenshots/art with the Creative Director, wrote initial copy, authored privacy policy, ensured VRC compliance, handled submission feedback and amendments through to approval.

- **Delivery & quality** — owned the schedule and task breakdown, coordinated cross-discipline work, and drove bug triage/polish to bring the build to acceptance.
{%- endcapture -%}
{%- include custom-details.html title="What I owned" content=owned_cognetic -%}

---

### Aberwla (Mar 2025)

*Welsh-language VR minigames in an explorable town for classroom practice; shipped on Quest/PICO with 72 FPS targets met and ≥99% crash-free sessions.*

**Type:** Public release · **Platforms:** Quest/PICO · **Engine:** Unity 2022 LTS · **Pipeline:** URP

[Meta Quest](https://www.meta.com/en-gb/experiences/aberwla/9575081185844250/) · [PICO Store](https://store-global.picoxr.com/global/detail/1/7477528258796486711)

{%- capture owned_aberwla -%}

- **Core gameplay & minigames** — translated concepts into requirements/tasks; designed → greyboxed → shipped multiple minigames across the town/forest; implemented multiplayer (Normcore).

- **Cross-platform build tooling** — Quest↔PICO Addressables + scripting defines → ~40% faster build prep; 0 manual platform-switch regressions across 6 releases.

- **Performance & content pipeline** — baked lighting/occlusion, LOD discipline, asset budgeting; profiled on Quest/PICO to meet device budgets; built a spatial audio pipeline with environment-aware routing.

- **Release operations end-to-end** — age ratings, store assets/copy, privacy policy, submissions; ensured VRC compliance on both stores; hotfix TTR 48–72 h.

- **Delivery & leadership** — owned schedule and breakdown; managed 1 Unity dev; coordinated 2 3D artists and the Creative Director; ran phased MDM (ManageXR) deployments to immersion centres.
{%- endcapture -%}
{%- include custom-details.html title="What I owned" content=owned_aberwla -%}

---

### Centrica Energy Storage (Mar 2024)

**Type:** Public release · **Platforms:** Android/iOS · **Engine:** Unity 2022 LTS · **Pipeline:** URP

*Energy-transition app for Android/iOS; explore CES+ sites and future plans (Rough, hydrogen) with responsive menus—approved on both stores.*

[Google Play](https://play.google.com/store/apps/details?id=com.AnimatedTechnologiesLtd.Centrica) · [App Store](https://apps.apple.com/gb/app/centrica-energy-storage/id6473838618)

{%- capture owned_centrica -%}

- **UI & menus** — authored main menu layout/flow, loading/scrolling, and navigation states; ensured smooth transitions and responsive interaction on mobile.

- **Stability & performance** — triaged/prioritised bugs, fixed UI/runtime issues, and optimised to improve responsiveness and polish for launch.

- **Release operations (iOS/Android)** — defined store asset/copy requirements, coordinated delivery with the team, prepared builds, and handled App Store/Play Store submissions through approval.

{%- endcapture -%}
{%- include custom-details.html title="What I owned" content=owned_centrica -%}

---

### M-SParc (Dec 2023)

**Type:** Public release · **Platforms:** Android/iOS · **Engine:** Unity 2022 LTS · **Pipeline:** URP

*Location-based AR app for M-SParc (Android/iOS): GPS-stabilised placement, full-scale building previews, tenant QR profiles, and a collectables trail—shipped.*

[Google Play](https://play.google.com/store/apps/details?id=com.AnimatedTechnologies.spARc) · [App Store](https://apps.apple.com/gb/app/m-sparc/id1643887893)

{%- capture owned_msparc -%}

- **AR placement & tracking** — implemented GPS-stabilised model placement with AR Foundation; tuned origin/session handling to reduce outdoor drift and jitter.

- **Image tracking overlays** — built marker detection that anchors animated video overlays (VideoPlayer/RenderTexture) with clean loss/reacquire behaviour.

- **Release operations (iOS/Android)** — defined store assets/copy, handled data-safety/privacy forms, prepared builds, and managed App Store/Play Store submissions through approval.

- **Quality & localisation** — triaged/fixed bugs, project optimisation, and implemented string/asset localisation with runtime locale switching.
{%- endcapture -%}
{%- include custom-details.html title="What I owned" content=owned_msparc -%}

---

### Beneath The Waves – Dan Y Môr (Jul 2023)

**Type:** Public release · **Platforms:** Android/iOS · **Engine:** Unity 2022 LTS · **Pipeline:** URP

*Holyhead maritime-history AR app (Android/iOS): interactive maps and self-guided trails with POIs, narrated content, and badge progression—released on both stores.*

[Google Play](https://play.google.com/store/apps/details?id=com.AnimatedTechnologies.BeneathTheWaves) · [App Store](https://apps.apple.com/gb/app/beneath-the-waves-dan-y-m%C3%B4r/id1660955636)

{%- capture owned_waves -%}

- **AR placement (GPS-stabilised)** — implemented outdoor model placement with AR Foundation; tuned origin/session handling to reduce drift/jitter on device.

- **Map module** — built a scroll/zoom map that reveals unlocked POIs; tap-to-detail flow with persisted state across sessions.

- **Progression & badges** — authored the badge unlock pipeline (conditions, persistence, UI hooks) with safe edge-case handling and regrant protection.

- **UI functionality** — implemented menus and in-scene UI, responsive layouts, and loading to keep interactions smooth on mobile.

- **Quality & optimisation** — triaged/fixed bugs; reduced startup time/memory via asset sizing and video/texture streaming tweaks.
{%- endcapture -%}
{%- include custom-details.html title="What I owned" content=owned_waves -%}

---

### Stori Môn (Feb 2023)

**Type:** Public release · **Platforms:** Android/iOS · **Engine:** Unity 2020 LTS · **Pipeline:** URP

*Anglesey location-based AR trail (Android/iOS): visit POIs across five towns, meet AR characters, collect badges—live on Play Store and App Store.*

[Google Play](https://play.google.com/store/apps/details?id=com.AnimatedTechnologies.AngleseyAR) · [App Store](https://apps.apple.com/gb/app/stori-m%C3%B4n/id1645310984)

{%- capture owned_storimon -%}

- **Audio playback pipeline** — implemented robust clip/playlist handling with controlled looping, fades, and device-safe volume; integrated with scene/UI flow.

- **Release operations (iOS/Android)** — defined store assets/copy, handled privacy/data-safety forms, prepared builds, and managed App Store/Play Store submissions through approval.

- **Localisation** — set up string/asset localisation and integrated runtime locale switching across menus and in-scene UI.

- **Quality & triage** — fixed user-reported issues and crash/error buckets from Unity Cloud Diagnostics, tightened performance and polish for launch.
{%- endcapture -%}
{%- include custom-details.html title="What I owned" content=owned_storimon -%}

<!-- --- -->
<!-- Refgas -->

<!-- ### ITL (2022)

**Type:** Private prototype · **Platforms:** Android/iOS · **Engine:** Unity 2020 LTS · **Pipeline:** URP

{%- capture owned_itl -%}

- WHAT I OWNED bullet 1  
- WHAT I OWNED bullet 2  
- WHAT I OWNED bullet 3
{%- endcapture -%}
{%- include custom-details.html title="What I owned" content=owned_storimon -%} -->

## Internal Tools & Frameworks {#internal-tools}

### Animated Technologies VR Framework (Oct 2025)

**Type:** Internal framework · **Availability:** Private · **Engine:** Unity 6 LTS · **Pipeline:** URP

*Unity 6 VR starter kit standardising interactions, input, and presets; cut new-project setup from days to hours across teams.*

{%- capture owned_vrframework -%}

- **Interaction library (Unity 6)** — authored a consistent set of VR interactables: doors (handle/sliding/push-to-open), drawers, levers/dials/knobs, buttons/keypads, keys/locks, turnable wheels, plus direct & distance grab—with unified APIs and physics tuning to minimise integration bugs.

- **Project bootstrap & presets** — prewired Addressables + localisation, Quest Store–ready Android manifest, project settings/presets, and editor validators; cut new-project setup from days to hours and reduced rework across teams.

- **Input/avatars & controller base** — set up base controller rig and hand avatars, sensible defaults/bindings, and interaction layers so feature teams could drop in content without wiring from scratch.

- **UI modules** — built reusable UI components including a virtual keyboard (transform-aware with validation) and common menu patterns to standardise flows across projects.

- **Delivery & technical PM** — scoped features, created task breakdowns/estimates, owned timelines, and drove bug triage/polish to keep the framework shippable and ready for adoption.
{%- endcapture -%}
{%- include custom-details.html title="What I owned" content=owned_vrframework -%}

[↑ Back to top](#top)

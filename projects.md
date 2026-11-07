---
layout: portfolio
title: Projects
description: "Selected Unity/C# projects: current PC gameplay development, shipped minigames and multiplayer, mobile applications and reusable internal systems."
permalink: /projects/
---

<h1 class="page-heading">Projects</h1>
<nav class="section-links" aria-label="Project categories">
  <a href="#in-development">In development</a>
  <a href="#projects-chronological">Released projects</a>
  <a href="#internal-tools">Internal tools &amp; frameworks</a>
</nav>
<section class="index-section" id="in-development" aria-labelledby="development-title">
  <h2 id="development-title">In development</h2>
  <article class="project-entry" id="three-ten-am">
    <div class="project-index-row">
      {% include portfolio-video.html key="gameplay_trailer" priority=true %}
      <div>
        <h3>3:10 AM</h3>
        <p class="meta">Solo developer · Unity 6 / HDRP · Windows PC<br>Steam page live · Demo in development</p>
        <div class="project-summary">
          <p>A first-person horror investigation game. I’m building connected evidence/progression, contextual interaction, player-state handling and custom C# Timeline sequences.</p>
        </div>
        <div class="links">
          {% include steam-link.html %}
          {% include portfolio-trailer-links.html extended_only=true %}
          <a href="{{ '/#three-ten-am' | relative_url }}">Technical Showcase</a>
        </div>
      </div>
    </div>
  </article>

</section>

<section class="index-section" id="projects-chronological" aria-labelledby="released-title">
  <h2 id="released-title">Released projects</h2>
  <article class="project-entry" id="aberwla">
    <div class="project-index-row">
      {% include portfolio-video.html key="aberwla" %}
      <div>
        <h3>Aberwla</h3>
        <p class="meta">Lead Unity Developer · Animated Technologies<br>Quest/PICO · Unity 2022 / URP · Released March 2025</p>
        <div class="project-summary">
          <p>Welsh-language minigames and multiplayer in an explorable town.</p>
          <ul>
            <li>Designed and programmed minigames from greybox through production, including Normcore multiplayer.</li>
            <li>Optimised for 72 FPS on Quest 2/3 and PICO; built platform-switch tooling for approximately 40% faster build preparation. Maintained 99%+ crash-free sessions.</li>
          </ul>
        </div>
        <div class="links">
          <a href="https://www.meta.com/en-gb/experiences/aberwla/9575081185844250/" target="_blank" rel="noopener" aria-describedby="external-link-hint">Meta Quest</a>
          <a href="https://store-global.picoxr.com/global/detail/1/7477528258796486711" target="_blank" rel="noopener" aria-describedby="external-link-hint">PICO Store</a>
        </div>
      </div>
    </div>

{% capture owned_aberwla %}
- **Game design (minigames)** — applied gamification (clear goals, feedback loops, difficulty curves) to Welsh-language practice tasks.

- **Core gameplay & minigames** — translated concepts into requirements/tasks; designed → greyboxed → shipped multiple minigames across the town/forest; implemented multiplayer (Normcore).

- **Quest↔PICO build-switch tooling** — Addressables + scripting defines → **~40% faster** build prep; **0** manual platform-switch regressions across **6** releases.

- **Performance & content pipeline** — baked lighting/occlusion, LOD discipline, asset budgeting; profiled on Quest/PICO to meet device budgets; built a spatial audio pipeline with environment-aware routing.

- **Release operations end-to-end** — age ratings, store assets/copy, privacy policy, submissions; ensured VRC compliance on both stores; hotfix TTR **48–72 h**.

- **Delivery & leadership** — owned schedule and breakdown; managed **1** Unity dev; coordinated **2** 3D artists and the Creative Director; ran phased MDM (ManageXR) deployments to immersion centres.
{% endcapture %}

    {% include custom-details.html title="More on my contribution" content=owned_aberwla %}
  </article>

  <article class="project-entry" id="cognetic">
    <div class="project-index-row">
      <img src="{{ '/assets/images/projects/cognetic-art.webp' | relative_url }}" width="720" height="405" loading="lazy" alt="Cognetic Training Demo store artwork">
      <div>
        <h3>Cognetic Training Demo</h3>
        <p class="meta">Unity optimisation &amp; audio · Animated Technologies<br>Meta Quest · Unity 2022 / URP · Released July 2025</p>
        <div class="project-summary">
          <p>A training demo adapted from a Quest 3 prototype for release on Quest 2.</p>
          <ul>
            <li>Profiled and refactored scenes/assets to meet Quest 2 performance budgets.</li>
            <li>Implemented environment-adaptive audio routing across hall, mountain and underwater environments; handled store submission and release.</li>
          </ul>
        </div>
        <div class="links">
          <a href="https://www.meta.com/en-gb/experiences/cognetic-training-demo/24339813342291975/" target="_blank" rel="noopener" aria-describedby="external-link-hint">Meta Quest</a>
        </div>
      </div>
    </div>

{% capture owned_cognetic %}
- **Optimised for Quest 2** — profiled and refactored scenes/assets to meet Quest 2 performance budgets (original build targeted Quest 3 only); stabilised frame pacing and reduced spikes to shipable levels.

- **Environment-adaptive audio** — implemented reverb/routing that shifts with environment state (hall → mountain → underwater) so shared FX remain convincing and spatially grounded across locations.

- **Release ops** end-to-end (Meta Quest Store) — defined store asset list, gathered screenshots/art with the Creative Director, wrote initial copy, authored privacy policy, ensured VRC compliance, handled submission feedback and amendments through to approval.

- **Delivery & quality** — owned the schedule and task breakdown, coordinated cross-discipline work, and drove bug triage/polish to bring the build to acceptance.
{% endcapture %}

    {% include custom-details.html title="More on my contribution" content=owned_cognetic %}
  </article>

  <article class="project-entry" id="centrica">
    <div class="project-identity">
      <img class="store-icon" src="{{ '/assets/images/projects/centrica-icon.webp' | relative_url }}" width="96" height="96" loading="lazy" alt="">
      <div>
        <h3>Centrica Energy Storage</h3>
        <p class="meta">Unity UI &amp; optimisation · Animated Technologies<br>Android/iOS · Unity 2022 / URP · Released March 2024</p>
      </div>
    </div>
    <div class="project-summary">
      <p>An energy-transition application for exploring CES+ sites and future plans.</p>
      <ul>
        <li>Built main-menu flows, navigation states and infinitely looping option carousels with responsive swipe controls.</li>
        <li>Optimised rendering, memory and responsiveness across the whole app and device matrix; fixed runtime/UI issues and owned Android/iOS releases.</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://apps.apple.com/gb/app/centrica-energy-storage/id6473838618" target="_blank" rel="noopener" aria-describedby="external-link-hint">App Store</a>
    </div>

{% capture owned_centrica %}
- **Touch menu navigation** — implemented swipe controls for infinitely looping option carousels.

- **Menu flows & UI state** — implemented main-menu flows, navigation states, loading/scrolling and responsive transitions.

- **Whole-app optimisation** — optimised rendering, memory and responsiveness across a mixed device matrix; addressed frame pacing, safe areas and asset compression (ASTC/ETC2).

- **Quality & fixes** — resolved UI issues and other runtime problems across the application.

- **Release operations (Android/iOS)** — owned Play/App Store submissions, including Android AAB/signing, iOS provisioning and store metadata.
{% endcapture %}

    {% include custom-details.html title="More on my contribution" content=owned_centrica %}
  </article>

  <article class="project-entry" id="msparc">
    <div class="project-identity">
      <img class="store-icon" src="{{ '/assets/images/projects/msparc-icon.webp' | relative_url }}" width="96" height="96" loading="lazy" alt="">
      <div>
        <h3>M-SParc</h3>
        <p class="meta">Unity programming · Animated Technologies<br>Android/iOS · Unity 2022 / URP · Released December 2023</p>
      </div>
    </div>
    <div class="project-summary">
      <p>A location-based AR application with building previews, tenant profiles and a collectables trail.</p>
      <ul>
        <li>Implemented GPS-stabilised AR placement and image-tracked video overlays with loss/reacquire handling.</li>
        <li>Integrated localisation and runtime locale switching, optimised the project and prepared store releases.</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://apps.apple.com/gb/app/m-sparc/id1643887893" target="_blank" rel="noopener" aria-describedby="external-link-hint">App Store</a>
    </div>

{% capture owned_msparc %}
- **AR placement & tracking** — implemented GPS-stabilised model placement with AR Foundation; tuned origin/session handling to reduce outdoor drift and jitter.

- **Image tracking overlays** — built marker detection that anchors animated video overlays (VideoPlayer/RenderTexture) with clean loss/reacquire behaviour.

- **Release operations (iOS/Android)** — defined store assets/copy, handled data-safety/privacy forms, prepared builds, and managed App Store/Play Store submissions through approval.

- **Quality & localisation** — triaged/fixed bugs, project optimisation, and implemented string/asset localisation with runtime locale switching.
{% endcapture %}

    {% include custom-details.html title="More on my contribution" content=owned_msparc %}
  </article>

  <article class="project-entry" id="waves">
    <div class="project-identity">
      <img class="store-icon" src="{{ '/assets/images/projects/waves-icon.webp' | relative_url }}" width="96" height="96" loading="lazy" alt="">
      <div>
        <h3>Beneath the Waves / Dan Y Môr</h3>
        <p class="meta">Unity programming · Animated Technologies<br>Android/iOS · Unity 2022 / URP · Released July 2023</p>
      </div>
    </div>
    <div class="project-summary">
      <p>A maritime-history AR application with maps, self-guided trails and badge progression.</p>
      <ul>
        <li>Built AR placement, a scroll/zoom map with persisted POI state, and badge conditions, persistence and UI hooks.</li>
        <li>Implemented menus and in-scene UI; improved startup time and memory use through asset and streaming changes.</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://apps.apple.com/gb/app/beneath-the-waves-dan-y-m%C3%B4r/id1660955636" target="_blank" rel="noopener" aria-describedby="external-link-hint">App Store</a>
    </div>

{% capture owned_waves %}
- **AR placement (GPS-stabilised)** — implemented outdoor model placement with AR Foundation; tuned origin/session handling to reduce drift/jitter on device.

- **Map module** — built a scroll/zoom map that reveals unlocked POIs; tap-to-detail flow with persisted state across sessions.

- **Progression & badges** — authored the badge unlock pipeline (conditions, persistence, UI hooks) with safe edge-case handling and regrant protection.

- **UI functionality** — implemented menus and in-scene UI, responsive layouts, and loading to keep interactions smooth on mobile.

- **Quality & optimisation** — triaged/fixed bugs; reduced startup time/memory via asset sizing and video/texture streaming tweaks.
{% endcapture %}

    {% include custom-details.html title="More on my contribution" content=owned_waves %}
  </article>

  <article class="project-entry" id="storimon">
    <div class="project-identity">
      <img class="store-icon" src="{{ '/assets/images/projects/storimon-icon.webp' | relative_url }}" width="96" height="96" loading="lazy" alt="">
      <div>
        <h3>Stori Môn</h3>
        <p class="meta">Unity programming · Animated Technologies<br>Android/iOS · Unity 2020 / URP · Released February 2023</p>
      </div>
    </div>
    <div class="project-summary">
      <p>An Anglesey AR trail with characters, points of interest and collectable badges.</p>
      <ul>
        <li>Implemented audio/playlist playback with looping, fades and scene/UI integration; added runtime localisation.</li>
        <li>Resolved diagnostics and user-reported issues, prepared builds and handled store submissions.</li>
      </ul>
    </div>
    <div class="links">
      <a href="https://apps.apple.com/gb/app/stori-m%C3%B4n/id1645310984" target="_blank" rel="noopener" aria-describedby="external-link-hint">App Store</a>
    </div>

{% capture owned_storimon %}
- **Audio playback pipeline** — implemented robust clip/playlist handling with controlled looping, fades, and device-safe volume; integrated with scene/UI flow.

- **Release operations (iOS/Android)** — defined store assets/copy, handled privacy/data-safety forms, prepared builds, and managed App Store/Play Store submissions through approval.

- **Localisation** — set up string/asset localisation and integrated runtime locale switching across menus and in-scene UI.

- **Quality & triage** — fixed user-reported issues and crash/error buckets from Unity Cloud Diagnostics, tightened performance and polish for launch.
{% endcapture %}

    {% include custom-details.html title="More on my contribution" content=owned_storimon %}
  </article>

</section>

<section class="index-section" id="internal-tools" aria-labelledby="internal-title">
  <h2 id="internal-title">Internal tools &amp; frameworks</h2>
  <article class="project-entry" id="vr-framework">
    <h3>Animated Technologies VR Framework</h3>
    <p class="meta">Unity programming & tooling · Animated Technologies<br>Unity 6 / URP · Internal framework · Private · October 2025</p>
    <div class="project-summary">
      <p>A reusable project foundation for interaction, input, UI and production setup.</p>
      <ul>
        <li>Authored reusable interactables with consistent APIs, plus input/controller defaults and UI modules.</li>
        <li>Built project bootstrap, presets and validators, reducing new-project setup from days to hours.</li>
      </ul>
    </div>

{% capture owned_vrframework %}
- **Interaction library (Unity 6)** — authored a consistent set of VR interactables: doors (handle/sliding/push-to-open), drawers, levers/dials/knobs, buttons/keypads, keys/locks, turnable wheels, plus direct & distance grab—with unified APIs and physics tuning to minimise integration bugs.

- **Project bootstrap & presets** — prewired Addressables + localisation, Quest Store–ready Android manifest, project settings/presets, and editor validators; cut new-project setup from days to hours and reduced rework across teams.

- **Input/avatars & controller base** — set up base controller rig and hand avatars, sensible defaults/bindings, and interaction layers so feature teams could drop in content without wiring from scratch.

- **UI modules** — built reusable UI components including a virtual keyboard (transform-aware with validation) and common menu patterns to standardise flows across projects.

- **Delivery & technical PM** — scoped features, created task breakdowns/estimates, owned timelines, and drove bug triage/polish to keep the framework shippable and ready for adoption.
{% endcapture %}

    {% include custom-details.html title="More on my contribution" content=owned_vrframework %}
  </article>

</section>

<a class="back-top" href="#top">Back to top</a>

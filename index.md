---
layout: portfolio
title: "Mike Rouse — Unity/C# Gameplay & Systems Developer"
description: "Unity/C# gameplay and systems developer with four years of professional experience. Watch my current PC game showcase, shipped professional work and programming examples. UK-based."
home: true
---

<section class="intro" aria-labelledby="intro-title">
  <h1 id="intro-title">Unity / C# Gameplay &amp; Systems Developer</h1>
  <p>Four years of professional Unity development, including gameplay systems, multiplayer and optimisation for shipped projects. I’m currently building <strong>3:10 AM</strong>, a first-person PC horror investigation game.</p>
</section>

<nav class="section-links" aria-label="Home sections">
  <a href="#three-ten-am">Technical Showcase</a>
  <a href="#professional-work">Professional work</a>
  <a href="#systems">Gameplay systems</a>
</nav>
<span id="featured" class="anchor-alias" aria-hidden="true"></span>
<section id="three-ten-am" aria-labelledby="showcase-title">
  <div class="showcase-heading">
    <h2 id="showcase-title">3:10 AM — Technical Showcase</h2>
    <div class="showcase-meta meta">
      <span id="three-ten-am-tech-highlights">Solo developer · Unity 6 / HDRP · Windows PC</span>
      <span class="status" id="three-ten-am-targets">Steam page live · Demo in development</span>
    </div>
  </div>
  {% include portfolio-video.html key="developer_showcase" priority=true %}
  <ul class="contributions" id="three-ten-am-what-i-own">
    <li><strong>Connected investigation systems:</strong> Built EMF, radio and book behaviours feeding one evidence/progression tracker, with confirmed clues updating objectives and HUD feedback.</li>
    <li><strong>Interaction and player state:</strong> Built contextual interaction feedback and overlapping control restrictions for UI, pause and directed sequences. Controls resume only when all restrictions clear.</li>
    <li><strong>Custom Timeline integration:</strong> Built custom C# Timeline tracks to coordinate camera direction, scripted attacks and player-control handoffs.</li>
  </ul>
  <div class="links">
    {% include steam-link.html %}
    {% include portfolio-trailer-links.html %}
  </div>
</section>

<span id="recently-shipped" class="anchor-alias" aria-hidden="true"></span>
<section class="professional" id="professional-work" aria-labelledby="professional-title">
  <h2 id="professional-title">Featured professional project</h2>
  <article class="project" id="aberwla">
    {% include portfolio-video.html key="aberwla" %}
    <div>
      <h3>Aberwla</h3>
      <p class="meta" id="aberwla-tech-highlights">Lead Unity Developer · Animated Technologies<br>Quest/PICO · Released March 2025</p>
      <p>Welsh-language minigames in an explorable town, built with a small multidisciplinary team. I also supported another Unity developer.</p>
      <ul id="aberwla-what-i-owned">
        <li>Designed and implemented minigames from greybox through production, including Normcore multiplayer.</li>
        <li>Profiled and optimised for target devices, and built tooling for Quest/PICO build preparation and releases.</li>
      </ul>
      <div class="results" id="aberwla-results">
        <span><b>72 FPS</b> on Quest 2/3 and PICO</span>
        <span>Approximately <b>40% faster</b> build preparation</span>
      </div>
      <div class="links">
        <a href="https://www.meta.com/en-gb/experiences/aberwla/9575081185844250/" target="_blank" rel="noopener" aria-describedby="external-link-hint">Meta Quest</a>
        <a href="https://store-global.picoxr.com/global/detail/1/7477528258796486711" target="_blank" rel="noopener" aria-describedby="external-link-hint">PICO Store</a>
        <a href="{{ '/projects/#aberwla' | relative_url }}">Project details</a>
      </div>
    </div>
  </article>

  <div class="links more-projects">
    <a href="{{ '/projects/#projects-chronological' | relative_url }}">More professional projects</a>
  </div>
</section>

<section class="systems" id="systems" aria-labelledby="systems-title">
  <h2 id="systems-title">Gameplay systems</h2>
  <article class="system-example" id="interaction-system">
    <div class="system-overview">
      {% include portfolio-video.html key="interaction" %}
      <div>
        <h3>Interaction system</h3>
        <p>Interface-driven Press/Hold interaction with line-of-sight checks and world-space prompts. A shared selection path keeps targeting and occlusion consistent.</p>
      </div>
    </div>
    <details class="system-details">
      <summary>Interaction system — design notes and source excerpts</summary>
      <div class="details-body">

{% capture interaction_notes %}{% include examples/interaction.md %}{% endcapture %}

{{ interaction_notes | markdownify }}

      </div>
    </details>
  </article>

  <article class="system-example" id="footstep-audio-system">
    <div class="system-overview">
      {% include portfolio-video.html key="footsteps" %}
      <div>
        <h3>Footstep audio system</h3>
        <p>Surface-aware footsteps using PhysicMaterial-to-ScriptableObject mapping, pooled one-shot playback, and variants for sprinting and landing.</p>
      </div>
    </div>
    <details class="system-details">
      <summary>Footstep audio — design notes and source excerpts</summary>
      <div class="details-body">

{% capture footstep_notes %}{% include examples/footsteps.md %}{% endcapture %}

{{ footstep_notes | markdownify }}

      </div>
    </details>
  </article>

</section>

<section class="home-recommendation" id="recommendations" aria-label="Professional recommendation">
  <blockquote>
    <p>“He also consistently delivered reliable gameplay systems, editor tools, and performance-optimised builds.”</p>
  </blockquote>
  <p class="attribution"><strong>Josef Roberts</strong> · Head of Operations, Animated Technologies · Cross-functional peer</p>
  <div class="links">
    <a href="{{ '/about/#recommendations' | relative_url }}">Read the recommendations</a>
  </div>
</section>

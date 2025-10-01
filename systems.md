---
title: Systems
layout: collection
permalink: /systems/
collection: systems
entries_layout: grid
classes: wide
---

Short, production-ready Unity systems used across VR/mobile/PC. Each system links to a repo with a demo scene, quick start, and MIT license.

{% assign items = site.systems | sort: "order" %}
{% if items.size == 0 %}
_Status: first two in development. Planned: Save/Load, Addressables Build Switcher, XR Interaction Extensions._
{% else %}

## Available Systems

{% for s in items %}

- **[{{ s.title }}]({{ s.url | relative_url }})** — {{ s.summary }}

  {% if s.repo %} · [Code]({{ s.repo }}){% endif %}
{% endfor %}
{% endif %}

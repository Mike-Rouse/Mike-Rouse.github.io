---
layout: single
title: "Overview"
---
*C# gameplay systems: input/camera · interaction · AI/perception · UI/state · save/load · performance.  
Shipped VR & AR — PC title in development.*{: #top }

[Featured](#featured) · [Recently Shipped](#recently-shipped) · [Systems Library (WIP)](#systems) · [Recommendations](#recommendations)

{: .notice--info}
**Availability:** UK-based, open to remote Unity gameplay/systems roles (perm or contract, EU/US time-zone overlap).

<!-- Showreel here when it gets made -->

## Featured Work {#featured}

### 3:10 AM — First-Person Horror Slice · PC · In-Development {#three-ten-am}

**3:10 AM** is a 15–20 minute first-person PC haunted-house horror slice for PC. You’re a paranormal investigator trapped in a single home. Find three Death Facts — Location, Means Object, Manner of Death — to complete the Death Profile, then perform the Rite of Unbinding as a demonic presence raises pressure and triggers hunts. Built in Unity 6/HDRP with gamepad + keyboard/mouse parity and readable interaction. In progress: safe PC-style saves, settings, and a Steam-ready pipeline (depots/branches, scripted uploads).

{% include video id="F-aJi8AOgAU" provider="youtube" caption="3:10 AM — PC gameplay clip (controller + interaction + inner monologue)." %}

#### Team & Scope

Solo project; gameplay/systems, art integration, builds, and release prep.

#### What I Own {#three-ten-am-what-i-own}

- **Game design** — core loop, encounter pacing, environmental storytelling; progression gating for a 15–20 min slice.
- **Controller feel** — gamepad + KB/M parity; interaction prompts; UI/state.
- **Saves & settings** — designing FOV/AA/audio settings with safe, atomic writes.
- **Steam pipeline** — planning depots/branches, scripted build/upload, and ‘Coming Soon’ store assets.

#### Targets & Status {#three-ten-am-targets}

- Playable slice in polishing with a strong stability focus.  
- PC feature checklist: rebinding, graphics presets/scalability, window/fullscreen.  
- Next: Steam “Coming Soon” page → public downloadable build.

#### Tech Highlights {#three-ten-am-tech-highlights}

**Unity 6** · **HDRP** · **Input System** · **Addressables** · **Steamworks SDK** · **Profiler/Frame Debugger**

<!-- TODO: Add Store Page Link -->
![Steam — Coming Soon](https://img.shields.io/badge/Steam-Coming%20Soon-lightgrey)

[View project details →](/projects/#three-ten-am){: .btn }

### Aberwla — Welsh-language VR Minigames · Quest/PICO · Mar 2025 {#aberwla}

*Welsh-language VR title for Quest/PICO.* Explore a small town of minigames that teach and reinforce spoken Welsh. Originally commissioned by **Gwynedd Council** for Immersion Centres and later funded by **Adnodd** for public release.

{% include video id="pEuDcjNigXc" provider="youtube" caption="Aberwla gameplay trailer." %}

#### Team & Collaboration

Lead dev; managed 1 Unity dev; coordinated 2 3D artists; partnered with the Creative Director on minigame scope & direction.

#### What I Owned {#aberwla-what-i-owned}

- **Game design (minigames)** — applied gamification (clear goals, feedback loops, difficulty curves) to Welsh-language practice tasks.
- **Core gameplay & minigames** — designed → greybox → production; multiplayer (Normcore); AI (FSM); baked lighting; spatial audio; UX/UI; profiled/optimised to device budgets.
- **Quest↔PICO build-switch tooling** — Addressables + scripting defines → **~40% faster** build prep; **0** hand-switch regressions across 6 releases.
- **Release operations end-to-end** — ratings, store assets/copy, privacy, submissions → hotfix TTR **48–72 h**.

#### Results {#aberwla-results}

- **72 FPS** on Quest 2/3 & PICO (targets met)
- **≥99% crash-free** sessions (Unity Cloud Diagnostics)

#### Tech Highlights {#aberwla-tech-highlights}

**Unity 2022** · **URP** · **XR Interaction Toolkit** · **Addressables** · **Normcore** (multiplayer)

[Meta Quest](https://www.meta.com/en-gb/experiences/aberwla/9575081185844250/){: .btn .btn--light-outline .btn--chip target="_blank" rel="noopener noreferrer" } [PICO Store](https://store-global.picoxr.com/global/detail/1/7477528258796486711){: .btn .btn--light-outline .btn--chip target="_blank" rel="noopener noreferrer" }

[View project details →](/projects/#aberwla){: .btn }

## Recently Shipped {#recently-shipped}

- **Cognetic Training Demo — Quest — Oct 2025** — [Meta Quest](https://www.meta.com/en-gb/experiences/cognetic-training-demo/24339813342291975/){: .btn .btn--light-outline .btn--chip target="_blank" rel="noopener noreferrer" }
- **Aberwla — Quest/PICO — Mar 2025** — [Meta Quest](https://www.meta.com/en-gb/experiences/aberwla/9575081185844250/){: .btn .btn--light-outline .btn--chip target="_blank" rel="noopener noreferrer" } [PICO Store](https://store-global.picoxr.com/global/detail/1/7477528258796486711){: .btn .btn--light-outline .btn--chip target="_blank" rel="noopener noreferrer" }
- **Centrica Energy Storage — Android/iOS — Mar 2024** — [Play Store](https://play.google.com/store/apps/details?id=com.AnimatedTechnologiesLtd.Centrica){: .btn .btn--light-outline .btn--chip target="_blank" rel="noopener noreferrer" } [App Store](https://apps.apple.com/gb/app/centrica-energy-storage/id6473838618){: .btn .btn--light-outline .btn--chip target="_blank" rel="noopener noreferrer" }

[See all projects →]({{ '/projects/' | relative_url }}){: .btn }

## Systems Library — Preview {#systems}

Production-ready Unity systems (demo scene · README · MIT).  

**Note:** The Systems Library will be published as a downloadable repo / Unity package after the Steam release of *3:10 AM*. For now, the sections below are previews/snippets.
{: .notice--info}

### Interaction System — Preview

Modular, interface-driven interaction with Press/Hold patterns, focus/LOS-aware world UI, and a single combined ray for selection + occlusion. Uses interfaces + abstract bases (composition first) to keep gameplay code swappable and testable. *Full package in progress.*

<!-- Interaction System Video -->
{% include video id="JrP5BR8NmR4" provider="youtube" caption="Press/Hold interaction: first-hit selection (interactable(∪)occluder mask), LOS-aware world UI, focus swap + hold progress." %}

#### Design Notes {#interaction-design-notes}

- **Clear contracts & bases:** IInteractable → IInteractableWithUI plus InteractionWithUIBase / Press… / Hold… (composition-first) so gameplay classes stay small, swappable, and testable.

- **Deterministic selection:** one forward ray with a combined (interactable ∪ occluder) mask; only accept when the first hit is an interactable—no through-walls.

- **UI LOS that matches gameplay:** single combined linecast; first hit = target/child → visible, otherwise occluded; focus swaps cleanly.

- **Smooth UI tick:** world-space UI updates on CinemachineCore.CameraUpdatedEvent to avoid jitter and stay in lockstep with camera updates.

- **Stable frame pacing:** camera-delta + min-interval throttling for targeting work; uses MaterialPropertyBlock for visual feedback without material creations.

#### Code Excerpts {#interaction-code-excerpts}

{% capture interactor_usage %}

```csharp
// Uses _hitMask = _occluderMask | _interactableMask (set in Awake).
// Accept only if the FIRST thing hit is an IInteractable (prevents through-walls).
private bool PerformRaycast(out RaycastHit hit)
{
    Transform t = _interactionCamera.transform;

    if (Physics.Raycast(
            t.position,
            t.forward,
            out hit,
            _interactionDistance,
            _hitMask,
            QueryTriggerInteraction.Ignore))
    {
        return hit.collider.TryGetComponent(out IInteractable _);
    }

    return false;
}
```

{% endcapture %}
{%- include custom-details.html
title="PlayerInteractor.cs — single-ray; first hit must be interactable"
content=interactor_usage open=true -%}

{% capture ui_manager_usage %}

```csharp
// Combined-mask linecast from camera to target; if the FIRST hit is the target (or its child), LOS is clear.
// Anything else in front counts as occluded—UI will not show through walls.
private bool IsObjectObstructed(Collider target)
{
    Vector3 origin      = _playerInteractorGameObject.transform.position;
    Vector3 targetPoint = target.bounds.center; // more stable than transform.position

    if (Physics.Linecast(
            origin,
            targetPoint,
            out RaycastHit hit,
            _playerInteractor.InteractionAndBlockingMask,
            QueryTriggerInteraction.Ignore))
    {
        return !IsSameObjectOrChild(hit.collider, target); // true = obstructed
    }

    // No hit at all → nothing blocks the segment.
    return false;
}

private static bool IsSameObjectOrChild(Collider hit, Collider target)
{
    // Handles multi-collider targets (child colliders on the same object).
    return hit == target || hit.transform.IsChildOf(target.transform);
}
```

{% endcapture %}
{%- include custom-details.html
title="InteractableWorldSpaceUIManager.cs — LOS matches gameplay"
content=ui_manager_usage -%}

{% capture interactor_throttling %}

```csharp
// Re-ray only when the view meaningfully changes (movement/rotation) or a small time slice elapses.
// Keeps targeting cost predictable and avoids per-frame work on still shots.
private void Update()
{
    if (!_isInteractorActive) return;

    // Position threshold: skip micro movements;
    bool moved  = (_cameraTransform.position - _lastCamPos).sqrMagnitude > _camMoveThreshold;

    // Rotation threshold: ignore tiny head/camera movements;
    bool turned = Quaternion.Angle(_cameraTransform.rotation, _lastCamRot) > _camAngleThreshold;

    // Minimum interval: bounds worst-case cost even when perfectly still.
    bool timeUp = Time.unscaledTime >= _nextRayTime;

    if (moved || turned || timeUp)
    {
        // Snapshot for next frame’s delta tests.
        _lastCamPos = _cameraTransform.position;
        _lastCamRot = _cameraTransform.rotation;

        // Next allowed ray time
        _nextRayTime = Time.unscaledTime + _rayMinInterval;

        // Do the actual selection work (single combined-mask ray).
        HandleRaycastInteraction();
    }
}
```

{% endcapture %}
{%- include custom-details.html
title="PlayerInteractor.cs — throttled re-ray · stable frame pacing"
content=interactor_throttling -%}

### Footstep Audio System — Preview

Surface-aware footsteps with pooled one-shots and PhysicMaterial→SO mapping. Zero-GC on emit. Ground source: current raycast (sensor refactor WIP).

<!-- Footstep Audio System Video -->
{% include video id="ZZHTq_tO-kQ" provider="youtube" caption="Surface-aware footsteps: pooled one-shots, PhysicMaterial→SO mapping, sprint/land variants."%}

#### Design Notes {#footstep-design-notes}

- **Zero-GC playback:** pooled AudioSources with PlayOneShot via a ring buffer.

- **Surface-aware:** PhysicMaterial → FloorSoundSO lookup (ScriptableObject map).

- **Authoring-friendly:** per-surface clips/volumes live in SOs; add a surface by adding a map entry.

- **Deterministic triggers:** distance-driven steps with walk/sprint thresholds; separate jump/land cues.

- **Modular:** controller signals step/land; playback isolated in FootstepAudioController.

- **Safe defaults:** null/empty guards and default-surface fallback.

- **WIP (next pass):** reuse cached ground hit (no extra cast), optional anim-event timing, FMOD/Wwise switches.

#### Code Excerpts {#footstep-code-excerpts}

{% capture footstep_audio_controller_usage %}

```csharp
[SerializeField] private AudioSource[] _audioSourcePool;

private int _poolIndex;

private void PlayAtFeet(AudioClip clip, float volume)
{
    if (clip == null) return;
            
    AudioSource audioSource = GetPooledSource();
    audioSource.PlayOneShot(clip, Mathf.Clamp01(volume));
}

private AudioSource GetPooledSource()
{
    int count = _audioSourcePool.Length;

    for (int i = 0; i < count; i++)
    {
        int index = (_poolIndex + i) % count;
        AudioSource candidate = _audioSourcePool[index];

        if ((candidate != null && !candidate.isPlaying))
        {
            _poolIndex = (index + 1) % count;
            return candidate;
        }
    }

    AudioSource stolenAudioSource = _audioSourcePool[_poolIndex];
    _poolIndex = (_poolIndex + 1) % count;

    return stolenAudioSource;
}
```

{% endcapture %}
{%- include custom-details.html
title="FootstepAudioController.cs — pooled one-shots · zero-GC emit"
content=footstep_audio_controller_usage open=true -%}

{% capture footstep_mapping_controller %}

```csharp
[SerializeField] private FloorMaterialSoundMapSO _floorMaterialSoundMap;
[SerializeField] private FloorSoundSO _defaultSound;

private PhysicMaterial _lastMaterial;
private FloorSoundSO _lastSound;

private Dictionary<PhysicMaterial, FloorSoundSO> _soundMap = new Dictionary<PhysicMaterial, FloorSoundSO>();

void Start()
{
    foreach (MaterialSoundMap map in _floorMaterialSoundMap.MaterialSoundMaps)
    {
        if (!_soundMap.ContainsKey(map.Material))
        {
            _soundMap.Add(map.Material, map.Sound);
        }
    }
}

public FloorSoundSO GetSoundToUse(PhysicMaterial physicMaterial)
{
    if (physicMaterial == null)
    {
        return _defaultSound;
    }

    if (physicMaterial == _lastMaterial && _lastSound != null)
    {
        return _lastSound;
    }

    if (_soundMap.TryGetValue(physicMaterial, out FloorSoundSO sound))
    {
        _lastMaterial = physicMaterial;
        _lastSound = sound;
        return sound;
    }

    _lastMaterial = physicMaterial;
    _lastSound = _defaultSound;
    return _defaultSound;
}
```

{% endcapture %}
{%- include custom-details.html
title="FootstepFloorMappingController.cs — PhysicMaterial→SO map · last-hit cache"
content=footstep_mapping_controller -%}

{% capture step_timing %}

```csharp
[SerializeField] private FootstepFloorMappingController _footstepFloorMappingController;
[SerializeField] private FootstepAudioController _footstepAudioController;

private Vector3 _lastPosition;
private float _distanceAccumulated = 0f;
private float _stepDistanceThreshold = 0;
[SerializeField] private float _walkStepDistanceThreshold = 1.25f;
[SerializeField] private float _sprintStepDistanceThreshold = 2f;
private bool _isSprinting = false;
private FloorSoundSO _soundsToUse;

private void PlayFootstepSounds()
{
    if(!IsGrounded) return;

    // horizontal-only
    float horizontalSpeed = new Vector3(_controller.velocity.x, 0f, _controller.velocity.z).magnitude;
    _distanceAccumulated += horizontalSpeed * Time.deltaTime;

    if (_distanceAccumulated >= _stepDistanceThreshold)
    {
        SetFloorType();
        TriggerFootstepSound();
        _distanceAccumulated = 0f;
    }

    _lastPosition = transform.position;
}
```

{% endcapture %}
{%- include custom-details.html
title="FirstPersonController.cs — deterministic step timing (walk/sprint)"
content=step_timing -%}

{% capture raycast_origin_feet %}

```csharp
[SerializeField] private Transform _playerFeetTransform;
private float _maxRaycastDistance = 0.6f;

private FloorSoundSO SetFloorType()
{
    Vector3 feetPositionWithOffset = _playerFeetTransform.position + Vector3.up * 0.2f;
    if (Physics.Raycast(feetPositionWithOffset, Vector3.down, out RaycastHit hit, _maxRaycastDistance))
    {
        _soundsToUse = _footstepFloorMappingController.GetSoundToUse(hit.collider.sharedMaterial);
    }

    return _soundsToUse;
}
```

{% endcapture %}
{%- include custom-details.html
title="FirstPersonController.cs — feet-origin ray · accurate surface"
content=raycast_origin_feet -%}

### Roadmap — *Planned*

- **Boids at scale (DOTS)** — greybox flock, 50–200k agents @ 60 FPS on mid-tier GPU (GTX 1060 / RX 580+), 0 allocs/frame.
- **Client prediction & reconciliation (NGO)** — move/shoot greybox, smooth at 120 ms RTT, ≤1 correction/s, 100–200 ms rollback.
- **AI perception & Behavior Trees (BT)** — sight/hearing → blackboard → patrol/chase/search, 0 GC/tick, ≤0.2 ms/agent @ 10 Hz.

<!-- [See all systems →]({{ '/systems/' | relative_url }}) -->

## Recommendations {#recommendations}

> “His technical expertise and leadership were crucial in building our capabilities from the ground up.”  
**— Anna Burke**, Managing Director, Animated Technologies

> “I can honestly say he’s one of the best Unity developers I’ve collaborated with.”  
**— Klaire Tanner**, Creative Director, Animated Technologies

[More recommendations →](/about/#recommendations){: .btn .btn--ghost } · [See all on LinkedIn →](https://www.linkedin.com/in/m-rouse/){: .btn .btn--ghost target="_blank" rel="noopener noreferrer" }

[↑ Back to top](#top)

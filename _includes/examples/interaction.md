#### Design notes {#interaction-design-notes}


- **Clear contracts & bases:** IInteractable → IInteractableWithUI plus InteractionWithUIBase / Press… / Hold… (composition-first) so gameplay classes stay small, swappable, and testable.

- **Deterministic selection:** one forward ray with a combined (interactable ∪ occluder) mask; only accept when the first hit is an interactable—no through-walls.

- **UI LOS that matches gameplay:** single combined linecast; first hit = target/child → visible, otherwise occluded; focus swaps cleanly.

- **Smooth UI tick:** world-space UI updates on CinemachineCore.CameraUpdatedEvent to avoid jitter and stay in lockstep with camera updates.

- **Reduced idle targeting work:** re-rays after meaningful camera movement or rotation, with periodic refresh while stationary. MaterialPropertyBlock avoids per-instance material creation.

#### Source excerpts {#interaction-code-excerpts}

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
content=interactor_usage -%}

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
// Re-ray when the view meaningfully changes, or periodically while stationary.
// Avoids per-frame targeting work on a still view.
private void Update()
{
    if (!_isInteractorActive) return;

    // Position threshold: skip micro movements;
    bool moved  = (_cameraTransform.position - _lastCamPos).sqrMagnitude > _camMoveThreshold;

    // Rotation threshold: ignore tiny head/camera movements;
    bool turned = Quaternion.Angle(_cameraTransform.rotation, _lastCamRot) > _camAngleThreshold;

    // Periodic refresh prevents stationary targeting state becoming stale.
    bool timeUp = Time.unscaledTime >= _nextRayTime;

    if (moved || turned || timeUp)
    {
        // Snapshot for next frame’s delta tests.
        _lastCamPos = _cameraTransform.position;
        _lastCamRot = _cameraTransform.rotation;

        // Schedule the next periodic refresh while the view remains stationary.
        _nextRayTime = Time.unscaledTime + _stationaryRefreshInterval;

        // Do the actual selection work (single combined-mask ray).
        HandleRaycastInteraction();
    }
}
```

{% endcapture %}
{%- include custom-details.html
title="PlayerInteractor.cs — change-triggered re-ray with stationary refresh"
content=interactor_throttling -%}

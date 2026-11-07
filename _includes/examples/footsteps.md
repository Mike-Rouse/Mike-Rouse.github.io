#### Design notes {#footstep-design-notes}


- **Pooled playback:** AudioSources reused through a ring buffer.

- **Surface-aware:** PhysicMaterial → FloorSoundSO lookup (ScriptableObject map).

- **Easy to configure:** per-surface clips/volumes live in SOs; add a surface by adding a map entry.

- **Deterministic triggers:** distance-driven steps with walk/sprint thresholds; separate jump/land cues.

- **Modular:** controller signals step/land; playback isolated in FootstepAudioController.

#### Source excerpts {#footstep-code-excerpts}

{% capture footstep_audio_controller_usage %}

```csharp
[SerializeField] private AudioSource[] _audioSourcePool;

private int _poolIndex;

private void PlayAtFeet(AudioClip clip, float volume)
{
    if (clip == null ||
        _audioSourcePool == null ||
        _audioSourcePool.Length == 0)
    {
        return;
    }

    AudioSource audioSource = GetPooledSource();
    if (audioSource == null)
    {
        return;
    }

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
title="FootstepAudioController.cs — pooled one-shots · pooled playback"
content=footstep_audio_controller_usage -%}

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
// Initialised to the walking threshold in Start(); movement-state code
// selects the appropriate threshold. Setup omitted from this excerpt.
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

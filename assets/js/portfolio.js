function addExternalLinkIndicators() {
  // The Steam capsule already identifies its destination with a wordmark.
  const externalLinks = document.querySelectorAll('a[target="_blank"]:not(.steam-button)');

  externalLinks.forEach((link) => {
    const indicator = document.createElement('span');
    indicator.className = 'external-link-icon';
    indicator.setAttribute('aria-hidden', 'true');
    indicator.textContent = '↗';
    link.append(indicator);
  });
}

function makeSourceCodeKeyboardAccessible() {
  document.querySelectorAll('pre.highlight').forEach((codeBlock) => {
    codeBlock.tabIndex = 0;
    codeBlock.setAttribute('role', 'region');
    codeBlock.setAttribute('aria-label', 'Source code; scroll horizontally to read long lines');
  });
}

// Keep incoming links to code and full recommendations useful inside disclosures.
function revealFragmentTarget() {
  let targetId;

  try {
    targetId = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return;
  }

  if (!targetId) {
    return;
  }

  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  let ancestor = target;
  while (ancestor) {
    if (ancestor.tagName === 'DETAILS') {
      ancestor.open = true;
    }
    ancestor = ancestor.parentElement;
  }

  requestAnimationFrame(() => {
    target.scrollIntoView({ block: 'start' });
  });
}

addExternalLinkIndicators();
makeSourceCodeKeyboardAccessible();
window.addEventListener('hashchange', revealFragmentTarget);
revealFragmentTarget();

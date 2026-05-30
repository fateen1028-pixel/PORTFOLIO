const NAV_OFFSET = 88;

// Premium cubic-bezier easing: cubic-bezier(0.77, 0, 0.175, 1)
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollTo(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const targetTop = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const duration = 800; // Fixed 800ms duration for ultra-smooth feel
  
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Apply custom easing
    const ease = easeInOutCubic(progress);
    
    // Force exact coordinates mathematically
    window.scrollTo(0, startTop + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  // Push state to update URL optionally
  if (window.history.pushState) {
    window.history.pushState(null, "", `#${id}`);
  }

  requestAnimationFrame(animation);
}

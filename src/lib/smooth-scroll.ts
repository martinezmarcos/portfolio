/**
 * High-precision, buttery-smooth programmatic scrolling utility.
 * Uses requestAnimationFrame with quintic easing for fluid, non-jarring navigation.
 */
export function smoothScrollTo(target: string | number, offset: number = 85, duration: number = 700) {
  if (typeof window === "undefined") return;

  let targetY = 0;
  if (typeof target === "number") {
    targetY = target;
  } else {
    const id = target.replace(/^#/, "");
    if (!id || id === "top") {
      targetY = 0;
    } else {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      targetY = rect.top + window.scrollY - offset;
    }
  }

  targetY = Math.max(0, targetY);
  const startY = window.scrollY || window.pageYOffset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) return;

  // Adaptive duration based on scroll distance (between 500ms and 850ms)
  const adaptiveDuration = Math.min(850, Math.max(500, Math.abs(distance) * 0.45));
  const effectiveDuration = duration || adaptiveDuration;
  const startTime = performance.now();

  // Easing function: quintic in-out for silky smooth acceleration & deceleration
  function easeInOutQuint(t: number): number {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
  }

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / effectiveDuration, 1);
    const ease = easeInOutQuint(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

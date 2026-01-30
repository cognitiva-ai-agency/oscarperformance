export const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLElement>, href: string) => {
  e.preventDefault();
  
  // Extract hash from absolute routes (/#section) or relative routes (#section)
  let hash = '';
  if (href.includes('#')) {
    // Split by # and take the part after it
    const parts = href.split('#');
    hash = parts.length > 1 ? '#' + parts[1] : '#';
  } else if (href === '/' || href === '') {
    hash = '#';
  }
  
  // Handle empty hash or scroll to top
  let elem: HTMLElement | null = null;
  let targetId = "";

  if (hash === "#" || hash === "") {
    elem = document.body;
  } else {
    try {
      // Try finding by querySelector first (robust for #ids)
      elem = document.querySelector(hash);
      targetId = hash.replace("#", "");
    } catch (e) {
      // Fallback if selector is invalid
      elem = null;
    }

    if (!elem && targetId) {
      // Fallback to ID directly
      elem = document.getElementById(targetId);
    }
  }
  
  // Use scroll to top logic if target is body or empty href
  if (elem || (!targetId && hash === "#")) {
    // Safety check: if elem is still null here and it's not a scroll-to-top, return
    if (!elem && targetId) return; 
    
    // Ensure elem is valid for getting rect
    const targetElem = elem || document.body;
    const headerOffset = 100;
    const elementPosition = targetId ? targetElem.getBoundingClientRect().top : -window.pageYOffset; // If top, relative pos is negative current scroll
    const offsetPosition = elementPosition + window.pageYOffset - (targetId ? headerOffset : 0); // No offset for top

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 500; // 0.5s for immediate response
    let start: number | null = null;

    function animation(currentTime: number) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      
      // Easing function (easeOutExpo) for instant start, no lag
      const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
      
      const run = ease(Math.min(timeElapsed / duration, 1));
      
      window.scrollTo(0, startPosition + distance * run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
};

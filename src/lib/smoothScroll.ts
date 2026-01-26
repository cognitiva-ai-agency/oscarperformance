export const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  
  // Handle empty targetId (href="#") as scroll to top
  const elem = targetId ? document.getElementById(targetId) : document.body;
  
  // Use scroll to top logic if target is body or empty href
  if (!targetId || elem) {
    const headerOffset = 100;
    const elementPosition = targetId ? elem!.getBoundingClientRect().top : -window.pageYOffset; // If top, relative pos is negative current scroll
    const offsetPosition = elementPosition + window.pageYOffset - (targetId ? headerOffset : 0); // No offset for top

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 700; // 0.7s for faster, snappier effect
    let start: number | null = null;

    function animation(currentTime: number) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      
      // Easing function (easeInOutCubic) for harmonic feel
      const ease = (t: number) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      const run = ease(Math.min(timeElapsed / duration, 1));
      
      window.scrollTo(0, startPosition + distance * run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
};

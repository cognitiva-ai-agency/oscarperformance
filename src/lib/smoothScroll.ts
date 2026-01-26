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

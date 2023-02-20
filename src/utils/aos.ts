export const Observer: IntersectionObserver = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hide");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hide");
      }
    });
  }
);

export const DetectIntersection = () => {
  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(".hide");

  elements.forEach((el: HTMLElement) => {
    Observer.observe(el);
  });
};

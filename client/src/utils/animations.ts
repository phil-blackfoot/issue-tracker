import { TweenMax, Power4, Power3 } from "gsap";

export function enter(el: Element) {
  TweenMax.fromTo(
    el,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      ease: Power4.easeOut,
    }
  );
}
export function leave(el: Element, done: any) {
  TweenMax.to(el, {
    opacity: 0,
    duration: 1,
    ease: Power3.easeOut,
    onComplete: done,
  });
}

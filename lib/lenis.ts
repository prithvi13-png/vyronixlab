import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenisInstance() {
  return instance;
}

// On touch devices Lenis is never created (native scroll is used instead),
// so scroll-locking falls back to toggling body overflow directly.
export function lockScroll() {
  if (instance) {
    instance.stop();
  } else {
    document.body.style.overflow = "hidden";
  }
}

export function unlockScroll() {
  if (instance) {
    instance.start();
  } else {
    document.body.style.overflow = "";
  }
}

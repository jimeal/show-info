import Isotope from "isotope-layout";

export const frame = "section";
export const box = "article";
export const speed = "0.5s";
export const activeClass = "on";
export const btn = document.querySelectorAll("main ul li");
export let grid;

window.addEventListener("load", () => {
  init(); 
  filter(btn);
});

export function init() {
  grid = new Isotope(frame, {
    itemSelector: box,
    columnWidth: box,
    transitioinDuration: speed
  });
}
export function filter(arr) {
  for (let el of arr) {
    el.addEventListener("click", e => {
      e.preventDefault();
      const sort = e.currentTarget
        .querySelector(".main__sort > li > a")
        .getAttribute("href");
      grid.arrange({
        filter: sort
      });

      for (let el of arr) {
        el.classList.remove(activeClass);
      }
      e.currentTarget.classList.add(activeClass);
    });
  }
}

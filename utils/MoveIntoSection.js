export const movetoElement = (id) => {
  document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
};

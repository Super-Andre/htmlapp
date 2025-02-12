// Select all anchor (`<a>`) elements inside the element with the class "players".
const links = document.querySelectorAll(".players a");

// Iterate over each link to attach event listeners for hover effects.
links.forEach((link) => {
  // Add an event listener for the "mouseenter" event (when the mouse hovers over a link).
  link.addEventListener("mouseenter", () => {
    // Iterate over all links and apply the "unfocus" class while removing "focus".
    links.forEach((el) => {
      el.classList.add("unfocus"); // Adds a dimming effect to other links.
      el.classList.remove("focus");
    });

    // Apply the "focus" class to the hovered link and remove "unfocus".
    link.classList.add("focus"); // Highlights the hovered link.
    link.classList.remove("unfocus");
  });

  // Add an event listener for the "mouseleave" event (when the mouse leaves a link).
  link.addEventListener("mouseleave", () => {
    // Remove both "focus" and "unfocus" classes from all links when the mouse leaves.
    links.forEach((el) => {
      el.classList.remove("focus", "unfocus");
    });
  });
});

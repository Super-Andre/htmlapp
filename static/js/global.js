// Add an event listener to the window object to listen for the "scroll" event.
window.addEventListener("scroll", function () {
  // Select the navbar element using the class "header".
  let navbar = document.querySelector(".header");

  // Check if the vertical scroll position of the window is greater than 300 pixels.
  if (window.scrollY > 300) {
    // If the scroll position is greater than 300px, add the "sticky" class to the navbar.
    // This can be used to apply a fixed position or any other styling when scrolled down.
    navbar.classList.add("sticky");
  } else {
    // If the scroll position is 300px or less, remove the "sticky" class from the navbar.
    navbar.classList.remove("sticky");
  }
});

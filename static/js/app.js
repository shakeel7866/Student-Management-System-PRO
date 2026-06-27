// Smoothly scroll a .scroll-body panel up or down when an arrow button is clicked.
function scrollPanel(id, direction) {
  const el = document.getElementById(id);
  if (!el) return;
  const amount = Math.round(el.clientHeight * 0.6) * (direction === "down" ? 1 : -1);
  el.scrollBy({ top: amount, behavior: "smooth" });
}

const dateFestival = new Date("2026-12-31T20:00:00");
setInterval(() => {
  const diff = dateFestival - new Date();
  const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").textContent = jours + " jours restants";
}, 1000);
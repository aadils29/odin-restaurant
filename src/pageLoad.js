// src/pageLoad.js
export function loadHome() {
  const content = document.getElementById("content");
  if (!content) return;

  const section = document.createElement("section");
  section.className = "home";

  const img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1541542684-9f5e3f4d1f3a?auto=format&fit=crop&w=1200&q=80";
  img.alt = "Cozy restaurant interior";

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to The Odin Restaurant";

  const p1 = document.createElement("p");
  p1.textContent =
    "At The Odin Table we serve handcrafted dishes made from locally sourced ingredients. Relax in our cozy dining room while our chefs prepare seasonal favorites inspired by classic comfort food.";

  const p2 = document.createElement("p");
  p2.textContent =
    "Whether you're joining us for a family dinner or a special evening out, we strive to make every visit memorable. Reservations recommended on weekends.";

  section.appendChild(img);
  section.appendChild(h1);
  section.appendChild(p1);
  section.appendChild(p2);

  content.appendChild(section);
}

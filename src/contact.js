// src/contact.js
export function loadContact() {
  const content = document.getElementById("content");
  if (!content) return;

  const section = document.createElement("section");
  section.className = "contact";

  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";

  const p = document.createElement("p");
  p.textContent =
    "Phone: (555) 123-4567 · Email: reservations@odinrestaurant.example";

  const p2 = document.createElement("p");
  p2.textContent = "Address: 42 Valhalla Road, Somewhere";

  section.appendChild(h1);
  section.appendChild(p);
  section.appendChild(p2);
  content.appendChild(section);
}

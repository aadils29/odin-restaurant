// src/menu.js
export function loadMenu() {
  const content = document.getElementById("content");
  if (!content) return;

  const section = document.createElement("section");
  section.className = "menu";

  const h1 = document.createElement("h1");
  h1.textContent = "Our Menu";

  const ul = document.createElement("ul");
  const items = [
    {
      name: "Roasted Chicken",
      desc: "Herb-roasted chicken, seasonal veg",
      price: "$18",
    },
    {
      name: "Seared Salmon",
      desc: "Citrus glaze, sautéed greens",
      price: "$22",
    },
    { name: "Veggie Stew", desc: "Slow-cooked root vegetables", price: "$15" },
  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong> - ${item.desc} <em>${item.price}</em>`;
    ul.appendChild(li);
  });

  section.appendChild(h1);
  section.appendChild(ul);
  content.appendChild(section);
}

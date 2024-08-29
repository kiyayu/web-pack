import appetizerImage1 from "../images/dish1.jpg";
import mainCourseImage1 from "../images/dish2.jpg";
import dessertImage1 from "../images/hero-image.jpg";

export default function loadMenu() {
  const content = document.createElement("div");
  content.classList.add("menu");

  // Create sections for each category
  const menuSections = [
    {
      title: "Appetizers",
      items: [
        {
          img: appetizerImage1,
          name: "Bruschetta",
          price: "$8",
          desc: "Grilled bread with tomato and basil",
        },
        // Add more appetizers as needed
      ],
    },
    {
      title: "Main Courses",
      items: [
        {
          img: mainCourseImage1,
          name: "Grilled Salmon",
          price: "$20",
          desc: "Fresh salmon with lemon butter sauce",
        },
        // Add more main courses as needed
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          img: dessertImage1,
          name: "Chocolate Cake",
          price: "$10",
          desc: "Rich chocolate cake with ganache",
        },
        // Add more desserts as needed
      ],
    },
  ];

  menuSections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "menu-section";

    const header = document.createElement("h2");
    header.textContent = section.title;
    sectionDiv.appendChild(header);

    section.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menu-item";

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.className = "menu-item-image";

      const detailsDiv = document.createElement("div");
      detailsDiv.className = "menu-item-details";

      const name = document.createElement("h3");
      name.textContent = item.name;

      const price = document.createElement("span");
      price.className = "menu-item-price";
      price.textContent = item.price;

      const desc = document.createElement("p");
      desc.textContent = item.desc;

      detailsDiv.appendChild(name);
      detailsDiv.appendChild(price);
      detailsDiv.appendChild(desc);

      itemDiv.appendChild(img);
      itemDiv.appendChild(detailsDiv);
      sectionDiv.appendChild(itemDiv);
    });

    content.appendChild(sectionDiv);
  });

  return content;
}

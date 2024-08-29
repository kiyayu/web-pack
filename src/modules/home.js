import heroImagePath from "../images/hero-image.jpg";
import dishImage1 from "../images/dish1.jpg";
import dishImage2 from "../images/dish2.jpg";
import dishImage3 from "../images/dish1.jpg";

export default function loadHome() {
  const content = document.createElement("div");
  content.classList.add("home");

  // Header
  const header = document.createElement("h1");
  header.textContent = "Welcome to Our Restaurant!";
header.style.textAlign = 'center'
  // Hero Image
  const heroImage = document.createElement("img");
  heroImage.src = heroImagePath;
  heroImage.alt = "Hero Image";
  heroImage.className = "hero-image";

  // Introduction Paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Discover the best dishes and experience a delightful dining experience.";
 paragraph.style.textAlign = "center";
  // Featured Dishes
  const featuredSection = document.createElement("section");
  featuredSection.className = "featured-dishes";
  const featuredHeader = document.createElement("h2");
  featuredHeader.textContent = "Featured Dishes";
  featuredSection.appendChild(featuredHeader);

  const dishes = [
    { img: dishImage1, desc: "Delicious Spaghetti Carbonara" },
    { img: dishImage2, desc: "Fresh Caesar Salad" },
    { img: dishImage3, desc: "Homemade Tiramisu" },
  ];

  dishes.forEach((dish) => {
    const dishDiv = document.createElement("div");
    dishDiv.className = "dish";

    const img = document.createElement("img");
    img.src = dish.img;
    img.alt = dish.desc;
    img.className = "dish-image";

    const desc = document.createElement("p");
    desc.textContent = dish.desc;

    dishDiv.appendChild(img);
    dishDiv.appendChild(desc);
    featuredSection.appendChild(dishDiv);
  });

  // Call to Action
  const ctaSection = document.createElement("section");
  ctaSection.className = "cta";
  const ctaButton = document.createElement("button");
  ctaButton.textContent = "Reserve a Table";
  ctaButton.className = "cta-button";
  ctaSection.appendChild(ctaButton);

  // Append Everything
  content.appendChild(header);
  content.appendChild(heroImage);
  content.appendChild(paragraph);
  content.appendChild(featuredSection);
  content.appendChild(ctaSection);

  return content;
}

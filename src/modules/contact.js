import contactImagePath from "../images/dish2.jpg";

export default function loadContact() {
  const content = document.createElement("div");
  content.classList.add("contact");

  // Header
  const header = document.createElement("h1");
  header.textContent = "Contact Us";

  // Contact Image
  const contactImage = document.createElement("img");
  contactImage.src = contactImagePath;
  contactImage.alt = "Contact Us";
  contactImage.className = "contact-image";

  // Contact Details
  const contactDetails = document.createElement("div");
  contactDetails.className = "contact-details";

  const address = document.createElement("p");
  address.innerHTML = `
    <strong>Address:</strong><br>
    123 Delicious Street,<br>
    Flavor Town, FT 45678
  `;

  const phone = document.createElement("p");
  phone.innerHTML = `
    <strong>Phone:</strong><br>
    (123) 456-7890
  `;

  const email = document.createElement("p");
  email.innerHTML = `
    <strong>Email:</strong><br>
    <a href="mailto:info@restaurant.com">info@restaurant.com</a>
  `;

  contactDetails.appendChild(address);
  contactDetails.appendChild(phone);
  contactDetails.appendChild(email);

  // Contact Form
  const contactForm = document.createElement("form");
  contactForm.className = "contact-form";

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Send Us a Message";
  contactForm.appendChild(formTitle);

  const formGroup = (labelText, inputType, inputName) => {
    const formGroup = document.createElement("div");
    formGroup.className = "form-group";

    const label = document.createElement("label");
    label.textContent = labelText;
    label.htmlFor = inputName;

    const input = document.createElement("input");
    input.type = inputType;
    input.name = inputName;
    input.id = inputName;
    input.required = true;

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    return formGroup;
  };

  contactForm.appendChild(formGroup("Name", "text", "name"));
  contactForm.appendChild(formGroup("Email", "email", "email"));
  contactForm.appendChild(formGroup("Message", "textarea", "message"));

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Send Message";
  submitButton.className = "cta-button";
  contactForm.appendChild(submitButton);

  // Append Everything
  content.appendChild(header);
  content.appendChild(contactImage);
  content.appendChild(contactDetails);
  content.appendChild(contactForm);

  return content;
}

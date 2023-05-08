function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phone = document.createElement("h3");
  phone.textContent = "📞 123 456 789";

  const address = document.createElement("p");
  address.textContent = "🏠 Newbury Street,Boston,USA";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "/src/Assets/location.png";
  restaurantLocation.alt = "restaurant-location";

  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;

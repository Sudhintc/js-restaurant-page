function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Burger",
      "Crispy Chicken Fillet, Iceberg, Pickles, Olive Mayo, Hot Sauce"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pizza",
      "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers"
    )
  );
  menu.appendChild(createMenuItem("Pasta", "Chicken Alfedo"));
  menu.appendChild(
    createMenuItem(
      "Steak",
      "Slices of cottage cheese seasoned, grilled and served with veggies and mashed potatoes"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Noodles",
      "Cantonese dish of noodles stir-fried with curry powder, bean sprouts"
    )
  );
  menu.appendChild(
    createMenuItem(
      "FriedRice",
      "Wok Tossed Style Fried Rice Tossed With Egg, Vegetable And Our Special Sauces"
    )
  );
  menu.appendChild(createMenuItem("Biriyani", "Chicken Biriyani"));
  menu.appendChild(createMenuItem("Soup", "Sweet Corn Chicken Soup"));

  return menu;

}

function createMenuItem(name , description){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h1');
    foodName.textContent = name;

    const foodDescription =document.createElement('p');
    foodDescription.textContent = description;

    const foodImage = document.createElement('img');
    foodImage.src = `/src/Assets/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;

}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
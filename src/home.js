function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Zoozz";
  heading.classList.add("caption");
  home.appendChild(heading);

  const topImage = document.createElement("img");
  topImage.classList.add("top-image");
  topImage.src = "/src/Assets/background.png";
  topImage.alt = "Restaurant image";
  home.appendChild(topImage);

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "“To change the way people eat, inspiring a shift within the restaurant industry and beyond.”";
  home.appendChild(description);

  return home;
}

function loadHome() {
  
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;

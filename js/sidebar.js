function isactive() {
  console.log("active");

  hamburger = document.getElementsByClassName("hamburger")[0];
  icons = document.getElementsByClassName("icons")[0];
  sidebar = document.getElementsByClassName("sidebar")[0];
  logo = document.getElementsByClassName("logo")[0];
  top = document.getElementsByClassName("top")[0];

  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
    icons.classList.remove("is-active");
    sidebar.classList.remove("is-active");
    logo.classList.remove("is-active");
    top.classList.remove("is-active");
  } else {
    hamburger.classList.add("is-active");
    icons.classList.add("is-active");
    sidebar.classList.add("is-active");
    logo.classList.add("is-active");
    top.classList.add("is-active");
  }
}

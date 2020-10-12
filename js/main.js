const hamburger = document.querySelector(".navmenu-togler")
const navmenu = document.querySelector(".navmenu__list")
const navicon = document.querySelector(".social-network-icons")


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("navmenu-togler")
  navmenu.classList.toggle("open-menu")
  navicon.classList.toggle("open-icons")
  // hamburger.classList.toggle("open-button")
})
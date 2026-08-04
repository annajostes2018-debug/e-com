function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function toggleMenu() {
    const menu = document.getElementById('menu');

    // Toggle the class that controls visibility
    if (menu.classList.contains('open')) {
        menu.classList.remove('open'); // Close the menu
    } else {
        menu.classList.add('open'); // Open the menu
    }
}

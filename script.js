function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//pop up function for task-manager-description
function showDescription(popupId) {
  // Find the popup with the specified ID and display it
  var popup = document.getElementById(popupId);
  popup.style.display = "flex";
}

function closePopup(popupId) {
  // Find the popup with the specified ID and hide it
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}

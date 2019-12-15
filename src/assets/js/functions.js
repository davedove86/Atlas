// Navigation
const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

// Tabs
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  let i;
  let tabcontent;
  let tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    // tablinks[i].style.backgroundColor = "red";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = 'flex';

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();
// document.getElementById("defaultOpen").style.background = "#5ec6cf";

document.getElementById('menu-toggle').addEventListener('click', function() {
  const menuDrawer = document.getElementById('menuDrawer');
  const overlay = document.getElementById('drawer-overlay');
  
  // Alterna la visibilità del drawer e dell'overlay
  menuDrawer.classList.toggle('open');
  overlay.classList.toggle('visible');
});

// Chiudi il drawer quando si clicca sull'overlay
document.getElementById('drawer-overlay').addEventListener('click', function() {
  const menuDrawer = document.getElementById('menuDrawer');
  const overlay = document.getElementById('drawer-overlay');
  
  menuDrawer.classList.remove('open');
  overlay.classList.remove('visible');
});
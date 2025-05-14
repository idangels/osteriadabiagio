// Apertura/chiusura drawer
document.getElementById('menu-toggle').addEventListener('click', () => {
  const drawer = document.getElementById('menuDrawer');
  const overlay = document.getElementById('drawer-overlay');
  drawer?.classList.toggle('open');
  overlay?.classList.toggle('visible');

  if (drawer?.classList.contains('open')) {
    caricaMenu();
  }
});

document.getElementById('drawer-overlay').addEventListener('click', () => {
  document.getElementById('menuDrawer')?.classList.remove('open');
  document.getElementById('drawer-overlay')?.classList.remove('visible');
});

// Ottieni dettagli di un piatto tramite ID
function getPiattoInfo(piattoId) {
  const lingua = document.documentElement.lang;
  const sezioni = menuData?.[lingua] || [];

  for (const sezione of sezioni) {
    const piatto = sezione.items.find(p => p.id === piattoId);
    if (piatto) return piatto;
  }
  return null;
}

// Costruisci URL immagine piatto
function getImageUrlById(id) {
  return `img/${id}.jpg`;
}

// Mostra i dettagli del piatto in una modale
function mostraDettagliPiatto(piattoId) {
  const piatto = getPiattoInfo(piattoId);
  if (!piatto) return;

  const modale = document.getElementById('dish-modal');
  const modaleImg = document.getElementById('modal-img');
  const modaleNome = document.getElementById('modal-title');
  const modaleDescrizione = document.getElementById('modal-description');
  const modalePrezzo = document.getElementById('modal-price');

  modaleImg.src = getImageUrlById(piatto.id);
  modaleImg.alt = piatto.nome;
  modaleNome.textContent = piatto.nome;
  modaleDescrizione.textContent = piatto.descrizione;
  modalePrezzo.textContent = piatto.prezzo;
  modale.classList.remove('hidden');
}

// Carica dinamicamente il menu nel drawer (accordion + multilingua)
function caricaMenu() {
  const lingua = document.documentElement.lang;
  const sezioni = menuData?.[lingua] || [];
  const menuContainer = document.getElementById('menu-content');

  if (!menuContainer) return;
  menuContainer.innerHTML = '';

  sezioni.forEach(sezione => {
    const categoriaElement = document.createElement('div');
    categoriaElement.className = 'menu-category';

    const categoriaTitolo = document.createElement('h3');
    categoriaTitolo.className = 'menu-section-title';

    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'toggle-icon';
    toggleIcon.textContent = '➕';

    categoriaTitolo.appendChild(document.createTextNode(sezione.title));
    categoriaTitolo.appendChild(toggleIcon);

    const listaPiatti = document.createElement('ul');
    listaPiatti.className = 'menu-items';
    listaPiatti.style.maxHeight = '0';
    listaPiatti.style.overflow = 'hidden';
    listaPiatti.style.transition = 'max-height 0.3s ease';

    sezione.items.forEach(piatto => {
      const piattoElement = document.createElement('li');
      piattoElement.className = 'piatto-item';
      piattoElement.dataset.piattoId = piatto.id;

      const piattoNome = document.createElement('span');
      piattoNome.className = 'piatto-nome';
      piattoNome.textContent = piatto.nome;
      piattoNome.style.fontWeight = 'bold';
      piattoElement.appendChild(piattoNome);

      const piattoDescrizione = document.createElement('p');
      piattoDescrizione.className = 'piatto-descrizione';
      piattoDescrizione.textContent = piatto.descrizione;
      piattoElement.appendChild(piattoDescrizione);

      const piattoPrezzo = document.createElement('p');
      piattoPrezzo.className = 'piatto-prezzo';
      piattoPrezzo.textContent = piatto.prezzo;
      piattoElement.appendChild(piattoPrezzo);

      piattoElement.addEventListener('click', () => mostraDettagliPiatto(piatto.id));
      listaPiatti.appendChild(piattoElement);
    });

    categoriaTitolo.addEventListener('click', () => {
      const isOpen = listaPiatti.classList.contains('aperto');

      if (isOpen) {
        listaPiatti.style.maxHeight = '0';
        listaPiatti.classList.remove('aperto');
        toggleIcon.textContent = '➕';
      } else {
        listaPiatti.classList.add('aperto');
        listaPiatti.style.maxHeight = listaPiatti.scrollHeight + 'px';
        toggleIcon.textContent = '➖';
      }
    });

    categoriaElement.appendChild(categoriaTitolo);
    categoriaElement.appendChild(listaPiatti);
    menuContainer.appendChild(categoriaElement);
  });
}

// Chiusura modale
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('dish-modal').classList.add('hidden');
});

// Cambia lingua
function cambiaLingua() {
  const linguaSelezionata = document.getElementById('lang-switcher').value;
  document.documentElement.lang = linguaSelezionata;
  caricaMenu();
}

document.getElementById('lang-switcher').addEventListener('change', cambiaLingua);

// Al caricamento del DOM
document.addEventListener('DOMContentLoaded', () => {
  caricaMenu();
});

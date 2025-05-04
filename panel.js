// Drawer apertura/chiusura
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('menuDrawer')?.classList.toggle('open');
  document.getElementById('drawer-overlay')?.classList.toggle('visible');
});

document.getElementById('drawer-overlay').addEventListener('click', () => {
  document.getElementById('menuDrawer')?.classList.remove('open');
  document.getElementById('drawer-overlay')?.classList.remove('visible');
});

// Funzione per ottenere i dettagli del piatto
function getPiattoInfo(piattoId) {
  const lingua = document.documentElement.lang;
  const sezioni = menuData?.[lingua] || [];

  for (const sezione of sezioni) {
    const piatto = sezione.items.find(p => p.id === piattoId);
    if (piatto) return piatto;
  }
  return null;
}

// Mostra dettagli piatto nella modale
function mostraDettagliPiatto(piattoId) {
  const piatto = getPiattoInfo(piattoId);
  if (!piatto) return;

  const modale = document.getElementById('modale');
  const modaleImg = document.getElementById('modale-img');
  const modaleNome = document.getElementById('modale-nome');
  const modaleDescrizione = document.getElementById('modale-descrizione');
  const modalePrezzo = document.getElementById('modale-prezzo');

  if (!modale || !modaleImg || !modaleNome || !modaleDescrizione || !modalePrezzo) return;

  modaleImg.src = piatto.immagine || '';
  modaleImg.alt = piatto.nome;
  modaleNome.textContent = piatto.nome;
  modaleDescrizione.textContent = piatto.descrizione;
  modalePrezzo.textContent = piatto.prezzo;
  modale.style.display = 'flex';
}

// Caricamento dinamico del menu (accordion + multilingua)
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

    // Crea titolo con icona toggle ➕/➖
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

    // Aggiunge ogni piatto
    sezione.items.forEach(piatto => {
      const piattoElement = document.createElement('li');
      piattoElement.className = 'piatto-item';
      piattoElement.dataset.piattoId = piatto.id;
	  
	// Crea elemento in grassetto per il nome
	  const piattoNome = document.createElement('span');
      piattoNome.className = 'piatto-nome';
      piattoNome.textContent = piatto.nome;
      piattoNome.style.fontWeight = 'bold';
      piattoElement.appendChild(piattoNome);

      // Aggiungi la descrizione (può essere un tooltip, una riga sotto, etc.)
      const piattoDescrizione = document.createElement('p');
      piattoDescrizione.className = 'piatto-descrizione';
      piattoDescrizione.textContent = piatto.descrizione;

      // Aggiungi il prezzo
      const piattoPrezzo = document.createElement('p');
      piattoPrezzo.className = 'piatto-prezzo';
      piattoPrezzo.textContent = piatto.prezzo;

      // Aggiungi descrizione e prezzo al piatto
      piattoElement.appendChild(piattoDescrizione);
      piattoElement.appendChild(piattoPrezzo);

      piattoElement.addEventListener('click', () => mostraDettagliPiatto(piatto.id));
      listaPiatti.appendChild(piattoElement);
    });

    // Aggiunge evento per aprire/chiudere la sezione
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

// Chiusura modale piatto
document.getElementById('close-modale')?.addEventListener('click', () => {
  const modale = document.getElementById('modale');
  if (modale) modale.style.display = 'none';
});

// Caricamento al DOM ready
document.addEventListener('DOMContentLoaded', () => {
  caricaMenu();
});

// Funzione per cambiare la lingua
function cambiaLingua() {
  const linguaSelezionata = document.getElementById('lang-switcher').value;
  
  // Cambia l'attributo lang del documento
  document.documentElement.lang = linguaSelezionata;
  
  // Ricarica il menu nella nuova lingua
  caricaMenu();
}

// Ascolta il cambio della lingua
document.getElementById('lang-switcher').addEventListener('change', cambiaLingua);

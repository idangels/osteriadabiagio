// esempio di javascript
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the default link behavior
        alert(`Hai cliccato su ${e.target.textContent}! Questa funzionalità è in arrivo.`);
    });
});
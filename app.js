document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const toggleBtn = document.getElementById("toggleSidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("shifted");
  });

  window.goToHome = function () {
    document.getElementById('titre').textContent = "Accueil";
    document.getElementById('contenu').innerHTML = `
      <p>Bienvenue à la Maison du Sapeur-Pompier.</p>
    `;
  };

  window.navigate = function (page) {
    const titre = document.getElementById('titre');
    const contenu = document.getElementById('contenu');

    titre.textContent = page.charAt(0).toUpperCase() + page.slice(1);
    contenu.innerHTML = "<p>Contenu de " + page + " à remplir.</p>";
  };
});

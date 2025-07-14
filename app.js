document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const toggleBtn = document.getElementById("toggleSidebar");
  const accueil = document.getElementById("accueil");
  const contenu = document.getElementById("contenu");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("shifted");
  });

  window.goToHome = function () {
    accueil.style.display = "flex";
    contenu.style.display = "none";
    document.querySelectorAll('.nav li').forEach(li => li.classList.remove('active'));
  };

  window.navigate = function (page) {
    const titre = page.charAt(0).toUpperCase() + page.slice(1);
    accueil.style.display = "none";
    contenu.style.display = "block";
    contenu.innerHTML = `<h1 style="text-align:center;">${titre}</h1><p style="text-align:center;">Contenu de ${titre} à remplir.</p>`;

    document.querySelectorAll('.nav li').forEach(li => li.classList.remove('active'));
    event.target.classList.add('active');
  };
});

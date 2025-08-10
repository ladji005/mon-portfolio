// Défilement fluide pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Effet de survol sur les compétences
const skills = document.querySelectorAll('.skill img');
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.2)';
        skill.style.transition = 'transform 0.3s ease';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
    });
});

// Bouton "Retour en haut"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '18px';
backToTopButton.style.display = 'none';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  const burger = document.querySelector('.burger');
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  burger.innerHTML = menu.classList.contains('active') ? '&times;' : '&#9776;';
}
let currentScroll = window.scrollY;
let targetScroll = window.scrollY;

// Função que chama a rolagem suave
function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * 0.05; 
  window.scrollTo(0, currentScroll);

  // Atualiza o título dinamicamente
  if (currentScroll >= 700 && currentScroll < 1600) {
    document.title = 'About Us | Tochika Studios';
  } else if (currentScroll >= 1600) {
    document.title = 'Contact | Tochika Studios';
  } else {
    document.title = 'Home | Tochika Studios';
  }

  requestAnimationFrame(smoothScroll);
}

// Inicializa a rolagem suave
smoothScroll();

// Impede o comportamento padrão dos links (se houver links na página)
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

// Controla a rolagem com o mouse
window.addEventListener('wheel', e => {
  e.preventDefault();
  targetScroll += e.deltaY;
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
}, { passive: false });

// Funções de navegação
function scrollToAbout() {
    targetScroll = 800;
}

function scrollToContact() {
    targetScroll = 1924;
}

function scrollReset() {
  targetScroll = 0;
}

// Se houver hash na URL
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#about') {
        targetScroll = 800;
    } else if (window.location.hash === '#contact') {
        targetScroll = 1924;
    }
});

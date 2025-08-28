document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault();
    });
});

let currentScroll = window.scrollY;
let targetScroll = window.scrollY;

window.addEventListener('wheel', e => {
  e.preventDefault();
  targetScroll += e.deltaY;
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
}, { passive: false });

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * 0.05; 
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();

const titles = [
      { id: "sec1", title: "Home | Tochika Studios" },
      { id: "sec2", title: "About Us | Tochika Studios" },
      { id: "sec3", title: "Contact | Tochika Studios" }
    ];

    function updateTitleOnScroll() {
      let scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = titles.length - 1; i >= 0; i--) {
        const section = document.getElementById(titles[i].id);
        if (scrollPosition >= section.offsetTop) {
          document.title = titles[i].title;
          break;
        }
      }
    }

    window.addEventListener("scroll", updateTitleOnScroll);

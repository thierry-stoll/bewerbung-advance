// ── Passwort-Schutz ──────────────────────────────
(function () {
  const PASSWORD = 'ADVANCE2026';
  const gate     = document.getElementById('passwordGate');
  const form     = document.getElementById('pwForm');
  const input    = document.getElementById('pwInput');
  const error    = document.getElementById('pwError');
  const box      = gate.querySelector('.pw-box');

  if (sessionStorage.getItem('pw_ok') === '1') {
    gate.classList.add('hidden');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value === PASSWORD) {
      sessionStorage.setItem('pw_ok', '1');
      gate.classList.add('hidden');
    } else {
      error.classList.add('visible');
      box.classList.remove('shake');
      void box.offsetWidth; // reflow für Restart
      box.classList.add('shake');
      input.value = '';
      input.focus();
    }
  });
})();

const projects = [
  {
    title: 'Swiss Olympic «cool and clean»',
    category: 'VIDEO',
    type:'image',
    preview:'assets/THUMBNAILS/SWISS_OLYMPIC_THUMBNAIL.jpg',
    media:'assets/THUMBNAILS/SWISS_OLYMPIC_THUMBNAIL.jpg',
    description:'Das Jugendpräventionsprogramm «cool and clean» von Swiss Olympic unterstützt Jugendteam-Leitende, die Lebens- und Gesundheitskompetenzen der Jugendlichen zu fördern, gefährliche Entwicklungen frühzeitig zu erkennen und richtig zu reagieren. Kinder und Jugendliche, die Sport treiben, sollen selbstbestimmt auf Suchtmittel verzichten und für fairen Sport einstehen können. Für «cool and clean» habe ich im Auftrag von Kornflex mehrere Videos und Grafikumsetzungen für Social Media erstellt.',
    role:'Videocreator & Postproduction',
    client:'Swiss Olympic / Cool and Clean',
    equipment:'Sony a7iv, DaVinci Resolve Studio, Photoshop',
    dateLocation:'2024–jetzt, Schweiz',
    instagram: 'https://www.instagram.com/coolandclean/',
    mediaItems: [
      {type:'video', src:'assets/PROJEKTE/COOL_AND_CLEAN/ANDREAS_INFO_VIDEO_9_16_V2.mp4'},
      {type:'image', src:"assets/PROJEKTE/COOL_AND_CLEAN/CnC – Don't forget to drink – Post.jpg"},
      {type:'video', src:'assets/PROJEKTE/COOL_AND_CLEAN/CNC_ANNA_JAN26_BESSER_SCHLAFEN_9_16_V4.mp4'},
      {type:'image', src:'assets/PROJEKTE/COOL_AND_CLEAN/Cool and Clean Supplements.jpg'},
      {type:'video', src:'assets/PROJEKTE/COOL_AND_CLEAN/CNC_ANNA_JAN26_KLEINE_MOMENTE_9_16_V2.mp4'},
      {type:'image', src:'assets/PROJEKTE/COOL_AND_CLEAN/Critical Thinking and Tobacco Carousel 01.jpg'},
      {type:'video', src:'assets/PROJEKTE/COOL_AND_CLEAN/CNC_HOCKEY_WM_STACY_OPENMIC_9_16_V2.mp4'}
    ]
  },
  {
    title: 'Skischule Männlichen',
    category: 'BRANDING & SOCIAL MEDIA',
    type:'image',
    preview:'assets/THUMBNAILS/SKISCHULE_THUMBNAIL.jpg',
    media:'assets/THUMBNAILS/SKISCHULE_THUMBNAIL.jpg',
    description:'Seit Wintersaison 25/26 arbeite ich bei der Skischule Männlichen als Ski Instructor. Zudem baute ich auf und betreibe ich den Social Media Account der Skischule sowie bin zuständig für Designelemente wie Flyer und Plakate. Aktuell arbeite ich hier an einem Projekt für eine neue Skischul-Website, welche für nächste Saison umgesetzt und in Betrieb genommen werden soll.',
    role:'Ski Instructor, Videocreator, Branding & Kommunikation',
    client:'Skischule Männlichen',
    equipment:'DaVinci Resolve, Photoshop, XD, InDesign, Illustrator, Head Race TI',
    dateLocation:'2025–jetzt, Schweiz',
    instagram:'https://www.instagram.com/skischulemannlichen/',
    mediaItems: [
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder1'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder2'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder3'},
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder4'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder5'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder6'}
    ]
  },
  {
    title: 'Chill Out Paragliding',
    category: 'VIDEO & SOCIAL MEDIA',
    type: 'image',
    preview: 'assets/THUMBNAILS/CHILL_OUT_THUMBNAIL.jpg',
    media: 'assets/THUMBNAILS/CHILL_OUT_THUMBNAIL.jpg',
    description: 'Ich arbeite seit 2023 bei Chill Out Paragliding als Camp Guide, Startleiter und im Chill Out Shop. Zudem bin ich zuständig für die Social Media Kanäle von Chill Out und die Kommunikation.',
    role: 'Videocreator, Social Media, Camp Guide',
    client: 'Chill Out / Kari Eisenhut',
    equipment: 'DaVinci Resolve, Photoshop, XD',
    dateLocation: 'seit 2023, Interlaken',
    instagram: 'https://www.instagram.com/chilloutparagliding/',
    mediaItems: [
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder1'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder2'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder3'},
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder4'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder5'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder6'}
    ]
  },
  {
    title: 'Seaside Festival',
    category: 'VIDEO',
    type: 'image',
    preview: 'assets/THUMBNAILS/SEASIDE_THUMBNAIL.jpg',
    media: 'assets/THUMBNAILS/SEASIDE_THUMBNAIL.jpg',
    description: 'Seasidefestival 2024 in Spiez.',
    role: 'Videocreator',
    client: 'Festival & Gecko Communications',
    equipment: 'DaVinci Resolve, Sony a7iv',
    dateLocation: '2024, Spiez',
    instagram: 'https://www.instagram.com/seasidefestivalch/',
    mediaItems: [
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder1'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder2'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder3'},
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder4'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder5'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder6'}
    ]
  },
  {
    title: 'Adelboden Live',
    category: 'ANIMATIONS (SCREENS)',
    type: 'image',
    preview: 'https://picsum.photos/800?5',
    media: 'https://picsum.photos/1200?5',
    description: 'Animation Screens.',
    role: 'Animation',
    client: 'Adelboden Live',
    equipment: 'After Effects, Illustrator',
    dateLocation: '2025 · Adelboden',
    instagram: 'https://www.instagram.com/adelboden_live/',
    mediaItems: [
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder1'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder2'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder3'},
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder4'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder5'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder6'}
    ]
  },
  {
    title: 'Freestyle WM 2025 St. Moritz',
    category: 'VIDEO & SOCIAL MEDIA',
    type: 'image',
    preview: 'assets/THUMBNAILS/FSWM_THUMBNAIL.jpg',
    media: 'assets/THUMBNAILS/FSWM_THUMBNAIL.jpg',
    description: 'Content und Social Media.',
    role: 'Video & Social Media',
    client: 'Freestyle WM 2025 St. Moritz',
    equipment: 'Kamera, Premiere Pro, Lightroom',
    dateLocation: '2025 · St. Moritz',
    instagram: 'https://www.instagram.com/stmoritz2025/',
    mediaItems: [
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder1'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder2'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder3'},
      {type:'video', src:'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster:'https://picsum.photos/600/1000?placeholder4'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder5'},
      {type:'image', src:'https://picsum.photos/600/1000?placeholder6'}
    ]
  }
];

const grid = document.querySelector('#portfolioGrid');
const modal = document.querySelector('#projectModal');
const modalMedia = document.querySelector('#modalMedia');
const modalCategory = document.querySelector('#modalCategory');
const modalTitle = document.querySelector('#modalTitle');
const modalDescription = document.querySelector('#modalDescription');
const modalRole = document.querySelector('#modalRole');
const modalTools = document.querySelector('#modalTools');

projects.forEach((project, index) => {
  const card = document.createElement('button');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="project-image" style="background-image: url('${project.preview}')"></div>
    <div class="project-info">
      <small>${project.category}</small>
      <h3>${project.title}</h3>
    </div>
  `;
  card.addEventListener('click', () => openProject(index));
  grid.appendChild(card);
});

function openProject(index) {
  const project = projects[index];
  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  if (project.type === 'video') {
    modalMedia.innerHTML = `<video src="${project.media}" poster="${project.preview}" controls playsinline></video>`;
  } else {
    modalMedia.innerHTML = `<img src="${project.media}" alt="${project.title}">`;
  }

  const details = document.querySelector('.modal-details');
  if (details) {
    details.innerHTML = `
      <div><span>Rolle</span><strong>${project.role || ''}</strong></div>
      <div><span>Auftraggeber</span><strong>${project.client || ''}</strong></div>
      <div><span>Equipment</span><strong>${project.equipment || project.tools || ''}</strong></div>
      <div><span>Datum & Location</span><strong>${project.dateLocation || ''}</strong></div>
    `;
  }

  let carousel = document.querySelector('.project-media-carousel');
  if (!carousel) {
    carousel = document.createElement('div');
    carousel.className = 'project-media-carousel';
    const detailsBlock = document.querySelector('.modal-details');
    if (detailsBlock) detailsBlock.insertAdjacentElement('afterend', carousel);
  }

  const items = project.mediaItems || [];
  carousel.innerHTML = `
    <button class="carousel-btn carousel-prev" type="button" aria-label="Vorheriges Medium">‹</button>
    <div class="carousel-track">
      ${items.map(item => {
        if (item.type === 'video') {
          const posterAttr = item.poster ? `poster="${item.poster}"` : '';
          return `<div class="carousel-item"><video src="${item.src}" ${posterAttr} controls playsinline preload="auto"></video></div>`;
        }
        return `<div class="carousel-item carousel-item--image"><img src="${item.src}" alt="${project.title}"></div>`;
      }).join('')}
    </div>
    <button class="carousel-btn carousel-next" type="button" aria-label="Nächstes Medium">›</button>
  `;

  const track = carousel.querySelector('.carousel-track');
  const prev = carousel.querySelector('.carousel-prev');
  const next = carousel.querySelector('.carousel-next');

  if (prev && next && track) {
    prev.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.85, behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: track.clientWidth * 0.85, behavior: 'smooth' }));
  }

  // Videos laden ohne Seeking (GitHub Pages unterstützt Range-Requests nicht zuverlässig)
  track.querySelectorAll('video').forEach(v => {
    v.preload = 'auto';
  });

  let instagramLink = document.querySelector('.project-instagram-link');
  if (!instagramLink) {
    instagramLink = document.createElement('a');
    instagramLink.className = 'project-instagram-link';
    instagramLink.target = '_blank';
    instagramLink.rel = 'noopener';
    instagramLink.setAttribute('aria-label', 'Instagram öffnen');
    instagramLink.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.4" cy="6.6" r="1"></circle>
      </svg>
      <span>Hier geht es zum Account</span>
    `;
    carousel.insertAdjacentElement('afterend', instagramLink);
  }

  instagramLink.href = project.instagram || '#';
  instagramLink.style.display = project.instagram ? 'inline-flex' : 'none';

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalMedia.innerHTML = '';
  const carousel = document.querySelector('.project-media-carousel');
  if (carousel) carousel.innerHTML = '';
}

document.querySelectorAll('[data-close-modal]').forEach(element => {
  element.addEventListener('click', closeModal);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.13 });
reveals.forEach(element => observer.observe(element));

// ── Stat Counter Animation ────────────────────────────────
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const statEls = document.querySelectorAll('.stat-number[data-count]');
  const infinityEl = document.querySelector('.stat-infinity');

  // Initialise numeric counters to 0 so the count-up starts from zero
  if (!prefersReduced) {
    statEls.forEach(el => {
      el.textContent = '0' + (el.dataset.suffix || '');
    });
  }

  function countUp(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    let startTime = null;

    function tick(now) {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease-out cubic — fast start, smooth landing
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  // Observer for the numeric stat elements
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (prefersReduced) {
        el.textContent = el.dataset.count + (el.dataset.suffix || '');
      } else {
        countUp(el);
      }
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  statEls.forEach(el => counterObserver.observe(el));

  // Pop-in animation for the ∞ symbol
  if (infinityEl && !prefersReduced) {
    infinityEl.style.display = 'inline-block';
    infinityEl.style.opacity = '0';
    infinityEl.style.transform = 'scale(0.3)';
    const infinityObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        infinityEl.style.transition = 'transform 0.65s cubic-bezier(.34,1.56,.64,1), opacity 0.45s ease';
        infinityEl.style.opacity = '1';
        infinityEl.style.transform = 'scale(1)';
        infinityObserver.unobserve(infinityEl);
      });
    }, { threshold: 0.5 });
    infinityObserver.observe(infinityEl);
  }
})();


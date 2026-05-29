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
    title: 'Freestyle WM 2025 St. Moritz',
    category: 'VIDEO & SOCIAL MEDIA',
    type: 'image',
    preview: 'assets/THUMBNAILS/FSWM_THUMBNAIL.jpg',
    media: 'assets/THUMBNAILS/FSWM_THUMBNAIL.jpg',
    description: 'Zusammen mit dem Kornflex-Team haben wir 2025 sämtliche Kommunikation und Social Media für die FIS Freestyle WM in St. Moritz umgesetzt. Dazu gehörten Produktionen vor dem Event sowie Social Media Content während der Weltmeisterschaft.',
    role: 'Video & Social Media',
    client: 'Freestyle WM 2025 St. Moritz',
    equipment: 'Kamera, Premiere Pro, Lightroom',
    dateLocation: '2025 · St. Moritz',
    instagram: '',
    mediaItems: [
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_HIGHLIGHT.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_ANNOUNCE_BENNETT.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_FREESTYLETRICKS.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_VIDEO_ATHLETEN_V4.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_ANNOUNCE_MILKY_CHANCE.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_GIAN_ANDRI.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_ANNOUNCE_STRESS.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FREESTYLE_BIG_AIR_RECAP.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_ANNOUNCE_ROYAL_REPUBLIC.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_WMDIM.mp4'}
    ],
    mediaItems2: [
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_AUFRUF_SKICLUBS.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_ANNOUNCE_SAM_FELDT.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_NE_LEICHE.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_AUFRUF_VOLUNTARI.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_VIDEO_ATHLETEN_V6.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_FREESTYLE_SCHREIEN.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_XMAS_SPECIAL.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_INFO_VOLUNTARI.mp4'},
      {type:'video', src:'assets/PROJEKTE/FREESTYLE_WM/FSWM_WINTERGADGET.mp4'}
    ]
  },
  {
    title: 'Skischule Männlichen',
    category: 'BRANDING & SOCIAL MEDIA',
    type:'image',
    preview:'assets/THUMBNAILS/SKISCHULE_THUMBNAIL.jpg',
    media:'assets/THUMBNAILS/SKISCHULE_THUMBNAIL.jpg',
    description:'Seit Wintersaison 25/26 arbeite ich bei der Skischule Männlichen als Skilehrer. Nebenbei baue und betreibe ich den Social Media Account der Skischule und bin zuständig für Designelemente wie Flyer und Plakate. Aktuell arbeite ich an einer neuen Website, welche für kommende Saison umgesetzt und in Betrieb genommen werden soll.',
    role:'Ski Instructor, Videocreator, Branding & Kommunikation',
    client:'Skischule Männlichen',
    equipment:'DaVinci Resolve, Photoshop, XD, InDesign, Illustrator, Head Race TI',
    dateLocation:'2025–jetzt, Schweiz',
    instagram:'https://www.instagram.com/skischulemannlichen/',
    mediaItems: [
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_LOCATION-2.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_GROUP_LESSON-7.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_GROUP_LESSON-18.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_GROUP_LESSON-19.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_GROUP_LESSON-25.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_GROUP_LESSON-28.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_KIDS_COURS-4.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_KIDS_COURS-9.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_KIDS_COURS-11.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_KIDS_COURS-14.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_KIDS_COURS-17.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_KIDS_COURS-24.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_KIDS_COURS-27.jpg'},
      {type:'image', src:'assets/PROJEKTE/SKISCHULE_MAENNLICHEN/SM_KIDS_COURS-31.jpg'}
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
      {type:'image', src:'assets/PROJEKTE/CHILL_OUT/THUMBNAIL_GROUNDHANDLING_3242M.jpg'},
      {type:'video', src:'assets/PROJEKTE/CHILL_OUT/THERMIK_BASIC.mp4'},
      {type:'image', src:'assets/PROJEKTE/CHILL_OUT/AD_GRUNDKURS_1.jpg'},
      {type:'image', src:'assets/PROJEKTE/CHILL_OUT/AD_GRUNDKURS_2.jpg'},
      {type:'video', src:'assets/PROJEKTE/CHILL_OUT/RECAP_SKI_AND_FLY.mp4'},
      {type:'image', src:'assets/PROJEKTE/CHILL_OUT/POST_TAU.jpg'},
      {type:'video', src:'assets/PROJEKTE/CHILL_OUT/RECAP_TOPLANDINGCAMP.mp4'},
      {type:'image', src:'assets/PROJEKTE/CHILL_OUT/POST_HF_WEEKEND_1.jpg'},
      {type:'video', src:'assets/PROJEKTE/CHILL_OUT/POWDER_WAVE_SURFING.mp4'}
    ]
  },
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
    title: 'Adelboden Live',
    category: 'ANIMATIONS (SCREENS)',
    type: 'image',
    preview: 'assets/THUMBNAILS/ADELBODEN_LIVE_THUMBNAIL.jpg',
    media: 'assets/THUMBNAILS/ADELBODEN_LIVE_THUMBNAIL.jpg',
    bgPosition: 'center bottom',
    description: '2025 war ich mit dem Kornflex-Team am Adelboden-Live Festival. Vor- und während dem Event habe ich verschiedene Videoproduktionen umgesetzt. 2026 war ich für die Screen-Animations der Festivals-Screens verantwortlich.',
    role: 'Animation',
    client: 'Adelboden Live',
    equipment: 'After Effects, Illustrator',
    dateLocation: '2025 · Adelboden',
    instagram: 'https://www.instagram.com/adelbodenlive/',
    mediaItems: [
      {type:'video', src:'assets/PROJEKTE/ADELBODEN_LIVE/ADELBODEN_LWA.mp4'},
      {type:'video', src:'assets/PROJEKTE/ADELBODEN_LIVE/ADELBODEN_SNAPINSTA_1.mp4'},
      {type:'video', src:'assets/PROJEKTE/ADELBODEN_LIVE/ADELBODEN_ENTWEDER_ODER.mp4'},
      {type:'video', src:'assets/PROJEKTE/ADELBODEN_LIVE/ADELBODEN_GOELAE.mp4'},
      {type:'video', src:'assets/PROJEKTE/ADELBODEN_LIVE/ADELBODEN_FOODMEILE.mp4'},
      {type:'video', src:'assets/PROJEKTE/ADELBODEN_LIVE/ADELBODEN_SNAPINSTA_2.mp4'}
    ]
  },
  {
    title: 'Seaside Festival',
    category: 'VIDEO',
    type: 'image',
    preview: 'assets/THUMBNAILS/SEASIDE_THUMBNAIL.jpg',
    media: 'assets/THUMBNAILS/SEASIDE_THUMBNAIL.jpg',
    description: '2024 war ich mit dem Kornflex-Team am Seaside Festival und habe Videoumsetzungen für Social Media und Content für den Aftermovie aufgenommen und bearbeitet.',
    role: 'Videocreator',
    client: 'GADGET',
    equipment: 'DaVinci Resolve, Sony a7iv',
    dateLocation: '2024, Spiez',
    instagram: 'https://www.instagram.com/seasidefestivalch/',
    mediaItems: [
      {type:'video', src:'assets/PROJEKTE/SEASIDE_FESTIVAL/VIDEO1.mp4'},
      {type:'video', src:'assets/PROJEKTE/SEASIDE_FESTIVAL/VIDEO2.mp4'},
      {type:'video', src:'assets/PROJEKTE/SEASIDE_FESTIVAL/VIDEO3.mp4'},
      {type:'video', src:'assets/PROJEKTE/SEASIDE_FESTIVAL/VIDEO4.mp4'}
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
    <div class="project-image" style="background-image: url('${project.preview}'); ${project.bgPosition ? 'background-position:' + project.bgPosition : ''}"></div>
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

  track.querySelectorAll('video').forEach(v => { v.preload = 'auto'; });

  // Zweites Carousel (nur wenn mediaItems2 vorhanden)
  const existingCarousel2 = document.querySelector('.project-media-carousel-2');
  if (existingCarousel2) existingCarousel2.remove();

  const items2 = project.mediaItems2 || [];
  let carousel2 = null;
  if (items2.length > 0) {
    carousel2 = document.createElement('div');
    carousel2.className = 'project-media-carousel project-media-carousel-2';
    carousel.insertAdjacentElement('afterend', carousel2);
    carousel2.innerHTML = `
      <button class="carousel-btn carousel-prev" type="button" aria-label="Vorheriges Medium">‹</button>
      <div class="carousel-track">
        ${items2.map(item => {
          if (item.type === 'video') {
            const posterAttr = item.poster ? `poster="${item.poster}"` : '';
            return `<div class="carousel-item"><video src="${item.src}" ${posterAttr} controls playsinline preload="auto"></video></div>`;
          }
          return `<div class="carousel-item carousel-item--image"><img src="${item.src}" alt="${project.title}"></div>`;
        }).join('')}
      </div>
      <button class="carousel-btn carousel-next" type="button" aria-label="Nächstes Medium">›</button>
    `;
    const track2 = carousel2.querySelector('.carousel-track');
    const prev2 = carousel2.querySelector('.carousel-prev');
    const next2 = carousel2.querySelector('.carousel-next');
    if (prev2 && next2 && track2) {
      prev2.addEventListener('click', () => track2.scrollBy({ left: -track2.clientWidth * 0.85, behavior: 'smooth' }));
      next2.addEventListener('click', () => track2.scrollBy({ left: track2.clientWidth * 0.85, behavior: 'smooth' }));
    }
    track2.querySelectorAll('video').forEach(v => { v.preload = 'auto'; });
  }

  // Instagram-Link immer nach letztem Carousel positionieren
  const lastCarousel = carousel2 || carousel;
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
  }
  lastCarousel.insertAdjacentElement('afterend', instagramLink);

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
  document.querySelectorAll('.project-media-carousel').forEach(c => c.innerHTML = '');
  const carousel2 = document.querySelector('.project-media-carousel-2');
  if (carousel2) carousel2.remove();
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


(function () {
  const root = document.documentElement;
  const storageKey = "MilenaLanguage";

  const dictionary = {
    es: {
      "meta.title": "Milena Guevara · Diseño Gráfico Digital",
      "meta.description":
        "Portafolio de Milena Guevara Sánchez, estudiante de Diseño Gráfico Digital en SENATI. Diseño visual, un poco de código y prompts para IA.",

      "common.skip": "Saltar al contenido",
      "common.role": "Diseño Gráfico Digital",
      "common.newTab": "(se abre en una pestaña nueva)",

      "nav.logo": "Milena, ir al inicio",
      "nav.label": "Navegación principal",
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.skills": "Herramientas",
      "nav.code": "Código & IA",
      "nav.universe": "Universo",
      "nav.education": "Formación",
      "nav.foot": "Gracias por pasar ✦",
      "nav.contact": "Contacto",
      "nav.menuOpen": "Abrir menú",
      "nav.menuClose": "Cerrar menú",

      "lang.group": "Idioma",

      "hero.eyebrow": "Portafolio · diseño + código + IA",
      "hero.title":
        '<span class="Line"><span class="LineInner">Convierto ideas</span></span>' +
        '<span class="Line LineSerif LineShift"><span class="LineInner">en diseño que</span></span>' +
        '<span class="Line"><span class="LineInner">no pasa</span></span>' +
        '<span class="Line LineAccent"><span class="LineInner"><em>desapercibido.</em></span></span>',
      "hero.lead": "Soy Milena. Mezclo color, forma y un poco de código para crear piezas visuales que se quedan en la memoria.",
      "hero.ctaUniverse": "Ver lo que hago",
      "hero.ctaContact": "Hablemos",
      "hero.badge": "crear ✦ probar ✦ imaginar ✦ diseñar ✦",
      "hero.prompt": "póster pop en violeta y lima, tipografía bold, mucho contraste",
      "hero.scroll": "Desliza",

      ticker: ["Bocetos", "Paletas", "Vectores", "Píxeles", "Moodboards", "Mockups", "Tipos"],

      "about.hello": "¡Hola!",
      "about.years": "pasa, este es mi rincón",
      "about.sticker": "modo inspiración: on",
      "about.title": 'Curiosa por naturaleza, <em>creativa por elección.</em>',
      "about.text":
        "Me gusta que cada pieza tenga una intención: que <mark>comunique algo antes de leer una sola palabra.</mark> " +
        "Disfruto el proceso tanto como el resultado: bocetar, probar combinaciones, equivocarme y volver a empezar " +
        "hasta que la idea se ve como la imaginé.",
      "about.value1": "Observar los detalles",
      "about.value2": "Probar sin miedo",
      "about.value3": "Encontrar mi estilo",

      "tools.title": 'Las herramientas con las que <em>creo.</em>',
      "tools.lead": "Mi set de trabajo para llevar cualquier idea del boceto a la pantalla.",
      "tools.ps": "Retoque, fotomontajes y tratamiento de imágenes.",
      "tools.ai": "Vectores, logotipos y piezas gráficas.",
      "tools.cd": "Diseño para impresión y trazos limpios.",
      "tools.xd": "Pantallas y flujos para apps y sitios web.",
      "tools.fg": "Prototipos interactivos y trabajo colaborativo en tiempo real.",
      "tools.note": "Cada herramienta, una forma distinta de experimentar.",
      "tools.tabs": "Herramientas",

      "code.title": 'Del diseño al <em>código.</em>',
      "code.lead": "No soy programadora, pero me gusta entender cómo se construye lo que diseño. Conozco lo básico, lo suficiente para dar vida a una idea.",
      "code.note": "Un paso más allá del diseño.",
      "code.html": "Estructuro páginas sencillas y entiendo cómo se organiza el contenido.",
      "code.css": "Colores, tipografías y layouts simples para dar estilo.",
      "code.js": "Pequeñas interacciones, todavía dando mis primeros pasos.",
      "code.ai": "Escribo prompts claros para generar referencias, moodboards e imágenes. Es donde más cómoda me siento.",
      "code.ainame": "Prompts para IA",
      "code.prompt": "ia.prompt(\"ideas para mi próximo póster\")",

      "universe.title": 'Lo que más disfruto <em>crear.</em>',
      "universe.lead": "Las áreas donde se me pasan las horas sin darme cuenta.",
      "universe.identity": "Identidad visual",
      "universe.composition": "Composición",
      "universe.color": "Color y tipografía",
      "universe.illustration": "Ilustración",
      "universe.photo": "Edición fotográfica",
      "universe.digital": "Diseño digital",
      "universe.adjust1": "Exposición",
      "universe.adjust2": "Contraste",
      "universe.adjust3": "Saturación",

      "education.title": 'Aquí empieza <em>mi historia.</em>',
      "education.institution": "Institución",
      "education.career": "Carrera",
      "education.status": "Estado",
      "education.statusValue": "En curso",
      "education.next": "próximo nivel…",

      "contact.title": '¿Tienes una <em>idea?</em>',
      "contact.text": "Escríbeme y conversemos. Me encanta conocer proyectos nuevos y personas con ganas de crear.",
      "contact.emailLabel": "Correo electrónico",
      "contact.copy": "Copiar correo",
      "contact.copied": "¡Copiado!",
      "contact.copiedStatus": "Correo copiado al portapapeles",

      "footer.made": "Hecho a mano, píxel a píxel.",
      "footer.top": "Volver arriba"
    },

    en: {
      "meta.title": "Milena Guevara · Digital Graphic Design",
      "meta.description":
        "Portfolio of Milena Guevara Sánchez, Digital Graphic Design student at SENATI. Visual design, a bit of code and AI prompts.",

      "common.skip": "Skip to content",
      "common.role": "Digital Graphic Design",
      "common.newTab": "(opens in a new tab)",

      "nav.logo": "Milena, go to top",
      "nav.label": "Main navigation",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Tools",
      "nav.code": "Code & AI",
      "nav.universe": "Universe",
      "nav.education": "Education",
      "nav.foot": "Thanks for stopping by ✦",
      "nav.contact": "Contact",
      "nav.menuOpen": "Open menu",
      "nav.menuClose": "Close menu",

      "lang.group": "Language",

      "hero.eyebrow": "Portfolio · design + code + AI",
      "hero.title":
        '<span class="Line"><span class="LineInner">I turn ideas</span></span>' +
        '<span class="Line LineSerif LineShift"><span class="LineInner">into design that</span></span>' +
        '<span class="Line"><span class="LineInner">never goes</span></span>' +
        '<span class="Line LineAccent"><span class="LineInner"><em>unnoticed.</em></span></span>',
      "hero.lead": "I'm Milena. I mix color, shape and a bit of code to create visuals that stick in people's minds.",
      "hero.ctaUniverse": "See what I do",
      "hero.ctaContact": "Let's talk",
      "hero.badge": "create ✦ test ✦ imagine ✦ design ✦",
      "hero.prompt": "pop poster in violet and lime, bold type, high contrast",
      "hero.scroll": "Scroll",

      ticker: ["Sketches", "Palettes", "Vectors", "Pixels", "Moodboards", "Mockups", "Type"],

      "about.hello": "Hi!",
      "about.years": "come in, this is my corner",
      "about.sticker": "inspiration mode: on",
      "about.title": 'Curious by nature, <em>creative by choice.</em>',
      "about.text":
        "I like every piece to have an intention: to <mark>say something before anyone reads a single word.</mark> " +
        "I enjoy the process as much as the result: sketching, testing combinations, getting it wrong and starting over " +
        "until the idea looks the way I pictured it.",
      "about.value1": "Notice the details",
      "about.value2": "Try without fear",
      "about.value3": "Find my style",

      "tools.title": 'The tools I <em>create with.</em>',
      "tools.lead": "My everyday set for taking any idea from sketch to screen.",
      "tools.ps": "Retouching, photo collages and image treatment.",
      "tools.ai": "Vectors, logos and graphic pieces.",
      "tools.cd": "Print design and clean strokes.",
      "tools.xd": "Screens and flows for apps and websites.",
      "tools.fg": "Interactive prototypes and real-time collaboration.",
      "tools.note": "Every tool, a different way to experiment.",
      "tools.tabs": "Tools",

      "code.title": 'From design to <em>code.</em>',
      "code.lead": "I'm not a developer, but I like understanding how the things I design get built. I know the basics, enough to bring an idea to life.",
      "code.note": "One step beyond design.",
      "code.html": "I structure simple pages and understand how content is organized.",
      "code.css": "Colors, type and simple layouts to add style.",
      "code.js": "Small interactions, still taking my first steps.",
      "code.ai": "I write clear prompts to generate references, moodboards and images. It's where I feel most at home.",
      "code.ainame": "AI prompts",
      "code.prompt": "ai.prompt(\"ideas for my next poster\")",

      "universe.title": 'What I love <em>creating.</em>',
      "universe.lead": "The areas where hours fly by without me noticing.",
      "universe.identity": "Visual identity",
      "universe.composition": "Composition",
      "universe.color": "Color & typography",
      "universe.illustration": "Illustration",
      "universe.photo": "Photo editing",
      "universe.digital": "Digital design",
      "universe.adjust1": "Exposure",
      "universe.adjust2": "Contrast",
      "universe.adjust3": "Saturation",

      "education.title": 'This is where <em>my story begins.</em>',
      "education.institution": "Institution",
      "education.career": "Program",
      "education.status": "Status",
      "education.statusValue": "Ongoing",
      "education.next": "next level…",

      "contact.title": 'Got an <em>idea?</em>',
      "contact.text": "Write to me and let's talk. I love discovering new projects and people who want to create.",
      "contact.emailLabel": "Email",
      "contact.copy": "Copy email",
      "contact.copied": "Copied!",
      "contact.copiedStatus": "Email copied to clipboard",

      "footer.made": "Handmade, pixel by pixel.",
      "footer.top": "Back to top"
    }
  };

  function current() {
    return root.getAttribute("lang") === "en" ? "en" : "es";
  }

  function t(key) {
    const table = dictionary[current()];
    return key in table ? table[key] : dictionary.es[key];
  }

  const tickerSpeed = { desktop: 70, mobile: 45 };
  let tickerTimer;

  function buildTickerGroup(words, copies) {
    const group = document.createElement("div");
    group.className = "TickerGroup";
    let index = 0;
    for (let round = 0; round < copies; round += 1) {
      words.forEach((word) => {
        const label = document.createElement("span");
        label.className = index % 2 ? "TickerWord IsSerif" : "TickerWord";
        label.textContent = word;
        group.append(label);
        const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        star.setAttribute("class", index % 3 === 2 ? "TickerStar IsLime" : "TickerStar");
        const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        use.setAttribute("href", "#Sparkle");
        star.append(use);
        group.append(star);
        index += 1;
      });
    }
    return group;
  }

  function renderTrack(track, words, reduced) {
    const list = words;

    track.classList.remove("IsRunning");
    track.replaceChildren();

    let copies = 1;
    let group = buildTickerGroup(list, copies);
    track.append(group);
    const viewport = track.parentElement.getBoundingClientRect().width;
    const single = group.getBoundingClientRect().width || 1;
    copies = Math.max(1, Math.ceil(viewport / single));
    if (copies > 1) {
      group.replaceWith((group = buildTickerGroup(list, copies)));
    }

    const clone = group.cloneNode(true);
    track.append(clone);
    const width = group.getBoundingClientRect().width;
    const base = window.innerWidth < 700 ? tickerSpeed.mobile : tickerSpeed.desktop;
    const speed = reduced ? base * 0.45 : base;
    track.style.setProperty("--TickerDuration", (width / speed).toFixed(2) + "s");
    track.classList.add("IsRunning");
  }

  function renderTicker() {
    const words = t("ticker");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll("[data-ticker]").forEach((track) => renderTrack(track, words, reduced));
  }

  let tickerWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    if (window.innerWidth === tickerWidth) return;
    tickerWidth = window.innerWidth;
    clearTimeout(tickerTimer);
    tickerTimer = setTimeout(renderTicker, 200);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(renderTicker);
  }

  function render() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      node.innerHTML = t(node.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAria));
    });

    document.title = t("meta.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t("meta.description"));

    renderTicker();

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === current()));
    });
    const switcher = document.querySelector("[data-lang-switch]");
    if (switcher) switcher.dataset.active = current();
  }

  function set(lang, animate) {
    if (lang !== "es" && lang !== "en") return;
    try {
      sessionStorage.setItem(storageKey, lang);
    } catch (error) {}
    if (lang === current()) return;

    const main = document.getElementById("contenido");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const swap = () => {
      root.setAttribute("lang", lang);
      render();
      document.dispatchEvent(new CustomEvent("milena:language", { detail: { lang } }));
    };

    if (!animate || reduced || !main) {
      swap();
      return;
    }

    root.classList.add("LangShift");
    setTimeout(() => {
      swap();
      requestAnimationFrame(() => root.classList.remove("LangShift"));
    }, 160);
  }

  window.MilenaI18n = { t, set, current };

  render();
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => set(button.dataset.lang, true));
  });
})();

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;

  grid.innerHTML = portfolioData.projects.map(project => `
    <a class="project-card" href="projects/${encodeURIComponent(project.id)}.html">
      <div class="project-image" style="background-image:url('${project.image}')"></div>
      <div class="project-overlay"></div>
      <div class="project-content">
        <div class="project-number">${escapeHTML(project.number)} / ${escapeHTML(project.status)}</div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        <div class="project-meta">
          ${project.tags.map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
        </div>
      </div>
    </a>
  `).join("");
}

function renderTracks() {
  const list = $("#music-list");
  if (!list) return;

  list.innerHTML = portfolioData.tracks.map((track, index) => `
    <div class="track" data-track-id="${escapeHTML(track.id)}">
      <span class="track-no">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <div class="track-title">${escapeHTML(track.title)}</div>
        <div class="track-project">${escapeHTML(track.project)}</div>
      </div>
      <div class="track-actions">
        <button class="play-button" type="button" aria-label="Play ${escapeHTML(track.title)}" data-audio="${track.audio}">▶</button>
        <a class="download" href="${track.audio}" download>MP3</a>
        <audio class="audio-wrap" preload="none" src="${track.audio}"></audio>
      </div>
    </div>
  `).join("");

  $$(".play-button").forEach(button => {
    button.addEventListener("click", () => {
      const audio = button.parentElement.querySelector("audio");
      const wasPlaying = !audio.paused;

      $$("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
      });
      $$(".play-button").forEach(b => {
        b.classList.remove("active");
        b.textContent = "▶";
      });

      if (!wasPlaying) {
        audio.play().catch(() => {});
        button.classList.add("active");
        button.textContent = "Ⅱ";
        audio.addEventListener("ended", () => {
          button.classList.remove("active");
          button.textContent = "▶";
        }, { once: true });
      }
    });
  });
}

function setupNavigation() {
  const header = $(".site-header");
  const toggle = $(".menu-toggle");
  const nav = $(".nav");

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 30);
  });

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$(".nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function setupClock() {
  const clock = $("#clock");
  if (!clock) return;

  function update() {
    clock.textContent = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
  }
  update();
  setInterval(update, 1000);
}

function setupYear() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

renderProjects();
renderTracks();
setupNavigation();
setupClock();
setupYear();

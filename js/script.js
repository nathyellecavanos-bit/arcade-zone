// ARCADE ZONE — catálogo demonstrativo. Não precisa de banco de dados ou servidor PHP.
const games = [
  {
    id: 1, title: "Hollow Knight", category: "Aventura", year: "2017",
    platform: "PC • CONSOLES", art: "art-1", symbol: "✦", word: "HOLLOW<br>KNIGHT",
    description: "Explore um reino subterrâneo esquecido, descubra caminhos secretos e enfrente criaturas misteriosas nesta aventura de ação desenhada à mão."
  },
  {
    id: 2, title: "Celeste", category: "Indie", year: "2018",
    platform: "PC • CONSOLES", art: "art-2", symbol: "▲", word: "CELESTE",
    description: "Encare desafios de plataforma precisos e acompanhe uma jornada emocionante até o topo de uma montanha cheia de segredos."
  },
  {
    id: 3, title: "Hades", category: "Ação", year: "2020",
    platform: "PC • CONSOLES", art: "art-3", symbol: "♜", word: "HADES",
    description: "Lute para escapar do submundo em um jogo de ação intenso, com combates rápidos, personagens marcantes e cenários mitológicos."
  },
  {
    id: 4, title: "Stardew Valley", category: "RPG", year: "2016",
    platform: "PC • CONSOLES", art: "art-4", symbol: "✿", word: "STARDEW<br>VALLEY",
    description: "Construa sua vida no campo, cuide da fazenda, conheça os moradores e descubra tudo o que o vale tem para oferecer."
  },
  {
    id: 5, title: "Minecraft", category: "Aventura", year: "2011",
    platform: "PC • CONSOLES", art: "art-5", symbol: "▦", word: "MINECRAFT",
    description: "Use a criatividade para construir, explorar e sobreviver em mundos feitos de blocos, com possibilidades praticamente infinitas."
  },
  {
    id: 6, title: "Cuphead", category: "Ação", year: "2017",
    platform: "PC • CONSOLES", art: "art-6", symbol: "✕", word: "CUPHEAD",
    description: "Um jogo de ação inspirado nos desenhos animados clássicos, conhecido por seu visual marcante e batalhas desafiadoras."
  },
  {
    id: 7, title: "Undertale", category: "RPG", year: "2015",
    platform: "PC • CONSOLES", art: "art-7", symbol: "♡", word: "UNDERTALE",
    description: "Conheça personagens curiosos e tome decisões que influenciam sua jornada em uma aventura de RPG diferente do convencional."
  },
  {
    id: 8, title: "Terraria", category: "Indie", year: "2011",
    platform: "PC • CONSOLES", art: "art-8", symbol: "⚒", word: "TERRARIA",
    description: "Explore cavernas, enfrente criaturas, encontre tesouros e construa seu próprio mundo em uma aventura de exploração em 2D."
  }
];

const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("gameModal");
let activeFilter = "Todos";

function renderGames() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");

  const filtered = games.filter(game => {
    const matchesCategory = activeFilter === "Todos" || game.category === activeFilter;
    const searchable = `${game.title} ${game.category} ${game.description}`.toLocaleLowerCase("pt-BR");
    return matchesCategory && searchable.includes(term);
  });

  gamesGrid.innerHTML = "";

  filtered.forEach(game => {
    const card = document.createElement("article");
    card.className = "game-card";

    const art = document.createElement("div");
    art.className = `game-art ${game.art}`;
    art.innerHTML = `<span class="art-symbol" aria-hidden="true">${game.symbol}</span><span class="art-word">${game.word}</span>`;

    const info = document.createElement("div");
    info.className = "game-info";

    const top = document.createElement("div");
    top.className = "game-top";
    top.innerHTML = `<span class="game-category">${game.category}</span><span class="game-year">${game.year}</span>`;

    const title = document.createElement("h3");
    title.textContent = game.title;

    const description = document.createElement("p");
    description.textContent = game.description;

    const bottom = document.createElement("div");
    bottom.className = "game-bottom";

    const platform = document.createElement("span");
    platform.className = "platform";
    platform.textContent = game.platform;

    const details = document.createElement("button");
    details.className = "details-button";
    details.type = "button";
    details.textContent = "VER DETALHES ↗";
    details.addEventListener("click", () => openGame(game.id));

    bottom.append(platform, details);
    info.append(top, title, description, bottom);
    card.append(art, info);
    gamesGrid.appendChild(card);
  });

  emptyState.hidden = filtered.length !== 0;
}

function openGame(id) {
  const game = games.find(item => item.id === id);
  if (!game) return;

  const modalArt = document.getElementById("modalArt");
  modalArt.className = `modal-art ${game.art}`;
  modalArt.innerHTML = `<span class="art-symbol" aria-hidden="true">${game.symbol}</span><span class="art-word">${game.word}</span>`;

  document.getElementById("modalCategory").textContent = game.category.toUpperCase();
  document.getElementById("modalTitle").textContent = game.title;
  document.getElementById("modalDescription").textContent = game.description;
  document.getElementById("modalInfo").textContent = `Lançamento: ${game.year}  •  Plataformas: ${game.platform}`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.getElementById("modalClose").focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderGames();
});

searchInput.addEventListener("input", renderGames);

document.querySelectorAll(".genre-card").forEach(card => {
  card.addEventListener("click", () => {
    activeFilter = card.dataset.genre;
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.toggle("active", item.dataset.filter === activeFilter);
    });
    renderGames();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("clearFilters").addEventListener("click", () => {
  activeFilter = "Todos";
  searchInput.value = "";
  document.querySelectorAll(".filter").forEach(item => {
    item.classList.toggle("active", item.dataset.filter === "Todos");
  });
  renderGames();
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalDone").addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  }
});

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

renderGames();

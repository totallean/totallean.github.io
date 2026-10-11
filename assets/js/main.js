// ---------------------------------------------------------------------------------------------
// Links and contacts. Empty values are hidden on the page.
// ---------------------------------------------------------------------------------------------
const CONFIG = {
	repo: "https://github.com/totallean/roblox-portfolio",
	play: {
		spectrum: "https://www.roblox.com/games/90164767787037/Spectrum-Forge",
	},
	contacts: [
		// Discord has no public profile links by username, so clicking copies it instead.
		{ label: "Discord", value: "total_lean", copy: true },
		{ label: "Telegram", value: "@totallean", href: "https://t.me/totallean" },
		{ label: "Roblox", value: "totallean", href: "https://www.roblox.com/users/11127946453/profile" },
		{ label: "GitHub", value: "totallean", href: "https://github.com/totallean" },
	],
};

const DEFAULT_LANG = "en";

const STRINGS = {
	en: {
		navProjects: "Projects",
		navSkills: "Skills",
		navContact: "Contact",
		eyebrow: "Roblox Studio · Luau · open for work",
		heroTitleA: "Gameplay systems",
		heroTitleB: "that feel good and hold up online.",
		heroLead:
			"I'm a Roblox developer. I build mechanics end to end: physics, NPC AI, economy, saving and the UI around them, with server-authoritative code that stays readable.",
		heroCtaProjects: "See projects",
		heroCtaContact: "Hire me",
		statReleased: "released game",
		statDemos: "gameplay demos",
		statLocalized: "localized UI",
		projectsTitle: "Projects",
		projectsLead: "A released game, plus small demo places, each built around one mechanic that is hard to get right.",
		code: "Code",
		playRoblox: "Play on Roblox",
		released: "released",
		sfKicker: "Incremental · Monetization · Live game",
		sfSummary:
			"An incremental game on Roblox: forge glowing constructs from nine colors, power up your Ring and send your Ghost to fight while you are away.",
		sfP1: "Nine server services behind a single bootstrap, with a typed network contract and one economy config for all balance math.",
		sfP2: "Profile saving with a write queue, session locking and BindToClose; offline income computed on join.",
		sfP3: "Spectrum Wheel crates with odds shown in game, a construct builder with color sets, and arena battles against Ghosts.",
		sfP4: "Five game passes and four developer products, a step-by-step tutorial and RU/EN localization chosen from the player's locale.",
		wsKicker: "Physics · Camera · Networking",
		wsSummary: "Spider-Man style web swinging: hold to swing, zip to a point, reel in, jump off with momentum.",
		wsP1: "Pendulum physics on top of Roblox physics: the rope constraint corrects velocity every step instead of teleporting the character.",
		wsP2: "Anchor selection like the console games: an ideal point ahead and above is projected onto the nearest facade, so arcs run along the street.",
		wsP3: "Game feel: body aligned to the rope, arm IK toward the web, speed-based FOV, camera shake, wind streaks.",
		wsP4: "Webs replicate to everyone with server validation; a server-timed ring race feeds a global leaderboard.",
		hsKicker: "NPC AI · Pathfinding · UX",
		hsSummary: "A stealth horror NPC that sees, hears and hunts you through a dark maze. Find the keys, hide in lockers, escape.",
		hsP1: "Perception: view cone, line of sight, lighting, flashlight and crouching; awareness builds up gradually instead of instant detection.",
		hsP2: "Hearing from the speed the server measures, not from what the client claims.",
		hsP3: "Six-state AI (patrol, investigate, search, chase, extract, attack) on PathfindingService with async paths and stuck recovery. If it sees you hide, it pulls you out.",
		hsP4: "Main menu with a live 3D cover shot, a game-over screen, server-driven respawns and Studio-only dev tools for automated QA.",
		bsKicker: "Tycoon · Economy · Monetization",
		bsSummary:
			"A factory tycoon: butter sticks leave the extruder, get stamped and coated in up to five layers of wax, then sell at the collector.",
		bsP1: "Content-driven design: every station, button and price comes from one config, so a new production step is a single table entry.",
		bsP2: "Six plots with claim pads, purchase buttons that pop in with tweens, belt boosts and rebirths.",
		bsP3: "Achievements with rewards and a collection bonus, a first-time-user tutorial, and a shop with game passes and developer products.",
		bsP4: "DataStore saving with session locking, autosave and BindToClose that waits for pending writes.",
		skillsTitle: "Skills",
		sk1Title: "Luau & architecture",
		sk1Text: "Modules split into shared / server / client, typed APIs, Rojo-friendly layout, Git.",
		sk2Title: "Networking & security",
		sk2Text: "Server authority, remote validation, rate limiting, network ownership.",
		sk3Title: "NPC AI",
		sk3Text: "State machines, perception, PathfindingService, debug visualisation.",
		sk4Title: "Physics & feel",
		sk4Text: "Character controllers, constraints, camera work, tweening, VFX.",
		sk5Title: "Data, economy & monetization",
		sk5Text: "DataStores with session locking, balance simulations, game passes and developer products.",
		sk6Title: "UI / UX",
		sk6Text: "Menus, HUDs, onboarding, localisation, mobile-friendly input.",
		contactTitle: "Work with me",
		termShareTitle: "Revenue share",
		termShareText: "I build features for a percentage of the game's payouts.",
		termFixedTitle: "Small fixed price",
		termFixedText: "Smaller tasks for $5–15 each.",
		termPayTitle: "Payment",
		termPayText: "Crypto wallets. No PayPal.",
		contactLead: "The quickest way to reach me:",
		copied: "copied",
		footerNote: "Built with plain HTML & CSS, hosted on GitHub Pages.",
	},
	ru: {
		navProjects: "Проекты",
		navSkills: "Навыки",
		navContact: "Контакты",
		eyebrow: "Roblox Studio · Luau · беру заказы",
		heroTitleA: "Игровые механики,",
		heroTitleB: "приятные в игре и надёжные онлайн.",
		heroLead:
			"Я разработчик на Roblox. Делаю механики целиком: физику, ИИ NPC, экономику, сохранения и интерфейс вокруг них, с серверной авторитетностью и читаемым кодом.",
		heroCtaProjects: "Смотреть проекты",
		heroCtaContact: "Заказать",
		statReleased: "выпущенная игра",
		statDemos: "геймплейных демо",
		statLocalized: "локализация",
		projectsTitle: "Проекты",
		projectsLead: "Выпущенная игра и небольшие демо-места, каждое — вокруг одной механики, которую сложно сделать хорошо.",
		code: "Код",
		playRoblox: "Играть в Roblox",
		released: "в релизе",
		sfKicker: "Инкременталка · Монетизация · Живая игра",
		sfSummary:
			"Инкрементальная игра на Roblox: собирай светящиеся конструкты из девяти цветов, прокачивай Кольцо и отправляй Призрака в бой, пока тебя нет.",
		sfP1: "Девять серверных сервисов с единой точкой входа, типизированный сетевой контракт и один конфиг экономики на всю математику баланса.",
		sfP2: "Сохранения с очередью записей, session lock и BindToClose; офлайн-доход считается при входе.",
		sfP3: "Ящики «Колесо Спектра» с шансами прямо в игре, сборка конструкта с бонусами за цвета и бои с Призраками на арене.",
		sfP4: "Пять геймпассов и четыре продукта, пошаговое обучение и RU/EN локализация по языку игрока.",
		wsKicker: "Физика · Камера · Сеть",
		wsSummary: "Полёт на паутине в стиле Spider-Man: раскачка, рывок к точке, подтягивание, прыжок с паутины с сохранением инерции.",
		wsP1: "Физика маятника поверх физики Roblox: ограничение верёвки корректирует скорость каждый шаг, без телепортов персонажа.",
		wsP2: "Выбор точки крепления как в консольных играх: идеальная точка впереди-сверху проецируется на ближайший фасад, и дуга идёт вдоль улицы.",
		wsP3: "Ощущение полёта: тело выравнивается по верёвке, рука тянется к паутине (IK), FOV от скорости, тряска камеры, потоки ветра.",
		wsP4: "Паутина синхронизируется между игроками с серверной проверкой; гонка по кольцам с серверным таймером и глобальным лидербордом.",
		hsKicker: "ИИ NPC · Поиск пути · UX",
		hsSummary: "Хоррор-NPC, который видит, слышит и охотится на тебя в тёмном лабиринте. Найди ключи, прячься в шкафах, сбеги.",
		hsP1: "Восприятие: конус зрения, прямая видимость, освещение, фонарик и присед; шкала обнаружения растёт постепенно, а не мгновенно.",
		hsP2: "Слух по скорости, которую измеряет сервер, а не по тому, что сообщает клиент.",
		hsP3: "ИИ на 6 состояний (патруль, проверка шума, поиск, погоня, вытаскивание, атака) на PathfindingService с асинхронными путями и выходом из застревания. Если видел, как ты спрятался, — вытащит.",
		hsP4: "Главное меню с живой 3D-обложкой, экран поражения, респаун под управлением сервера и dev-инструменты для автоматизированного QA.",
		bsKicker: "Тайкун · Экономика · Монетизация",
		bsSummary:
			"Тайкун-фабрика: бруски масла выходят из экструдера, проходят пресс-штамп и до пяти слоёв воска и продаются на коллекторе.",
		bsP1: "Дизайн от данных: все станции, кнопки и цены лежат в одном конфиге, новый этап производства — одна запись в таблице.",
		bsP2: "Шесть участков с площадками захвата, кнопки покупки с анимацией появления, ускорение ленты и ребитхи.",
		bsP3: "Ачивки с наградами и бонусом за коллекцию, обучение для новых игроков, магазин с геймпассами и продуктами.",
		bsP4: "Сохранения в DataStore с session lock, автосейвом и BindToClose, который дожидается записи.",
		skillsTitle: "Навыки",
		sk1Title: "Luau и архитектура",
		sk1Text: "Модули shared / server / client, типизированные API, структура под Rojo, Git.",
		sk2Title: "Сеть и безопасность",
		sk2Text: "Серверная авторитетность, валидация remote-событий, rate limiting, network ownership.",
		sk3Title: "ИИ NPC",
		sk3Text: "Машины состояний, восприятие, PathfindingService, отладочная визуализация.",
		sk4Title: "Физика и game feel",
		sk4Text: "Контроллеры персонажа, констрейнты, работа с камерой, твины, VFX.",
		sk5Title: "Данные, экономика, монетизация",
		sk5Text: "DataStore с session lock, симуляции баланса, геймпассы и продукты.",
		sk6Title: "UI / UX",
		sk6Text: "Меню, HUD, онбординг, локализация, управление на телефоне.",
		contactTitle: "Сотрудничество",
		termShareTitle: "Процент от выплат",
		termShareText: "Делаю механики за процент от выплат игры.",
		termFixedTitle: "Небольшая фиксированная сумма",
		termFixedText: "Небольшие задачи — $5–15 за каждую.",
		termPayTitle: "Оплата",
		termPayText: "Криптокошельки. PayPal нет.",
		contactLead: "Быстрее всего со мной связаться так:",
		copied: "скопировано",
		footerNote: "Сделано на чистом HTML и CSS, хостинг — GitHub Pages.",
	},
};

const STORAGE_KEY = "portfolio-lang";
let currentLang = DEFAULT_LANG;

function readStoredLang() {
	try {
		return localStorage.getItem(STORAGE_KEY);
	} catch {
		return null;
	}
}

function storeLang(lang) {
	try {
		localStorage.setItem(STORAGE_KEY, lang);
	} catch {
		// Private mode or blocked storage: the toggle still works for this visit.
	}
}

// English is the default; Russian only when the visitor picked it with the toggle before.
function initialLang() {
	return readStoredLang() === "ru" ? "ru" : DEFAULT_LANG;
}

function applyLang(lang) {
	currentLang = lang;
	const dict = STRINGS[lang];
	document.documentElement.lang = lang;
	document.querySelectorAll("[data-i18n]").forEach((node) => {
		const value = dict[node.dataset.i18n];
		if (value !== undefined) {
			node.textContent = value;
		}
	});
	document.querySelectorAll(".lang button").forEach((button) => {
		button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
	});
}

function copyText(text) {
	if (navigator.clipboard && window.isSecureContext) {
		return navigator.clipboard.writeText(text);
	}
	const area = document.createElement("textarea");
	area.value = text;
	area.style.position = "fixed";
	area.style.opacity = "0";
	document.body.append(area);
	area.select();
	document.execCommand("copy");
	area.remove();
	return Promise.resolve();
}

function applyLinks() {
	document.querySelectorAll("[data-repo-path]").forEach((link) => {
		link.href = `${CONFIG.repo}/tree/main/${link.dataset.repoPath}`;
	});
	document.querySelectorAll("[data-play]").forEach((link) => {
		const url = CONFIG.play[link.dataset.play];
		if (url) {
			link.href = url;
		} else {
			link.remove();
		}
	});

	const list = document.getElementById("contacts");
	CONFIG.contacts
		.filter((contact) => contact.value)
		.forEach((contact) => {
			const item = document.createElement("li");
			let node;
			if (contact.copy) {
				node = document.createElement("button");
				node.type = "button";
				node.className = "contact-copy";
				node.addEventListener("click", () => {
					copyText(contact.value).then(() => {
						hint.textContent = STRINGS[currentLang].copied;
						setTimeout(() => {
							hint.textContent = "";
						}, 1600);
					});
				});
			} else {
				node = document.createElement("a");
				node.href = contact.href;
				node.target = "_blank";
				node.rel = "noopener";
			}
			const label = document.createElement("small");
			label.textContent = contact.label;
			const hint = document.createElement("em");
			hint.className = "copy-hint";
			node.append(label, document.createTextNode(contact.value), hint);
			item.append(node);
			list.append(item);
		});
}

function initGallery() {
	document.querySelectorAll(".project").forEach((project) => {
		const main = project.querySelector(".media-main");
		project.querySelectorAll(".thumb").forEach((thumb) => {
			thumb.addEventListener("click", () => {
				main.src = thumb.dataset.src;
				project.querySelectorAll(".thumb").forEach((other) => other.classList.toggle("is-active", other === thumb));
			});
		});
	});

	const lightbox = document.getElementById("lightbox");
	const lightboxImage = lightbox.querySelector("img");
	document.querySelectorAll(".media-main").forEach((image) => {
		image.addEventListener("click", () => {
			lightboxImage.src = image.src;
			lightboxImage.alt = image.alt;
			lightbox.hidden = false;
		});
	});
	const close = () => {
		lightbox.hidden = true;
	};
	lightbox.addEventListener("click", close);
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			close();
		}
	});
}

document.getElementById("year").textContent = String(new Date().getFullYear());
applyLinks();
applyLang(initialLang());
initGallery();
document.querySelectorAll(".lang button").forEach((button) => {
	button.addEventListener("click", () => {
		applyLang(button.dataset.lang);
		storeLang(button.dataset.lang);
	});
});

/* eslint-disable no-dupe-keys */
"use strict";
// Цвета
const c = {
	w: "#ffffff", // белый
	br: "#bc8f8f", // коричневый
	o: "#ffc6d00", // оранжевый
	p: "#FF1493", // розовый
	lp: "#FF69B4", // светло-розовый
	r: "#FF0000", // красный
	lr: "#FA8072", // светло-красный
	g: "#f04ff1c", // зеленый
	lg: "#f4ee35d", // светло-зеленый
	v: "#f9f00d4", // фиолетовый
	lv: "#BA55D3", // светло-фиолетовый
	b: "#f004eff", // синий
	lb: "#08b3e5", // светло-синий
	gr: "#778899", // серый
	y: "#fdff00", // желтый
	ly: "#FFFDFF20" // светло-желтый
};

// Доступные ключи записи:
//   name    -- Название пункта меню
//   color   -- Цвет пункта меню
//   keybind -- Установка горячей клавиши
//   ifcmd   -- Фильтр (отображение) пункта меню, если указанная команда найдена
//   ifnocmd -- Фильтр (отображение) пункта меню, если указанная команда не найдена
//   class   -- Фильтр (отображение) пункта меню по игровому классу:
//                  warrior, lancer, slayer, berserker, sorcerer, archer, priest,
//                  elementalist, soulless, engineer, fighter, assassin, glaiver
//
// Встроенный команды:
//   mm et  [quest] [instance] -- Телепортация по Авангарду
//   mm use [id предмета]      -- Использовать предмет из инвентаря

// Настройка премиум-слотов
module.exports.premium = [
	{ command: "m", id: 45381 },
	{ command: "m $dang", id: 154901 }
	// { command: "bank", id: 60264 },
	// { command: "broker", id: 60265 },
	// { command: "store", id: 60262 },
];

// Настройка меню
module.exports.categories = {
	Торговцы: [
		{ command: "m bank", name: "Банк", color: c.lp },
		{ command: "m pbank", name: "Перс. хранилище", color: c.lp },
		{ command: "m cbank", name: "Костюмы", color: c.lp },
		{ command: "m gbank", name: "Банк гильдии", color: c.lp },
		{ command: "ab", name: "Автобанк", color: c.p, ifcmd: "ab", ifnocmd: "banker" },
		{ command: "banker", name: "Автобанк", color: c.p, ifcmd: "banker", ifnocmd: "ab" },
		{},
		{ command: "m broker", name: "Брокер", color: c.lb },
		{ command: "m store", name: "Торговец", color: c.g },
		{ command: "m sstore", name: "Редкости", color: c.g },
		{ command: "m ssstore", name: "Особые", color: c.lg },
		{ command: "m bel", name: "Белликариум", color: c.v },
		{},
		{ command: "m vng", name: "Авангард", color: c.b },
		{ command: "m vgc", name: "Кристалы", color: c.b },
		{ command: "m guard", name: "Хранитель", color: c.lb },
		{ command: "m ffstore", name: "Рыба", color: c.w },
		{ command: "m vstore", name: "Знаки", color: c.lb },
		{ command: "m varraz", name: "Варраз", color: c.v },
		{},
		{ command: "m acraft", name: "Алхимия", color: c.y },
		{ command: "m scraft", name: "Оружка", color: c.y },
		{ command: "m pcraft", name: "Броня", color: c.y },
		{ command: "m ecraft", name: "Грава", color: c.y },
		{ command: "m fstore", name: "Еда", color: c.y },
		{ command: "m jcraft", name: "Внешки", color: c.y }
	],
	Основное: [
		{ command: "tp zone", name: "Телепорт", color: c.b, ifcmd: "tp" },
		{ command: "tp to", name: "Зона", color: c.r, ifcmd: "tp" },
		{ command: "tp party", name: "Группа", color: c.lg, ifcmd: "tp" },
		{ command: "m tohw", name: "Балдерон", color: c.o },
		{ command: "m $dang", name: "Данжи (Ctrl+Alt+H)", color: c.y, keybind: "ctrl+alt+h" },
		{ ifcmd: "tp" },
		{ command: "clear", name: "Очистить чат", color: c.w },
		{ command: "m $Loger", name: "$$$$$$$$", color: c.r, ifcmd: "logc", keybind: "ctrl+shift+n" },
		{ command: "fish", name: "Рыбачить", color: c.w, ifcmd: "fish" },
		{ command: "fish ui", name: "Меню рыбалки", color: c.w, ifcmd: "fish" },
		{},
		{ command: "seller", name: "Seller Auto", color: c.o, ifcmd: "seller" },
		{ command: "seller open", name: "Открыть", color: c.g, ifcmd: "seller" },
		{ command: "seller sell", name: "Продать", color: c.p, ifcmd: "seller" },
		{ command: "seller del", name: "Удалить мусор", color: c.lr, ifcmd: "seller" },
		{ ifcmd: "seller" },
		{ command: "seller show", name: "Синтезы (Ctrl+Shift+S)", color: c.y, ifcmd: "seller" },
		{ ifcmd: "seller" },
		{ command: "mb ui", name: "Мистик бот", color: c.lp, ifcmd: "mb", class: "elementalist" },
		{ command: "pb ui", name: "Прист бот", color: c.lp, ifcmd: "pb", class: "priest" },
		{ command: "bers ui", name: "Авто Берс", color: c.lv, ifcmd: "bers", class: "berserker" },
		{ command: "sorc ui", name: "Авто Сорк", color: c.lv, ifcmd: "sorc", class: "sorcerer" },
		{ command: "ninj ui", name: "Авто Шинка", color: c.lv, ifcmd: "ninj", class: "assassin" },
		{ command: "braw ui", name: "Авто Круш", color: c.lv, ifcmd: "braw", class: "fighter" },
		{ command: "valk ui", name: "Авто Валька", color: c.lv, ifcmd: "valk", class: "glaiver" },
		{ command: "warr ui", name: "Авто Воин", color: c.lv, ifcmd: "warr", class: "warrior" },
		{ command: "reap ui", name: "Авто Рипер", color: c.lv, ifcmd: "reap", class: "reaper" },
		{ command: "slay ui", name: "Авто Слойка", color: c.lv, ifcmd: "slay", class: "slayer" },
		{ command: "arch ui", name: "Авто Лук", color: c.lv, ifcmd: "arch", class: "archer" },
		{ command: "lanc ui", name: "Авто Ланс", color: c.lv, ifcmd: "lanc", class: "lancer" },
		{ command: "gunn ui", name: "Авто Инж", color: c.lv, ifcmd: "gunn", class: "engineer" },
		{ ifcmd: "fast" },
		{ command: "fast", name: "Fast On/off", color: c.v, ifcmd: "fast" },
		{ command: "fast ui", name: "Fast menu", color: c.lv, ifcmd: "fast" },
		{ command: "fast reload", name: "Fast reload", color: c.r, ifcmd: "fast" },
		{ command: "back ui", name: "Backstab menu", color: c.lv, ifcmd: "back" },
		{ ifcmd: "macro" },
		{ command: "macro", name: "macro on/off", color: c.y, ifcmd: "macro" },
		{ command: "proxy reload macro-maker", name: "reload macro", color: c.r, ifcmd: "macro" },
		{},
		{ command: "pr", name: "PR on/off", color: c.y, ifcmd: "pr" },
		{ command: "pinger toggle", name: "pinger on/off", color: c.y, ifcmd: "pinger" },
		{ command: "pinger color", name: "pinger color toggle", color: c.y, ifcmd: "pinger" },
		{ ifcmd: "fps" },
		{ command: "u ui", name: "Unicast", color: c.p, ifcmd: "u" },
		{ command: "fps", name: "FPS Menu", color: c.y, ifcmd: "fps" },
		{ command: "fps 0", name: "FPS 0", color: c.w, ifcmd: "fps" },
		{ command: "fps 1", name: "FPS 1", color: c.w, ifcmd: "fps" },
		{ command: "fps 2", name: "FPS 2", color: c.w, ifcmd: "fps" },
		{ command: "fps 3", name: "FPS 3", color: c.w, ifcmd: "fps" },
		{ ifcmd: "fps", ifcmd: "box" },
		{ command: "box", name: "OpenBox", color: c.v, ifcmd: "box" },
		{ command: "translate send", name: "Автоперевод", color: c.lb, ifcmd: "translate" },
		{ ifcmd: "auto" },
		{ command: "auto gq", name: "Авто Гильд Квест", color: c.lv, ifcmd: "auto" },
		{ command: "auto vg", name: "Авто Авангард", color: c.lv, ifcmd: "auto" },
		{ command: "auto gl", name: "Авто Хранитель", color: c.lv, ifcmd: "auto" },
		{ ifcmd: "invg", ifcmd: "lfg", ifcmd: "drk" },
		{ command: "invg", name: "Автоприем в ги", color: c.lb, ifcmd: "invg" },
		{ command: "lfg", name: "Автоприем в лфг", color: c.lb, ifcmd: "lfg" },
		{},
		{ command: "loot auto", name: "Автолут", color: c.p, ifcmd: "loot" },
		{ command: "bb", name: "АнтиБодиБлок", color: c.lp, ifcmd: "bb" },
		{ ifcmd: "drk" },
		{ command: "drk", name: "Крылья Даркана", color: c.p, ifcmd: "drk" },
		{},
		{ command: "m drop", name: "Покинуть групу", color: c.y },
		{ command: "m disband", name: "Распустить", color: c.o },
		{ command: "m reset", name: "Сброс", color: c.g },
		{ command: "m lobby", name: "Выбор Персонажей", color: c.p },
		{},
		{ command: "m exit", name: "Fast Exit Game", color: c.r }
	],
	"Гайд (tera-guide)": [
		{ command: "guide", name: "Вкл/Выкл", color: c.o },
		{ command: "guide ui", name: "Настройка", ifcmd: "guide" },
		{ command: "guide voice", name: "Голос", color: c.y, ifcmd: "guide" },
		{ command: "guide spawnObject", name: "Объекты", color: c.y, ifcmd: "guide" },
		{ command: "guide stream", name: "Стрим", color: c.lb, ifcmd: "guide" },
		{ command: "guide debug ui", name: "Отладка", color: c.b, ifcmd: "guide" },
		{},
		{},
		{ command: "m $setting", name: "Прочие настройки Меню (Ctrl+Alt+S)", color: c.v, keybind: "ctrl+alt+s" }
	]
};
module.exports.pages = {
	dang: {
		"Телепорт к Данжам": [
			{ command: "m et 2190 9981", name: "Святилище Велики (Velik's Sanctuary) (Hard)", color: c.p },
			{},
			{ command: "m et 2173 3102", name: "Командный Центр (Draakon Arena)", color: c.v },
			{},
			{ command: "m et 2168 3023", name: "Крепость Берарк (Akalath Quarantine)", color: c.b },
			{},
			{ command: "m et 1900 9750", name: "Край Разлома (Rift Edge)", color: c.y },
			{},
			{ command: "m et 2166 3101", name: "Гнездо Паркин (Gossamer Vault)", color: c.g },
			{},
			{ command: "m et 2147 9794", name: "Лаборатория Сайрекса (Thaumetal Refinery)", color: c.o },
			{},
			{ command: "m et 2152 9735", name: "RK-9 (RK-9 Kennel)", color: c.g },
			{},
			{ command: "m et 2150 9055", name: "Алчное Ущелье (Ravenous Gorge)", color: c.y }
		],
		Мелкие: [
			{ command: "m tohw", name: "Балдерон", color: c.o },
			{ command: "m et 98311 9069", name: "Балдерон (Краб)", color: c.y },
			{},
			{ command: "m et 2101 9809", name: "Мясницкие Катакомбы (Macellarius Catacombs)", color: c.g },
			{},
			{ command: "m et 800010 9073", name: "Эбеновая башня (Ebon Tower)", color: c.lb },
			{},
			{ command: "m et 800009 9076", name: "Лабиринт Ужаса (Labyrinth of Terror)", color: c.lb },
			{},
			{ command: "m et 800006 9072", name: "Золотой Лабиринт (Golden Labyrinth)", color: c.lb },
			{},
			{ command: "m et 800005 9071", name: "Гробница Некроманта (Necromancer Tomb)", color: c.lb },
			{},
			{ command: "m et 800004 9089", name: "Убежище Культистов (Cultists' Refuge)", color: c.lb },
			{},
			{ command: "m et 800003 9979", name: "Логово Сараваша (Saravash's Ascent)", color: c.lb },
			{},
			{ command: "m et 800002 9088", name: "Зловещий Особняк (Sinestral Manor)", color: c.lb }
		],
		Ивенты: [
			{ command: "m et 7001 230", name: "Фестиваль Солнца (Sun Feslival)", color: c.o },
			{},
			{ command: "m et 7003 210", name: "Пляжная Вечеринка (Beach Party)", color: c.o }
		]
	},
	Loger: {
		Mods: [
			{ command: "proxy reload packetslogger", name: "Logger reload", color: c.p, ifcmd: "logs" },
			{ ifcmd: "logs" },
			{ command: "logc", name: "LOG C", color: c.bl, ifcmd: "logc" },
			{ command: "logs", name: "LOG S", color: c.o, ifcmd: "logs" },
			{ ifcmd: "ten" },
			{ command: "ten on", name: "Автоюз расходки on", color: c.g, ifcmd: "ten" },
			{ command: "ten off", name: "Автоюз расходки off", color: c.r, ifcmd: "ten" },
			{ command: "ten ui", name: "Автоюз расходки menu", color: c.y, ifcmd: "ten" }
		],
		Teleport: [
			{ command: "tp zone", name: "Телепорт", color: c.b, ifcmd: "tp" },
			{ command: "tp to", name: "Зона", color: c.r, ifcmd: "tp" },
			{ command: "m $GBam", name: "Guild Bam", color: c.lb, ifcmd: "tp" },
			{ ifcmd: "tp" },
			{ command: "just blink 100", name: "Блинк вперед(ctrl+alt+w)", keybind: "ctrl+alt+w" },
			{ command: "just up 500", name: "Блинк вверх" },
			{ command: "just down 250", name: "Блинк вниз" },
			{ ifcmd: "tp" },
			{ command: "tp drop 1", name: "1%", color: c.r, ifcmd: "tp" },
			{ command: "tp drop 10", name: "10%", color: c.r, ifcmd: "tp" },
			{ command: "tp drop 20", name: "20%", color: c.o, ifcmd: "tp" },
			{ command: "tp drop 30", name: "30%", color: c.o, ifcmd: "tp" },
			{ command: "tp drop 40", name: "40%", color: c.y, ifcmd: "tp" },
			{ command: "tp drop 50", name: "50%", color: c.y, ifcmd: "tp" },
			{ command: "tp drop 60", name: "60%", color: c.lb, ifcmd: "tp" },
			{ command: "tp drop 70", name: "70%", color: c.lb, ifcmd: "tp" },
			{ command: "tp drop 80", name: "80%", color: c.lg, ifcmd: "tp" },
			{ command: "tp drop 90", name: "90%", color: c.g, ifcmd: "tp" },
			{ ifcmd: "tp" },
			{ command: "tp drop -1", name: "Убить себя", color: c.r, ifcmd: "tp" }
		],
		Каналы: [
			{ command: "m cha 1", name: "(_1_)", color: c.g },
			{ command: "m cha 2", name: "(_2_)", color: c.g },
			{ command: "m cha 3", name: "(_3_)", color: c.g },
			{ command: "m cha 4", name: "(_4_)", color: c.g },
			{ command: "m cha 5", name: "(_5_)", color: c.lv },
			{ command: "m cha 6", name: "(_6_)", color: c.lv },
			{ command: "m cha 7", name: "(_7_)", color: c.lb },
			{ command: "m cha 8", name: "(_8_)", color: c.lb }
		],
		"Boss-Helper": [
			{ command: "mm", name: "Торговцы", color: c.y, ifcmd: "bh" },
			{ command: "mm scan", name: "Поиск", color: c.o, ifcmd: "bh" },
			{ command: "mm stop", name: "Стоп", color: c.r, ifcmd: "bh" },
			{ command: "mm loc", name: "Позиции", color: c.b, ifcmd: "bh" },
			{ ifcmd: "bh" },
			{ command: "wb", name: "Мир Бамы", color: c.lb, ifcmd: "bh" },
			{ command: "wb scan", name: "Поиск", color: c.o, ifcmd: "bh" },
			{ command: "wb stop", name: "Стоп", color: c.r, ifcmd: "bh" },
			{ command: "wb loc", name: "Позиции", color: c.b, ifcmd: "bh" }
		]
	},
	setting: {
		Погода: [
			{ command: "m aero normal", name: "Нормально", color: c.g },
			{ command: "m aero snow", name: "Снег", color: c.lb },
			{ command: "m aero night", name: "Ночь", color: c.o },
			{ command: "m aero dark", name: "Темно капец", color: c.v }
		],
		Настройки: [
			{ command: "m premium", name: "Доп. кнопки VIP панели", color: c.y },
			{},
			{ command: "m scene", name: "Пропуск видео заставок", color: c.lp },
			{},
			{ command: "m drunk", name: "Отключение пьяного экрана", color: c.lg },
			{},
			{ command: "m brooch", name: "Отключение анимаций брошки", color: c.lp },
			{},
			{ command: "m build", name: "Скрытие Ёлок. Табличек. Календаря", color: c.g },
			{},
			{ command: "m fix", name: "Диалог через F", color: c.lv },
			{},
			{ command: "m autoaccept", name: "Автопринятие пати", color: c.lg },
			{},
			{ command: "m autoreset", name: "Автопринятие (сброса подземелья / роспуска пати)", color: c.g },
			{},
			{ command: "m tolobby", name: "Отключение таймера при выходе на выбор персонажей", color: c.y },
			{},
			{ command: "m ggreset", name: "Автосброс Поляны древней", color: c.lp },
			{},
			{ command: "m autobox", name: "Авто открытие коробок в один клик", color: c.v },
			{},
			{ command: "m rebuff", name: "Авто ребаф самореса и бафа после бомбочки сброса(priest)", color: c.g },
			{},
			{ command: "m backwalk", name: "Ходить спиной вперёд (видят только другие)", color: c.y },
			{},
			{ command: "m circlewalk", name: "Ходить вращаясь (видят только другие)", color: c.o },
			{},
			{ command: "cc", name: "Антиоткид", color: c.lp, ifcmd: "cc" },
			{ command: "ar", name: "Антиопрокид", color: c.lp, ifcmd: "ar" },
			{ command: "tp jaunt", name: "Вкл/Выкл jaunt", color: c.o, ifcmd: "tp" },
			{ class: "priest", ifcmd: "fast" },
			{ command: "m dbe", name: "Автосброс КД эвейда Прист(при наличии фаста)", color: c.p, class: "priest", ifcmd: "fast" },
			{},
			{ command: "m $Loger", name: "$$$$$$$$", color: c.r }
		]
	}
};
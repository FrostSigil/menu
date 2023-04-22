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
		{ command: "bank", name: "Банк", color: c.lp },
		{ command: "pbank", name: "Перс. хранилище", color: c.lp },
		{ command: "cbank", name: "Костюмы", color: c.lp },
		{ command: "gbank", name: "Банк гильдии", color: c.lp },
		{ command: "ab", name: "Авто Банк", color: c.p, ifcmd: "ab" },
		{},
		{ command: "m broker", name: "Брокер", color: c.lb },
		{ command: "store", name: "Торговец", color: c.g },
		{ command: "sstore", name: "Редкости", color: c.g },
		{ command: "ssstore", name: "Бижа", color: c.lg },
		{ command: "bel", name: "Белликариум", color: c.v },
		{},
		{ command: "vng", name: "Авангард", color: c.b },
		{ command: "vgc", name: "Кристалы", color: c.b },
		{ command: "guard", name: "Хранитель", color: c.lb },
		{ command: "ffstore", name: "Рыба", color: c.w },
		{ command: "vstore", name: "Знаки", color: c.lb },
		{},
		{ command: "acraft", name: "Алхимия", color: c.y },
		{ command: "scraft", name: "Оружка", color: c.y },
		{ command: "pcraft", name: "Броня", color: c.y },
		{ command: "ecraft", name: "Грава", color: c.y },
		{ command: "fstore", name: "Еда", color: c.y },
		{ command: "jcraft", name: "Внешки", color: c.y },
		{ command: "varraz", name: "Varraz", color: c.v },
		{ ifcmd: "bh" },
		{ command: "m $Merchant", name: "Merchant", color: c.o, ifcmd: "bh", keybind: "ctrl+m" }
	],
	Основное: [
		{ command: "tp zone", name: "Телепорт", color: c.b, ifcmd: "tp" },
		{ command: "tp to", name: "Зона", color: c.r, ifcmd: "tp" },
		{ command: "m et 98311 9069", name: "Верхний Дозор", color: c.o },
		{ command: "m $dang", name: "Данжы (Ctrl+Alt+H)", color: c.y, keybind: "ctrl+alt+h" },
		{ ifcmd: "tp" },
		{ command: "m drop", name: "Покинуть групу", color: c.y },
		{ command: "m reset", name: "Сброс", color: c.g },
		{ command: "m lobby", name: "Выбор Персонажей", color: c.p },
		{ command: "m exit", name: "Fast Exit Game", color: c.r },
		{},
		{ command: "clear", name: "Очистить чат", color: c.w },
	],
	Mod: [
		{ command: "fish", name: "Рыбачить", color: c.w, ifcmd: "fish" },
		{ command: "fish ui", name: "Меню рыбалки", color: c.w, ifcmd: "fish" },
		{ ifcmd: "seller" },
		{ command: "seller", name: "Seller Auto", color: c.o, ifcmd: "seller" },
		{ command: "seller open", name: "Открыть", color: c.g, ifcmd: "seller" },
		{ command: "seller sell", name: "Продать", color: c.p, ifcmd: "seller" },
		{ command: "seller del", name: "Удалить мусор", color: c.lr, ifcmd: "seller" },
		{ ifcmd: "seller" },
		{ command: "seller show", name: "Синтезы (Ctrl+Shift+S)", color: c.y, ifcmd: "seller" },
		{ command: "m $autogather", name: "Автосбор", color: c.g, ifcmd: "autogather" },
		{},
		{ command: "u ui", name: "Unicast", color: c.p, ifcmd: "u" },
		{ command: "fps", name: "FPS Menu", color: c.y, ifcmd: "fps" },
		{ command: "fps 0", name: "FPS 0", color: c.w, ifcmd: "fps" },
		{ command: "fps 1", name: "FPS 1", color: c.w, ifcmd: "fps" },
		{ command: "fps 2", name: "FPS 2", color: c.w, ifcmd: "fps" },
		{ command: "fps 3", name: "FPS 3", color: c.w, ifcmd: "fps" },
		{ ifcmd: "fps" },
		{ command: "box", name: "OpenBox", color: c.v, ifcmd: "box" },
		{ command: "translate send", name: "Автоперевод", color: c.lb, ifcmd: "translate" },
		{ command: "food", name: "АвтоЕда", color: c.p, ifcmd: "food" },
		{ command: "loot auto", name: "Автолут", color: c.lp, ifcmd: "loot" },
		{ ifcmd: "auto" },
		{ command: "auto gq", name: "Авто Гильд Квест", color: c.lv, ifcmd: "auto" },
		{ command: "auto vq", name: "Авто Авангард", color: c.lv, ifcmd: "auto" },
		{ command: "auto gl", name: "Авто Хранитель", color: c.lv, ifcmd: "auto" },
		{ ifcmd: "invg", ifcmd: "lfg" },
		{ command: "invg", name: "Автоприем в ги", color: c.lg, ifcmd: "invg" },
		{ command: "lfg", name: "Автоприем в лфг", color: c.lg, ifcmd: "lfg" },
		{ ifcmd: "cc", icmfd: "ar" },
		{ command: "cc", name: "Антиоткид", color: c.lp, ifcmd: "cc" },
		{ command: "ar", name: "Антиопрокид", color: c.lp, ifcmd: "ar" },
		{ ifcmd: "drk" },
		{ command: "drk", name: "Крылья Даркана", color: c.p, ifcmd: "drk" },
		{ command: "tp jaunt", name: "Вкл/Выкл jaunt", color: c.o, ifcmd: "tp" }
	],
	"Гайд (tera-guide)": [
		{ command: "guide", name: "Вкл/Выкл", color: c.o },
		{ command: "guide ui", name: "Настройка", ifcmd: "guide" },
		{ command: "guide voice", name: "Голос", color: c.y, ifcmd: "guide" },
		{ command: "guide spawnObject", name: "Объекты", color: c.y, ifcmd: "guide" },
		{ command: "guide stream", name: "Стрим", color: c.lb, ifcmd: "guide" },
		// { command: "guide debug ui", name: "Отладка", color: c.b, ifcmd: "guide" },
		{},
		{},
		{ command: "m $setting", name: "Прочие настройки (Ctrl+Alt+S)", color: c.gr, keybind: "ctrl+alt+s" }
	]
};
module.exports.pages = {
	dang: {
		"Телепорт к Данжам": [
			{ command: "m et 1106 9027", name: "Обитель Манайи (Manaya's Core)", color: c.r },
			{},
			{ command: "m et 2157 9920", name: "Логово Антароса (Antaroth's Abyss)", color: c.p },
			{},
			{ command: "m et 2173 3102", name: "Командный Центр (Draakon Arena)", color: c.v },
			{},
			{ command: "m et 2169 3026", name: "Логово Келсаика (Corrupted Skynest)", color: c.bl },
			{},
			{ command: "m et 2168 3023", name: "Крепость Берарк (Akalath Quarantine)", color: c.o },
			{},
			{ command: "m et 2149 9716", name: "Небесный крейсер (Sky Cruiser )", color: c.lb },
			{},
			{ command: "m et 2171 3027", name: "Арена Безумия (Forbidden Arena)", color: c.v },
			{},
			{ command: "m et 2183 9067", name: "Лаборатория Берна (Demokron Factory)", color: c.ly },
			{},
			{ command: "m et 2184 9070", name: "Замок Парадоксов (Manglemire)", color: c.bl },
			{},
			{ command: "m et 2182 3034", name: "RK-9 (RK-9 Kennel)", color: c.g },
			{},
			{ command: "m et 2137 9770", name: "Руины Абнукты (Ruinous Manor)", color: c.o },
			{},
			{ command: "m et 2133 9769", name: "Замок Лилит (Lilith's Keep)", color: c.y },
			{},
			{ command: "m et 2139 9710", name: "Разрушеный Алтарь Лакана (Broken Prison)", color: c.lg },
			{},
			{ command: "m et 2105 9760", name: "Корабль Келливана (Kalivan's Dreadnaught)", color: c.lb },
			{},
			{ command: "m et 2106 9053", name: "Ущелье Кеззела (Kezzel Gorge)", color: c.lb },
			{},
			{ command: "m et 2104 9777", name: "Каналы (Channelworks)", color: c.lb }
		],
		Мелкие: [
			{ command: "m et 98311 9069", name: "Дозор (Краб)", color: c.o },
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
		],
		Прочие: [
			{ command: "m et 2176 3030", name: "Резиденция (Commander Residence)", color: c.y },
			{},
			{ command: "m et 2162 9044", name: "Святилище Бахаара (Bahaar's Sanctum)", color: c.r },
			{},
			{ command: "m et 2189 3105", name: "Лаборатория Слияния (Fusion Laboratory)", color: c.lv },
			{},
			{ command: "m et 2183 9767", name: "Лаборатория Берна (Demokron Factory)", color: c.ly },
			{},
			{ command: "m et 2185 3106", name: "Место казни (Killing Grounds)", color: c.g },
			{},
			{ command: "m et 2181 3104", name: "Сонный паралич Лукмии (Catalepticon)", color: c.o },
			{},
			{ command: "m et 2181 9757", name: "Акероново пекло (Akeron's Inferno)", color: c.lv },
			{},
			{ command: "m et 2167 3201", name: "Гнездо Паркин (Gossamer Vault)", color: c.lg },
			{},
			{ command: "m et 2103 9754", name: "Глубинный Храм (Bathysmal Rise)", color: c.lb },
			{},
			{ command: "m et 2150 9055", name: "Алчное Ущелье (Ravenous Gorge)", color: c.y },
			{},
			{ command: "m et 2186 3041", name: "Крепость Тенебриса (Damned Citadel)", color: c.y },
			{},
			{ command: "m et 2161 9982", name: "Мастерская Леандра (Grotto of Lost Souls)", color: c.b },
			{},
			{ command: "m et 2142 9781", name: "Святилище Велики (Velik's Sanctuary)", color: c.lg },
			{},
			{ command: "m et 2140 9780", name: "Катакомбы Велики (Velik's Hold)", color: c.lg },
			{},
			{ command: "m et 2122 9811", name: "Абсцесс (Abscess)", color: c.o },
			{},
			{ command: "m et 2154 9739", name: "Лагерь Повстанцев (Red Refuge)", color: c.o },
			{},
			{ command: "m et 2152 9735", name: "RK-9 (RK-9 Kennel)", color: c.g }
		]
	},
	Merchant: {
		Scaner: [
			{ command: "m et 98311 9069", name: "Убежать в Дозор", color: c.o },
			{ command: "mm", name: "Время респа", color: c.y, ifcmd: "bh" },
			{ command: "mm scan", name: "Поиск", color: c.g, ifcmd: "bh" },
			{ command: "mm stop", name: "Стоп", color: c.r, ifcmd: "bh" },
			{ command: "mm loc", name: "Позиции", color: c.b, ifcmd: "bh" },
			{},
			{ command: "mm to 1", name: "1", color: c.r, ifcmd: "bh" },
			{ command: "mm to 2", name: "2", color: c.r, ifcmd: "bh" },
			{ command: "mm to 3", name: "3", color: c.r, ifcmd: "bh" },
			{ command: "mm to 4", name: "4", color: c.r, ifcmd: "bh" },
			{ command: "mm to 5", name: "5", color: c.r, ifcmd: "bh" },
			{ command: "mm to 6", name: "6", color: c.r, ifcmd: "bh" },
			{ command: "mm to 7", name: "7", color: c.r, ifcmd: "bh" },
			{ command: "mm to 8", name: "8", color: c.r, ifcmd: "bh" },
			{ command: "mm to 9", name: "9", color: c.r, ifcmd: "bh" },
			{ command: "mm to 10", name: "10", color: c.r, ifcmd: "bh" },
			{ command: "mm to 11", name: "11", color: c.r, ifcmd: "bh" },
			{ command: "mm to 12", name: "12", color: c.r, ifcmd: "bh" },
			{ command: "mm to 13", name: "13", color: c.r, ifcmd: "bh" },
			{ command: "mm to 14", name: "14", color: c.r, ifcmd: "bh" },
			{ command: "mm to 15", name: "15", color: c.r, ifcmd: "bh" },
			{ command: "mm to 16", name: "16", color: c.r, ifcmd: "bh" }
		],
		Окрестности: [
			{ command: "veracun", name: "Веракун (Окресности Велики)", color: c.y },
			{ command: "tp -8742 -4778 1040 7005", name: "Велика", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "alluman", name: "Аллума (Окрестности Аллемантеи)", color: c.y },
			{ command: "tp -21693 17682 2640 2", name: "Аллемантея", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "kaidera", name: "Кай Тера (Окрестности Кайатора)", color: c.y },
			{ command: "tp -3454 -12176 3090 3", name: "Кайатор", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "vardung", name: "Бардун (Остров Зари)", color: c.lp },
			{ command: "tp 73380 -72629 -1140 13", name: "Остров Зари", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "mm scan", name: "Поиск", color: c.g, ifcmd: "bh" }
		],
		"Вал-Орин": [
			{ command: "varrek1", name: "Варэку (Дикарский Предел)", color: c.lb },
			{ command: "tp -10132 -18499 350 7031", name: "Дикарский Предел", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "varrek2", name: "Варэку (Экс-Прима)", color: c.lb },
			{ command: "tp 26661 -11068 3780 7031", name: "Экс-Прима", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "varrek3", name: "Варэку (Долина Источников)", color: c.lb },
			{ command: "tp 7331 -14134 1430 7031", name: "Долина Источников", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "varrek4", name: "Варэку (Верхний Дозор)", color: c.lb },
			{ command: "tp 31220 708 5330 7031", name: "Верхний Дозор", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "varrek5", name: "Варэку (Аркс-умбра)", color: c.lb },
			{ command: "tp 31761 18105 8380 7031", name: "Аркс-умбра", color: c.gr, ifcmd: "tp" }
		],
		Аркадия: [
			{ command: "arcun1", name: "Аркун (Дивный лес / Деревня лесорубов)", color: c.y },
			{ command: "tp 93300 -7126 610 7001", name: "Деревня", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "arcun2", name: "Аркун (Леса Забвения / Кресцентия)", color: c.y },
			{ command: "tp 97173 19039 3330 7001", name: "Кресцентия", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "arcun3", name: "Аркун (Трясина Туванги)", color: c.y },
			{ command: "tp 70287 -10175 465 7001", name: "Трясина Туванги", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "arcun4", name: "Аркун (Долина титанов)", color: c.y },
			{ command: "tp 83624 8165 1321 7001", name: "Долина титанов", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "arcun5", name: "Аркун (Небесные холмы)", color: c.y },
			{ command: "tp 60934 2095 1810 7001", name: "Небесные холмы", color: c.gr, ifcmd: "tp" }
		],
		"Вал-Аурэум": [
			{ command: "viady1", name: "Виадун (Исполинские развалины)", color: c.lg },
			{ command: "tp -43544 -47198 2270 7003", name: "Исполинские развалины", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "viady2", name: "Виадун (Вольноземье)", color: c.lg },
			{ command: "tp -24669 -25945 185 7003", name: "Вольноземье", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "viady3", name: "Виадун (Утес Василисков / Чебика)", color: c.lg },
			{ command: "tp -33576 -21590 350 7003", name: "Чебика", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "viady4", name: "Виадун (Аурумская дорога / Тулуфан)", color: c.lg },
			{ command: "tp -54640 -38050 2505 7003", name: "Тулуфан", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "mm scan", name: "Поиск", color: c.g, ifcmd: "bh" }
		],
		Остгарат: [
			{ command: "eteral1", name: "Иторо (Фирмаунт)", color: c.o },
			{ command: "tp 102067 66786 3430 7004", name: "Фирмаунт", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "eteral2", name: "Иторо (Долина Вознесения / Кастаника)", color: c.o },
			{ command: "tp 87578 73410 1485 7004", name: "Кастаника", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "eteral3", name: "Иторо (Остров Серпентис)", color: c.o },
			{ command: "tp 100878 92644 650 7004", name: "Остров Серпентис", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "eteral4", name: "Иторо (Изрезанный берег / Гавань Головорезов)", color: c.o },
			{ command: "tp 51014 69195 510 7004", name: "Гавань", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "eteral5", name: "Иторо (Остров Мистмур)", color: c.o },
			{ command: "tp 39938 90901 980 7004", name: "Остров Мистмур", color: c.gr, ifcmd: "tp" }
		],
		Попория: [
			{ command: "foretta1", name: "Форета (Утесы Безумия)", color: c.p },
			{ command: "tp -5940 48094 3320 7002", name: "Утесы Безумия", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "foretta2", name: "Форета (Долина Клыка)", color: c.p },
			{ command: "tp -8992 72137 4030 7002", name: "Долина Клыка", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "foretta3", name: "Форета (Ущелье Параанон / Пополион)", color: c.p },
			{ command: "tp -17284 49913 3000 7002", name: "Пополион", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "foretta4", name: "Форета (Озеро слез / Пора-Элину)", color: c.p },
			{ command: "tp -35576 34586 2085 7002", name: "Пора-Элину", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "mm scan", name: "Поиск", color: c.g, ifcmd: "bh" }
		],
		Эссения: [
			{ command: "ezart1", name: "Эсат (Блаженное озеро / Тралион)", color: c.r },
			{ command: "tp 56944 -37706 3670 7011", name: "Тралион", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "ezart2", name: "Эсат (Эссенийский хребет)", color: c.r },
			{ command: "tp 63263 -10263 1260 7011", name: "Эссенийский хребет", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "ezart3", name: "Эсат (Гибельный лес)", color: c.r },
			{ command: "tp 38138 -12300 5450 7011", name: "Гибельный лес", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "ezart4", name: "Эсат (Извечный лес 1)", color: c.r },
			{ command: "tp 56918 4416 5110 7011", name: "Извечный лес 1", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "ezart5", name: "Эсат (Извечный лес 2)", color: c.r },
			{ command: "tp 55093 23581 4240 7011", name: "Извечный лес 2", color: c.gr, ifcmd: "tp" }
		],
		Вестония: [
			{ command: "storan1", name: "Сторан (Предел Бурь)", color: c.g },
			{ command: "tp 1437 -74862 2830 7012", name: "Предел Бурь", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "storan2", name: "Сторан (Гора Тираннас / Акарум)", color: c.g },
			{ command: "tp -9706 -70539 2680 7012", name: "Акарум", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "storan3", name: "Сторан (Морозный предел / Блеклый камень)", color: c.g },
			{ command: "tp -42296 -73909 1325 7012", name: "Блеклый камень", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "mm scan", name: "Поиск", color: c.g, ifcmd: "bh" }
		],
		"Район Веритас": [
			{ command: "versa1", name: "Вэлса (Убежище Балдера / Бастион)", color: c.o },
			{ command: "tp -13977 54040 630 7015", name: "Бастион", color: c.gr, ifcmd: "tp" }
		],
		"Вал-Элениум": [
			{ command: "viace1", name: "Виас (Вирмовое ущелье / Эления)", color: c.lp },
			{ command: "tp -56030 -11072 2370 7014", name: "Эления", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "viace2", name: "Виас (Тор-Эксул)", color: c.lp },
			{ command: "tp -41926 -2939 2400 7014", name: "Тор-Эксул", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "viace3", name: "Виас (Каньон Сиенна)", color: c.lp },
			{ command: "tp -77668 -16692 1480 7014", name: "Каньон Сиенна", color: c.gr, ifcmd: "tp" }
		],
		"Вал-Палрада": [
			{ command: "vaneva1", name: "Ваннева (Зона карантина / Фронтера)", color: c.lg },
			{ command: "tp -42062 57749 240 7013", name: "Фронтера", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "vaneva2", name: "Ваннева (Свирепая долина)", color: c.lg },
			{ command: "tp -17809 63508 1340 7013", name: "Свирепая долина", color: c.gr, ifcmd: "tp" }
		],
		"Сильванот/Лоркада": [
			{ command: "loacun1", name: "Лоакун (Долина пиков)", color: c.lv },
			{ command: "tp 4596 54020 7790 7022", name: "Долина пиков", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "loacun2", name: "Лоакун (Долина Проклятых / Хабере)", color: c.lv },
			{ command: "tp -7246 61039 6000 7022", name: "Хабере", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "silvette1", name: "Силвета (Силивуд / Скитера-Фэй)", color: c.lv },
			{ command: "tp -57023 -25919 2275 7022", name: "Скитера-Фэй", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "silvette2", name: "Силвета (Дрожащий лес / Дрэгонфолл)", color: c.lv },
			{ command: "tp -39506 9091 4640 7022", name: "Дрэгонфолл", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "silvette3", name: "Силвета (Шепчущие леса)", color: c.lv },
			{ command: "tp -44714 17905 3475 7022", name: "Шепчущие леса", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "silvette4", name: "Силвета (Амена-Кватла)", color: c.lv },
			{ command: "tp -48959 34011 3800 7022", name: "Амена-Кватла", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "mm scan", name: "Поиск", color: c.g, ifcmd: "bh" }
		],
		"Вал-Тиркай": [
			{ command: "lotica1", name: "Лотика (Питомник аргонов / Аванпост следопытов)", color: c.br },
			{},
			{ command: "tp 14163 -26601 -40 7023", name: "Аванпост следопытов", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "lotica2", name: "Лотика (Лес Тиркай)", color: c.br },
			{ command: "tp -11884 -33949 -1075 7023", name: "Лес Тиркай", color: c.gr, ifcmd: "tp" }
		],
		"Район Хелкан": [
			{ command: "hecurn", name: "Хелкун (Хановарские предместья / Зульфикарская крепость)", color: c.bl },
			{},
			{ command: "tp 33463 -6656 1190 8001", name: "Зульфикарская крепость", color: c.gr, ifcmd: "tp" }
		],
		"Вал-Кэли": [
			{ command: "locarnum1", name: "Тезлуар (Аргония / Канстрия)", color: c.o },
			{ command: "tp 48464 17410 2975 8001", name: "Канстрия", color: c.gr, ifcmd: "tp" },
			{},
			{ command: "locarnum2", name: "Тезлуар (Гранаркус)", color: c.o },
			{ command: "tp 46315 49017 5060 8001", name: "Гранаркус", color: c.gr, ifcmd: "tp" }
		]
	},
	Loger: {
		Mods: [
			{ command: "m inviss", name: "Банка On/Off", color: c.lb },
			{ command: "m invis", name: "Высота", color: c.v },
			{ command: "m invi 90", name: "90", color: c.y },
			{ command: "m invi 150", name: "150", color: c.y },
			{ command: "m invi 250", name: "250", color: c.y },
			{ command: "m invi 350", name: "350", color: c.y },
			{ command: "m invi 400", name: "400", color: c.y },
			{ ifcmd: "logs" },
			{ command: "proxy reload packetslogger", name: "Logger reload", color: c.p, ifcmd: "logs" },
			{ ifcmd: "logs" },
			{ command: "logc", name: "LOG C", color: c.bl, ifcmd: "logc" },
			{ command: "logs", name: "LOG S", color: c.o, ifcmd: "logs" },
			{ ifcmd: "logc" },
			{ command: "m $Loger", name: "$$$$$$$$", color: c.r, ifcmd: "log", keybind: "ctrl+shift+n" }
		],
		Teleport: [
			{ command: "tp zone", name: "Телепорт", color: c.b, ifcmd: "tp" },
			{ command: "tp to", name: "Зона", color: c.r, ifcmd: "tp" },
			{ command: "just to", name: "Телепорт в локации", color: c.r },
			{ ifcmd: "tp" },
			{ command: "just blink 100", name: "Блинк вперед" },
			{ command: "just up 250", name: "Блинк вверх" },
			{ command: "just down 250", name: "Блинк вниз" }
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
		],
		"HP operation": [
			{ command: "m sla 1", name: "1%", color: c.r },
			{ command: "m sla 10", name: "10%", color: c.r },
			{ command: "m sla 20", name: "20%", color: c.o },
			{ command: "m sla 30", name: "30%", color: c.o },
			{ command: "m sla 40", name: "40%", color: c.y },
			{ command: "m sla 50", name: "50%", color: c.y },
			{ command: "m sla 60", name: "60%", color: c.lb },
			{ command: "m sla 70", name: "70%", color: c.lb },
			{ command: "m sla 80", name: "80%", color: c.lg },
			{ command: "m sla 90", name: "90%", color: c.g },
			{},
			{ command: "m sla -1", name: "Убить себя", color: c.r }
		]
	},
	setting: {
		Настройки: [
			{ command: "m premium", name: "Доп. кнопки VIP панели", color: c.y },
			{},
			{ command: "m scene", name: "Пропуск видео заставок", color: c.lp },
			{},
			{ command: "m drunk", name: "Отключение пьяного экрана", color: c.lg },
			{},
			{ command: "m build", name: "Скрытие Ёлок. Таблиц. Календаря", color: c.g },
			{},
			{ command: "m fix", name: "JustSpam F", color: c.lv },
			{},
			{ command: "m autoaccept", name: "Автопринятие пати", color: c.lg },
			{},
			{ command: "m tolobby", name: "Отключение таймера при выходе на выбор персонажей", color: c.y },
			{},
			{ command: "m ggreset", name: "Автосброс Поляны древней", color: c.lp },
			{},
			{ command: "m backwalk", name: "Ходить спиной вперёд (видят только другие)", color: c.y },
			{},
			{ command: "m dielols", name: "Писать после смерти ахинею", color: c.r },
			{ ifcmd: "fast" },
			{ ifcmd: "fast" },
			{ command: "fast", name: "Fast On/off", color: c.v, ifcmd: "fast" },
			{ command: "fast ui", name: "Fast ui", color: c.lv, ifcmd: "fast" },
			{ command: "fast reload", name: "Fast reload config", color: c.g, ifcmd: "fast" },
			{ class: "priest", ifcmd: "fast" },
			{ command: "m dbe", name: "Автосброс КД эвейда Прист", color: c.p, class: "priest", ifcmd: "fast" }
		]
	},
	autogather: {
		Команды: [
			{ command: "autogather", name: "Запустить | Остановить  Автосбор", color: c.p, ifcmd: "autogather" },
			{ command: "autogather channel", name: "Смена канала при сборе", color: c.lb }
		],
		Растения: [
			{ command: "autogather setid 1", name: "Густой кустарник   |   Harmony Grass", color: c.g },
			{},
			{ command: "autogather setid 2", name: "Дикая кукуруза   |   Wild Cobseed", color: c.g },
			{},
			{ command: "autogather setid 3", name: "Дикая морковка   |   Veridia Root", color: c.g },
			{},
			{ command: "autogather setid 4", name: "Кадмильский гриб   |   Mushroom Cap", color: c.g },
			{},
			{ command: "autogather setid 5", name: "Лунная тыква   |   Moongourd", color: c.g },
			{},
			{ command: "autogather setid 6", name: "Яблоня   |   Apple", color: c.g }
		],
		Руда: [
			{ command: "autogather setid 101", name: "Валун   |   Plain Stone", color: c.o },
			{},
			{ command: "autogather setid 102", name: "Кобаловая руда   |   Cobala Ore", color: c.o },
			{},
			{ command: "autogather setid 103", name: "Шадметаллический камень   |   Shadmetal Ore", color: c.o },
			{},
			{ command: "autogather setid 104", name: "Зерметаллическая руда   |   Xermetal Ore", color: c.o },
			{},
			{ command: "autogather setid 105", name: "Норметаллическая руда   |   Normetal Ore", color: c.o },
			{},
			{ command: "autogather setid 106", name: "Галенит   |   Galborne Ore", color: c.o },
			{},
			{ command: "autogather setid 301", name: "Руда Дураниума   |   Duranium Ore", color: c.o },
			{},
			{ command: "autogather setid 814", name: "Руда Эксодора   |   Exodor Ore", color: c.lv }
		],
		Эссенция: [
			{ command: "autogather setid 201", name: "Бесцветный кристалл   |   Achoromic Essence", color: c.lb },
			{},
			{ command: "autogather setid 202", name: "Красный кристалл   |   Crimson Essence", color: c.lb },
			{},
			{ command: "autogather setid 203", name: "Зеленый кристалл   |   Earth Essence", color: c.lb },
			{},
			{ command: "autogather setid 204", name: "Голубой кристалл   |   Azure Essence", color: c.lb },
			{},
			{ command: "autogather setid 205", name: "Белый кристалл   |   Opal Essence", color: c.lb },
			{},
			{ command: "autogather setid 206", name: "Зараженный цветок   |   Obsidian Essence", color: c.lb },
			{},
			{ command: "autogather setid 601", name: "Кристал Дураниума   |   Duranium Essence", color: c.lb }
		]
	}
};
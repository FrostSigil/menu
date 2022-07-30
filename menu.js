/* eslint-disable quote-props,  comma-dangle */
"use strict";

// Цвета
const c = {
	"w": "#ffffff", // белый
	"br": "#bc8f8f", // коричневый
	"o": "#ffc6d00", // оранжевый
	"p": "#ed5d92", // розовый
	"lp": "#ffb7c5", // светло-розовый
	"r": "#ff0606", // красный
	"g": "#f04ff1c", // зеленый
	"lg": "#f4ee35d", // светло-зеленый
	"v": "#f8f127e", // фиолетовый
	"lv": "#f9f00d4", // светло-фиолетовый
	"b": "#f004eff", // синий
	"lb": "#08b3e5", // светло-синий
	"gr": "#778899", // серый
	"y": "#fdff00", // желтый
};

// Дочступные ключи записи:
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
	// { command: "bank", id: 60264 },
	// { command: "broker", id: 60265 },
	// { command: "store", id: 60262 },
];

// Настройка меню
module.exports.categories = {
	"Торговцы": [
		{ command: "bank", name: "Банк", color: c.lp },
		{ command: "pbank", name: "Перс. хранилище", color: c.lp },
		{ command: "cbank", name: "Костюмы", color: c.lp },
		{ command: "gbank", name: "Банк гильдии", color: c.lp },
		{ command: "ab", name: "Авто Банк", color: c.p, ifcmd: "ab" },
		{},
		{ command: "broker", name: "Брокер", color: c.lb },
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
	],
	"Основное": [
		{ command: "tp zone", name: "Телепорт", color: c.b, ifcmd: "tp" },
		{ command: "tp to", name: "Зона", color: c.r, ifcmd: "tp" },
		{ command: "m $Dang", name: "Данж", color: c.y, ifnocmd: "dg" },
		{ command: "dg", name: "Данж", color: c.y, ifcmd: "dg" },
		{ command: "box", name: "OpenBox", color: c.v, ifcmd: "box" },
		{ command: "m $Merchant", name: "Merchant", color: c.o },
		{ifcmd: "tp"},
	//	{ command: "tp back", name: "Отмена тп", color: c.o, ifcmd: "tp" },
		{ command: "tp blink 100", name: "Блинк вперед", ifcmd: "tp" },
		{ command: "tp up 500", name: "Блинк вверх", ifcmd: "tp" },
		{ command: "tp down 250", name: "Блинк вниз", ifcmd: "tp" },
		{ command: "tp drop -1", name: "Убить себя", color: c.r, ifcmd: "tp" },
		{ifcmd: "tp"},
		{ command: "translate send", name: "Автоперевод", color: c.lb, ifcmd: "translate" },
		{ command: "food", name: "АвтоЕда", color: c.p, ifcmd: "food" },
		{ command: "loot auto", name: "Автолут", color: c.lp, ifcmd: "loot" },
		{ command: "cc", name: "Антиоткид", color: c.lp, ifcmd: "cc" },
		{ command: "ar", name: "Антиопрокид", color: c.lp, ifcmd: "ar" },
		{ifcmd: "bh"},
		{ command: "mm", name: "Торговцы", color: c.y, ifcmd: "bh" },
		{ command: "mm scan", name: "Поиск", color: c.o, ifcmd: "bh" },
		{ command: "mm stop", name: "Стоп", color: c.r, ifcmd: "bh" },
		{ command: "mm loc", name: "Позиции", color: c.b, ifcmd: "bh" },
		{ command: "bh move", name: "Телепорт к npc", color: c.lg, ifcmd: "tr" },
	    {ifcmd: "bh"},
		{ command: "wb", name: "Мир Бамы", color: c.lb, ifcmd: "bh" },
		{ command: "wb scan", name: "Поиск", color: c.o, ifcmd: "bh" },
		{ command: "wb stop", name: "Стоп", color: c.r, ifcmd: "bh" },
		{ command: "wb loc", name: "Позиции", color: c.b, ifcmd: "bh" },
		],
	"Mod": [
        { command: "valkyrie", name: "Fast-Valk", color: c.o, ifcmd: "valkyrie", class: "glaiver" },
		{ command: "sorc ui", name: "Сорк", color: c.lb, ifcmd: "sorc", class: "sorcerer" },
		{ command: "sorc automb", name: "Усилок", color: c.o, ifcmd: "sorc", class: "sorcerer" },
		{ command: "sorc autoimp", name: "Колапс", color: c.o, ifcmd: "sorc", class: "sorcerer" },
		{ command: "sorc usebrooch", name: "Брошь", color: c.o, ifcmd: "sorc", class: "sorcerer" },
		{ ifcmd: "sorc" },
		{ command: "u ui", name: "Unicast", color: c.p, ifcmd: "u" },
		{ifcmd: "sp", ifcmd: "fps"},
		{ command: "fps", name: "FPS Menu", color: c.y, ifcmd: "fps" },
	],
	"Разное": [
		{ command: "m drop", name: "Покинуть групу", color: c.y },
		{ command: "m reset", name: "Сброс", color: c.g },
		{ command: "m lobby", name: "Выбор Персонажей", color: c.p },
		{ command: "m exit", name: "Fast Exit Game", color: c.r },
		{},		
		{ command: "m et 98311 9069", name: "Верхний Дозор", color: c.o,},	
		{ command: "invg", name: "Автоприем в ги", color: c.lg, ifcmd: "invg" },
		{ command: "lfg", name: "Автоприем в лфг", color: c.lg, ifcmd: "lfg" },
		
	],	
	"Гайд (tera-guide)": [
		{ command: "guide", name: "Вкл/Выкл", color: c.o },
		{ command: "guide ui", name: "Настройка", ifcmd: "guide" },
		{ command: "guide voice", name: "Голос", color: c.y, ifcmd: "guide" },
		{ command: "guide spawnObject", name: "Объекты", color: c.y, ifcmd: "guide" },
		{ command: "guide stream", name: "Стрим", color: c.lb, ifcmd: "guide" },
		{ command: "guide debug ui", name: "Отладка", color: c.b, ifcmd: "guide" },
	],
};
module.exports.pages = {
    "Dang": {		
		"Телепорт к Данжам": [
		{ command: "m et 1106 9027", name: "Обитель Манайи (Manaya's Core)", color: c.r },
		{},
		{ command: "m et 2162 9044", name: "Святилище Бахаара (Bahaar's Sanctum)", color: c.r },
		{},
		{ command: "m et 2169 3026", name: "Логово Келсаика (Corrupted Skynest)", color: c.bl },
		{},
		{ command: "m et 2149 9716", name: "Небесный крейсер (Sky Cruiser )", color: c.lb },
		{},
		{ command: "m et 2171 3027", name: "Арена Безумия (Forbidden Arena)", color: c.v },
		{},
		{ command: "m et 2181 9757", name: "Акероново пекло (Akeron's Inferno)", color: c.lv },	
		{},
		{ command: "m et 2167 3201", name: "Гнездо Паркин (Gossamer Vault)", color: c.lg },
		{},
		{ command: "m et 2103 9754", name: "Глубинный Храм (Bathysmal Rise)", color: c.lb },
		{},
		{ command: "m et 2137 9770", name: "Руины Абнукты (Ruinous Manor)", color: c.o },
		{},
		{ command: "m et 2133 9769", name: "Замок Лилит (Lilith's Keep)", color: c.y },
		{},
		{ command: "m et 2150 9055", name: "Алчное Ущелье (Ravenous Gorge)", color: c.y },
		{},
		{ command: "m et 2139 9710", name: "Разрушеный Алтарь Лакана (Broken Prison)", color: c.lg },
		{},
		{ command: "m et 2101 9809", name: "Мясницкие Катакомбы (Macellarius Catacombs)", color: c.g },
	]
},
 "Merchant": {
	"Окрестности": [		
		{ command: "veracun", name: "Веракун (Окресности Велики)", color: c.y },
		{},
		{ command: "alluman", name: "Аллума (Окрестности Аллемантеи)", color: c.y },
		{},
		{ command: "kaidera", name: "Кай Тера (Окрестности Кайатора)", color: c.y },
		{},
		{ command: "vardung", name: "Бардун (Остров Зари)", color: c.lp },
	],	
	"Вал-Орин": [		
		{ command: "varrek1", name: "Варэку (Дикарский Предел)", color: c.lb },
		{},
		{ command: "varrek2", name: "Варэку (Экс-Прима)", color: c.lb },
		{},
		{ command: "varrek3", name: "Варэку (Долина Источников)", color: c.lb },
		{},
		{ command: "varrek4", name: "Варэку (Верхний Дозор)", color: c.lb },
		{},
		{ command: "varrek5", name: "Варэку (Аркс-умбра)", color: c.lb },
	],	
	"Аркадия": [
		{ command: "arcun1", name: "Аркун (Дивный лес / Деревня лесорубов)", color: c.y },
		{},
		{ command: "arcun2", name: "Аркун (Леса Забвения / Кресцентия)", color: c.y },
		{},
		{ command: "arcun3", name: "Аркун (Трясина Туванги)", color: c.y },
		{},
		{ command: "arcun4", name: "Аркун (Долина титанов)", color: c.y },
		{},
		{ command: "arcun5", name: "Аркун (Небесные холмы)", color: c.y },
	],	
	"Вал-Аурэум": [
		{ command: "viady1", name: "Виадун (Исполинские развалины)", color: c.lg },
		{},
		{ command: "viady2", name: "Виадун (Вольноземье)", color: c.lg },
		{},
		{ command: "viady3", name: "Виадун (Утес Василисков / Чебика)", color: c.lg },
		{},
		{ command: "viady4", name: "Виадун (Аурумская дорога / Тулуфан)", color: c.lg },
	],	
	"Остгарат": [		
		{ command: "eteral1", name: "Иторо (Фирмаунт)", color: c.o },
		{},		
		{ command: "eteral2", name: "Иторо (Долина Вознесения / Кастаника)", color: c.o },
		{},		
		{ command: "eteral3", name: "Иторо (Остров Серпентис)", color: c.o },
		{},		
		{ command: "eteral4", name: "Иторо (Изрезанный берег / Гавань Головорезов)", color: c.o },
		{},		
		{ command: "eteral5", name: "Иторо (Остров Мистмур)", color: c.o },
	],	
	"Попория": [		
		{ command: "foretta1", name: "Форета (Утесы Безумия)", color: c.p },
		{},
		{ command: "foretta2", name: "Форета (Долина Клыка)", color: c.p },
		{},
		{ command: "foretta3", name: "Форета (Ущелье Параанон / Пополион)", color: c.p },
		{},
		{ command: "foretta4", name: "Форета (Озеро слез / Пора-Элину)", color: c.p },
	],
	"Эссения": [		
		{ command: "ezart1", name: "Эсат (Блаженное озеро / Тралион)", color: c.r },
		{},		
		{ command: "ezart2", name: "Эсат (Эссенийский хребет)", color: c.r },
		{},		
		{ command: "ezart3", name: "Эсат (Гибельный лес)", color: c.r },
		{},		
		{ command: "ezart4", name: "Эсат (Извечный лес)", color: c.r },
		{},		
		{ command: "ezart5", name: "Эсат (Извечный лес 2)", color: c.r },
	],
	"Вестония": [		
		{ command: "storan1", name: "Сторан (Предел Бурь)", color: c.g },
		{},
		{ command: "storan2", name: "Сторан (Гора Тираннас / Акарум)", color: c.g },
		{},
		{ command: "storan3", name: "Сторан (Морозный предел / Блеклый камень)", color: c.g },
	],
	"Район Веритас": [		
		{ command: "versa1", name: "Вэлса (Убежище Балдера / Бастион)", color: c.o },
	],
	"Вал-Элениум": [		
		{ command: "viace1", name: "Виас (Вирмовое ущелье / Эления)", color: c.lp },
		{},		
		{ command: "viace2", name: "Виас (Тор-Эксул)", color: c.lp },
		{},		
		{ command: "viace3", name: "Виас (Каньон Сиенна)", color: c.lp },
	],
	"Вал-Палрада": [		
		{ command: "vaneva1", name: "Ваннева (Зона карантина / Фронтера)", color: c.lg },
		{},
		{ command: "vaneva2", name: "Ваннева (Свирепая долина)", color: c.lg },
	],
	"Сильванот/Лоркада": [
		{ command: "loacun1", name: "Лоакун (Долина пиков)", color: c.lv },
		{},
		{ command: "loacun2", name: "Лоакун (Долина Проклятых / Хабере)", color: c.lv },	
		{},	
		{ command: "silvette1", name: "Силвета (Силивуд / Скитера-Фэй)", color: c.lv },
		{},
		{ command: "silvette2", name: "Силвета (Дрожащий лес / Дрэгонфолл)", color: c.lv },
		{},
		{ command: "silvette3", name: "Силвета (Шепчущие леса)", color: c.lv },
		{},
		{ command: "silvette4", name: "Силвета (Амена-Кватла)", color: c.lv },
	],
	"Вал-Тиркай": [		
		{ command: "lotica1", name: "Лотика (Питомник аргонов / Аванпост следопытов)", color: c.br },
		{},
		{ command: "lotica2", name: "Лотика (Лес Тиркай)", color: c.br },
	],
	"Район Хелкан": [		
		{ command: "hecurn", name: "Хелкун (Хановарские предместья / Зульфикарская крепость)", color: c.bl },
	],
	"Вал-Кэли": [		
		{ command: "locarnum1", name: "Тезлуар (Аргония / Канстрия)", color: c.o },
		{},
		{ command: "locarnum2", name: "Тезлуар (Гранаркус)", color: c.o },
	],
 }
};
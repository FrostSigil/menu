/* eslint-disable no-param-reassign */
"use strict";

const DefaultSettings = {

	hotkey: "Ctrl+Shift+M",
	premiumSlotEnabled: true,
	spawnBuild: false,
	blockscene: false,
	autoaccept: false,
	autoreset: false,
	lobby: false,
	drunk: false,
	brooch: false,
	fix: false,
	backstep: false,
	ggreset: false,
	backwalk: false,
	circlewalk: false,
	circle: 1.57,
	openbox: false,
	boxdelay: 110,
	aeromanual: false,
	aero: "normal",
	npc: {
		// For bank NPC.
		// The "type" is a "type" from S_REQUEST_CONTRACT packet.
		// The "value" is a "container" from S_VIEW_WARE_EX packet.
		bank: {
			type: 26,
			value: 1
		},
		gbank: {
			type: 26,
			value: 3
		},
		pbank: {
			type: 26,
			value: 9
		},
		cbank: {
			type: 26,
			value: 12
		},
		// For other NPCs.
		// You can use "npcsummoner" command to enable debug for get values.
		bstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 210000, huntingZoneId: 183, _value: 1007 }
			]
		},
		dstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 200000, huntingZoneId: 183, _value: 1006 }
			]
		},
		store: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 135, huntingZoneId: 599, _value: 59901 },
				{ templateId: 158, huntingZoneId: 599, _value: 59901 },
				{ templateId: 1001, huntingZoneId: 63, _value: 16063 },
				{ templateId: 1001, huntingZoneId: 72, _value: 16072 },
				{ templateId: 1002, huntingZoneId: 81, _value: 16081 },
				{ templateId: 1015, huntingZoneId: 3051, _value: 2851665 },
				{ templateId: 1020, huntingZoneId: 72, _value: 16072 },
				{ templateId: 1037, huntingZoneId: 3051, _value: 2851665 },
				{ templateId: 1049, huntingZoneId: 84, _value: 16084 },
				{ templateId: 1055, huntingZoneId: 84, _value: 16084 },
				{ templateId: 1062, huntingZoneId: 84, _value: 16084 },
				{ templateId: 1101, huntingZoneId: 63, _value: 16063 },
				{ templateId: 1103, huntingZoneId: 63, _value: 16063 },
				{ templateId: 1222, huntingZoneId: 3051, _value: 2851665 },
				{ templateId: 1303, huntingZoneId: 3051, _value: 2851665 },
				{ templateId: 1408, huntingZoneId: 3051, _value: 16094 },
				{ templateId: 2001, huntingZoneId: 183, _value: 70310 },
				{ templateId: 2018, huntingZoneId: 183, _value: 70310 },
				{ templateId: 2019, huntingZoneId: 183, _value: 70310 },
				{ templateId: 2022, huntingZoneId: 58, _value: 58001 },
				{ templateId: 2023, huntingZoneId: 58, _value: 58001 },
				{ templateId: 5001, huntingZoneId: 13, _value: 16091 },
				{ templateId: 5101, huntingZoneId: 13, _value: 16092 },
				{ templateId: 5201, huntingZoneId: 13, _value: 16092 },
				{ templateId: 5301, huntingZoneId: 13, _value: 16092 }
			]
		},
		sstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1001, huntingZoneId: 381, _value: 250 },
				{ templateId: 1385, huntingZoneId: 3051, _value: 58002 },
				{ templateId: 1600, huntingZoneId: 63, _value: 250 },
				{ templateId: 1600, huntingZoneId: 72, _value: 250 },
				{ templateId: 1600, huntingZoneId: 84, _value: 250 },
				{ templateId: 1601, huntingZoneId: 63, _value: 250 },
				{ templateId: 1601, huntingZoneId: 72, _value: 250 },
				{ templateId: 1601, huntingZoneId: 84, _value: 250 },
				{ templateId: 2050, huntingZoneId: 183, _value: 2109 },
				{ templateId: 2010, huntingZoneId: 58, _value: 58002 },
				{ templateId: 2014, huntingZoneId: 183, _value: 250 },
				{ templateId: 2110, huntingZoneId: 183, _value: 250 },
				{ templateId: 5004, huntingZoneId: 13, _value: 250 }
			]
		},
		bel: {
			type: 50,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1414, huntingZoneId: 3051, _value: 141 },
				{ templateId: 2045, huntingZoneId: 183, _value: 141 },
				{ templateId: 2036, huntingZoneId: 58, _value: 141 }
			]
		},
		vng: {
			type: 49,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1382, huntingZoneId: 3051, _value: 609 },
				{ templateId: 2056, huntingZoneId: 183, _value: 609 },
				{ templateId: 2058, huntingZoneId: 183, _value: 609 },
				{ templateId: 2009, huntingZoneId: 58, _value: 609 },
				{ templateId: 5006, huntingZoneId: 13, _value: 609 }
			]
		},
		vgc: {
			type: 49,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1393, huntingZoneId: 3051, _value: 6090 },
				{ templateId: 2057, huntingZoneId: 183, _value: 6090 },
				{ templateId: 2059, huntingZoneId: 183, _value: 6090 },
				{ templateId: 2094, huntingZoneId: 58, _value: 6090 },
				{ templateId: 5005, huntingZoneId: 13, _value: 6090 }
			]
		},
		guard: {
			type: 49,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1400, huntingZoneId: 3051, _value: 6112 },
				{ templateId: 2292, huntingZoneId: 58, _value: 6112 },
				{ templateId: 6112, huntingZoneId: 63, _value: 6112 }
			]
		},
		ssstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1097, huntingZoneId: 84, _value: 111 },
				{ templateId: 1098, huntingZoneId: 84, _value: 111 },
				{ templateId: 1144, huntingZoneId: 3051, _value: 111 },
				{ templateId: 1183, huntingZoneId: 72, _value: 111 },
				{ templateId: 2005, huntingZoneId: 183, _value: 111 },
				{ templateId: 2015, huntingZoneId: 58, _value: 111 },
				{ templateId: 2066, huntingZoneId: 183, _value: 111 },
				{ templateId: 2069, huntingZoneId: 183, _value: 111 },
				{ templateId: 30002, huntingZoneId: 63, _value: 111 },
				{ templateId: 30003, huntingZoneId: 63, _value: 111 }
			]
		},
		fstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1003, huntingZoneId: 2010, _value: 16096 },
				{ templateId: 1269, huntingZoneId: 63, _value: 16094 },
				{ templateId: 2003, huntingZoneId: 2011, _value: 16096 },
				{ templateId: 2063, huntingZoneId: 183, _value: 16094 },
				{ templateId: 2006, huntingZoneId: 58, _value: 16094 },
				{ templateId: 3003, huntingZoneId: 2012, _value: 16096 },
				{ templateId: 4003, huntingZoneId: 2013, _value: 16096 },
				{ templateId: 5003, huntingZoneId: 2014, _value: 16096 },
				{ templateId: 6003, huntingZoneId: 2015, _value: 16096 },
				{ templateId: 9903, huntingZoneId: 207, _value: 16094 }
			]
		},
		ffstore: {
			type: 20,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1267, huntingZoneId: 63, _value: 16095 },
				{ templateId: 2008, huntingZoneId: 58, _value: 16095 },
				{ templateId: 2061, huntingZoneId: 183, _value: 16095 },
				{ templateId: 9904, huntingZoneId: 207, _value: 16095 }
			]
		},
		vstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2013, huntingZoneId: 183, _value: 600 },
				{ templateId: 1146, huntingZoneId: 63, _value: 600 }
			]
		},
		acraft: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1155, huntingZoneId: 72, _value: 193 },
				{ templateId: 1198, huntingZoneId: 84, _value: 193 },
				{ templateId: 1215, huntingZoneId: 63, _value: 193 },
				{ templateId: 1254, huntingZoneId: 63, _value: 193 },
				{ templateId: 1403, huntingZoneId: 3051, _value: 193 },
				{ templateId: 1600, huntingZoneId: 81, _value: 193 },
				{ templateId: 2013, huntingZoneId: 183, _value: 193 },
				{ templateId: 2026, huntingZoneId: 58, _value: 193 }
			]
		},
		scraft: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1102, huntingZoneId: 84, _value: 190 },
				{ templateId: 1103, huntingZoneId: 84, _value: 190 },
				{ templateId: 1137, huntingZoneId: 72, _value: 190 },
				{ templateId: 1191, huntingZoneId: 63, _value: 190 },
				{ templateId: 1195, huntingZoneId: 63, _value: 190 },
				{ templateId: 1404, huntingZoneId: 3051, _value: 190 },
				{ templateId: 2006, huntingZoneId: 183, _value: 190 },
				{ templateId: 2027, huntingZoneId: 58, _value: 190 }
			]
		},
		pcraft: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1105, huntingZoneId: 84, _value: 191 },
				{ templateId: 1126, huntingZoneId: 84, _value: 191 },
				{ templateId: 1151, huntingZoneId: 72, _value: 191 },
				{ templateId: 1200, huntingZoneId: 63, _value: 191 },
				{ templateId: 1203, huntingZoneId: 63, _value: 191 },
				{ templateId: 1402, huntingZoneId: 3051, _value: 191 },
				{ templateId: 2008, huntingZoneId: 183, _value: 191 },
				{ templateId: 2024, huntingZoneId: 58, _value: 191 }
			]
		},
		ecraft: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2011, huntingZoneId: 183, _value: 192 },
				{ templateId: 2025, huntingZoneId: 58, _value: 192 }
			]
		},
		jcraft: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1405, huntingZoneId: 3051, _value: 195 },
				{ templateId: 20090, huntingZoneId: 183, _value: 195 },
				{ templateId: 2037, huntingZoneId: 58, _value: 195 }
			]
		},
		muhrak: {
			type: 20,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 7002, huntingZoneId: 411, _value: 6115 }
			]
		},
		varraz: {
			type: 20,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1416, huntingZoneId: 3051, _value: 3038000 },
				{ templateId: 1000, huntingZoneId: 3038, _value: 3038000 }
			]
		},
		// --------------------------------------- Merchant -----------------------------------------//
		// Merchant Velika +
		veracun: {
			type: 20,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 12778, huntingZoneId: 63, _value: 10010 }
			]
		},
		// Merchant Allemantheia +
		alluman: {
			type: 20,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1278, huntingZoneId: 73, _value: 10020 }
			]
		},
		// Merchant Kaiator +
		kaidera: {
			type: 20,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 1278, huntingZoneId: 84, _value: 10030 }
			]
		},
		// Araxis Balderon
		araxis: {
			type: 20,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2093, huntingZoneId: 58, _value: 10040 }
			]
		}
	}

};

// Settings Migrator Extended v2.1
module.exports = function MigrateSettings(from_ver, to_ver, settings) {
	if (from_ver === undefined) return { ...DefaultSettings, ...settings };
	else if (from_ver === null) return DefaultSettings;
	else {
		from_ver = Number(from_ver);
		to_ver = Number(to_ver);

		if (from_ver + 1 < to_ver) {
			settings = MigrateSettings(from_ver, from_ver + 1, settings);
			return MigrateSettings(from_ver + 1, to_ver, settings);
		}

		const oldsettings = settings;
		settings = Object.assign(DefaultSettings, {});

		for (const option in oldsettings) {
			if (settings[option] !== undefined) {
				settings[option] = MigrateOption(settings[option], oldsettings[option], ["value", "gameId"]);
			}
		}

		return settings;
	}

	function MigrateOption(option, oldoption, excludes = []) {
		if (oldoption === undefined) {
			oldoption = option;
		}

		if (Array.isArray(option)) {
			for (const key of Object.keys(option)) {
				option[key] = MigrateOption(option[key], oldoption[key], excludes);
			}
		} else if (option !== null && Object.getPrototypeOf(option) === Object.prototype) {
			if (oldoption.templateId && oldoption.huntingZoneId) {
				const legacyOpt = {
					templateId: oldoption.templateId,
					huntingZoneId: oldoption.huntingZoneId,
					_value: oldoption.value || (option.opts && option.opts.length > 0 ? option.opts[0]._value : null)
				};
				option.opts = option.opts || [];
				if (!option.opts.some(opt => opt.templateId === legacyOpt.templateId && opt.huntingZoneId === legacyOpt.huntingZoneId)) {
					option.opts.push(legacyOpt);
				}
			} else if (oldoption.opts) {
				option.opts = option.opts || [];
				const uniqueOpts = new Map();
				option.opts.forEach(opt => {
					const key = `${opt.templateId}-${opt.huntingZoneId}`;
					uniqueOpts.set(key, opt);
				});
				oldoption.opts.forEach(opt => {
					const key = `${opt.templateId}-${opt.huntingZoneId}`;
					uniqueOpts.set(key, opt);
				});
				option.opts = Array.from(uniqueOpts.values());
			}

			for (const key of Object.keys(option)) {
				if (excludes.includes(key)) {
					option[key] = oldoption[key] || null;
				} else if (key !== "opts") {
					option[key] = MigrateOption(option[key], oldoption[key], excludes);
				}
			}
		} else {
			option = oldoption;
		}

		return option;
	}
};
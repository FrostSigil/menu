/* eslint-disable no-param-reassign */
"use strict";

const DefaultSettings = {

	hotkey: "Ctrl+Shift+M",
	premiumSlotEnabled: true,
	spawnBuild: false,
	blockscene: false,
	autoaccept: false,
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
				{ templateId: 2019, huntingZoneId: 183, _value: 70310 },
				{ templateId: 2022, huntingZoneId: 58, _value: 58001 },
				{ templateId: 1103, huntingZoneId: 63, _value: 16063 },
				{ templateId: 1101, huntingZoneId: 63, _value: 16063 }
			]
		},
		sstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2050, huntingZoneId: 183, _value: 2109 },
				{ templateId: 2010, huntingZoneId: 58, _value: 58002 }
			]
		},
		bel: {
			type: 50,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2045, huntingZoneId: 183, _value: 141 },
				{ templateId: 2036, huntingZoneId: 58, _value: 141 }
			]
		},
		vng: {
			type: 49,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2058, huntingZoneId: 183, _value: 609 },
				{ templateId: 2009, huntingZoneId: 58, _value: 609 }
			]
		},
		vgc: {
			type: 49,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2059, huntingZoneId: 183, _value: 6090 },
				{ templateId: 2094, huntingZoneId: 58, _value: 6090 }
			]
		},
		guard: {
			type: 49,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 6112, huntingZoneId: 63, _value: 6112 }
			]
		},
		ssstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2005, huntingZoneId: 183, _value: 111 },
				{ templateId: 2015, huntingZoneId: 58, _value: 111 },
				{ templateId: 30002, huntingZoneId: 63, _value: 111 },
				{ templateId: 30003, huntingZoneId: 63, _value: 111 }
			]
		},
		fstore: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2063, huntingZoneId: 183, _value: 16094 },
				{ templateId: 2006, huntingZoneId: 58, _value: 16094 }
			]
		},
		ffstore: {
			type: 20,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2061, huntingZoneId: 183, _value: 16095 },
				{ templateId: 2008, huntingZoneId: 58, _value: 16095 }
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
				{ templateId: 2013, huntingZoneId: 183, _value: 193 },
				{ templateId: 2026, huntingZoneId: 58, _value: 193 }
			]
		},
		scraft: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
				{ templateId: 2006, huntingZoneId: 183, _value: 190 },
				{ templateId: 2027, huntingZoneId: 58, _value: 190 }
			]
		},
		pcraft: {
			type: 9,
			value: null,
			gameId: null,
			opts: [
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
};

function MigrateOption(option, oldoption, excludes = []) {
	if (oldoption === undefined) {
		oldoption = option;
	}

	if (Array.isArray(option)) {
		for (const key of Object.keys(option)) {
			option[key] = MigrateOption(option[key], oldoption[key], excludes);
		}
	} else if (option !== null && Object.getPrototypeOf(option) === Object.prototype) {
		for (const key of Object.keys(option)) {
			if (excludes.includes(key)) {
				option[key] = oldoption[key] || null;
			} else {
				option[key] = MigrateOption(option[key], oldoption[key], excludes);
			}
		}
	} else {
		option = oldoption;
	}

	return option;
}
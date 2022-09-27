/* eslint-disable no-param-reassign */
"use strict";

const DefaultSettings = {

	"hotkey": "Ctrl+Shift+M",
	"npc": {
		// For bank NPC.
		// The "type" is a "type" from S_REQUEST_CONTRACT packet.
		// The "value" is a "container" from S_VIEW_WARE_EX packet.
		"bank": {
			"type": 26,
			"value": 1
		},
		"gbank": {
			"type": 26,
			"value": 3
		},
		"pbank": {
			"type": 26,
			"value": 9
		},
		"cbank": {
			"type": 26,
			"value": 12
		},
		// For other NPCs.
		// You can use "npcsummoner" command to enable debug for get values.
        "bstore": {
			"type": 9,
			"value": 1007,
			"gameId": null,
			"templateId": 210000,
			"huntingZoneId": 183
		},
		"dstore": {
			"type": 9,
			"value": 1006,
			"gameId": null,
			"templateId": 200000,
			"huntingZoneId": 183
		},
		"store": {
			"type": 9,
			"value": 70310,
			"gameId": null,
			"templateId": 2019,
			"huntingZoneId": 183
		},
		"sstore": {
			"type": 9,
			"value": 250,
			"gameId": null,
			"templateId": 2109,
			"huntingZoneId": 183
		},
		"bel": {
			"type": 50,
			"value": 141,
			"gameId": null,
			"templateId": 2045,
			"huntingZoneId": 183
		},
		"vng": {
			"type": 49,
			"value": 609,
			"gameId": null,
			"templateId": 2058,
			"huntingZoneId": 183
		},
		"vgc": {
			"type": 49,
			"value": 6090,
			"gameId": null,
			"templateId": 2059,
			"huntingZoneId": 183
		},
		"guard": {
			"type": 49,
			"value": 6112,
			"gameId": null,
			"templateId": 6112,
			"huntingZoneId": 63
		},
		"ssstore": {
			"type": 9,
			"value": 111,
			"gameId": null,
			"templateId": 2005,
			"huntingZoneId": 183
		},
		"fstore": {
			"type": 9,
			"value": 16094,
			"gameId": null,
			"templateId": 2063,
			"huntingZoneId": 183
		},
		"ffstore": {
			"type": 20,
			"value":16095,
			"gameId": null,
			"templateId": 2061,
			"huntingZoneId": 183
		},
		"vstore": {
			"type": 9,
			"value": 600,
			"gameId": null,
			"templateId": 1146,
			"huntingZoneId": 63
		},
		"acraft": {
			"type": 9,
			"value": 193,
			"gameId": null,
			"templateId": 2013,
			"huntingZoneId": 183
		},
		"scraft": {
			"type": 9,
			"value": 190,
			"gameId": null,
			"templateId": 2006,
			"huntingZoneId": 183
		},
		"pcraft": {
			"type": 9,
			"value": 191,
			"gameId": null,
			"templateId": 2008,
			"huntingZoneId": 183
		},
		"ecraft": {
			"type": 9,
			"value": 192,
			"gameId": null,
			"templateId": 2011,
			"huntingZoneId": 183
		},
		"muhrak": {
			"type": 20,
			"value": 6115,
			"gameId": null,
			"templateId": 7002,
			"huntingZoneId": 411
		},
		//--------------------------------------- Merchant -----------------------------------------//
		// Merchant Velika + 
		"veracun": {
			"type": 20,
			"value": 10010,
			"gameId": null,
			"templateId": 1278,
			"huntingZoneId": 63
		},
		// Merchant Allemantheia +
		"alluman": {
			"type": 20,
			"value": 10020,
			"gameId": null,
			"templateId": 1278,
			"huntingZoneId": 72
		},
		// Merchant Kaiator +
		"kaidera": {
			"type": 20,
			"value": 10030,
			"gameId": null,
			"templateId": 1278,
			"huntingZoneId": 84
		},
		// Merchant Island of Dawn +
		"vardung": {
			"type": 20,
			"value": 10050,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 13
		},
		// Merchant Val Oriyn +
		"varrek1": {
			"type": 20,
			"value": 10040,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 172
		},
		// Merchant Val Oriyn +
		"varrek2": {
			"type": 20,
			"value": 10040,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 181
		},
		// Merchant Val Oriyn +
		"varrek3": {
			"type": 20,
			"value": 10040,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 182
		},
		// Merchant Val Oriyn +
		"varrek4": {
			"type": 20,
			"value": 10040,
			"gameId": null,
			"templateId": 1278,
			"huntingZoneId": 183
		},
		// Merchant Val Oriyn +
		"varrek5": {
			"type": 20,
			"value": 10040,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 191
		},
		// Merchant Arcadia +
		"arcun1": {
			"type": 20,
			"value": 10011,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 2
		},
		// Merchant Arcadia +
		"arcun2": {
			"type": 20,
			"value": 10011,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 3
		},
		// Merchant Arcadia +
		"arcun3": {
			"type": 20,
			"value": 10011,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 5
		},
		// Merchant Arcadia +
		"arcun4": {
			"type": 20,
			"value": 10011,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 6
		},
		// Merchant Arcadia +
		"arcun5": {
			"type": 20,
			"value": 10011,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 7
		},
		// Merchant "Val Aureum +
		"viady1": {
			"type": 20,
			"value": 10012,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 18
		},
		// Merchant "Val Aureum +
		"viady2": {
			"type": 20,
			"value": 10012,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 19
		},
		// Merchant "Val Aureum +
		"viady3": {
			"type": 20,
			"value": 10012,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 21
		},
		// Merchant "Val Aureum +
		"viady4": {
			"type": 20,
			"value": 10012,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 24
		},
		// Merchant Ostgarath +
		"eteral1": {
			"type": 20,
			"value": 10013,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 4
		},
		// Merchant Ostgarath +
		"eteral2": {
			"type": 20,
			"value": 10013,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 9
		},
		// Merchant Ostgarath +
		"eteral3": {
			"type": 20,
			"value": 10013,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 10
		},
		// Merchant Ostgarath +
		"eteral4": {
			"type": 20,
			"value": 10013,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 11
		},
		// Merchant Ostgarath +
		"eteral5": {
			"type": 20,
			"value": 10013,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 12
		},
		// Merchant Poporia +
		"foretta1": {
			"type": 20,
			"value": 10014,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 15
		},
		// Merchant Poporia +
		"foretta2": {
			"type": 20,
			"value": 10014,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 16
		},
		// Merchant Poporia +
		"foretta3": {
			"type": 20,
			"value": 10014,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 17
		},
		// Merchant Poporia +
		"foretta4": {
			"type": 20,
			"value": 10014,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 23
		},
		// Merchant Essenia +
		"ezart1": {
			"type": 20,
			"value": 10021,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 26
		},
		// Merchant Essenia +
		"ezart2": {
			"type": 20,
			"value": 10021,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 27
		},
		// Merchant Essenia +
		"ezart3": {
			"type": 20,
			"value": 10021,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 28
		},
		// Merchant Essenia +
		"ezart4": {
			"type": 20,
			"value": 10021,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 29
		},
		// Merchant Essenia +
		"ezart5": {
			"type": 20,
			"value": 10021,
			"gameId": null,
			"templateId": 1272,
			"huntingZoneId": 29
		},
		// Merchant Westonia +
		"storan1": {
			"type": 20,
			"value": 10022,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 31
		},
		// Merchant Westonia +
		"storan2": {
			"type": 20,
			"value": 10022,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 32
		},
		// Merchant Westonia +
		"storan3": {
			"type": 20,
			"value": 10022,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 34
		},
		// Merchant Veritas District +
		"versa1": {
			"type": 20,
			"value": 10025,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 30
		},
		// Merchant Val Elenium +
		"viace1": {
			"type": 20,
			"value": 10024,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 35
		},
		// Merchant Val Elenium +
		"viace2": {
			"type": 20,
			"value": 10024,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 36
		},
		// Merchant Val Elenium +
		"viace3": {
			"type": 20,
			"value": 10024,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 38
		},
		// Merchant Val Palrada +
		"vaneva1": {
			"type": 20,
			"value": 10023,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 40
		},
		// Merchant Val Palrada +
		"vaneva2": {
			"type": 20,
			"value": 10023,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 41
		},
		// Merchant Лоакун +
		"loacun1": {
			"type": 20,
			"value": 10032,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 51
		},
		// Merchant Лоакун +
		"loacun2": {
			"type": 20,
			"value": 10032,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 52
		},
		// Merchant Сильванот +
		"silvette1": {
			"type": 20,
			"value": 10031,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 54
		},
		// Merchant Сильванот +
		"silvette2": {
			"type": 20,
			"value": 10031,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 55
		},
		// Merchant Сильванот +
		"silvette3": {
			"type": 20,
			"value": 10031,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 56
		},
		// Merchant Сильванот +
		"silvette4": {
			"type": 20,
			"value": 10031,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 57
		},
		// Merchant Val Tirkai +
		"lotica1": {
			"type": 20,
			"value": 10033,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 45
		},
		// Merchant Val Tirkai +
		"lotica2": {
			"type": 20,
			"value": 10033,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 47
		},
		// Merchant Helkan District  
		"hecurn": {
			"type": 20,
			"value": 10035,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 48
		},
		// Merchant Val Kaeli +
		"locarnum1": {
			"type": 20,
			"value": 10034,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 49
		},
		// Merchant Val Kaeli +
		"locarnum2": {
			"type": 20,
			"value": 10034,
			"gameId": null,
			"templateId": 1271,
			"huntingZoneId": 50
		}
		//    Зульфикарская крепость
	}
	
};

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

		switch (to_ver) {
			default:
				settings = Object.assign(DefaultSettings, {});

				for (const option in oldsettings) {
					if (settings[option] !== undefined) {
						settings[option] = MigrateOption(settings[option], oldsettings[option], ["gameId"]);
					}
				}
		}

		return settings;
	}
}

function MigrateOption(option, oldoption, excludes) {
	if (oldoption === undefined) {
		oldoption = option;
	}

	if (Array.isArray(option)) {
		for (const key of Object.keys(option)) {
			option[key] = MigrateOption(option[key], oldoption[key], excludes);
		}
	}

	if (Object.getPrototypeOf(option) === Object.prototype) {
		for (const key of Object.keys(option)) {
			if (excludes.includes(key)) {
				option[key] = oldoption[key] || null;
			} else {
				option[key] = MigrateOption(option[key], oldoption[key], excludes);
			}
		}
	}

	return option;
}
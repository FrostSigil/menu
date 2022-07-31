
module.exports = function DarkhanWing(mod) {

let player = null;

mod.game.initialize("me.abnormalities");  

mod.command.add("Darkhan", () => {
    mod.settings.enabled = !mod.settings.enabled;
    mod.command.message(`Module ${mod.settings.enabled ? "<font color='#00ff00'>enabled</font>" : "<font color='#ff0000'>disabled</font>"}`);
});

mod.hook("S_SPAWN_ME", 3, event => { player = event; });

mod.hook("C_PLAYER_LOCATION", 5, event => { player = event; });

mod.hook("S_VISIT_NEW_SECTION", 1, () => {
    if (!mod.game.me.abnormalities ["5020006"] ) {
    mod.send('C_START_SKILL', 7,
    {"skill": {
            "type": 1,
            "id": 14300016,
        },
        "loc": player.loc,
        "w": player.w,
        "unk": true,}
     )}
});
}
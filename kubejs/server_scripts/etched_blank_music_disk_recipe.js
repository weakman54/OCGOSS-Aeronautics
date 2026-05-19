ServerEvents.recipes(event => {
    event.shaped(
        Item.of("etched:blank_music_disc"),
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": "createpropulsion:pine_resin",
            "B": "minecraft:iron_nugget"
        }
    );
});
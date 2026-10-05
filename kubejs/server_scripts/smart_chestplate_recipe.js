ServerEvents.recipes(event => {
    event.shaped(
        Item.of("advancedperipherals:smart_chestplate"),
        [
            " A ",
            " B ",
            "   "
        ],
        {
            "A": "advancedperipherals:overpowered_weak_automata_core",
            "B": "minecraft:netherite_chestplate"
        }
    );
});
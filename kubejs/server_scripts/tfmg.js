// Fixes Inox Sheets from Destroy being uncraftable due to a conflict with TFMG

ServerEvents.recipes(event => {
    event.remove({ output: 'tfmg:heavy_plate' });

    event.recipes.createSequencedAssembly([
        'tfmg:heavy_plate'
    ], 'tfmg:steel_ingot', [
        event.recipes.createPressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate'),
        event.recipes.createPressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate'),
        event.recipes.createPressing('tfmg:unprocessed_heavy_plate', 'tfmg:unprocessed_heavy_plate')
    ]).transitionalItem('tfmg:unprocessed_heavy_plate').loops(3)
    // Why is tfmg such a janky mod aaa

    event.recipes.create.mixing('tfmg:plastic_sheet', Fluid.of("tfmg:molten_plastic", 144))
});

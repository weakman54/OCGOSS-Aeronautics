// "Fixes" a bone meal farm design that got broken by Destroy

ServerEvents.recipes(event => {
    event.recipes.createCrushing(CreateItem.of('minecraft:bone_meal', 0.40), 'destroy:chalk_dust');
});
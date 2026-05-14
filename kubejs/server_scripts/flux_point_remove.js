// Removes the Flux Point recipe to make it unobtainable in normal play. Lossless, unlimited wireless power transfer is just too OP for this pack.
ServerEvents.recipes(event => {
    event.remove({ output: "fluxnetworks:flux_point" });
});

// Modifies the tooltip of the Flux Point item to say that it is uncraftable.
ItemEvents.modifyTooltips(event => {
  event.modify("fluxnetworks:flux_point", tooltip => {
    tooltip.removeLine(1);
    tooltip.insert(1, Text.red("Uncraftable"));
    tooltip.insert(2, Text.gray("Flux Networks can only be used for wireless inventory charging in this modpack"));
  });
});
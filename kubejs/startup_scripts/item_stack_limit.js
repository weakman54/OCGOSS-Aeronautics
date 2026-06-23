ItemEvents.modification(event => {
    //throwables
    event.modify("minecraft:ender_pearl", item => { item.maxStackSize = 64 });
    event.modify("minecraft:egg", item => { item.maxStackSize = 64 });

    //buckets
    event.modify("minecraft:bucket", item => { item.maxStackSize = 64 });
    event.modify("minecraft:water_bucket", item => { item.maxStackSize = 64 });
    event.modify("minecraft:lava_bucket", item => { item.maxStackSize = 64 });
    event.modify("minecraft:milk_bucket", item => { item.maxStackSize = 64 });
    event.modify("aeronautics:levitite_blend_bucket", item => { item.maxStackSize = 64 });
});
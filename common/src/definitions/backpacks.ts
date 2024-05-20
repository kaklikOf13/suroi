import { ItemType, ObjectDefinitions, type ItemDefinition, type ReferenceTo } from "../utils/objectDefinitions";
import { type AmmoDefinition } from "./ammos";
import { type HealingItemDefinition } from "./healingItems";
import { type ThrowableDefinition } from "./throwables";

export interface BackpackDefinition extends ItemDefinition {
    readonly itemType: ItemType.Backpack
    readonly level: number
    readonly maxCapacity: Record<ReferenceTo<HealingItemDefinition | AmmoDefinition | ThrowableDefinition>, number>
}

export const Backpacks = ObjectDefinitions.create<BackpackDefinition>()(
    defaultTemplate => ({
        [defaultTemplate]: () => ({
            itemType: ItemType.Backpack,
            noDrop: false
        }),
        backpack_factory: (name: string) => ({
            idString: `${name.toLowerCase()}_pack`,
            name: `${name} Pack`
        })
    })
)(
    apply => [
        {
            idString: "bag",
            name: "Bag",
            level: 0,
            maxCapacity: {
                gauze: 20,
                medikit: 5,
                cola: 10,
                tablets: 5,
                "12g": 100,
                "556mm": 200,
                "762mm": 200,
                "9mm": 200,
                "127mm": 50,
                power_cell: Infinity,
                curadell: 4,
                frag_grenade: 6,
                smoke_grenade: 6
            },
            noDrop: true
        },
        apply(
            "backpack_factory",
            {
                level: 1,
                maxCapacity: {
                    gauze: 40,
                    medikit: 10,
                    cola: 10,
                    tablets: 10,
                    "12g": 200,
                    "556mm": 400,
                    "762mm": 400,
                    "9mm": 400,
                    "127mm": 100,
                    power_cell: Infinity,
                    curadell: 8,
                    frag_grenade: 12,
                    smoke_grenade: 12
                }
            },
            "Basic"
        ),
        apply(
            "backpack_factory",
            {
                level: 2,
                maxCapacity: {
                    gauze: 80,
                    medikit: 20,
                    cola: 40,
                    tablets: 20,
                    "12g": 400,
                    "556mm": 800,
                    "762mm": 800,
                    "9mm": 800,
                    "127mm": 200,
                    power_cell: Infinity,
                    curadell: 16,
                    frag_grenade: 24,
                    smoke_grenade: 24
                }
            },
            "Regular"
        ),
        apply(
            "backpack_factory",
            {
                level: 3,
                maxCapacity: {
                    gauze: 80,
                    medikit: 40,
                    cola: 80,
                    tablets: 40,
                    "12g": 999,
                    "556mm": 999,
                    "762mm": 999,
                    "9mm": 999,
                    "127mm": 999,
                    power_cell: Infinity,
                    curadell: 32,
                    frag_grenade: 99,
                    smoke_grenade: 99
                }
            },
            "Tactical"
        )
    ]
);

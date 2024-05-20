import { ItemType, ObjectDefinitions, type ItemDefinition } from "../utils/objectDefinitions";

export interface HealingItemDefinition extends ItemDefinition {
    readonly itemType: ItemType.Healing
    readonly healType: HealType
    readonly restoreAmount: number
    readonly useTime: number
    readonly useText: string
}

export enum HealType {
    Health,
    Adrenaline
}

export const HealingItems = ObjectDefinitions.create<HealingItemDefinition>()(
    defaultTemplate => ({
        [defaultTemplate]: () => ({
            itemType: ItemType.Healing
        }),
        healing_item_factory: (name: string) => ({
            idString: name.toLowerCase().replace(/ /g, "_"),
            name
        }),
        health_factory: {
            extends: "healing_item_factory",
            applier: () => ({
                healType: HealType.Health
            })
        },
        adren_factory: {
            extends: "healing_item_factory",
            applier: () => ({
                healType: HealType.Adrenaline
            })
        }
    })
)(
    apply => [
        apply(
            "health_factory",
            {
                restoreAmount: 15,
                useTime: 1,
                useText: "Applying"
            },
            [],
            ["Gauze"]
        ),
        apply(
            "health_factory",
            {
                restoreAmount: 100,
                useTime: 4,
                useText: "Using"
            },
            [],
            ["Medikit"]
        ),
        apply(
            "adren_factory",
            {
                restoreAmount: 50,
                useTime: 1,
                useText: "Drinking"
            },
            [],
            ["Cola"]
        ),
        apply(
            "adren_factory",
            {
                restoreAmount: 200,
                useTime: 3,
                useText: "Taking"
            },
            [],
            ["Tablets"]
        )
    ]
);

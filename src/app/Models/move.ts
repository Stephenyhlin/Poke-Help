export class Move {
    accuracy: number;
    name: string;
    id: number;
    effect: any[];
    power: number;
    pp: number;
    meta: any[];
    effect_chance: number;
    flavor: string;

    constructor(data: any) {
        this.accuracy = data.accuracy;
        this.name = data.name;
        this.id = data.id;
        this.effect = data.effect_entries;
        this.effect_chance = data.effect_chance;
        this.power = data.power;
        this.pp = data.pp;
        this.meta = data.meta;

        this.replaceEffectFlavor();
    }

    getEffectFlavor(): string {
        return this.flavor;
    }

    getName(): string {
        return this.name;
    }

    getAccuracy(): number {
        return this.accuracy;
    }
    getPower(): number {
        return this.power;
    }

    getPP(): number {
        return this.pp;
    }

    getId(): number {
        return this.id;
    }

    replaceEffectFlavor() {
        this.flavor = this.effect[0].effect;
        if (this.flavor.includes('$effect_chance')) {
            this.flavor = this.flavor.split('$effect_chance').join(this.effect_chance.toString());
        }
        if (this.effect[0].effect.includes('(100 - accuracy)')) {
            let replace = 100 - this.accuracy;
            this.flavor = this.flavor.split('(100 - accuracy)').join(replace.toString());
        }
    }
}
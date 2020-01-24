export class Move{
    accuracy: number;
    name: string;
    id:number;
    effect: any[];
    power: number;
    pp:number;

    constructor(data: any){
        this.accuracy = data.accuracy;
        this.name = data.name;
        this.id = data.id;
        this.effect = data.effect_entries;
        this.power = data.power;
        this.pp = data.pp;
    }

    getEffectFlavor():string{
        return this.effect[0].effect;
    }
}
import { Pokemon } from './pokemon';


export class Ability{
    id: number;
    name: String;
    pokemon: String[];
    effect: String;


    constructor(data :any){
        this.id = data.id;
        this.name = data.name;
        let array = [];
        data.pokemon.forEach(function(element){
            array.push(element);
        }    
        );
        this.pokemon = array;
        this.effect = data.effect_entries[0].effect;
        
    }
}
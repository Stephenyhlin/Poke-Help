import { Pokemon } from './pokemon';


export class Ability{
    id: number;
    name: String;
    pokemon: String[];
    effect: String;
    flavor_text: String;


    constructor(data :any){
        this.id = data.id;
        
        data.names.forEach((element)=> {
            if(element.language.name === "en") {
                this.name = element.name;
            }
        }) 

        data.flavor_text_entries.forEach( data => {
            if(data.language.name === "en" && data.version_group.name === "sun-moon") {
                this.flavor_text = data.flavor_text;
            }
        })
        
        this.name = data.name;
        let array = [];
        data.pokemon.forEach(function(element){
            array.push(element);
        }    
        );
        this.pokemon = array;
        this.effect = data.effect_entries[0].effect;
        
    }

    getName() : String{
        let ret;

        ret = this.name.replace('-',' ');

        return ret;
    }
    getEffect() :String{
        return this.effect;
    }
}
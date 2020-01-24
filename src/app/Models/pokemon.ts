import { Sprites } from './sprites';
import {Ability} from './ability';
import { environment } from '../environments/environment';

export class Pokemon{
    id: number;
    name: String;
    sprites: Sprites;
    height: number;
    ability: any[];
    moves: any[];
    // ab_url: string[];
    // If i want I can yolo blaze the constructor
    constructor( data:any){
        this.id = data.id;
        this.name = data.name;
        this.height = data.height;
        this.sprites = new Sprites(data.sprites);
        // let array = [];
        // data.abilities.forEach(function(element){
        //     array.push(element);
        // });
        this.ability = this.getArrayValues(data.abilities);
        // this.ab_url = this.getABUrl(data.abilities);
        this.moves = this.getArrayValues(data.moves);
        
    }

    getArrayValues(data:any[]) : any[] {
        let array = [];
        let reg = new RegExp(environment.POKE_API,'g')
        data.forEach(function(element){
            array.push(element);
        });
        return array;
    }
    // getABUrl(data:any[]) : string[]{
    //     let array = [];
    //     data.forEach(function(element){
    //         array.push(element.ability.url);
    //     })
    //     return array;
    // }
}

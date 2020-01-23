import { Sprites } from './sprites';

export class Pokemon{
    id: number;
    name: String;
    sprites: Sprites;
    height: number;
    // If i want I can yolo blaze the constructor
    constructor( data:any){
        this.id = data.id;
        this.name = data.name;
        this.height = data.height;
        this.sprites = new Sprites(data.sprites);
    }
}

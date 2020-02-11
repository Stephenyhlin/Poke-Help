export class Sprites {
    back_default: String;
    back_female: String;
    back_shiny:String;
    back_shiny_female:String;
    front_default:String;
    front_female:String;
    front_shiny:String;
    front_shiny_female:String;

    constructor(data: Sprites){
        this.back_default = data.back_default;
        this.back_female = data.back_female;
        this.back_shiny = data.back_shiny;
        this.back_shiny_female = data.back_shiny_female;
        this.front_default = data.front_default;
        this.front_female = data.front_female;
        this.front_shiny = data.front_shiny;
        this.front_shiny_female = data.front_shiny_female;
    }
}
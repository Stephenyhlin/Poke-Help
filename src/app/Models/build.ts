export class Build {
    name: String;
    ID: String;
    competition: String;
    IV: String;
    nature: String;
    moves: Array<String>;

    constructor(data: any){
        this.name = data['name'];
        this.ID = data['ID'];
        this.competition = data['information']['competition'];
        this.IV = data['information']['IV'];
        this.nature = data['information']['nature'];
        this.moves = data['moves'].slice(0);
    }
}
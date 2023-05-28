
export class Player {

    name: string;
    description: string;
    image: string;
    followers:number;
    trophies: number;
    url: string;

    constructor(name: string, description: string, image: string, followers: number, trophies: number, url: string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.followers = followers;
        this.trophies = trophies;
        this.url = url;
    }
}


export class Video {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;

    constructor(id: number, name: string, description: string, image: string, url: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.url = url;
    }
}


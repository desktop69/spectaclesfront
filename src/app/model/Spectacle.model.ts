import { Image } from "./image.model";
export class Spectacle {
    id !: number
    noms!: string
    adresse!: string
    resid!: string
    description!: string
    imagePath!: string
    dateCreation!: Date
    image! : Image;
}
export class Parc {
    
    public id: number;
    public nom: string;
    public capacite: number;

    constructor(id:number, nom:string, capacite:number) {
        this.id = id;
        this.nom = nom;
        this.capacite = capacite;
    }
}
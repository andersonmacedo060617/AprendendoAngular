
export class Carro{
    public id:number
    public marca:string
    public modelo: string
    public ano:number
    public valor:number
    public caracteristicaItem:Array<string>
    public urlFotos: Array<string>
    public exibeGaleria: boolean
    
    constructor(){}
}
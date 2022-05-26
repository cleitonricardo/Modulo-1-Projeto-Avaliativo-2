export class Unidades {
    id:string;
apelido:string;
local:string;
marca:string;
modelo:string;
ativo:boolean

constructor (id:string, apelido:string,local:string,marca:string,modelo:string,ativo:boolean){
    this.id=id;
    this.apelido=apelido;
    this.local=local;
    this.marca=marca;
    this.modelo=modelo;
    this.ativo=ativo;
}
}

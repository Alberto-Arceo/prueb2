class Rectangulo{
    
    base:number;
    altura:number;

    constructor (base,altura){
        this.base = base;
        this.altura = altura;
    }
    
    calcArea(base:number,altura:number) {
        
        return base * altura;
    }

}

let figura:Rectangulo = new Rectangulo(0,0);

console.log(figura);
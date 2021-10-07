
class Jugador {
    vida : number = 100;
    chakra : number = 100;
    nombre : string = "";
    rasengan : number = 30;
    chidori : number = 25;
    ataqueBasico : number = 10;
    
    constructor(nombre : string){
        this.nombre = nombre;
    }
    



    ataque(jugadorObjetivo : any){
        jugadorObjetivo.vida -= this.ataqueBasico;
        this.status(jugadorObjetivo);
    }

    curar(jugadorObjetivo :  any){
        if (this.vida >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.vida += 20;
            this.chakra -= 20;
        }
        this.status(jugadorObjetivo);
    }

    habilidadn(jugadorObjetivo : any){
        if (this.chakra >= 30) {
            jugadorObjetivo.vida -= 45;
            this.chakra -= this.rasengan;
        }else{
            console.log('No hay chakra suficiente')
        }
        this.status(jugadorObjetivo);
    }

    habilidads(jugadorObjetivo : any ){
        if (this.chakra >= 25) {
            jugadorObjetivo.vida -= 40;
            this.chakra -= this.chidori;
        } else {
            console.log('No hay chakra suficiente')
        }
        this.status(jugadorObjetivo);
    }

    revivir(jugadorObjetivo : any){
        if (this.vida <= 0) {
            jugadorObjetivo.vida += 30;
        }else{
            console.log('No se puede usar esta habilidad');
        }
        this.status(jugadorObjetivo);
    }

    recuperarChakra(jugadorObjetivo : any){
        if (this.chakra >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.chakra += 20;
        }
        this.status(jugadorObjetivo);
    }

    status(jugadorObjetivo : number){
        console.log(jugadorObjetivo);
        console.log(this);
    }

}

const naruto = new Jugador('naruto');
const sasuke = new Jugador('sasuke');

console.log(naruto);
console.log(sasuke);
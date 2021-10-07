"use strict";
var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.vida = 100;
        this.chakra = 100;
        this.nombre = "";
        this.rasengan = 30;
        this.chidori = 25;
        this.ataqueBasico = 10;
        this.nombre = nombre;
    }
    Jugador.prototype.ataque = function (jugadorObjetivo) {
        jugadorObjetivo.vida -= this.ataqueBasico;
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.curar = function (jugadorObjetivo) {
        if (this.vida >= 100) {
            console.log('No se puede usar esta habilidad');
        }
        else {
            jugadorObjetivo.vida += 20;
            this.chakra -= 20;
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.habilidadn = function (jugadorObjetivo) {
        if (this.chakra >= 30) {
            jugadorObjetivo.vida -= 45;
            this.chakra -= this.rasengan;
        }
        else {
            console.log('No hay chakra suficiente');
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.habilidads = function (jugadorObjetivo) {
        if (this.chakra >= 25) {
            jugadorObjetivo.vida -= 40;
            this.chakra -= this.chidori;
        }
        else {
            console.log('No hay chakra suficiente');
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.revivir = function (jugadorObjetivo) {
        if (this.vida <= 0) {
            jugadorObjetivo.vida += 30;
        }
        else {
            console.log('No se puede usar esta habilidad');
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.recuperarChakra = function (jugadorObjetivo) {
        if (this.chakra >= 100) {
            console.log('No se puede usar esta habilidad');
        }
        else {
            jugadorObjetivo.chakra += 20;
        }
        this.status(jugadorObjetivo);
    };
    Jugador.prototype.status = function (jugadorObjetivo) {
        console.log(jugadorObjetivo);
        console.log(this);
    };
    return Jugador;
}());
var naruto = new Jugador('naruto');
var sasuke = new Jugador('sasuke');
console.log(naruto);
console.log(sasuke);

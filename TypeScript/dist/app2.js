"use strict";
var Carro = /** @class */ (function () {
    function Carro() {
        this.velocidade = 0;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var car = new Carro();
console.log(car);

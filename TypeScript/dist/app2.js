"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concecionaria_1 = __importDefault(require("./Concecionaria"));
/**--Criar carros */
var carroA = new Carro_1.default('dodge journey', 4);
var carroB = new Carro_1.default('veloster', 2);
var carroC = new Carro_1.default('cerato', 4);
/** montar lista de carros */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concecionaria_1.default('Av Paulista', listaDeCarros);
/** Comprar o carro */
var cliente = new Pessoa_1.default('João', 'veloster');
concessionaria.monstrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());

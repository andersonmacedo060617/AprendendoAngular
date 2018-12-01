"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = "";
    }
    Dao.prototype.inserir = function (object) {
        console.log("Logica inserir");
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log("Logica atualizar");
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log("Logica delete");
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log("Logica Selecionar");
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log("Logica GetAll");
        return [Object()];
    };
    return Dao;
}());
exports.default = Dao;

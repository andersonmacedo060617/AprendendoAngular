"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concecionaria_1 = __importDefault(require("./Concecionaria"));
var ConcecionariaDao = /** @class */ (function () {
    function ConcecionariaDao() {
        this.nomeTabela = "tb_concecionaria";
    }
    ConcecionariaDao.prototype.inserir = function (object) {
        console.log("logica de insert");
        return true;
    };
    ConcecionariaDao.prototype.atualizar = function (object) {
        console.log("logica de update");
        return true;
    };
    ConcecionariaDao.prototype.remover = function (id) {
        console.log("logica de delete");
        return new Concecionaria_1.default('', []);
    };
    ConcecionariaDao.prototype.selecionar = function (object) {
        console.log("logica de select");
        return new Concecionaria_1.default('', []);
    };
    ConcecionariaDao.prototype.selecionarTodos = function () {
        console.log("logica de getAll");
        return [new Concecionaria_1.default('', [])];
    };
    return ConcecionariaDao;
}());
exports.default = ConcecionariaDao;

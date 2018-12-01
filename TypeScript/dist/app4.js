"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import ConcecionariaDao from './ConcecionariaDao'
var Concecionaria_1 = __importDefault(require("./Concecionaria"));
//import PessoaDao from './PessoaDao';
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = __importDefault(require("./Dao"));
//let dao : ConcecionariaDao = new ConcecionariaDao()
//let dao2 : PessoaDao = new PessoaDao()
// dao.inserir(concecionaria)
// dao2.atualizar(pessoa)
var dao3 = new Dao_1.default();
var dao4 = new Dao_1.default();
var concecionaria = new Concecionaria_1.default('', []);
var pessoa = new Pessoa_1.default("", "");
dao3.inserir(concecionaria);
dao4.remover(5);

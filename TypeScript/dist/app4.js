"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcecionariaDao_1 = __importDefault(require("./ConcecionariaDao"));
var Concecionaria_1 = __importDefault(require("./Concecionaria"));
var dao = new ConcecionariaDao_1.default();
var concecionaria = new Concecionaria_1.default('', []);
dao.inserir(concecionaria);

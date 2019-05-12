"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = __importDefault(require("./add"));
let num = add_1.default(123, 123);
console.log(num.nextVal());
console.log(num.nextVal());
console.log(num.nextVal());

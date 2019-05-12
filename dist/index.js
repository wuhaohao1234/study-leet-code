"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = __importDefault(require("./sum"));
let result = sum_1.default([1, 2, 5, 4, 5], 10, true);
console.log(result);

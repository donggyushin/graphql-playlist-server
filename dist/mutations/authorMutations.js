"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var author_1 = __importDefault(require("../models/author"));
exports.addAuthorMutation = function (parent, args) {
    var name = args.name, age = args.age;
    var newAuthor = new author_1.default({
        name: name,
        age: age
    });
    return newAuthor.save();
};

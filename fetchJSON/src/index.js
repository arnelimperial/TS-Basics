"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'https://jsonplaceholder.typicode.com/todos/5/';
const fetchData = () => {
    axios_1.default.get(url).then(response => {
        //console.log(response.data);
        const todo = response.data;
        const ID = todo.id;
        const title = todo.title;
        const completed = todo.completed;
        const appID = document.getElementById('appID');
        const li = document.createElement('li');
        li.innerHTML = `
        <li>${ID.toString()}</li>
        <li>${title}</li>
        <li>${completed}</li>
    `;
        appID === null || appID === void 0 ? void 0 : appID.appendChild(li);
    });
};
fetchData();

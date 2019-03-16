"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
class Server {
    constructor() {
        this.app = express();
        this.app.use(cors());
        console.log('Setting complete.');
    }
    start() {
        this.app.listen(80, () => {
            console.log("Server On");
        });
    }
}
exports.default = Server;

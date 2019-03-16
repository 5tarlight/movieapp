"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
class Server {
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use('/', express.static(__dirname + '/public'));
        console.log('Setting complete.');
    }
    route() {
        let router = express.Router();
        router.route('/').get((req, res) => {
            console.log(req.ip + ' : portal');
            res.sendFile(__dirname + '/public/portal.html');
        });
        this.app.use(router);
    }
    start() {
        this.app.listen(80, () => {
            console.log("Server On");
        });
    }
}
exports.default = Server;

const users = require('../models/users');

let id = 1;

module.exports = {
    register: (req, res) => {
        const {session} = req;
        const {username, password} = req.body;
        
        users.push({id, username, password});
        id++;

        session.user.username = username;

        res.status(200).send(session.user);
    },
    login: (req, res) => {

    },
    signout: (req, res) => {

    },
    getUser: (req, res) => {

    }
}
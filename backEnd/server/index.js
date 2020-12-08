const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const data = require("./data.json")
const users = require("./users.json")
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
let jwt = require('jsonwebtoken');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next();
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.get('/data', (req, res) => {
    return res.send(data);
})
app.get('/settings', (req, res) => {
    return res.send(users);
})
app.get('/filtered-data', (req, res) => {
    console.log("req.query", req.query)
    const {value} = req.query
    return res.json(filterEmployeesByName(data, value));
})
app.get('/filtered-id', (req, res) => {
    console.log("req.query", req.query)
    const {value} = req.query
    return res.json(filterEmployeesById(data, value));
})
app.post('/change-role', (req, res) => {
    console.log(req.body)
    let filePath = path.join(__dirname, 'users.json');
    const usersFromJSON = fs.readFileSync(filePath, {encoding: 'utf-8'});
    const users = JSON.parse(usersFromJSON);
    const existingUser = users.find((user) => {
        return user.id === req.body.id
    })
    if (existingUser.role === 'user') {
        existingUser.role = 'editor'
        fs.writeFileSync('users.json', JSON.stringify(users), 'utf8');
    } else {
        existingUser.role = 'user'
        fs.writeFileSync('users.json', JSON.stringify(users), 'utf8');
    }
    res.json(existingUser);
})
app.get('/sorted-name', (req, res) => {
    console.log("req.query", req.query)
    const {value} = req.query
    return res.json(sortEmployeesByName(data, value));
})
app.get('/sorted-position', (req, res) => {
    console.log("req.query", req.query)
    const {value} = req.query
    return res.json(sortEmployeesByPosition(data, value));
})
app.get('/sorted-room', (req, res) => {
    console.log("req.query", req.query)
    const {value} = req.query
    return res.json(sortEmployeesByRoom(data, value));
})

//AUTH page
app.post('/register', async (req, res) => {
    const {login, password, role} = req.body;
    try {
        req.body.password = await bcrypt.hash(password, 10)
    } catch (e) {
        res.status(400).json(e.message);
    }
    let filePath = path.join(__dirname, 'users.json');
    const usersFromJSON = fs.readFileSync(filePath, {encoding: 'utf-8'});
    const users = JSON.parse(usersFromJSON);
    const existingUser = users.find((user) => {
        return user.login === req.body.login
    })
    if (existingUser) {
        res.status(400).json("you are trying to create user with existing login");
    } else {
        users.push(req.body);
        fs.writeFileSync('users.json', JSON.stringify(users), 'utf8');
    }

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60) * 24,
        data: {login, role}
    }, 'secret');

    const user = {...req.body};
    delete user.password;
    user.token = token;
    res.json(user);
})
app.post('/login', async (req, res) => {
    let filePath = path.join(__dirname, 'users.json');
    const usersFromJSON = fs.readFileSync(filePath, {encoding: 'utf-8'});
    const users = JSON.parse(usersFromJSON);
    const existingUser = users.find((user) => {
        return user.login === req.body.login
    })
    if (!existingUser) {
        res.status(400).json('login does not exist');
    }
    existingUser.password;
    let result = await bcrypt.compare(req.body.password, existingUser.password)
    if (!result) {
        res.status(400).json('password is wrong')
    }
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60) * 24,
        data: {login: existingUser.login, role: existingUser.role}
    }, 'secret');
    const user = {...req.body};
    delete user.password;
    user.token = token;
    user.role = existingUser.role;
    res.json(user);
})

//LeaveRequests page
app.get('/data-vacations', (req, res) => {
    return res.send(data);
})

app.post('/create-vacation', async (req, res) => {
    console.log(req.body);

    let filePath = path.join(__dirname, 'vacations.json');
    const vacationsFromJSON = fs.readFileSync(filePath, {encoding: 'utf-8'});
    const vacations = JSON.parse(vacationsFromJSON);


    vacations.push(req.body);
    fs.writeFileSync('vacations.json', JSON.stringify(vacations), 'utf8');


    const vacation = {...req.body};
    res.json(vacation);
})

const filterEmployeesById = (arr, userId) => {
    return arr.filter(el => {
        return el.id.includes(userId);
    })
}
const filterEmployeesByName = (arr, name) => {
    return arr.filter(function (element) {
        return element.nameInEnglish.includes(name) || element.nameInRussian.includes(name);
    })
}
const sortEmployeesByName = (arr, click) => {
    let copyOfArr = [...arr]
    switch (click) {
        case "0":
            return copyOfArr.sort((a, b) => a.nameInEnglish.toLowerCase() < b.nameInEnglish.toLowerCase() ? -1 : 1)
        case "1":
            return copyOfArr.sort((a, b) => a.nameInEnglish.toLowerCase() > b.nameInEnglish.toLowerCase() ? -1 : 1)
        default:
            return arr
    }
}
const sortEmployeesByPosition = (arr, click) => {
    let copyOfArr = [...arr]
    switch (click) {
        case "0":
            return copyOfArr.sort((a, b) => a.position.toLowerCase() < b.position.toLowerCase() ? -1 : 1)
        case "1":
            return copyOfArr.sort((a, b) => a.position.toLowerCase() > b.position.toLowerCase() ? -1 : 1)
        default:
            return arr
    }
}
const sortEmployeesByRoom = (arr, click) => {
    let copyOfArr = [...arr]
    switch (click) {
        case "0":
            return copyOfArr.sort((a, b) => a.room < b.room ? -1 : 1)
        case "1":
            return copyOfArr.sort((a, b) => a.room > b.room ? -1 : 1)
        default:
            return arr
    }
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
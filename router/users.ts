import express from 'express';
const userRouter = express.Router();
const db = new Database("wadsongs.db");
import Database from 'better-sqlite3';

userRouter.get('/login', (req,res)=> {
    res.json({username: req.session.username});
});

userRouter.post('/login', (req,res)=> {
    let stmt = db.prepare('SELECT username FROM ht_users WHERE username=? AND password=?');
    let user = stmt.get(req.body.username, req.body.password);
    console.log(user, req.body.username, req.body.password);
    if (user) {
        req.session.username = req.body.username;
        res.json({username: req.body.username});
    }
    else {
        res.status(401).json({username: null});
        console.log("Failed login attempt for username: " + req.body.username);
    }
});

userRouter.post('/logout', (req,res)=> {
    req.session.destroy(() => {
        res.json({loggedout: true});
        console.log("User Successfully logged out.")
    });
});

export default userRouter;

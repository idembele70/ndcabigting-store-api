const router = require("express").Router();

router.get("/usertest",(req,res)=>{
    res.send("user test is sucessfull");
})

router.post("/userposttest",(req,res)=>{
    const username = req.body.username;
    console.log(username)

    res.send("Hey! " + username);
});

module.exports = router;
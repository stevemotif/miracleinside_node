const  express  = require("express");

const router  = express.Router();


router.get('/listpatients', (req,res) => {
res.send("Send list of users");
})

router.get('/listpatients/:id', (req, res) => {
    const userid = req.params.id;
    res.send(`Details of user ${userid}`);
})


router.post('/createpatients', (req,res) => {
    res.send("Create a new user");
})

router.put('/createpatients/:id', (req,res) => {
    const id = req.params.id;
    res.send(`Updates user ${id}`);
})

router.delete('listpatients/:id',(req,res) => {
    const id = req.params.id;
    res.send(`Delete user ${id}`);
})

module.exports = router;
const express = require("express");


const app =  express();
app.use(express.json());

const mysql = require("mysql2");


const connection = mysql.createConnection({
    host:'localhost',
    user:'stephen',  //cpses_vpkabtwnwe@localhost
    password:'m50korg', // D.jRUDF4b1tA9SBRNR075
    database:'midb', // i8954196_wp1
})

connection.connect((error) => {
    if (error) {
        console.log("Error connecting to DB");
    } else {
        console.log("Connected to DB");
    }
});

app.get('/',(req,res)=>{
    res.send("Hi");
})

// app.post("/users", async (req, res) => {
//     try {
//         console.log(req.body);
//       const { name, address, country } = req.body;
//       const [{ insertId }] = await connection.promise().query(
//         `INSERT INTO users (name, address, country) 
//             VALUES (?, ?,?)`,
//         [name, address, country]
//       );
//       res.status(202).json({
//         message: "User Created",
//       });
//     } catch (err) {
//       res.status(500).json({
//         message: err,
//       });
//     }
//   });

  app.post("/bloodtest", async (req, res) => {
    try {
        console.log(req.body);
      const { firstname, lastname, email, phone, address, postcode, moreinfo, hear, appointmenttime, bloodtestname } = req.body;
      const [{ insertId }] = await connection.promise().query(
        `INSERT INTO bloodtestbooking (firstname, lastname, email, phone, address, postcode, moreinfo, hear, appointmenttime, bloodtestname) 
            VALUES (?, ?,?, ?, ?, ?,?,?,?,?)`,
        [firstname, lastname, email, phone, address, postcode, moreinfo, hear, appointmenttime, bloodtestname ]
      );
      res.status(202).json({
        message: "Blood test entry added",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  });
  
  app.post("/scan", async (req, res) => {
    try {
        console.log(req.body);
      const { firstname, lastname, email, weeks,  address, postcode, gender, phone, hear, timetocontact, scanpackage } = req.body;
      const [{ insertId }] = await connection.promise().query(
        `INSERT INTO scanbooking (firstname, lastname, email, weeks, address, postcode, gender, phone, hear, timetocontact, scanpackage) 
            VALUES (?, ?,?, ?, ?, ?,?,?,?,?,?)`,
        [firstname, lastname, email,weeks, address, postcode,gender,phone, hear, timetocontact, scanpackage ]
      );
      res.status(202).json({
        message: "Scan request Created",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  });
  
  app.post("/contact", async (req, res) => {
    try {
        console.log(req.body);
      const { name, email,subject,message, phone  } = req.body;
      const [{ insertId }] = await connection.promise().query(
        `INSERT INTO contact (name, email, subject, message, phone) 
            VALUES (?, ?,?, ?, ?)`,
        [name, email, subject, message, phone ]
      );
      res.status(202).json({
        message: "Cotact form request Created",
      });
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  });
  
  
app.listen(3000, function(){
    console.log("MI Server started");
    })

/* 
app.post("/",function(req,res){

    res.send("Welcome to mimailer hi");
})




app.use(routes); */


/* 


const transporter = mailer.createTransport ({
service: 'gmail',
auth: {
    user : 'miracleinside4dscan@gmail.com',
    pass : 'rqto cogp cmmt bsfm',
},
});



app.get("/",function(req,res){

    res.send("Welcome to mimailer hi");


transporter.sendMail({
    from: '"Miracle Inside" miracleinside4dscan@gmail.com', // sender address
  to: "stevemotif@gmail.com", // list of receivers
  subject: "Test", // Subject line
  text: "There is a new article. It's about sending emails, check it out!", // plain text body
  html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
}).then(info => {
    console.log({info});
  }).catch(console.error); 
})
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/admin', function (req, res) {
    console.log('getting');
    
     const queryText = `
     SELECT * FROM feedback`;
     pool.query(queryText)
         .then((result) => res.send(result.rows))
         .catch((err) => {
    
             res.sendStatus(500)
         });
 });

 app.post('/feedback', (req,res) => {
     console.log(req.body);
     const feedback = req.body;
     const queryText = `
     INSERT INTO feedback ("feeling", "understanding", "support", "comments", "flagged")
     VALUES ($1,$2,$3,$4,$5)`
     pool.query(queryText, 
    [feedback.feeling, feedback.understanding, feedback.support, feedback.comment, feedback.flagged])
    .then (result => console.log(result)
    )
    .catch(error => console.log(error))
 })

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
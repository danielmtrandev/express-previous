const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.listen(3000, () => {
  
});


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// ***C.R.U.D***

// READ: get data so it can load on the page
// triggered by page load
//  '/' aka ROOT page for every website
app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.get('/api', (req, res) => {
  let result;
  flipCoin = Math.floor(Math.random()*2)
  if(flipCoin === 1){
    result = 'tails' 
  }
  else{
    result = 'heads'
  }
  const objToJson = {
    face: result,
  }
  res.send(objToJson);
  // res.send(JSON.stringify(objToJson));
});



// CREATE: creates document in DB
// triggered by form submission, send info




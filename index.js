const express = require('express');
const app = express();
const parser = require('body-parser');
const unirest = require('unirest');

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/client'));

app.post('/hs', (req, res) => {
  const className = req.body.name;
  const cost = req.body.cost;
  let url = `https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${className}`;
  if (cost) {
    url = `https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${className}?cost=${cost}`
  }

  unirest.get(url)
  .header("X-Mashape-Key", "Ad9LEibOO2msh901n5efHO2ALivap1XFop2jsnS61Cn3OWH6Sf")
  .end(function (result) {
    res.send(result.body);
  });
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Port is ${port}`);
});

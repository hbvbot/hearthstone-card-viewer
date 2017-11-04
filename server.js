const express = require('express');
const app = express();
const parser = require('body-parser');
const unirest = require('unirest');

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/client'));

app.post('/hs', (req, res) => {
  console.log(req.body)
  const className = req.body.name;
  const cost = req.body.cost;
  let url = `https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${className}`;
  if (cost) {
    url = `https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${className}?cost=${cost}`
  }

  unirest.get(url)
  .header("X-Mashape-Key", "Ad9LEibOO2msh901n5efHO2ALivap1XFop2jsnS61Cn3OWH6Sf")
  .end(function (result) {
    console.log(result.status);
    res.send(result.body);
  });
})

app.listen(process.env.PORT || 3000, () => {
  console.log('server listening on port: 3000');
});

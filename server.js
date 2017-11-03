const express = require('express');
const app = express();
const parser = require('body-parser');
const request = require('request');
const unirest = require('unirest');

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/client'));

app.post('/hs', (req, res) => {
  const className = req.body.name;
  unirest.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${className}`)
  .header("X-Mashape-Key", "TOzbCURHclmsh3eQk2GzysYqJAgAp1vv3Rrjsng6HvlziVGSyN")
  .end(function (result) {
    console.log(result.status);
    res.send(result.body);
  });
})

app.listen(3000, () => {
  console.log('server listening on port: 3000');
});

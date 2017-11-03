const express = require('express');
const app = express();
const parser = require('body-parser');
const request = require('request');
const unirest = require('unirest');

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/client'));

app.post('/hs', (req, res) => {
  console.log('POST HELL YEA');

  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Warrior")
  .header("X-Mashape-Key", "TOzbCURHclmsh3eQk2GzysYqJAgAp1vv3Rrjsng6HvlziVGSyN")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    res.send(result.body);
  });
})

app.listen(3000, () => {
  console.log('server listening on port: 3000');
});

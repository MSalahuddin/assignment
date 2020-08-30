const fetch = require('node-fetch')
const moment = require("moment")
module.exports = async function (socket) {
  console.log("hello new file");
  let Open = [];
  let High = [];
  let Low = [];
  let Close = [];
  let Volume = [];
 let data = await fetch('http://api.marketstack.com/v1/eod?access_key=e96e230697ccbb66d51c1146093c19ab&symbols=AAPL', {
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
}).then(response => {
  return response.json();
}).catch(err => {console.log(err);});
console.log(data.data[0],'dddddddddddd')
    setInterval(async ()=>{
      let date = Date.now();
      Open.push({x: date, y: Math.floor((Math.random() * 3121231))});
      High.push({x: date, y: Math.floor((Math.random() * 36765))});
      Low.push({x: date, y: Math.floor((Math.random() * 8756754))});
      Close.push({x: date, y: Math.floor((Math.random() * 909098))});
      Volume.push({x: date, y: Math.floor((Math.random() * 12345631))});
      let data = {
        Open,
        High, 
        Low,
        Close,
        Volume
      }
      socket.emit('visualizeData', data);
    },3000)
};

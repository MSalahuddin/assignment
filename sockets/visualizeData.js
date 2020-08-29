const { visualizeData } = require("../Models/data.model");
const moment = require("moment")
module.exports = function (socket) {
  console.log("hello new file");
  let Open = [];
  let High = [];
  let Low = [];
  let Close = [];
  let Volume = [];
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

const { visualizeData } = require("../Models/data.model");
const moment = require("moment")
module.exports = function (socket) {
  console.log("hello new file");
  let Open = [];
  let High = [];
  let Low = [];
  let Close = [];
  let Volume = [];
  let openVal = 2;
  let hignVal = 5;
  let lowVal = 10;
  let closeVal = 15;
  let vloumeVal = 20;

    setInterval(async ()=>{
      let date = Date.now();
      openVal++;
      hignVal++;
      lowVal++;
      closeVal++;
      vloumeVal++;
      console.log()
      Open.push({x: date, y: openVal});
      High.push({x: date, y: hignVal});
      Low.push({x: date, y: lowVal});
      Close.push({x: date, y: closeVal});
      Volume.push({x: date, y: vloumeVal});
      let data = {
        Open,
        High, 
        Low,
        Close,
        Volume
      }
      socket.emit('visualizeData', data);
    },10000)
};

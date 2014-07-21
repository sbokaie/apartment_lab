var property = require("./property");

function TownHouse(address){
  // only has one unit per address
  var townhouseUnits = 1;
  
};

TownHouse.prototype.available = function(){
  // a tenant it should not be available
};

module.exports = TownHouse;

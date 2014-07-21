var person = require("./person");

function Manager(name, contact, properties) {
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

Manager.prototype = new Person();

Manager.prototype.constructor = Manager;

Manager.prototype.addProperty = function(property) {
  var newApartment = 

};

Manager.prototype.removeProperty = function(property) {
  // remove properties
};

module.exports = Manager;
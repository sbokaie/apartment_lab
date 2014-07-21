var person = require("./person.js");

function Tenant(name, contact) {
  this.name = name;
  this.contact = contact;
  this.references = [];
};

Tenant.prototype.addReference = function(reference){
  Person.prototype = new Person(name, contact)
};

module.exports = Tenant;

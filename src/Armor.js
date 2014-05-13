var Armor = function(name, defense) {
  Equipment.call(this, name);
  this.defense = defense;
};

Armor.prototype = Object.create(Equipment.prototype);
Armor.prototype.constructor = Armor;

window.Armor = Armor;

var Armor = function(name, defense) {
  //call the parent constructor
  Equipment.call(this, name);
  this.defense = defense;
};

//Armor extends Equipment
Armor.prototype = Object.create(Equipment.prototype);
Armor.prototype.constructor = Armor;

//make the Armor class available everywhere
window.Armor = Armor;
